import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#F0EFEA',
          50: '#F7F6F2',
          100: '#F0EFEA',
          200: '#E5E4DC',
        },
        ink: {
          DEFAULT: '#0A0908',
          900: '#0A0908',
          800: '#1C1917',
          700: '#292524',
          600: '#44403C',
        },
        noir: {
          DEFAULT: '#09090B',
          950: '#09090B',
          900: '#0F0F12',
          800: '#18181B',
        },
      },
      fontFamily: {
        display: ['var(--font-bricolage)', 'sans-serif'],
        body: ['var(--font-jakarta)', 'sans-serif'],
        ui: ['var(--font-jakarta)', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'float': 'float 7s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)',
        'card-hover': '0 8px 30px rgba(0,0,0,0.10)',
        'violet-sm': '0 0 24px rgba(124,58,237,0.15)',
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}

export default config
