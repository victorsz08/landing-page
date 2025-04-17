import Link from "next/link";
import { CardPlan } from "../card-plans/card-plans";
import { Button } from "../ui/button";





export function Plans() {

    return (
        <section id="planos" className="flex flex-col gap-16 items-center justify-center py-10 max-sm:px-4">
            <h1 className="text-slate-200 font-bold text-3xl max-sm:text-xl">PREÇOS E PLANOS</h1>
            <section className="flex items-end gap-4 max-sm:flex-col max-sm:gap-8"> 
                <CardPlan
                    title="Plano Mensal"
                    description="Ideal para quem deseja experimentar nossos serviços 
                        e obter resultados rápidos em um curto período."
                    value={100}
                />
                <CardPlan
                    title="Plano Trimestral"
                    description="Perfeito para quem busca um compromisso mais sólido com 
                        seus objetivos de fitness, garantindo consistência e progresso contínuo."
                    value={250}
                />
                <CardPlan
                    title="Plano Semestral"
                    description="Projetado para aqueles que estão determinados a 
                        transformar seu estilo de vida e alcançar metas de longo prazo com suporte contínuo."
                    value={480}
                    popular
                />
                <CardPlan
                    title="Plano Anual"
                    description="Destinado a quem busca um compromisso sólido com a 
                        saúde e bem-estar, garantindo suporte integral durante todo o ano."
                    value={900}
                />
            </section>
            <Button asChild className="bg-red-600 hover:bg-red-700 text-white font-bold py-6 px-3 rounded-md text-base max-sm:text-sm">
            <Link href={process.env.NEXT_PUBLIC_LINK || ""} target="_blank">Quero meu treino de resultado agora! 🔥</Link>
          </Button>
        </section>
    )
}