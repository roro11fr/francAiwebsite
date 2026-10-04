'use client'

import { ArrowRight } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { useInView } from '@/hooks/useInView'
import { SectionLabel } from '@/components/ui/SectionWrapper'
import { SITE } from '@/lib/site'
import { InstagramIcon } from '@/components/InstagramIcon'

export function Founder() {
  const { t } = useLanguage()
  const { ref, isVisible } = useInView()

  return (
    <section id="about" className="relative overflow-hidden" style={{ background: '#07071a' }}>
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[500px] bg-violet-800 rounded-full blur-[220px] opacity-10 pointer-events-none" />

      <div ref={ref as React.RefObject<HTMLDivElement>} className="relative z-10 max-w-screen-xl mx-auto px-6 sm:px-10 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Portrait */}
          <div className={`animate-enter ${isVisible ? 'is-visible' : ''} lg:col-span-5`}>
            <figure className="relative aspect-square max-w-md mx-auto lg:max-w-none rounded-3xl border border-white/8 overflow-hidden">
              <img
                src={SITE.founderImage}
                alt={`${SITE.founder}, fondatorul FrancAI`}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover object-top select-none"
                draggable={false}
              />
              <figcaption className="absolute left-0 right-0 bottom-0 p-5 bg-gradient-to-t from-[#07071a] via-[#07071a]/80 to-transparent">
                <p className="font-display font-extrabold text-white text-lg">{SITE.founder}</p>
                <p className="text-violet-300/70 text-sm font-ui">{t.ui.founderRole}</p>
              </figcaption>
            </figure>
          </div>

          {/* Story + vision */}
          <div className="lg:col-span-7">
            <div className={`animate-enter animate-enter-delay-1 ${isVisible ? 'is-visible' : ''}`}>
              <SectionLabel inverted>{t.founder.label}</SectionLabel>
              <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-white leading-tight tracking-tight mb-6">
                {t.founder.title}{' '}
                <span className="text-violet-400">{t.founder.titleAccent}</span>
              </h2>
              <p className="text-zinc-400 text-base font-ui leading-relaxed mb-8">{t.founder.text}</p>
            </div>

            <blockquote className={`animate-enter animate-enter-delay-2 ${isVisible ? 'is-visible' : ''} border-l-2 border-violet-500 pl-5 mb-10`}>
              <p className="text-violet-400 text-[11px] font-ui font-semibold uppercase tracking-[0.18em] mb-2">
                {t.founder.visionLabel}
              </p>
              <p className="text-white text-lg font-ui leading-relaxed">{t.founder.vision}</p>
            </blockquote>

            <div className={`animate-enter animate-enter-delay-3 ${isVisible ? 'is-visible' : ''} grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10`}>
              {t.founder.principles.map((p) => (
                <div key={p.title} className="rounded-xl border border-white/8 bg-white/[0.02] p-5">
                  <h3 className="font-ui font-bold text-white text-sm mb-1.5">{p.title}</h3>
                  <p className="text-zinc-500 text-sm font-ui leading-relaxed">{p.description}</p>
                </div>
              ))}
            </div>

            <div className={`animate-enter animate-enter-delay-4 ${isVisible ? 'is-visible' : ''} flex flex-wrap items-center gap-3`}>
              <a
                href="#contact"
                className={`group inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-white`}
                style={{ background: 'linear-gradient(135deg,#7c3aed,#9333ea)', boxShadow: '0 0 28px rgba(124,58,237,0.32)' }}
              >
                {t.founder.cta}
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-violet-300 border border-violet-700/50 hover:border-violet-500 hover:text-white hover:bg-violet-500/10 transition-all"
              >
                <InstagramIcon size={16} />
                {t.ui.instagram}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
