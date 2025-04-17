import Image from "next/image";
import profile from "@/app/assets/perfil-02.png";
import { Button } from "../ui/button";
import Link from "next/link";

export function AboutMe() {
  return (
    <section className="flex flex-col h-screen items-center gap-8 px-10 py-14 max-sm:h-full">
      <h1 className="text-4xl font-bold text-slate-100 max-sm:text-2xl">
        QUEM SOU EU?
      </h1>
      <section className="flex justify-around items-center gap-10 max-sm:flex-col">
        <div className="relative w-[450px] h-[450px] max-sm:w-[350px] max-sm:h-[350px]">
          <div className="absolute inset-0 z-0 bg-radial to-70% from-red-600 to-gray-950" />
          <div className="absolute inset-0 z-10">
            <Image
              src={profile}
              alt="Geraldo Neto"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent" />
          </div>
        </div>
        <div className="flex flex-col text-start gap-3 w-[650px] max-sm:w-full max-sm:text-center">
          <h3 className="text-xl text-red-600">Me chamo Geraldo Neto</h3>
          <p className="text-base font-light text-slate-400">
            Sou graduado em Educação Física pela UNIFACISA! Treino na musculação
            a mais de 10 anos e tenho uma vasta experiência no quesito de
            treinamento com pesos. Ao longo dos anos, já atendi mais de 1000
            alunos em diversas áreas e com diversos objetivos! E te garanto
            que todos eles obtiveram seus resultados e chegaram 7 a seus
            objetivos! Meu foco é elevar seus treinos ao máximo em qualquer
            objetivo, sempre buscaremos o Máximo desempenho!
          </p>
        </div>
      </section>
      <Button
        asChild
        className="bg-red-600 hover:bg-red-700 text-white font-bold py-6 px-8 max-sm:px-4 
           rounded-md text-base max-sm:w-full"
      >
        <Link href={process.env.NEXT_PUBLIC_LINK || ""} target="_blank">
            Comece hoje🔥
        </Link>
      </Button>
    </section>
  );
}
