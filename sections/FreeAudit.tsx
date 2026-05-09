'use client'

import { Check, ArrowRight } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { useInView } from '@/hooks/useInView'
import { SectionLabel } from '@/components/ui/SectionWrapper'

export function FreeAudit() {
  const { t } = useLanguage()
  const { ref, isVisible } = useInView()

  return (
    <section id="audit" className="relative overflow-hidden" style={{ background: '#07071a' }}>
      {/* grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(139,92,246,0.10) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage: 'radial-gradient(ellipse 90% 80% at 50% 50%, black 0%, transparent 100%)',
        }}
      />
      {/* center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-violet-800 rounded-full blur-[200px] opacity-12 pointer-events-none" />

      <div ref={ref as React.RefObject<HTMLDivElement>} className="relative z-10 max-w-screen-xl mx-auto px-6 sm:px-10 py-20 lg:py-28">

        <div className="max-w-4xl mx-auto">
          <div className={`animate-enter ${isVisible ? 'is-visible' : ''} text-center mb-12`}>
            <SectionLabel inverted>{t.audit.label}</SectionLabel>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[3.5rem] text-white leading-tight tracking-tight mb-5">
              {t.audit.title}{' '}
              <span
                style={{
                  background: 'linear-gradient(90deg, #a855f7, #7c3aed 50%, #c084fc)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {t.audit.titleAccent}
              </span>
            </h2>
            <p className="text-zinc-400 text-base font-ui leading-relaxed max-w-md mx-auto">
              {t.audit.subtitle}
            </p>
          </div>

          {/* Checklist */}
          <div className={`animate-enter animate-enter-delay-1 ${isVisible ? 'is-visible' : ''} grid grid-cols-1 sm:grid-cols-2 gap-3 mb-12`}>
            {t.audit.items.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-white/[0.03] border border-white/8 rounded-xl px-5 py-4 hover:bg-violet-500/5 hover:border-violet-500/20 transition-all duration-200"
              >
                <div className="w-6 h-6 rounded-full bg-violet-500/20 border border-violet-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check size={12} className="text-violet-400" />
                </div>
                <span className="text-zinc-300 text-sm font-ui leading-relaxed">{item}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className={`animate-enter animate-enter-delay-2 ${isVisible ? 'is-visible' : ''} flex justify-center`}>
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-semibold text-white overflow-hidden"
              style={{
                background: 'linear-gradient(135deg,#7c3aed,#9333ea)',
                boxShadow: '0 0 40px rgba(124,58,237,0.35)',
              }}
            >
              <span className="relative z-10">{t.audit.cta}</span>
              <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
