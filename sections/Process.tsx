'use client'

import { useLanguage } from '@/context/LanguageContext'
import { useInView } from '@/hooks/useInView'
import { SectionLabel } from '@/components/ui/SectionWrapper'

export function Process() {
  const { t } = useLanguage()
  const { ref, isVisible } = useInView()

  return (
    <section id="process" className="bg-ink-900 relative overflow-hidden">
      <div className="absolute inset-0 fine-grid" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-violet-700 rounded-full blur-[180px] opacity-10 pointer-events-none" />

      <div ref={ref as React.RefObject<HTMLDivElement>} className="relative z-10 max-w-screen-xl mx-auto px-6 sm:px-10 py-24 lg:py-36">

        {/* Header */}
        <div className={`animate-enter ${isVisible ? 'is-visible' : ''} mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-6`}>
          <div>
            <SectionLabel inverted>{t.process.label}</SectionLabel>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[3.5rem] text-white leading-tight tracking-tight">
              {t.process.title}{' '}
              <span className="text-violet-400">{t.process.titleAccent}</span>
            </h2>
          </div>
          {t.process.subtitle && (
            <p className="text-zinc-500 text-base font-ui font-light leading-relaxed max-w-xs">
              {t.process.subtitle}
            </p>
          )}
        </div>

        {/* Desktop: 4 columns with giant step numbers */}
        <div className="hidden lg:grid grid-cols-4 gap-8">
          {t.process.steps.map((step, i) => (
            <div key={i} className={`animate-enter animate-enter-delay-${i + 1} ${isVisible ? 'is-visible' : ''} flex flex-col`}>
              {/* Big number + connector */}
              <div className="flex items-center gap-0 mb-5">
                <span className="font-display font-extrabold text-[5rem] xl:text-[6rem] text-violet-600 leading-none tabular-nums">
                  {step.number}
                </span>
                {i < t.process.steps.length - 1 && (
                  <div className="flex-1 h-px bg-gradient-to-r from-violet-700/60 to-transparent ml-3 mb-2" />
                )}
              </div>
              <h3 className="font-ui font-bold text-lg text-white mb-3">{step.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed font-ui">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Mobile: vertical */}
        <div className="lg:hidden flex flex-col gap-0">
          {t.process.steps.map((step, i) => (
            <div key={i} className={`animate-enter animate-enter-delay-${i + 1} ${isVisible ? 'is-visible' : ''} flex gap-6 ${i < t.process.steps.length - 1 ? 'pb-10' : ''}`}>
              <div className="flex flex-col items-center flex-shrink-0">
                <span className="font-display font-extrabold text-4xl text-violet-600 leading-none w-12 text-center tabular-nums">
                  {step.number}
                </span>
                {i < t.process.steps.length - 1 && (
                  <div className="w-px flex-1 mt-3 bg-gradient-to-b from-violet-700/50 to-transparent min-h-[40px]" />
                )}
              </div>
              <div className="pt-1">
                <h3 className="font-ui font-bold text-base text-white mb-2">{step.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed font-ui">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
