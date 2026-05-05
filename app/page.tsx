import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { HeroCinematic } from '@/sections/HeroCinematic'
import { Services } from '@/sections/Services'
import { PainPoints } from '@/sections/PainPoints'
import { Benefits } from '@/sections/Benefits'
import { Process } from '@/sections/Process'
import { Contact } from '@/sections/Contact'

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroCinematic />
      <PainPoints />
      <Services />
      <Benefits />
      <Process />
      <Contact />
      <Footer />
    </main>
  )
}
