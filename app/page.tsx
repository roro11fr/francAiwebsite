import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Hero } from '@/sections/Hero'
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
      <Hero />
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
