// Public site URL — set NEXT_PUBLIC_SITE_URL to the live domain (e.g. https://francai.ro)
// in .env.local and in the hosting provider. Used for canonical URLs, sitemap and schema.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').replace(/\/$/, '')

export const SITE = {
  name: 'FrancAI',
  email: 'francaiagency@gmail.com',
  city: 'Suceava',
  region: 'Județul Suceava',
  country: 'RO',
  title: 'Creare Site-uri și Automatizări AI în Suceava | FrancAI',
  description:
    'FrancAI creează website-uri moderne și automatizări AI pentru firme din Suceava și din toată România. Site-uri rapide, optimizate SEO, conectate la sisteme care preiau munca repetitivă. Audit gratuit.',
}
