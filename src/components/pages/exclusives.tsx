import Link from "next/link";
import { CardExclusives } from "../card-about/card-about";
import { Button } from "../ui/button";

export function Exclusives() {
  return (
    <section
      className="flex flex-col gap-32 items-center justify-center w-full 
            h-screen max-sm:h-full max-sm:gap-10 max-sm:py-8 max-sm:px-8 max-sm:w-full"
    >
      <h1 className="text-4xl font-bold text-slate-200 max-sm:text-2xl text-center">
        Descubra os benefícios exclusivos da minha consultoria personalizada!
      </h1>
      <CardExclusives />
      <Button
        asChild
        className="cursor-pointer text-lg font-light py-6 max-sm:text-sm max-sm:w-full"
      >
        <Link href={process.env.NEXT_PUBLIC_LINK || ""} target="_blank">
          Comece sua transformação hoje! 🔥
        </Link>
      </Button>
    </section>
  );
}
