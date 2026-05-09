'use client'

import { useLanguage } from '@/context/LanguageContext'
import { useInView } from '@/hooks/useInView'
import { SectionLabel } from '@/components/ui/SectionWrapper'
import { X, Check } from 'lucide-react'

const BEFORE_BULLETS = [
  'Answering the same questions over and over',
  'Copying data manually between tools',
  'Chasing follow-ups and status updates',
  'Building reports from scratch each week',
  'Losing time to tasks that repeat every day',
]

const AFTER_BULLETS = [
  'AI handles repetitive questions automatically',
  'Systems update your tools without manual input',
  'Follow-ups and notifications go out on schedule',
  'Reports are generated automatically from your data',
  'Your team focuses only on work that needs a human',
]

const BEFORE_BULLETS_RO = [
  'Răspuns la aceleași întrebări în mod repetat',
  'Copierea manuală a datelor între tool-uri',
  'Urmărirea follow-up-urilor și actualizărilor de status',
  'Construirea rapoartelor de la zero în fiecare săptămână',
  'Pierderea timpului cu taskuri care se repetă zilnic',
]

const AFTER_BULLETS_RO = [
  'AI-ul gestionează automat întrebările repetitive',
  'Sistemele actualizează tool-urile fără input manual',
  'Follow-up-urile și notificările pleacă automat',
  'Rapoartele se generează automat din datele tale',
  'Echipa se concentrează doar pe ce necesită intervenție umană',
]

export function BeforeAfter() {
  const { t, lang } = useLanguage()
  const { ref, isVisible } = useInView()

  const beforeBullets = lang === 'ro' ? BEFORE_BULLETS_RO : BEFORE_BULLETS
  const afterBullets = lang === 'ro' ? AFTER_BULLETS_RO : AFTER_BULLETS

  return (
    <section id="before-after" className="bg-ink-900 relative overflow-hidden">
      <div className="absolute inset-0 fine-grid" />

      <div ref={ref as React.RefObject<HTMLDivElement>} className="relative z-10 max-w-screen-xl mx-auto px-6 sm:px-10 py-20 lg:py-28">

        <div className={`animate-enter ${isVisible ? 'is-visible' : ''} mb-14`}>
          <SectionLabel inverted>{t.beforeAfter.label}</SectionLabel>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[3.5rem] text-white leading-tight tracking-tight">
            {t.beforeAfter.title}{' '}
            <span className="text-violet-400">{t.beforeAfter.titleAccent}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

          {/* Before */}
          <div className={`animate-enter animate-enter-delay-1 ${isVisible ? 'is-visible' : ''} relative rounded-2xl border border-white/10 bg-white/[0.02] p-8 lg:p-10 overflow-hidden`}>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-zinc-900/40 to-transparent pointer-events-none" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center flex-shrink-0">
                  <X size={14} className="text-zinc-400" />
                </div>
                <span className="font-display font-extrabold text-zinc-400 text-xl tracking-tight">
                  {t.beforeAfter.before.title}
                </span>
              </div>
              <p className="text-zinc-500 text-base font-ui leading-relaxed mb-8">
                {t.beforeAfter.before.text}
              </p>
              <ul className="space-y-3">
                {beforeBullets.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <X size={14} className="text-zinc-600 flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-500 text-sm font-ui">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* After */}
          <div className={`animate-enter animate-enter-delay-2 ${isVisible ? 'is-visible' : ''} relative rounded-2xl border border-violet-500/25 bg-violet-500/[0.04] p-8 lg:p-10 overflow-hidden`}>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-900/20 to-transparent pointer-events-none" />
            <div className="absolute top-0 right-0 w-48 h-48 bg-violet-600 rounded-full blur-[120px] opacity-10 pointer-events-none" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-violet-500/20 border border-violet-500/30 flex items-center justify-center flex-shrink-0">
                  <Check size={14} className="text-violet-400" />
                </div>
                <span className="font-display font-extrabold text-violet-300 text-xl tracking-tight">
                  {t.beforeAfter.after.title}
                </span>
              </div>
              <p className="text-violet-200/50 text-base font-ui leading-relaxed mb-8">
                {t.beforeAfter.after.text}
              </p>
              <ul className="space-y-3">
                {afterBullets.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check size={14} className="text-violet-400 flex-shrink-0 mt-0.5" />
                    <span className="text-violet-200/70 text-sm font-ui">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
