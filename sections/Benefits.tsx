'use client'

import { useLanguage } from '@/context/LanguageContext'
import { useInView } from '@/hooks/useInView'
import { SectionLabel } from '@/components/ui/SectionWrapper'

export function Benefits() {
  const { t } = useLanguage()
  const { ref, isVisible } = useInView()

  return (
    <section id="benefits" className="bg-ink-900 relative overflow-hidden">
      <div className="absolute inset-0 fine-grid" />

      <div ref={ref as React.RefObject<HTMLDivElement>} className="relative z-10 max-w-screen-xl mx-auto px-6 sm:px-10">

        {/* Header */}
        <div className={`animate-enter ${isVisible ? 'is-visible' : ''} py-16 border-b border-white/6`}>
          <SectionLabel inverted>{t.benefits.label}</SectionLabel>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[3.5rem] text-white leading-tight tracking-tight">
            {t.benefits.title}{' '}
            <span className="text-violet-400">{t.benefits.titleAccent}</span>
          </h2>
        </div>

        {/* Ruled list */}
        <div>
          {t.benefits.items.map((item, i) => {
            const isLead = i === 0
            return (
              <div
                key={i}
                className={`animate-enter animate-enter-delay-${Math.min(i + 1, 6)} ${isVisible ? 'is-visible' : ''} group border-b border-white/6 hover:bg-white/3 transition-colors duration-200 px-2 ${isLead ? 'grid grid-cols-[72px_1fr] lg:grid-cols-[100px_1fr] gap-4 lg:gap-12 py-12' : 'grid grid-cols-[56px_1fr] sm:grid-cols-[56px_1fr_1fr] lg:grid-cols-[80px_1fr_1fr] gap-4 sm:gap-8 lg:gap-12 py-8'}`}
              >
                <span className={`font-display font-extrabold text-violet-900 group-hover:text-violet-500 transition-colors leading-tight tabular-nums ${isLead ? 'text-4xl sm:text-5xl' : 'text-2xl sm:text-3xl'}`}>
                  {String(i + 1).padStart(2, '0')}
                </span>

                {isLead ? (
                  <div>
                    <h3 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white group-hover:text-violet-300 transition-colors leading-snug mb-3">
                      {item.title}
                    </h3>
                    <p className="text-zinc-500 text-base font-ui leading-relaxed max-w-2xl">
                      {item.description}
                    </p>
                  </div>
                ) : (
                  <>
                    <h3 className="font-display font-extrabold text-lg sm:text-xl text-white group-hover:text-violet-300 transition-colors leading-snug self-start">
                      {item.title}
                    </h3>
                    <p className="text-zinc-500 text-sm font-ui leading-relaxed hidden sm:block self-start">
                      {item.description}
                    </p>
                    <p className="text-zinc-500 text-sm font-ui leading-relaxed sm:hidden col-span-1 col-start-2">
                      {item.description}
                    </p>
                  </>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
