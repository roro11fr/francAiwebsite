'use client'

import { useLanguage } from '@/context/LanguageContext'
import { LogoMark } from '@/components/LogoMark'

export function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  const links = [
    { label: t.footer.links.services, href: '#services' },
    { label: t.footer.links.work, href: '#projects' },
    { label: t.footer.links.process, href: '#process' },
    { label: t.footer.links.about, href: '#about' },
    { label: t.footer.links.contact, href: '#contact' },
  ]

  const handleNav = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-ink-900 border-t border-white/8">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-10">

        {/* Top — brand statement */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 py-12 border-b border-white/8">
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            className="flex items-center gap-3 group w-fit"
          >
            <LogoMark id="footer" className="h-10 w-auto group-hover:opacity-80 transition-opacity" />
            <span className="font-display font-extrabold text-xl text-white tracking-tight">FrancAI</span>
          </a>

          <p className="text-zinc-600 text-sm font-ui leading-relaxed max-w-xs">
            {t.footer.description}
          </p>

          <div className="flex items-center gap-2 flex-shrink-0">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-zinc-600 text-xs font-ui">{t.ui.tagline}</span>
          </div>
        </div>

        {/* Bottom — links + copyright */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 py-8">

          {/* Nav links — horizontal */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {links.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-zinc-600 hover:text-violet-400 text-sm font-ui transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Copyright + email */}
          <div className="flex flex-col sm:items-end gap-1">
            <a
              href="mailto:catalin.franciuc@student.usv.ro"
              className="text-zinc-600 hover:text-violet-400 text-xs font-ui transition-colors"
            >
              catalin.franciuc@student.usv.ro
            </a>
            <p className="text-zinc-800 text-xs font-ui">© {year} {t.footer.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
