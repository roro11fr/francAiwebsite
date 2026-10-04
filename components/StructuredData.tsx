import { SITE, SITE_URL } from '@/lib/site'
import { ro } from '@/data/translations/ro'

// Schema.org data so Google understands who we are, what we offer and where (local SEO).
export function StructuredData() {
  const business = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE_URL}/#business`,
    name: SITE.name,
    url: SITE_URL,
    email: SITE.email,
    image: `${SITE_URL}/assets/new_logo_clean.png`,
    logo: `${SITE_URL}/assets/new_logo_clean.png`,
    description: SITE.description,
    address: {
      '@type': 'PostalAddress',
      addressLocality: SITE.city,
      addressRegion: SITE.region,
      addressCountry: SITE.country,
    },
    areaServed: [
      { '@type': 'Country', name: 'România' },
      { '@type': 'Place', name: 'Worldwide' },
    ],
    sameAs: [SITE.instagram],
    knowsLanguage: ['ro', 'en'],
    founder: { '@id': `${SITE_URL}/#founder` },
    slogan: `${ro.hero.headline} ${ro.hero.headlineAccent}`,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicii FrancAI',
      itemListElement: [
        'Creare website-uri',
        'Creare landing page-uri',
        'Automatizări AI pentru firme',
        'Chatbot și asistenți AI',
        'Automatizări CRM și lead-uri',
        'Integrări între aplicații',
      ].map((name) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name, areaServed: 'România' } })),
    },
  }

  const founder = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE_URL}/#founder`,
    name: SITE.founder,
    jobTitle: 'Fondator',
    image: `${SITE_URL}${SITE.founderImage}`,
    worksFor: { '@id': `${SITE_URL}/#business` },
  }

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE.name,
    inLanguage: 'ro-RO',
    publisher: { '@id': `${SITE_URL}/#business` },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify([business, founder, website]) }}
    />
  )
}

// Home page FAQ only — service pages carry their own FAQPage schema.
export function HomeFaqSchema() {
  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: ro.faq.items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
}

// Testimonial videos — lets Google index them as videos of FrancAI clients.
export function TestimonialVideoSchema() {
  const videos = ro.testimonials.items.map((item) => ({
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: `Testimonial ${item.name} despre FrancAI`,
    description: `${item.name} (${item.place}) despre colaborarea cu FrancAI. ${item.project}`,
    thumbnailUrl: `${SITE_URL}/testimoniale/${item.slug}.jpg`,
    contentUrl: `${SITE_URL}/testimoniale/${item.slug}.mp4`,
    uploadDate: '2026-10-04',
    inLanguage: 'ro',
    publisher: { '@id': `${SITE_URL}/#business` },
  }))

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videos) }} />
}
