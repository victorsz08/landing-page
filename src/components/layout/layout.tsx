"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { Footer } from "./footer";
import { FormPay } from "../forms/form-pay";


interface NavItemProps {
    title: string;
    href: string;
};

const items: NavItemProps[] = [
    {
        title: "INICIO",
        href: "#inicio",
    },
    {
        title: "SOBRE",
        href: "#sobre",
    },
    {
        title: "PLANOS",
        href: "#planos",
    },
    {
        title: "AVALIAÇÕES",
        href: "#avaliações",
    },
    {
        title: "CONTATO",
        href: "#contato",
    }
];


export function Layout({  children }: { children: React.ReactNode }) {
  return (
    <main>
        <header className="px-8 fixed w-full z-[10000] py-6 flex items-center justify-between bg-gray-950 border-b border-gray-800
            max-sm:flex-col max-sm:justify-center max-sm:gap-4">
            <div className="flex justify-start gap-1 text-xl font-bold text-slate-100 max-sm:text-lg">
                <h1>GERALDO NETO</h1>
                <h1 className="text-red-600">TREINADOR</h1>
            </div>
            <nav className="flex gap-4 items-center max-sm:gap-2">
                {items.map((item) => (
                    <a key={item.title} href={item.href} className="text-sm text-slate-100 hover:text-red-600 transition-colors
                    max-sm:text-xs">
                        {item.title}
                    </a>
                ))}
                <Button asChild className="cursor-pointer max-sm:hidden">
                    <Link href={process.env.NEXT_PUBLIC_LINK || ""} target="_blank">
                        COMECE AGORA
                    </Link>
                </Button>
            </nav>
        </header>
        <section className="relative">
            {children}
            <div className="flex w-full h-fit items-center justify-center animate-bounce repeat-infinite z-[10000] 
            bottom-0 right-0 px-4 py-5 fixed">
                <FormPay>GARANTIR MINHA VAGA 🔥</FormPay>
            </div>
        </section>
        <Footer/>
    </main>
  );
}