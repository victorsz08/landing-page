"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Form, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { PlanCard } from "../card-plans/plan-card";

const formSchema = z.object({
  name: z.string().min(1, { message: "Campo nome é obrigatório" }),
  email: z.string().email({ message: "Email inválido" }),
  phone: z.string().min(1, { message: "Campo telefone é obrigatório" }),
  product: z.string().min(1, { message: "Campo produto é obrigatório" }),
});

type FormPayType = z.infer<typeof formSchema>;

const PLANS = [
  { id: "mensal", name: "Mensal", price: "R$ 100,00" },
  {
    id: "trimestral",
    name: "Trimestral",
    price: "R$ 250,00",
    savings: "Economize 17%",
  },
  {
    id: "semestral",
    name: "Semestral",
    price: "R$ 480,00",
    savings: "Economize 20%",
  },
  { id: "anual", name: "Anual", price: "R$ 900,00", savings: "Economize 25%" },
];

export function FormPay({ children }: { children: React.ReactNode }) {
  const form = useForm<FormPayType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      product: "",
    },
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <span>
          <Button>{children}</Button>
        </span>
      </DialogTrigger>
      <DialogContent className="bg-gray-900 border-none z-[100000]">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-gray-100">
            Preencha o formulario
          </DialogTitle>
          <DialogDescription>
            Preencha todas as informações para que possamos entrar em contato
            com você.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form className="flex flex-col gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-100">Nome</FormLabel>
                      <Input
                        {...field}
                        placeholder="Digite seu nome"
                        type="text"
                        className="text-gray-100 border-none bg-gray-950 py-6"
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-100">Email</FormLabel>
                      <Input
                        {...field}
                        placeholder="Digite seu email"
                        type="email"
                        className="text-gray-100 border-none bg-gray-950 py-6"
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-100">Telefone</FormLabel>
                      <Input
                        {...field}
                        placeholder="Digite seu telefone"
                        type="text"
                        className="text-gray-100 border-none bg-gray-950 py-6"
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />
              <FormField
                control={form.control}
                name="product"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel className="text-gray-100">Plano</FormLabel>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {PLANS.map((plan) => (
                        <PlanCard
                          key={plan.id}
                          id={plan.id}
                          name={plan.name}
                          price={plan.price}
                          savings={plan.savings}
                          isSelected={field.value === plan.id}
                          onClick={() => field.onChange(plan.id)}
                        />
                      ))}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            <div className="flex justify-end space-x-4 pt-4">
              <DialogClose>
                <span>
                  <Button type="button" variant="outline">
                    Cancelar
                  </Button>
                </span>
              </DialogClose>
              <Button type="submit">Ir para pagamento</Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
