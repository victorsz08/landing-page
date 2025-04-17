"use client"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Star } from "lucide-react"
import Link from "next/link"

interface Testimonial {
  id: number
  name: string
  title: string
  image: string
  quote: string
  date: string
  stars: number
}

export function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Gabriel Toledo",
      title: "Atleta Profissional",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "Ele sabe muito, passa tudo o que já testou e viu que dá resultado. É super focado, me incentiva muito, explica muito bem e ajuda nos treinos. Ele dá 110% para você, sempre querendo que você melhore a cada dia.",
      date: "24/02/2025",
      stars: 5,
    },
    {
      id: 2,
      name: "Mariana Silva",
      title: "Cliente Satisfeita - Perdeu 10kg em 1 mês",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "O diferencial é o acompanhamento! Recebo feedbacks detalhados sobre meus treinos e evoluções, e que fez total diferença nos meus resultados.",
      date: "08/01/2025",
      stars: 5,
    },
    {
      id: 3,
      name: "Carlos Mendes",
      title: "Cliente desde 2023",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "Transformei meu corpo e minha mente. O método é completo e os resultados são visíveis desde as primeiras semanas.",
      date: "15/03/2025",
      stars: 5,
    },
  ]

  return (
    <section id="avaliações" className="w-full py-16 bg-gray-900 text-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">AVALIAÇÕES</h2>
          <p className="text-gray-400">Depoimentos de quem já transformou seu corpo!</p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 md:basis-1/2">
                <Card className="bg-gray-950 border-gray-800 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Avatar className="h-16 w-16 mr-4 border-2 border-gray-600">
                        <AvatarImage src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-bold text-slate-200 text-lg">{testimonial.name}</h3>
                        <p className="text-sm text-gray-400">{testimonial.title}</p>
                      </div>
                    </div>
                    <p className="text-gray-300 italic mb-4">"{testimonial.quote}"</p>
                  </CardContent>
                  <CardFooter className="p-6 pt-0 flex justify-between items-center">
                    <div className="text-sm text-gray-400">{testimonial.date}</div>
                    <div className="flex">
                      {Array.from({ length: testimonial.stars }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-red-500 text-red-500" />
                      ))}
                    </div>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 -ml-4 md:-ml-6 bg-red-600 text-white border-none hover:bg-red-700 hover:text-white" />
          <CarouselNext className="absolute right-0 -mr-4 md:-mr-6 bg-red-600 text-white border-none hover:bg-red-700 hover:text-white" />
        </Carousel>

        <div className="mt-12 text-center">
          <Button asChild className="bg-red-600 hover:bg-red-700 text-white font-bold py-6 px-8 rounded-md text-base">
            <Link href={process.env.NEXT_PUBLIC_LINK || ""} target="_blank">Quero fazer parte desse time! 🔥</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
