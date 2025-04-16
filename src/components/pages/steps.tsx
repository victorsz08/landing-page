import Link from "next/link";
import { StepCard } from "../steps/step";
import { Button } from "../ui/button";





export function Steps() {

    return (
        <section className="h-full py-16 flex-col bg-gray-900 w-full flex items-center justify-center gap-16">
            <h1 className="text-slate-100 font-bold text-2xl">Como adquirir?</h1>
            <section className="flex justify-center items-center gap-8">
                <StepCard
                    step="1"
                    title="Clique no botão abaixo e seja redirecionado."
                />
                <StepCard
                    step="2"
                    title="Escolha o plano desejado."
                />
                <StepCard
                    step="3"
                    title="Receba seu protocolo em até 5 dias."
                />
            </section>
            <Button asChild className="cursor-pointer text-sm font-light py-6 max-sm:text-sm max-sm:w-full">
            <Link href={process.env.NEXT_PUBLIC_LINK || ""} target="_blank">
                Clique aqui e transforme sua vida 🔥
            </Link>
          </Button>
        </section>
    )
}