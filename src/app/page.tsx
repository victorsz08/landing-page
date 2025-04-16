import { About } from "@/components/pages/about";
import { Exclusives } from "@/components/pages/exclusives";
import { Home } from "@/components/pages/home";
import { Plans } from "@/components/pages/plans";
import { Steps } from "@/components/pages/steps";




export default function LandingPage() {

  return (
    <section>
      <Home/>
      <About/>
      <Exclusives/>
      <Steps/>
      <Plans/>
    </section>
  )
}