"use client";

import Image from "next/image";
import bg from "@/app/assets/bg-image-01.png";
import { Button } from "../ui/button";
import Link from "next/link";

export function About() {
  return (
    <section
      className="flex relative flex-col gap-10 items-center justify-center w-full 
            h-screen max-sm:h-full max-sm:pt-16 max-sm:px-8 max-sm:w-full"
      id="sobre"
    >
      <div className="absolute inset-0 bg-cover filter blur-[1px] bg-center opacity-5 z-0">
        <Image
          src={bg}
          alt="Background"
          fill
          className="object-cover object-top"
        />
      </div>

      <section className="flex flex-col z-[1000] items-center text-center px-32 gap-32 max-sm:gap-8 max-sm:px-8 max-sm:py-10">
        <h1 className="text-4xl font-bold text-slate-100 max-sm:text-2xl">
          🔥Consultoria online personalizada: Treinos Avançados para Resultados
          Rápidos e Eficazes
        </h1>
        <div
          className="flex flex-col items gap-10 text-center font-normal text-xl text-slate-400
        max-sm:gap-6 max-sm:text-base"
        >
          <p>
            Se você está cansado de treinar sem ver resultados e quer evoluir de
            verdade, eu tenho o método certo para você! Minha consultoria online
            é focada em resultados reais, com estratégias testadas e comprovadas
            cientificamente para máximo desempenho muscular no menor tempo
            possível.
          </p>
          <p>
            🔥 Treinos Otimizados para o máximo resultado em qualquer objetivo!
            – são Protocolos de musculação com técnicas avançadas para acelerar
            seus ganhos.
          </p>
        </div>
        <Button
          asChild
          className="cursor-pointer w-fit text-lg font-light py-6 max-sm:text-sm max-sm:w-full"
        >
          <Link href={process.env.NEXT_PUBLIC_LINK || ""} target="_blank">
            Transforme seu corpo agora 🔥
          </Link>
        </Button>
      </section>
    </section>
  );
}
