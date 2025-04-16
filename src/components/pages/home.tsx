import Link from "next/link";
import { PerfilImage } from "../images/perfil-image";
import { Button } from "../ui/button";

export function Home() {
  return (
    <section className="h-screen flex justify-around items-center px-14 max-sm:flex-col
    max-sm:pt-16 max-sm:px-8 max-sm:w-full max-sm:h-full max-sm:gap-10">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2 text-4xl font-bold text-slate-100
        max-sm:text-3xl max-sm:text-center">
          <h1 className="text-red-600">TREINO 100% INDIVIDUAL PARA</h1>
          <h1>ALCANÇAR SEUS OBJETIVOS</h1>
          <h1 className="text-red-600">SEM ENROLAÇÃO</h1>
        </div>
        <small className="text-sm font-light text-slate-300 max-sm:text-center max-sm:text-xs
        max-sm:w-full">
          Alcance seus objetivos com um plano de treino personalizado e foco
          total nos resultados.
        </small>
        <section className="mt-6 flex items-center gap-3 max-sm:flex-col max-sm:gap-2">
          <Button asChild className="cursor-pointer text-sm font-light py-6 max-sm:text-sm max-sm:w-full">
            <Link href={process.env.NEXT_PUBLIC_LINK || ""} target="_blank">
              Comece sua transformação hoje! 🔥
            </Link>
          </Button>
          <Button
            asChild
            className="cursor-pointer bg-transparent border-red-600 text-red-600 hover:bg-transparent
                        hover:filter hover:opacity-60 text-sm font-light py-6 max-sm:w-full max-sm:text-sm"
            variant="outline"
          >
            <a href="#sobre" target="_blank">
              Sobre a consultoria
            </a>
          </Button>
        </section>
      </div>
      <PerfilImage />
    </section>
  );
}
