'use client'

import { Globe, Code2, MessageSquare, Mic, Zap, Brain, ArrowRight } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { useInView } from '@/hooks/useInView'
import { Badge } from '@/components/ui/Badge'

const iconMap = { Globe, Code2, MessageSquare, Mic, Zap, Brain }

export function Services() {
  const { t } = useLanguage()
  const { ref, isVisible } = useInView()

  return (
    <section id="services" className="bg-ink-900 relative overflow-hidden">
      <div className="absolute inset-0 fine-grid" />
      <div className="absolute top-0 right-0 w-[500px] h-[300px] bg-violet-800 rounded-full blur-[200px] opacity-10 pointer-events-none" />

      <div ref={ref as React.RefObject<HTMLDivElement>} className="relative z-10 max-w-screen-xl mx-auto px-6 sm:px-10">

        {/* Header — no label pill, headline + subtitle across full width */}
        <div className={`animate-enter ${isVisible ? 'is-visible' : ''} flex flex-col lg:flex-row lg:items-end justify-between gap-6 py-16 border-b border-white/6`}>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[3.5rem] text-white leading-tight tracking-tight max-w-xl">
            {t.services.title}{' '}
            <span className="text-violet-400">{t.services.titleAccent}</span>
          </h2>
          {t.services.subtitle && (
            <p className="text-zinc-600 text-base font-ui font-light leading-relaxed max-w-xs lg:text-right">
              {t.services.subtitle}
            </p>
          )}
        </div>

        {/* Numbered rows — dark variant */}
        <div>
          {t.services.items.map((item, i) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap] ?? Brain
            return (
              <div
                key={i}
                className={`animate-enter animate-enter-delay-${Math.min(i + 1, 6)} ${isVisible ? 'is-visible' : ''} service-row-dark group ${item.featured ? 'border-l-2 border-l-violet-500 bg-violet-500/5' : ''}`}
              >
                <div className={`flex items-center gap-5 sm:gap-8 lg:gap-12 ${item.featured ? 'py-9 lg:py-10' : 'py-7 lg:py-8'}`}>

                  {/* Index number */}
                  <span className={`font-display font-extrabold text-violet-900 group-hover:text-violet-600 transition-colors flex-shrink-0 leading-none tabular-nums ${item.featured ? 'text-4xl sm:text-5xl lg:text-6xl w-16 sm:w-20 lg:w-24' : 'text-3xl sm:text-4xl lg:text-5xl w-14 sm:w-16 lg:w-20'}`}>
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  {/* Title + description */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 flex-wrap mb-1">
                      <h3 className={`font-display font-extrabold text-white group-hover:text-violet-300 transition-colors ${item.featured ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'}`}>
                        {item.title}
                      </h3>
                      {item.featured && (
                        <Badge variant="ghost-dark">★</Badge>
                      )}
                    </div>
                    <p className={`text-zinc-500 text-sm font-ui leading-relaxed mt-1 max-w-xl ${item.featured ? '' : 'line-clamp-2 sm:line-clamp-1 lg:line-clamp-none'}`}>
                      {item.description}
                    </p>
                  </div>

                  {/* Right side */}
                  <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
                    <span className="hidden md:inline-flex items-center px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-zinc-500 text-xs font-ui font-semibold tracking-wide">
                      {item.badge}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/8 group-hover:bg-violet-500/15 group-hover:border-violet-500/30 flex items-center justify-center transition-all duration-300">
                      <Icon size={16} className="text-zinc-600 group-hover:text-violet-400 transition-colors" />
                    </div>
                    <ArrowRight size={18} className="text-zinc-800 group-hover:text-violet-500 group-hover:translate-x-1 transition-all duration-300 hidden sm:block" />
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
