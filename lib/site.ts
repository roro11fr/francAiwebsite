// Public site URL, used for canonical URLs, sitemap and schema.
// Defaults to the live domain; override with NEXT_PUBLIC_SITE_URL (e.g. for a staging domain).
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://francai.ro').replace(/\/$/, '')

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
