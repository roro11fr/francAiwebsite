'use client'

import { ArrowRight } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { useInView } from '@/hooks/useInView'
import { SectionLabel } from '@/components/ui/SectionWrapper'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

const tagColorMap: Record<string, 'violet' | 'blue' | 'green' | 'outline'> = {
  AI: 'violet', Automation: 'blue', 'Knowledge Base': 'green', 'Voice AI': 'violet',
  Booking: 'blue', n8n: 'outline', 'Calendar Integration': 'green', 'Web Automation': 'blue',
  'Business Intelligence': 'green', Automatizare: 'blue', 'Bază de Cunoștințe': 'green',
  Rezervări: 'blue', 'Integrare Calendar': 'green', 'Automatizare Web': 'blue',
}

export function Projects() {
  const { t } = useLanguage()
  const { ref, isVisible } = useInView()

  return (
    <section id="projects" className="bg-[#F5F4EF]">
      <div ref={ref as React.RefObject<HTMLDivElement>} className="max-w-screen-xl mx-auto px-6 sm:px-10">

        {/* Header */}
        <div className={`animate-enter ${isVisible ? 'is-visible' : ''} flex flex-col sm:flex-row sm:items-end justify-between gap-6 py-16 border-b border-zinc-200`}>
          <div>
            <SectionLabel>{t.projects.label}</SectionLabel>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[3.5rem] text-ink-900 leading-tight tracking-tight">
              {t.projects.title}{' '}
              <span className="text-violet-700">{t.projects.titleAccent}</span>
            </h2>
          </div>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-700 text-xs font-ui font-semibold tracking-wide self-start sm:self-end flex-shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            {t.projects.tagline}
          </span>
        </div>

        {/* Editorial table — each project is a ruled row */}
        {t.projects.items.map((project, i) => (
          <div
            key={i}
            className={`animate-enter animate-enter-delay-${Math.min(i + 1, 4)} ${isVisible ? 'is-visible' : ''} group border-b border-zinc-200 ${i % 2 === 0 ? 'bg-transparent' : 'bg-white/60'} hover:bg-white transition-colors duration-300`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-[96px_1fr_2fr] gap-0 items-start">

              {/* Big index number */}
              <div className="hidden lg:flex items-start justify-center pt-8 pb-8 pl-2">
                <span className="font-display font-extrabold text-[5.5rem] leading-none text-zinc-200 group-hover:text-violet-200 transition-colors duration-300">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>

              {/* Project meta — left */}
              <div className="px-0 lg:px-6 py-8 lg:border-r border-zinc-200">
                <span className="font-display font-extrabold text-5xl leading-none text-zinc-200 group-hover:text-violet-200 transition-colors mb-4 block lg:hidden">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <Badge variant="violet" className="mb-3">{project.type}</Badge>
                <h3 className="font-ui font-bold text-xl text-ink-900 group-hover:text-violet-700 transition-colors mb-4 leading-snug">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag, j) => (
                    <Badge key={j} variant={tagColorMap[tag] ?? 'outline'}>{tag}</Badge>
                  ))}
                </div>
              </div>

              {/* Details — right */}
              <div className="px-0 lg:px-8 py-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <span className="text-[10px] font-ui font-semibold text-red-500 uppercase tracking-widest block mb-2">
                    {t.ui.problem}
                  </span>
                  <p className="text-zinc-500 text-sm leading-relaxed font-ui">{project.problem}</p>
                </div>
                <div>
                  <span className="text-[10px] font-ui font-semibold text-violet-600 uppercase tracking-widest block mb-2">
                    {t.ui.solution}
                  </span>
                  <p className="text-zinc-500 text-sm leading-relaxed font-ui">{project.solution}</p>
                </div>
                <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-100">
                  <span className="text-[10px] font-ui font-semibold text-emerald-700 uppercase tracking-widest block mb-1">
                    {t.ui.impact}
                  </span>
                  <p className="text-emerald-800 text-sm leading-relaxed font-ui font-semibold">{project.impact}</p>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* CTA */}
        <div className={`animate-enter animate-enter-delay-5 ${isVisible ? 'is-visible' : ''} py-12 flex justify-start`}>
          <Button variant="primary" size="lg" onClick={() => { const el = document.querySelector('#contact'); if (el) el.scrollIntoView({ behavior: 'smooth' }) }} className="group">
            {t.projects.cta}
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}
