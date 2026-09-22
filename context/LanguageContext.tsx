'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { en } from '@/data/translations/en'
import { ro } from '@/data/translations/ro'
import type { Translations } from '@/data/translations/en'

type Language = 'en' | 'ro'

interface LanguageContextType {
  lang: Language
  t: Translations
  setLang: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType | null>(null)

const translations: Record<Language, Translations> = { en, ro }

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>('ro')

  useEffect(() => {
    try {
      const saved = localStorage.getItem('francai-lang') as Language
      if (saved === 'en' || saved === 'ro') setLangState(saved)
    } catch {}
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const setLang = (newLang: Language) => {
    setLangState(newLang)
    try { localStorage.setItem('francai-lang', newLang) } catch {}
  }

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], setLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
