'use client'

import { useEffect, useRef } from 'react'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { Button } from '@/components/ui/Button'

export function Hero() {
  const { t } = useLanguage()
  const leftRef = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timeout = setTimeout(() => {
      leftRef.current?.querySelectorAll('[data-animate]').forEach((el, i) => {
        setTimeout(() => el.classList.add('is-visible'), i * 120)
      })
      rightRef.current?.querySelectorAll('[data-animate]').forEach((el, i) => {
        setTimeout(() => el.classList.add('is-visible'), i * 100 + 200)
      })
    }, 80)
    return () => clearTimeout(timeout)
  }, [])

  const handleScroll = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="flex flex-col lg:flex-row min-h-screen pt-16">

      {/* LEFT — dark, headline */}
      <div
        ref={leftRef}
        className="flex-1 bg-ink-900 relative overflow-hidden flex flex-col justify-end px-8 sm:px-12 lg:px-16 xl:px-20 pt-16 pb-16 lg:pb-20"
      >
        {/* Background texture */}
        <div className="absolute inset-0 fine-grid" />

        {/* Violet glow accent — top right corner */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-violet-700 rounded-full blur-[160px] opacity-15 pointer-events-none" />

        <div className="relative z-10">
          {/* Badge */}
          <div data-animate className="animate-enter mb-10 flex items-center gap-3">
            <span className="h-px w-8 bg-violet-500 flex-shrink-0" />
            <span className="text-xs font-ui font-semibold text-violet-400 uppercase tracking-[0.2em]">
              {t.hero.badge}
            </span>
          </div>

          {/* Headline */}
          <div data-animate className="animate-enter mb-8">
            <h1 className="hero-headline font-display font-extrabold text-white block">
              {t.hero.headline}
            </h1>
            <h1 className="hero-headline font-display font-extrabold text-violet-400 block">
              {t.hero.headlineAccent}
            </h1>
          </div>

          {/* Subheadline */}
          <div data-animate className="animate-enter">
            <p className="text-zinc-500 text-base sm:text-lg leading-relaxed max-w-md font-ui font-light">
              {t.hero.subheadline}
            </p>
          </div>
        </div>

        {/* Scroll down */}
        <button
          onClick={() => handleScroll('#pain-points')}
          className="absolute bottom-8 left-8 sm:left-12 lg:left-16 xl:left-20 text-zinc-700 hover:text-violet-400 transition-colors"
          aria-label="Scroll down"
        >
          <ChevronDown size={20} className="animate-bounce" />
        </button>
      </div>

      {/* RIGHT — cream, stats + CTA */}
      <div
        ref={rightRef}
        className="w-full lg:w-[400px] xl:w-[460px] 2xl:w-[500px] bg-[#F5F4EF] border-t lg:border-t-0 lg:border-l border-zinc-200/40 flex flex-col justify-between px-8 sm:px-12 lg:px-12 xl:px-14 py-12 lg:py-20 gap-10"
      >
        {/* Stats — stacked with dividers */}
        <div className="flex flex-col gap-0">
          {t.hero.stats.map((stat, i) => (
            <div
              key={i}
              data-animate
              className={`animate-enter animate-enter-delay-${i + 1} flex flex-col ${i === 1 ? 'py-10' : 'py-7'} ${i > 0 ? 'border-t border-zinc-200' : ''}`}
            >
              <span className={`font-display font-extrabold leading-none mb-2 ${i === 1 ? 'text-6xl xl:text-7xl text-violet-700' : 'text-5xl xl:text-6xl text-ink-900'}`}>
                {stat.value}
              </span>
              <span className="text-zinc-500 text-sm font-ui leading-snug max-w-[180px]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div data-animate className="animate-enter animate-enter-delay-4 flex flex-col gap-3">
          <Button variant="primary" size="lg" onClick={() => handleScroll('#contact')} className="w-full group justify-between">
            {t.hero.cta1}
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="ghost" size="md" onClick={() => handleScroll('#projects')} className="w-full">
            {t.hero.cta2}
          </Button>
        </div>
      </div>
    </section>
  )
}
