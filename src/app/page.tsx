import { About } from "@/components/pages/about";
import { Exclusives } from "@/components/pages/exclusives";
import { Home } from "@/components/pages/home";




export default function LandingPage() {

  return (
    <section>
      <Home/>
      <About/>
      <Exclusives/>
    </section>
  )
}