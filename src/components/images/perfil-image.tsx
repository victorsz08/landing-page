"use client";

import Image from "next/image";
import profile from "@/app/assets/perfil.png";

export function PerfilImage() {
  return (
    <div className="relative w-[650px] h-[650px] max-sm:w-[350px] max-sm:h-[350px]">
      {/* Radial Gradient como fundo */}
      <div className="absolute inset-0 z-0 bg-radial to-70% from-red-600 to-gray-950" />

      {/* Imagem por cima do fundo */}
      <div className="absolute inset-0 z-10">
        <Image src={profile} alt="Geraldo Neto" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent" />
      </div>
    </div>
  );
}
