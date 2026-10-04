// Public site URL — set NEXT_PUBLIC_SITE_URL to the live domain (e.g. https://francai.ro)
// in .env.local and in the hosting provider. Used for canonical URLs, sitemap and schema.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').replace(/\/$/, '')

export const SITE = {
  name: 'FrancAI',
  email: 'francaiagency@gmail.com',
  instagram: 'https://www.instagram.com/francai.ro/',
  city: 'Suceava',
  region: 'Județul Suceava',
  country: 'RO',
  founder: 'Robert Franciuc',
  founderImage: '/assets/rsz_poza-cutout_cleanup.png',
  title: 'Creare Site-uri și Automatizări AI pentru Firme | FrancAI',
  description:
    'Site-uri rapide care aduc clienți și automatizări AI care preiau munca repetitivă: chatbot, programări, CRM, rapoarte. Lucrezi direct cu fondatorul. Audit gratuit.',
}
