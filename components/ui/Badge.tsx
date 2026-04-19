import { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  variant?: 'violet' | 'purple' | 'blue' | 'green' | 'outline' | 'ghost-dark'
  className?: string
}

export function Badge({ children, variant = 'outline', className = '' }: BadgeProps) {
  const variants = {
    violet:     'bg-violet-100 text-violet-700 border border-violet-200',
    purple:     'bg-violet-100 text-violet-700 border border-violet-200',
    blue:       'bg-sky-100 text-sky-700 border border-sky-200',
    green:      'bg-emerald-100 text-emerald-700 border border-emerald-200',
    outline:    'bg-transparent text-zinc-500 border border-zinc-300',
    'ghost-dark': 'bg-white/10 text-white/70 border border-white/15',
  }

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-ui font-semibold tracking-wide ${variants[variant]} ${className}`}>
      {children}
    </span>
  )
}
