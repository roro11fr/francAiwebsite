import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { HeroCinematic } from '@/sections/HeroCinematic'
import { Services } from '@/sections/Services'
import { ExampleSystems } from '@/sections/ExampleSystems'
import { FreeAudit } from '@/sections/FreeAudit'
import { Process } from '@/sections/Process'
import { FAQ } from '@/sections/FAQ'
import { Contact } from '@/sections/Contact'

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroCinematic />
      <Services />
      <ExampleSystems />
      <FreeAudit />
      <Process />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}
