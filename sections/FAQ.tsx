'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { useInView } from '@/hooks/useInView'
import { SectionLabel } from '@/components/ui/SectionWrapper'

export function FAQ() {
  const { t } = useLanguage()
  const { ref, isVisible } = useInView()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section id="faq" className="bg-ink-900 relative overflow-hidden">
      <div className="absolute inset-0 fine-grid" />
      <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-violet-900 rounded-full blur-[180px] opacity-8 pointer-events-none" />

      <div ref={ref as React.RefObject<HTMLDivElement>} className="relative z-10 max-w-screen-xl mx-auto px-6 sm:px-10 py-20 lg:py-28">

        <div className={`animate-enter ${isVisible ? 'is-visible' : ''} mb-14 flex flex-col lg:flex-row lg:items-end justify-between gap-6`}>
          <div>
            <SectionLabel inverted>{t.faq.label}</SectionLabel>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[3.5rem] text-white leading-tight tracking-tight">
              {t.faq.title}{' '}
              <span className="text-violet-400">{t.faq.titleAccent}</span>
            </h2>
          </div>
        </div>

        <div className="max-w-3xl">
          {t.faq.items.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={i}
                className={`animate-enter animate-enter-delay-${Math.min(i + 1, 6)} ${isVisible ? 'is-visible' : ''} border-b border-white/8`}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between gap-6 py-6 text-left group"
                >
                  <span className={`font-ui font-semibold text-base leading-snug transition-colors duration-200 ${isOpen ? 'text-violet-300' : 'text-white group-hover:text-violet-300'}`}>
                    {item.q}
                  </span>
                  <div className="flex-shrink-0 w-7 h-7 rounded-full border border-white/10 flex items-center justify-center group-hover:border-violet-500/40 group-hover:bg-violet-500/10 transition-all duration-200">
                    {isOpen
                      ? <Minus size={14} className="text-violet-400" />
                      : <Plus size={14} className="text-zinc-500 group-hover:text-violet-400 transition-colors" />
                    }
                  </div>
                </button>

                <div
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{ maxHeight: isOpen ? '240px' : '0px', opacity: isOpen ? 1 : 0 }}
                >
                  <p className="text-zinc-400 text-sm font-ui leading-relaxed pb-6 pr-12">
                    {item.a}
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
