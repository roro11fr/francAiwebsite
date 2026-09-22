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
      { '@type': 'City', name: 'Suceava' },
      { '@type': 'AdministrativeArea', name: 'Județul Suceava' },
      { '@type': 'Country', name: 'România' },
    ],
    sameAs: [SITE.instagram],
    knowsLanguage: ['ro', 'en'],
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
      ].map((name) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name, areaServed: 'Suceava' } })),
    },
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

  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: ro.faq.items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify([business, website, faq]) }}
    />
  )
}
