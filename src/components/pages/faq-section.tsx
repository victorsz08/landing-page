import { Button } from "@/components/ui/button"
import Link from "next/link"

export function FAQSection() {
  return (
    <section className="w-full py-16 bg-gray-900 text-white">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Dúvidas Frequentes</h2>
          <p className="text-gray-300 mb-12">Tudo o que você precisa saber antes de começar sua transformação!</p>

          <p className="text-gray-400 mb-8">
            Aqui, respondemos as perguntas mais comuns sobre a consultoria, para que você inicie com total confiança e
            clareza. Caso ainda tenha alguma dúvida, estou à disposição para te ajudar! 💪
          </p>

          <Button asChild className="bg-red-600 hover:bg-red-700 text-white font-bold py-6 px-6 max-sm:px-3 max-sm:text-sm 
           rounded-md text-base max-sm:w-full">
            <Link href={process.env.NEXT_PUBLIC_LINK || ""} target="_blank">Tire suas dúvidas 🔥</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
