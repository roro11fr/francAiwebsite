import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { HeroCinematic } from '@/sections/HeroCinematic'
import { Services } from '@/sections/Services'
import { BusinessTypes } from '@/sections/BusinessTypes'
import { PainPoints } from '@/sections/PainPoints'
import { Benefits } from '@/sections/Benefits'
import { Statement } from '@/sections/Statement'
import { Projects } from '@/sections/Projects'
import { Process } from '@/sections/Process'
import { About } from '@/sections/About'
import { Contact } from '@/sections/Contact'

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroCinematic />
      <PainPoints />
      <Services />
      <BusinessTypes />
      <Benefits />
      <Statement />
      <Projects />
      <Process />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
