"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import bg from "@/app/assets/bg-image-02.png";

export function LimitedSpots() {
  return (
    <section className="w-full h-[70vh] flex flex-col justify-center items-center relative py-16 overflow-hidden">
      <div className="absolute inset-0 bg-[#4a1515] z-0">
        <div className="absolute inset-0 opacity-15">
          <Image
            src={bg} // Substitua pelo caminho correto da sua imagem
            alt="Background"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </div>

      {/* Conteúdo */}
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
            NÃO PERCA ESSA OPORTUNIDADE💥
          </h2>

          <p className="text-gray-200 mb-10">
            Eu te garanto que você não vai se arrepender! Temos vários relatos
            de pessoas que mudaram seus hábitos, comportamentos e corpo! Comece
            você agora mesmo e garanta sua vaga nesta consultoria de
            treinamento!🔥
          </p>

          <Button
            asChild
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-6 px-8 max-sm:px-4 
            rounded-md text-base max-sm:w-full"
          >
            <Link
              href={process.env.NEXT_PUBLIC_LINK || "#"}
              target="_blank"
              rel="noopener noreferrer"
            >
              Quero minha vaga agora! 🔥
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
