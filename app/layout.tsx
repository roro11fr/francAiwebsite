import type { Metadata, Viewport } from 'next'
import { Bricolage_Grotesque, Plus_Jakarta_Sans, Manrope, DM_Sans } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/context/LanguageContext'
import { StructuredData } from '@/components/StructuredData'
import { SITE, SITE_URL } from '@/lib/site'

const bricolage = Bricolage_Grotesque({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-bricolage',
  display: 'swap',
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin', 'latin-ext'],
  weight: ['700', '800'],
  variable: '--font-manrope',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500'],
  variable: '--font-dmsans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE.title,
  description: SITE.description,
  keywords: [
    'creare site-uri',
    'creare website firma',
    'web design Romania',
    'site de prezentare',
    'landing page',
    'automatizări AI',
    'automatizare procese firme',
    'chatbot AI pentru firme',
    'agentie web',
    'AI automation agency',
    'FrancAI',
  ],
  authors: [{ name: 'FrancAI' }],
  alternates: { canonical: '/' },
  openGraph: {
    title: SITE.title,
    description: SITE.description,
    url: '/',
    siteName: SITE.name,
    locale: 'ro_RO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE.title,
    description: SITE.description,
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } },
}

export const viewport: Viewport = {
  themeColor: '#05050f',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro" className={`${bricolage.variable} ${jakarta.variable} ${manrope.variable} ${dmSans.variable}`}>
      <body className="font-body antialiased bg-cream-50 text-ink-900">
        <StructuredData />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
