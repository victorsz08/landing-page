"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { Button } from "../ui/button";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

export type PlanType = {
  id: string;
  amount: number;
  title: string;
};

const plans: PlanType[] = [
  {
    id: "1",
    amount: 100,
    title: "Plano Mensal",
  },
  {
    id: "2",
    amount: 250,
    title: "Plano Trimestral",
  },
  {
    id: "3",
    amount: 480,
    title: "Plano Semetral",
  },
  {
    id: "4",
    amount: 900,
    title: "Plano Anual",
  },
];

const checkoutPaymentSchema = z.object({
  email: z.string().email({ message: "Informe um email válido" }),
  name: z
    .string()
    .min(5, { message: "O campo nome deve conter no mínimo 5 caracteres" }),
  contact: z
    .string()
    .min(10, { message: "O campo deve conter no mínimo 10 caracteres" }),
  id: z.string().min(1, { message: "Selecione um plano" }),
});

type CheckoutPaymentType = z.infer<typeof checkoutPaymentSchema>;

export function CreateFormPayment({ children }: { children: React.ReactNode }) {
  const form = useForm<CheckoutPaymentType>({
    resolver: zodResolver(checkoutPaymentSchema),
    defaultValues: {
      name: "",
      email: "",
      contact: "",
      id: "3",
    },
  });

  async function onSubmit(data: CheckoutPaymentType) {
    const plan = plans.find((item) => item.id === data.id);

    if (!plan) {
      return;
    }

    const preference = {
      item: {
        currency_id: plan.id,
        title: plan.title,
        unit_price: plan.amount,
      },
      metadata: {
        customerEmail: data.email,
        customerName: data.name,
        customerPlanName: plan.title,
      },
    };

    try {
      const response = await fetch("/api/mercadopago", {
        method: "POST",
        body: JSON.stringify(preference),
        headers: {
          "Content-type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        window.location.href = data.init_point; // Redireciona para a página de pagamento do Mercado Pago
      } else {
        console.error("Erro ao criar preferência:", await response.json());
        // Tratar o erro no frontend
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div>{children}</div>
      </DialogTrigger>
      <DialogContent
        className="min-w-[950px] z-[10000] bg-slate-950 border-slate-800
        max-sm:min-w-[18rem] overflow-x-clip"
      >
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-gray-100 tracking-tight">
            Formulario de Compra
          </DialogTitle>
          <DialogDescription className="text-xs font-normal text-gray-300 tracking-tight">
            Preencha as informações e prossiga para pagamento
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            className="min-w-full flex flex-col gap-6"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="text-xs font-normal text-gray-300">
                    Nome Completo
                  </FormLabel>
                  <Input
                    {...field}
                    type="text"
                    className="text-xs font-normal w-full border border-slate-700 text-slate-100"
                  />
                  <FormMessage className="text-[10px] text-red-600 font-light" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="text-xs font-normal text-gray-300">
                    Email
                  </FormLabel>
                  <Input
                    {...field}
                    type="email"
                    className="text-xs font-normal w-full border border-slate-700 text-slate-100"
                  />
                  <FormMessage className="text-[10px] text-red-600 font-light" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="contact"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="text-xs font-normal text-gray-300">
                    Contato
                  </FormLabel>
                  <Input
                    {...field}
                    type="text"
                    className="text-xs font-normal w-full border border-slate-700 text-slate-100"
                  />
                  <FormMessage className="text-[10px] text-red-600 font-light" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="id"
              render={({ field }) => (
                <FormItem className="flex flex-col min-w-full">
                  <FormLabel className="text-xs font-normal text-gray-300">
                    Escolha um Plano
                  </FormLabel>
                  <FormControl>
                    <ScrollArea>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-row gap-1 min-w-full justify-between z-[10]"
                      >
                        {plans.map((plan) => (
                          <div key={plan.id} className="relative">
                            <RadioGroupItem
                              value={plan.id}
                              id={plan.id}
                              className="sr-only w-full"
                            />
                            <Label
                              htmlFor={plan.id}
                              className="cursor-pointer block h-full"
                            >
                              <Card
                                className={cn(
                                  "h-fit gap-1 p-3 flex flex-col justify-between min-w-[13rem] transition-all duration-200 hover:border-primary/50 bg-gray-950",
                                  field.value === plan.id
                                    ? "border border-primary shadow-sm"
                                    : "border border-slate-800"
                                )}
                              >
                                <CardHeader className="text-slate-100">
                                  <div className="flex items-center justify-between">
                                    <CardTitle className="text-sm font-medium text-slate-400">
                                      {plan.title}
                                    </CardTitle>
                                  </div>
                                </CardHeader>
                                <CardContent className="min-w-full text-slate-100">
                                  <span className="text-xl tracking-tighter font-semibold text-slate-200">
                                    R${plan.amount}
                                  </span>
                                </CardContent>
                                <CardFooter>
                                  {field.value === plan.id && (
                                    <div className="absolute top-3 right-3 h-5 w-5 flex items-center justify-center rounded-full bg-primary text-primary-foreground">
                                      <Check className="h-3 w-3" />
                                    </div>
                                  )}
                                </CardFooter>
                              </Card>
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                      <ScrollBar orientation="horizontal" />
                    </ScrollArea>
                  </FormControl>
                  <FormMessage className="text-[10px] text-red-600 font-light" />
                </FormItem>
              )}
            />
            <div className="flex items-center gap-3 justify-end">
              <DialogClose asChild>
                <div>
                  <Button
                    type="button"
                    variant="outline"
                    className="text-xs bg-transparent border border-slate-300
                        text-slate-200 cursor-pointer hover:bg-transparent hover:text-slate-400"
                  >
                    Cancelar
                  </Button>
                </div>
              </DialogClose>
              <Button type="submit" className="text-xs cursor-pointer">
                Efetuar pagamento
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
