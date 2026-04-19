'use client'

import { useLanguage } from '@/context/LanguageContext'
import { useInView } from '@/hooks/useInView'

export function Statement() {
  const { t } = useLanguage()
  const { ref, isVisible } = useInView()

  return (
    <section className="bg-ink-900 border-t border-white/6">
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="max-w-screen-xl mx-auto px-6 sm:px-10 py-20 lg:py-28"
      >
        <p className={`animate-enter ${isVisible ? 'is-visible' : ''} font-display font-extrabold text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl leading-[1.1] tracking-tight`}>
          <span className="text-zinc-600 block">{t.statement.line1}</span>
          <span className="text-white block">{t.statement.line2}</span>
        </p>
      </div>
    </section>
  )
}
