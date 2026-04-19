import type { Metadata } from 'next'
import { Bricolage_Grotesque, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/context/LanguageContext'

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-bricolage',
  display: 'swap',
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'FrancAI — Build. Automate. Scale.',
  description:
    'Custom AI solutions that save businesses time and money. We build modern digital products and automate business processes using AI.',
  keywords: ['AI automation', 'custom AI solutions', 'chatbots', 'voice agents', 'web development', 'business automation', 'FrancAI'],
  authors: [{ name: 'FrancAI' }],
  openGraph: {
    title: 'FrancAI — Build. Automate. Scale.',
    description: 'Custom AI solutions that save businesses time and money.',
    type: 'website',
    locale: 'ro_RO',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FrancAI — Build. Automate. Scale.',
    description: 'Custom AI solutions that save businesses time and money.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro" className={`${bricolage.variable} ${jakarta.variable}`}>
      <body className="font-body antialiased bg-cream-50 text-ink-900">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
