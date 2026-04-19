'use client'

import { useLanguage } from '@/context/LanguageContext'
import { useInView } from '@/hooks/useInView'
import { Button } from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'

export function PainPoints() {
  const { t } = useLanguage()
  const { ref, isVisible } = useInView()

  const handleScroll = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="pain-points" className="bg-ink-900 relative overflow-hidden">
      <div className="absolute inset-0 fine-grid" />

      <div ref={ref as React.RefObject<HTMLDivElement>} className="relative z-10 max-w-screen-xl mx-auto px-6 sm:px-10 py-16 lg:py-24">

        {/* Eyebrow */}
        <div className={`animate-enter ${isVisible ? 'is-visible' : ''} flex items-center gap-3 mb-14`}>
          <span className="h-px w-6 bg-red-500/60 flex-shrink-0" />
          <span className="text-xs font-ui font-semibold text-red-400/80 uppercase tracking-[0.2em]">
            {t.painPoints.label}
          </span>
        </div>

        {/* Pain items — editorial list */}
        <div className="space-y-0">
          {t.painPoints.items.map((item, i) => (
            <div
              key={i}
              className={`animate-enter animate-enter-delay-${i + 1} ${isVisible ? 'is-visible' : ''} group grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-4 lg:gap-16 items-baseline border-b border-white/6 py-10 hover:border-white/12 transition-colors duration-200`}
            >
              {/* Stark stat — left */}
              <span className="font-display font-extrabold text-3xl sm:text-4xl text-red-500/70 group-hover:text-red-400 transition-colors leading-none tabular-nums">
                {item.stat}
              </span>

              {/* Pain description — right, large */}
              <p className="text-zinc-400 text-lg sm:text-xl lg:text-2xl font-ui font-light leading-relaxed group-hover:text-zinc-300 transition-colors">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Close + CTA */}
        <div className={`animate-enter animate-enter-delay-5 ${isVisible ? 'is-visible' : ''} flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-12`}>
          <p className="text-zinc-500 text-base font-ui font-light max-w-md italic">
            {t.painPoints.close}
          </p>
          <Button
            variant="secondary"
            size="md"
            onClick={() => handleScroll('#services')}
            className="group flex-shrink-0"
          >
            {t.painPoints.cta}
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}
