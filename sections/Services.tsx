'use client'

import { Globe, Code2, Mic, Zap, Brain, Layers, BarChart2, ArrowRight } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { useInView } from '@/hooks/useInView'
import { SectionLabel } from '@/components/ui/SectionWrapper'

const iconMap = { Globe, Code2, Mic, Zap, Brain, Layers, BarChart2 }

export function Services() {
  const { t } = useLanguage()
  const { ref, isVisible } = useInView()

  return (
    <section id="services" className="bg-ink-900 relative overflow-hidden">
      <div className="absolute inset-0 fine-grid" />
      <div className="absolute top-0 right-0 w-[500px] h-[300px] bg-violet-800 rounded-full blur-[200px] opacity-10 pointer-events-none" />

      <div ref={ref as React.RefObject<HTMLDivElement>} className="relative z-10 max-w-screen-xl mx-auto px-6 sm:px-10">

        <div className={`animate-enter ${isVisible ? 'is-visible' : ''} pt-16 pb-8 border-b border-white/6`}>
          <SectionLabel inverted>{t.services.label}</SectionLabel>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[3.5rem] text-white leading-tight tracking-tight">
              {t.services.title}{' '}
              <span className="text-violet-400">{t.services.titleAccent}</span>
            </h2>
            <p className="text-zinc-500 text-sm font-ui font-light leading-relaxed max-w-xs lg:text-right">
              {t.services.subtitle}
            </p>
          </div>
        </div>

        {/* Service rows */}
        <div className="mb-0">
          {t.services.items.map((item, i) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap] ?? Brain
            return (
              <div
                key={i}
                className={`animate-enter animate-enter-delay-${Math.min(i + 1, 6)} ${isVisible ? 'is-visible' : ''} service-row-dark group`}
              >
                <div className="flex items-start gap-5 sm:gap-8 lg:gap-12 py-6 lg:py-7">

                  <span className="font-display font-extrabold text-violet-900 group-hover:text-violet-600 transition-colors flex-shrink-0 leading-none tabular-nums text-3xl sm:text-4xl lg:text-5xl w-14 sm:w-16 lg:w-20 pt-0.5">
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-display font-extrabold text-white group-hover:text-violet-300 transition-colors text-lg sm:text-xl mb-1">
                      {item.title}
                    </h3>
                    <p className="text-zinc-500 text-sm font-ui leading-relaxed max-w-xl">
                      {item.description}
                    </p>
                    {item.examples && (
                      <p className="text-zinc-700 text-xs font-ui mt-1.5 leading-relaxed">
                        {item.examples}
                      </p>
                    )}
                  </div>

                  <div className="flex items-center gap-3 flex-shrink-0 pt-0.5">
                    <span className="hidden md:inline-flex items-center px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-zinc-600 text-xs font-ui font-semibold tracking-wide">
                      {item.badge}
                    </span>
                    <div className="w-9 h-9 rounded-full bg-white/5 border border-white/8 group-hover:bg-violet-500/15 group-hover:border-violet-500/30 flex items-center justify-center transition-all duration-300">
                      <Icon size={15} className="text-zinc-600 group-hover:text-violet-400 transition-colors" />
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Compact business types tag line */}
        <div className={`animate-enter animate-enter-delay-6 ${isVisible ? 'is-visible' : ''} border-t border-white/6 py-6`}>
          <p className="text-zinc-600 text-xs font-ui leading-relaxed">
            {t.services.businessTag}
          </p>
        </div>

      </div>
    </section>
  )
}
