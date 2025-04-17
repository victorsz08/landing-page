import { About } from "@/components/pages/about";
import { AboutMe } from "@/components/pages/about-me";
import { Exclusives } from "@/components/pages/exclusives";
import { FAQSection } from "@/components/pages/faq-section";
import { Home } from "@/components/pages/home";
import { LimitedSpots } from "@/components/pages/limited-spots";
import { Plans } from "@/components/pages/plans";
import { Steps } from "@/components/pages/steps";
import { Testimonials } from "@/components/pages/testemonials";




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