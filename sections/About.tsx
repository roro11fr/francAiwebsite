'use client'

import { ArrowRight } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { useInView } from '@/hooks/useInView'
import { Button } from '@/components/ui/Button'

export function About() {
  const { t } = useLanguage()
  const { ref, isVisible } = useInView()

  const handleScroll = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="about" className="bg-violet-700 relative overflow-hidden">
      <div className="absolute inset-0 fine-grid opacity-30" />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-violet-500 rounded-full blur-[120px] opacity-30 pointer-events-none" />

      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="relative z-10 max-w-screen-xl mx-auto px-6 sm:px-10 py-24 lg:py-32"
      >
        {/* Label */}
        <div className={`animate-enter ${isVisible ? 'is-visible' : ''} flex items-center gap-3 mb-10`}>
          <span className="h-px w-6 bg-violet-300 flex-shrink-0" />
          <span className="text-xs font-ui font-semibold text-violet-300 uppercase tracking-[0.2em]">
            {t.about.label}
          </span>
        </div>

        {/* Headline */}
        <div className={`animate-enter animate-enter-delay-1 ${isVisible ? 'is-visible' : ''} mb-10`}>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl xl:text-[3.5rem] text-white leading-[1.15] tracking-tight max-w-4xl">
            {t.about.title}{' '}
            <span className="text-violet-300">{t.about.titleAccent}</span>
          </h2>
        </div>

        {/* Body text — two paragraphs, editorial */}
        <div className={`animate-enter animate-enter-delay-2 ${isVisible ? 'is-visible' : ''} mb-12 space-y-5`}>
          <p className="text-violet-200 text-xl sm:text-2xl lg:text-[1.65rem] font-ui font-light leading-[1.6] max-w-3xl">
            {t.about.text}
          </p>
          <p className="text-violet-300/60 text-lg sm:text-xl lg:text-2xl font-ui font-light leading-[1.6] max-w-3xl">
            {t.about.text2}
          </p>
        </div>

        {/* Single CTA */}
        <div className={`animate-enter animate-enter-delay-3 ${isVisible ? 'is-visible' : ''}`}>
          <Button
            variant="white"
            size="lg"
            onClick={() => handleScroll('#contact')}
            className="group"
          >
            {t.about.cta}
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}
