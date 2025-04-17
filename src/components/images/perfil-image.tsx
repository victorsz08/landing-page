"use client";

import Image from "next/image";
import profile from "@/app/assets/perfil.png";

export function PerfilImage() {
  return (
    <div className="relative w-[450px] h-[450px] max-sm:w-[350px] max-sm:h-[350px]">
      <div className="absolute inset-0 z-0 bg-radial to-70% from-red-600 to-gray-950" />
      <div className="absolute inset-0 z-10">
        <Image src={profile} alt="Geraldo Neto" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent" />
      </div>
    </div>
  );
}
