'use client'

import { Stethoscope, ShoppingCart, Briefcase, Building2 } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { useInView } from '@/hooks/useInView'

const iconMap = { Stethoscope, ShoppingCart, Briefcase, Building2 }

export function BusinessTypes() {
  const { t } = useLanguage()
  const { ref, isVisible } = useInView()

  return (
    <section id="business-types" className="bg-ink-900 relative overflow-hidden">
      <div className="absolute inset-0 fine-grid" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-violet-800 rounded-full blur-[220px] opacity-8 pointer-events-none" />

      <div ref={ref as React.RefObject<HTMLDivElement>} className="relative z-10 max-w-screen-xl mx-auto px-6 sm:px-10 py-20 lg:py-28">

        {/* Header — no SectionLabel, direct headline */}
        <div className={`animate-enter ${isVisible ? 'is-visible' : ''} mb-14`}>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[3.5rem] text-white leading-tight tracking-tight">
            {t.businessTypes.title}{' '}
            <span className="text-violet-400">{t.businessTypes.titleAccent}</span>
          </h2>
        </div>

        {/* Asymmetric grid — first card wider */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {t.businessTypes.items.map((item, i) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap] ?? Briefcase
            const isWide = i === 0
            return (
              <div
                key={i}
                className={`animate-enter animate-enter-delay-${Math.min(i + 1, 4)} ${isVisible ? 'is-visible' : ''} group relative bg-white/5 border border-white/8 rounded-2xl p-8 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:bg-white/8 hover:border-violet-500/30 hover:-translate-y-1 ${isWide ? 'lg:col-span-2 min-h-[300px]' : 'min-h-[280px]'}`}
              >
                {/* Giant background icon */}
                <div className="absolute -bottom-6 -right-6 text-white/5 group-hover:text-violet-500/10 transition-colors duration-300">
                  <Icon size={isWide ? 160 : 120} strokeWidth={isWide ? 0.75 : 1} />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-violet-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-violet-500/30 transition-colors duration-300">
                      <Icon size={20} className="text-violet-400" />
                    </div>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-white/8 border border-white/10 text-zinc-400 text-xs font-ui font-semibold tracking-wide">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className={`font-display font-extrabold text-white mb-3 group-hover:text-violet-300 transition-colors ${isWide ? 'text-3xl' : 'text-2xl'}`}>
                    {item.industry}
                  </h3>
                </div>

                <div className="relative z-10 space-y-3">
                  <div>
                    <span className="text-[10px] font-ui font-semibold text-red-400/80 uppercase tracking-widest block mb-1">
                      {t.ui.challenge}
                    </span>
                    <p className="text-zinc-500 text-sm leading-relaxed font-ui">{item.challenge}</p>
                  </div>
                  <div className="h-px bg-white/8" />
                  <div>
                    <span className="text-[10px] font-ui font-semibold text-violet-400 uppercase tracking-widest block mb-1">
                      {t.ui.solution}
                    </span>
                    <p className="text-zinc-300 text-sm leading-relaxed font-ui font-medium">{item.solution}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
