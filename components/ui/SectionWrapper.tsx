import { ReactNode } from 'react'

export function SectionWrapper({ id, children, className = '' }: { id?: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} className={`relative overflow-hidden ${className}`}>
      {children}
    </section>
  )
}

export function SectionLabel({ children, inverted = false }: { children: ReactNode; inverted?: boolean }) {
  return (
    <div className={`flex items-center gap-3 mb-6 ${inverted ? '' : ''}`}>
      <span className={`h-px w-6 flex-shrink-0 ${inverted ? 'bg-violet-400' : 'bg-violet-600'}`} />
      <span className={`text-xs font-ui font-semibold uppercase tracking-[0.2em] ${inverted ? 'text-violet-400' : 'text-violet-600'}`}>
        {children}
      </span>
    </div>
  )
}
