'use client'

import { MessageSquare, Filter, Calendar, BarChart2, BookOpen, FileText } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { useInView } from '@/hooks/useInView'
import { SectionLabel } from '@/components/ui/SectionWrapper'

const iconMap = { MessageSquare, Filter, Calendar, BarChart2, BookOpen, FileText }

export function ExampleSystems() {
  const { t } = useLanguage()
  const { ref, isVisible } = useInView()

  return (
    <section id="examples" className="bg-ink-900 relative overflow-hidden">
      <div className="absolute inset-0 fine-grid" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-violet-900 rounded-full blur-[220px] opacity-8 pointer-events-none" />

      <div ref={ref as React.RefObject<HTMLDivElement>} className="relative z-10 max-w-screen-xl mx-auto px-6 sm:px-10 py-20 lg:py-28">

        <div className={`animate-enter ${isVisible ? 'is-visible' : ''} mb-14`}>
          <SectionLabel inverted>{t.exampleSystems.label}</SectionLabel>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[3.5rem] text-white leading-tight tracking-tight max-w-xl">
              {t.exampleSystems.title}{' '}
              <span className="text-violet-400">{t.exampleSystems.titleAccent}</span>
            </h2>
            <p className="text-zinc-500 text-sm font-ui font-light leading-relaxed max-w-sm lg:text-right">
              {t.exampleSystems.subtitle}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {t.exampleSystems.items.map((item, i) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap] ?? MessageSquare
            return (
              <div
                key={i}
                className={`animate-enter animate-enter-delay-${Math.min(i + 1, 6)} ${isVisible ? 'is-visible' : ''} group relative bg-white/[0.03] border border-white/8 rounded-2xl p-7 overflow-hidden flex flex-col gap-4 transition-all duration-300 hover:bg-violet-500/5 hover:border-violet-500/25 hover:-translate-y-0.5`}
              >
                {/* giant background icon */}
                <div className="absolute -bottom-4 -right-4 text-white/[0.04] group-hover:text-violet-500/8 transition-colors duration-300 pointer-events-none">
                  <Icon size={100} strokeWidth={0.8} />
                </div>

                <div className="relative z-10 w-10 h-10 rounded-xl bg-violet-500/15 flex items-center justify-center flex-shrink-0 group-hover:bg-violet-500/25 transition-colors duration-300">
                  <Icon size={18} className="text-violet-400" />
                </div>

                <div className="relative z-10">
                  <h3 className="font-display font-extrabold text-white text-lg mb-2 group-hover:text-violet-200 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-zinc-500 text-sm font-ui leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
