import { ReactNode, ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'white'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
}

export function Button({ variant = 'primary', size = 'md', children, className = '', ...props }: ButtonProps) {
  const base = 'inline-flex items-center justify-center gap-2 font-ui font-semibold rounded-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

  const variants = {
    primary:    'bg-violet-700 text-white hover:bg-violet-600 active:scale-[0.98]',
    secondary:  'border-2 border-violet-700 text-violet-700 hover:bg-violet-50 active:scale-[0.98]',
    ghost:      'text-zinc-600 hover:text-ink-900 hover:bg-zinc-100 active:scale-[0.98]',
    white:      'bg-white text-ink-900 hover:bg-zinc-100 active:scale-[0.98]',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-7 py-3.5 text-base',
  }

  return (
    <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>
  )
}
