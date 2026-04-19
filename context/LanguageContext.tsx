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
    const saved = localStorage.getItem('francai-lang') as Language
    if (saved === 'en' || saved === 'ro') setLangState(saved)
  }, [])

  const setLang = (newLang: Language) => {
    setLangState(newLang)
    localStorage.setItem('francai-lang', newLang)
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
