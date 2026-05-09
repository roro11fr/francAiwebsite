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
  title: 'FrancAI | Custom AI Automation Systems for Repetitive Business Work',
  description:
    'FrancAI builds custom AI automation systems that handle repetitive tasks, connect your tools, reduce manual work, and help your business operate faster.',
  keywords: [
    'AI automation',
    'custom AI systems',
    'workflow automation',
    'business automation',
    'AI agents',
    'n8n automation',
    'CRM automation',
    'FrancAI',
    'automatizare AI',
  ],
  authors: [{ name: 'FrancAI' }],
  openGraph: {
    title: 'FrancAI | Custom AI Automation Systems for Repetitive Business Work',
    description:
      'FrancAI builds custom AI automation systems that handle repetitive tasks, connect your tools, reduce manual work, and help your business operate faster.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FrancAI | Custom AI Automation Systems for Repetitive Business Work',
    description:
      'FrancAI builds custom AI automation systems that handle repetitive tasks, connect your tools, reduce manual work, and help your business operate faster.',
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
