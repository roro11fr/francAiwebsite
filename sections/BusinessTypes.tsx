'use client'

import { useLanguage } from '@/context/LanguageContext'
import { useInView } from '@/hooks/useInView'
import { SectionLabel } from '@/components/ui/SectionWrapper'
import { ArrowRight } from 'lucide-react'

export function BusinessTypes() {
  const { t } = useLanguage()
  const { ref, isVisible } = useInView()

  return (
    <section id="business-types" className="bg-ink-900 relative overflow-hidden">
      <div className="absolute inset-0 fine-grid" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-violet-800 rounded-full blur-[220px] opacity-8 pointer-events-none" />

      <div ref={ref as React.RefObject<HTMLDivElement>} className="relative z-10 max-w-screen-xl mx-auto px-6 sm:px-10 py-20 lg:py-28">

        <div className={`animate-enter ${isVisible ? 'is-visible' : ''} mb-12`}>
          <SectionLabel inverted>{t.businessTypes.label}</SectionLabel>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[3.5rem] text-white leading-tight tracking-tight max-w-3xl">
            {t.businessTypes.title}{' '}
            <span className="text-violet-400">{t.businessTypes.titleAccent}</span>
          </h2>
        </div>

        <div className={`animate-enter animate-enter-delay-1 ${isVisible ? 'is-visible' : ''} grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start`}>

          {/* Left — copy */}
          <div>
            <p className="text-zinc-400 text-base font-ui leading-relaxed mb-10">
              {t.businessTypes.copy}
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-ui font-semibold text-violet-400 hover:text-violet-300 transition-colors group"
            >
              {t.audit.cta}
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Right — tag cloud */}
          <div className={`animate-enter animate-enter-delay-2 ${isVisible ? 'is-visible' : ''}`}>
            <p className="text-[10px] font-ui font-semibold text-zinc-600 uppercase tracking-[0.2em] mb-5">
              {t.businessTypes.label}
            </p>
            <div className="flex flex-wrap gap-2.5">
              {t.businessTypes.examples.map((example, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-ui font-medium text-zinc-400 border border-white/10 bg-white/[0.03] hover:border-violet-500/30 hover:text-violet-300 hover:bg-violet-500/5 transition-all duration-200 cursor-default"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-700 flex-shrink-0" />
                  {example}
                </span>
              ))}
            </div>
            <p className="text-zinc-700 text-xs font-ui mt-5 leading-relaxed">
              {/* subtle note that these are examples, not the only niches */}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
