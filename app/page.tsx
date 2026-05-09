import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { HeroCinematic } from '@/sections/HeroCinematic'
import { Services } from '@/sections/Services'
import { ExampleSystems } from '@/sections/ExampleSystems'
import { BeforeAfter } from '@/sections/BeforeAfter'
import { FreeAudit } from '@/sections/FreeAudit'
import { Process } from '@/sections/Process'
import { BusinessTypes } from '@/sections/BusinessTypes'
import { FAQ } from '@/sections/FAQ'
import { Contact } from '@/sections/Contact'

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroCinematic />
      <Services />
      <ExampleSystems />
      <BeforeAfter />
      <FreeAudit />
      <Process />
      <BusinessTypes />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}
