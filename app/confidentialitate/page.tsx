import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Politica de confidențialitate | FrancAI',
  description: 'Cum colectează și folosește FrancAI datele personale ale vizitatorilor site-ului.',
  alternates: { canonical: '/confidentialitate' },
  robots: { index: true, follow: true },
}

const updated = '22 septembrie 2026'

export default function PrivacyPage() {
  return (
    <main className="bg-ink-900 min-h-screen">
      <div className="max-w-3xl mx-auto px-6 sm:px-10 py-20 lg:py-28">
        <Link href="/" className="text-violet-400 hover:text-violet-300 text-sm font-ui">
          ← Înapoi la pagina principală
        </Link>

        <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white leading-tight tracking-tight mt-8 mb-3">
          Politica de confidențialitate
        </h1>
        <p className="text-zinc-500 text-sm font-ui mb-12">Ultima actualizare: {updated}</p>

        <div className="space-y-10 text-zinc-400 text-sm font-ui leading-relaxed">
          <section>
            <h2 className="text-white font-ui font-bold text-lg mb-3">Cine suntem</h2>
            <p>
              FrancAI creează website-uri și sisteme de automatizare cu inteligență artificială.
              Pentru orice întrebare legată de datele tale personale ne poți scrie la{' '}
              <a href={`mailto:${SITE.email}`} className="text-violet-400 hover:text-violet-300">{SITE.email}</a>.
            </p>
          </section>

          <section>
            <h2 className="text-white font-ui font-bold text-lg mb-3">Ce date colectăm</h2>
            <p className="mb-3">
              <strong className="text-zinc-300">Datele trimise prin formularul de contact:</strong> nume, adresă de email
              și, opțional, compania, website-ul și mesajul tău. Le folosim exclusiv ca să îți răspundem la solicitare.
              Temeiul legal este interesul legitim de a răspunde unei cereri comerciale inițiate de tine.
            </p>
            <p>
              <strong className="text-zinc-300">Date statistice despre vizite:</strong> pagini vizitate, sursa din care ai
              ajuns pe site, țara, tipul de dispozitiv. Sunt date agregate, folosite ca să înțelegem ce conținut e util.
            </p>
          </section>

          <section>
            <h2 className="text-white font-ui font-bold text-lg mb-3">Cookie-uri și analiză</h2>
            <p className="mb-3">
              Folosim Vercel Analytics, care nu plasează cookie-uri și nu urmărește vizitatorii între site-uri.
            </p>
            <p>
              Folosim și Google Analytics, care plasează cookie-uri. Acesta se încarcă{' '}
              <strong className="text-zinc-300">doar dacă ai apăsat „Accept”</strong> în bannerul afișat la prima vizită.
              Dacă refuzi, nu se încarcă deloc, iar site-ul funcționează identic. Îți poți schimba oricând alegerea
              ștergând datele site-ului din setările browserului.
            </p>
          </section>

          <section>
            <h2 className="text-white font-ui font-bold text-lg mb-3">Cine mai are acces la date</h2>
            <p>
              Site-ul este găzduit de Vercel, iar emailurile din formular sunt livrate prin serviciul Resend. Acestea
              procesează datele strict pentru a furniza serviciul respectiv. Nu vindem și nu închiriem datele nimănui.
            </p>
          </section>

          <section>
            <h2 className="text-white font-ui font-bold text-lg mb-3">Cât păstrăm datele</h2>
            <p>
              Mesajele primite prin formular sunt păstrate în căsuța noastră de email cât timp sunt relevante pentru
              relația comercială. Ne poți cere oricând ștergerea lor.
            </p>
          </section>

          <section>
            <h2 className="text-white font-ui font-bold text-lg mb-3">Drepturile tale</h2>
            <p>
              Conform GDPR, ai dreptul să ceri accesul la datele tale, corectarea sau ștergerea lor, restricționarea
              prelucrării și portabilitatea datelor, și să te opui prelucrării. Scrie-ne la{' '}
              <a href={`mailto:${SITE.email}`} className="text-violet-400 hover:text-violet-300">{SITE.email}</a> și îți
              răspundem în cel mult 30 de zile. Ai de asemenea dreptul de a depune o plângere la Autoritatea Națională de
              Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP).
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
