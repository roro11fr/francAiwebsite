import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { HeroCinematic } from '@/sections/HeroCinematic'
import { Services } from '@/sections/Services'
import { Founder } from '@/sections/Founder'
import { Testimonials } from '@/sections/Testimonials'
import { ExampleSystems } from '@/sections/ExampleSystems'
import { FreeAudit } from '@/sections/FreeAudit'
import { Process } from '@/sections/Process'
import { FAQ } from '@/sections/FAQ'
import { Contact } from '@/sections/Contact'
import { HomeFaqSchema, TestimonialVideoSchema } from '@/components/StructuredData'

export default function Home() {
  return (
    <main>
      <HomeFaqSchema />
      <TestimonialVideoSchema />
      <Navbar />
      <HeroCinematic />
      <Services />
      <Testimonials />
      <Founder />
      <ExampleSystems />
      <FreeAudit />
      <Process />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}
