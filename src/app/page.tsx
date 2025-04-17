import { About } from "@/components/pages/about";
import { AboutMe } from "@/components/pages/about-me";
import { Exclusives } from "@/components/pages/exclusives";
import { FAQSection } from "@/components/pages/faq-section";
import { Home } from "@/components/pages/home";
import { LimitedSpots } from "@/components/pages/limited-spots";
import { Plans } from "@/components/pages/plans";
import { Steps } from "@/components/pages/steps";
import { Testimonials } from "@/components/pages/testemonials";
import { Metadata } from "next";

// app/page.js
export const metadata: Metadata = {
  title: 'Geraldo Neto | Treinador',
  description: 'Treinos personalizados com acompanhamento recorrente e planos acessíveis. Alcance seus objetivos com nossa consultoria especializada.',
  keywords: ['treino personalizado', 'consultoria fitness', 'personal trainer online'],
  openGraph: {
    title: 'TREINO 100% INDIVIDUAL PARA ALCANÇAR SEUS OBJETIVOS SEM ENROLAÇÃO | Geraldo Neto Treinador',
    description: 'Treinos personalizados com acompanhamento recorrente e planos acessíveis.',
    url: 'https://www.geraldonetotreinador.com.br',
    siteName: 'Geraldo Neto Treinador',
    images: [
      {
        url: 'https://www.geraldonetotreinador.com.br/imagem-og.jpg',
        width: 800,
        height: 600,
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
};




export default function LandingPage() {

  return (
    <section>
      <Home/>
      <About/>
      <Exclusives/>
      <Steps/>
      <Plans/>
      <Testimonials/>
      <AboutMe/>
      <FAQSection/>
      <LimitedSpots/>
    </section>
  )
}