'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { Button } from '@/components/ui/Button'
import { LogoMark } from '@/components/LogoMark'

export function Navbar() {
  const { t, lang, setLang } = useLanguage()
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const links = [
    { label: t.nav.services, href: '#services' },
    { label: t.nav.work, href: '#projects' },
    { label: t.nav.process, href: '#process' },
    { label: t.nav.about, href: '#about' },
  ]

  const handleNav = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* Always-black navbar — sits flush against the dark hero */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-ink-900 border-b border-white/8">
        <div className="max-w-screen-2xl mx-auto px-6 sm:px-10 flex items-center justify-between h-16">

          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            className="flex items-center gap-2.5 group flex-shrink-0"
          >
            <LogoMark id="nav" className="h-9 w-auto" />
            <span className="font-display font-extrabold text-[1.1rem] text-white tracking-tight leading-none">
              FrancAI
            </span>
          </a>

          {/* Desktop nav — centered */}
          <nav className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {links.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="px-4 py-2 text-sm font-ui font-medium text-zinc-400 hover:text-white rounded-lg hover:bg-white/6 transition-all duration-200"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="flex items-center gap-0.5 bg-white/6 border border-white/10 rounded-lg p-0.5">
              {(['ro', 'en'] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-3 py-1.5 rounded-md text-xs font-ui font-semibold tracking-wide transition-all duration-200 ${
                    lang === l ? 'bg-violet-700 text-white' : 'text-zinc-500 hover:text-zinc-300'
                  }`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
            <Button variant="primary" size="sm" onClick={() => handleNav('#contact')}>
              {t.nav.cta}
            </Button>
          </div>

          {/* Mobile */}
          <div className="flex lg:hidden items-center gap-2">
            <div className="flex items-center gap-0.5 bg-white/6 border border-white/10 rounded-lg p-0.5">
              {(['ro', 'en'] as const).map((l) => (
                <button key={l} onClick={() => setLang(l)}
                  className={`px-2.5 py-1 rounded-md text-xs font-ui font-semibold transition-all duration-200 ${lang === l ? 'bg-violet-700 text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2 text-zinc-400 hover:text-white rounded-lg transition-colors">
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile slide-in */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black/60" onClick={() => setMobileOpen(false)} />
        <div className={`absolute top-0 right-0 h-full w-72 bg-ink-900 border-l border-white/10 p-8 pt-24 flex flex-col gap-1 transition-transform duration-300 ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          {[...links, { label: t.nav.contact, href: '#contact' }].map((link) => (
            <button key={link.href} onClick={() => handleNav(link.href)}
              className="text-left px-4 py-3.5 text-base font-ui font-medium text-zinc-400 hover:text-white hover:bg-white/6 rounded-lg transition-all duration-200"
            >
              {link.label}
            </button>
          ))}
          <div className="mt-4 pt-4 border-t border-white/8">
            <Button variant="primary" size="md" className="w-full" onClick={() => handleNav('#contact')}>
              {t.nav.cta}
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
