'use client'

import { useEffect, useState } from 'react'
import Script from 'next/script'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'

const STORAGE_KEY = 'francai-consent'
const GA_ID = process.env.NEXT_PUBLIC_GA_ID

type Choice = 'granted' | 'denied'

const read = (): Choice | null => {
  try {
    const v = localStorage.getItem(STORAGE_KEY)
    return v === 'granted' || v === 'denied' ? v : null
  } catch {
    return null
  }
}

// Google Analytics loads only after the visitor accepts — never before.
export function CookieConsent() {
  const { t } = useLanguage()
  const [choice, setChoice] = useState<Choice | null>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setChoice(read())
    setReady(true)
  }, [])

  const decide = (value: Choice) => {
    try { localStorage.setItem(STORAGE_KEY, value) } catch {}
    setChoice(value)
  }

  return (
    <>
      {GA_ID && choice === 'granted' && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          <Script id="ga-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
              gtag('js',new Date());gtag('config','${GA_ID}',{anonymize_ip:true});`}
          </Script>
        </>
      )}

      {ready && choice === null && (
        <div
          role="dialog"
          aria-label={t.cookies.title}
          className="fixed bottom-0 inset-x-0 z-[60] p-4 sm:p-6"
        >
          <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-ink-900/95 backdrop-blur p-5 sm:p-6 shadow-2xl flex flex-col sm:flex-row sm:items-center gap-4">
            <p className="text-zinc-400 text-sm font-ui leading-relaxed flex-1">
              {t.cookies.text}{' '}
              <Link href="/confidentialitate" className="text-violet-400 hover:text-violet-300 underline underline-offset-2">
                {t.cookies.link}
              </Link>
            </p>
            <div className="flex gap-3 flex-shrink-0">
              <button
                onClick={() => decide('denied')}
                className="px-4 py-2.5 rounded-lg text-sm font-ui font-semibold text-zinc-400 border border-white/10 hover:text-white hover:border-white/25 transition-colors"
              >
                {t.cookies.decline}
              </button>
              <button
                onClick={() => decide('granted')}
                className="px-5 py-2.5 rounded-lg text-sm font-ui font-semibold text-white transition-opacity hover:opacity-90"
                style={{ background: 'linear-gradient(135deg,#7c3aed,#9333ea)' }}
              >
                {t.cookies.accept}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
