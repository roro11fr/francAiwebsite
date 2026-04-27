'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

const ORBIT_CENTER_X = 400
const ORBIT_CENTER_Y = 400

const ORBIT_RINGS = [
  {
    rx: 248,
    ry: 86,
    rotation: -48,
    glow: { color: '#7c3aed', strokeWidth: 20, opacity: 0.46 },
    core: { color: '#c084fc', strokeWidth: 2, opacity: 0.9 },
    duration: 30,
    direction: 1 as const,
  },
  {
    rx: 188,
    ry: 66,
    rotation: 30,
    glow: { color: '#6d28d9', strokeWidth: 14, opacity: 0.36 },
    core: { color: '#a855f7', strokeWidth: 1.6, opacity: 0.8 },
    duration: 38,
    direction: -1 as const,
  },
]

const PARTICLE_TOTAL = 18
const PARTICLE_RX = 248
const PARTICLE_RY = 86
const PARTICLE_ROTATION_RAD = (-48 * Math.PI) / 180
const FRONT_MASK =
  'linear-gradient(to bottom, transparent 0%, transparent 54%, rgba(0,0,0,0.32) 61%, black 69%)'

function getParticlePosition(index: number) {
  const angle = (index / PARTICLE_TOTAL) * Math.PI * 2
  const ellipseX = PARTICLE_RX * Math.cos(angle)
  const ellipseY = PARTICLE_RY * Math.sin(angle)

  return {
    cx:
      ORBIT_CENTER_X +
      ellipseX * Math.cos(PARTICLE_ROTATION_RAD) -
      ellipseY * Math.sin(PARTICLE_ROTATION_RAD),
    cy:
      ORBIT_CENTER_Y +
      ellipseX * Math.sin(PARTICLE_ROTATION_RAD) +
      ellipseY * Math.cos(PARTICLE_ROTATION_RAD),
    radius: index % 4 === 0 ? 3 : index % 2 === 0 ? 1.9 : 1.2,
    opacity: index % 4 === 0 ? 0.82 : 0.45,
  }
}

function OrbitSvg() {
  const particles = Array.from({ length: PARTICLE_TOTAL }, (_, index) =>
    getParticlePosition(index)
  )

  return (
    <svg
      viewBox="0 0 800 800"
      width="100%"
      height="100%"
      style={{ position: 'absolute', inset: 0, overflow: 'visible' }}
    >
      <defs>
        <filter id="hero-orbit-glow" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blurred" />
          <feMerge>
            <feMergeNode in="blurred" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <filter id="hero-orbit-core" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="3.5" result="blurred" />
          <feMerge>
            <feMergeNode in="blurred" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <filter id="hero-orbit-dot" x="-200%" y="-200%" width="500%" height="500%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2.3" result="blurred" />
          <feMerge>
            <feMergeNode in="blurred" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <radialGradient id="hero-orbit-ambient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.14" />
          <stop offset="68%" stopColor="#4c1d95" stopOpacity="0.04" />
          <stop offset="100%" stopColor="transparent" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx={ORBIT_CENTER_X} cy={ORBIT_CENTER_Y} r={300} fill="url(#hero-orbit-ambient)" />

      {ORBIT_RINGS.map((ring, index) => (
        <motion.g
          key={index}
          style={{ transformOrigin: `${ORBIT_CENTER_X}px ${ORBIT_CENTER_Y}px` }}
          animate={{ rotate: ring.direction * 360 }}
          transition={{ duration: ring.duration, repeat: Infinity, ease: 'linear' }}
        >
          <ellipse
            cx={ORBIT_CENTER_X}
            cy={ORBIT_CENTER_Y}
            rx={ring.rx}
            ry={ring.ry}
            fill="none"
            stroke={ring.glow.color}
            strokeWidth={ring.glow.strokeWidth}
            strokeOpacity={ring.glow.opacity}
            filter="url(#hero-orbit-glow)"
            style={{
              transform: `rotate(${ring.rotation}deg)`,
              transformOrigin: `${ORBIT_CENTER_X}px ${ORBIT_CENTER_Y}px`,
            }}
          />
          <ellipse
            cx={ORBIT_CENTER_X}
            cy={ORBIT_CENTER_Y}
            rx={ring.rx}
            ry={ring.ry}
            fill="none"
            stroke={ring.core.color}
            strokeWidth={ring.core.strokeWidth}
            strokeOpacity={ring.core.opacity}
            filter="url(#hero-orbit-core)"
            style={{
              transform: `rotate(${ring.rotation}deg)`,
              transformOrigin: `${ORBIT_CENTER_X}px ${ORBIT_CENTER_Y}px`,
            }}
          />
        </motion.g>
      ))}

      <motion.g
        style={{ transformOrigin: `${ORBIT_CENTER_X}px ${ORBIT_CENTER_Y}px` }}
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        {particles.map((particle, index) => (
          <motion.circle
            key={index}
            cx={particle.cx}
            cy={particle.cy}
            r={particle.radius}
            fill="#f3e8ff"
            opacity={particle.opacity}
            filter="url(#hero-orbit-dot)"
            animate={{ opacity: [particle.opacity, particle.opacity * 0.25, particle.opacity] }}
            transition={{
              duration: 2.6 + (index % 5) * 0.3,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: index * 0.08,
            }}
          />
        ))}
      </motion.g>
    </svg>
  )
}

function OrbitLayer({ front = false }: { front?: boolean }) {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        WebkitMaskImage: front ? FRONT_MASK : undefined,
        maskImage: front ? FRONT_MASK : undefined,
      }}
    >
      <OrbitSvg />
    </div>
  )
}

function AutomationLiveBadge() {
  return (
    <div
      className="inline-flex items-center gap-2 rounded-full border border-violet-500/25 bg-[#0c0918]/75 px-4 py-2 backdrop-blur-xl"
      style={{ boxShadow: '0 0 18px rgba(139,92,246,0.12)' }}
    >
      <span className="h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_10px_#a855f7] animate-pulse" />
      <span className="text-[11px] font-medium tracking-[0.04em] text-white/80 whitespace-nowrap">
        Automation live
      </span>
    </div>
  )
}

function BuildBadge() {
  return (
    <motion.div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 10,
        padding: '9px 14px',
        background: 'rgba(10,6,22,0.76)',
        border: '1px solid rgba(109,40,217,0.22)',
        borderRadius: 12,
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
    >
      <div
        style={{
          width: 30,
          height: 30,
          borderRadius: 8,
          flexShrink: 0,
          background: 'linear-gradient(140deg, #5b21b6, #7c3aed)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg width="15" height="12" viewBox="0 0 15 12" fill="none">
          <path
            d="M1 9 Q3 5 5 7.5 Q7 10 9 5 Q11 0 13 3.5"
            stroke="white"
            strokeWidth="1.6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div>
        <div
          style={{
            fontSize: 11,
            fontWeight: 600,
            color: 'rgba(255,255,255,0.88)',
            letterSpacing: '0.03em',
            lineHeight: 1.3,
          }}
        >
          Build. Automate.
        </div>
        <div
          style={{
            fontSize: 10,
            color: 'rgba(167,139,250,0.55)',
            marginTop: 1,
            letterSpacing: '0.04em',
          }}
        >
          Scale.
        </div>
      </div>
    </motion.div>
  )
}

export function Hero() {
  const { t } = useLanguage()
  const leftRef = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timeout = setTimeout(() => {
      leftRef.current?.querySelectorAll('[data-animate]').forEach((element, index) => {
        setTimeout(() => element.classList.add('is-visible'), index * 120)
      })
      rightRef.current?.querySelectorAll('[data-animate]').forEach((element, index) => {
        setTimeout(() => element.classList.add('is-visible'), index * 120 + 220)
      })
    }, 80)
    return () => clearTimeout(timeout)
  }, [])

  const handleScroll = (href: string) => {
    const element = document.querySelector(href)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden bg-[#05050f] pt-16 lg:flex-row">
      <div
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{
          backgroundImage: 'radial-gradient(rgba(139,92,246,0.14) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
          maskImage:
            'radial-gradient(ellipse 82% 82% at 50% 50%, black 0%, transparent 100%)',
        }}
      />
      <div
        className="pointer-events-none absolute -left-24 top-0 h-[420px] w-[420px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(109,40,217,0.24) 0%, transparent 72%)',
          filter: 'blur(120px)',
        }}
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-[460px] w-[460px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(91,33,182,0.24) 0%, transparent 72%)',
          filter: 'blur(130px)',
        }}
      />

      <div
        ref={leftRef}
        className="relative z-10 flex w-full flex-col justify-center px-8 pb-16 pt-16 sm:px-12 lg:w-[46%] lg:flex-none lg:px-16 lg:pb-20 xl:px-20"
      >
        <div data-animate className="animate-enter mb-8 flex items-center gap-3">
          <span className="h-1.5 w-1.5 rounded-full bg-violet-400 animate-pulse" />
          <span className="text-xs font-ui font-semibold uppercase tracking-[0.22em] text-violet-300/65">
            {t.hero.badge}
          </span>
        </div>

        <div data-animate className="animate-enter mb-8">
          <h1 className="hero-headline block font-display font-extrabold text-white">
            {t.hero.headline}
          </h1>
          <h1 className="hero-headline block font-display font-extrabold text-violet-400">
            {t.hero.headlineAccent}
          </h1>
        </div>

        <div data-animate className="animate-enter">
          <p className="max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            {t.hero.subheadline}
          </p>
        </div>

        <div data-animate className="animate-enter mt-10 flex flex-wrap gap-3">
          <button
            onClick={() => handleScroll('#contact')}
            className="group inline-flex items-center gap-2 rounded-full bg-violet-600 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-violet-500"
            style={{ boxShadow: '0 0 28px rgba(124,58,237,0.38)' }}
          >
            {t.hero.cta1}
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </button>
          <button
            onClick={() => handleScroll('#projects')}
            className="inline-flex items-center rounded-full border border-violet-500/35 bg-transparent px-6 py-3.5 text-sm font-semibold text-violet-200 transition-all duration-200 hover:border-violet-400 hover:bg-violet-500/10 hover:text-white"
          >
            {t.hero.cta2}
          </button>
        </div>

        <div
          data-animate
          className="animate-enter mt-14 flex flex-wrap items-start gap-8 border-t border-white/[0.07] pt-8 sm:gap-10"
        >
          {t.hero.stats.map((stat, index) => (
            <div key={stat.value} className={index === 0 ? 'min-w-[110px]' : 'min-w-[120px]'}>
              <p className="font-display text-3xl font-extrabold tracking-[-0.02em] text-white sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 max-w-[170px] text-[10px] uppercase tracking-[0.18em] text-violet-300/50 sm:text-[11px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <button
          onClick={() => handleScroll('#pain-points')}
          className="absolute bottom-8 left-8 text-zinc-700 transition-colors hover:text-violet-400 sm:left-12 lg:left-16 xl:left-20"
          aria-label="Scroll down"
        >
          <ChevronDown size={20} className="animate-bounce" />
        </button>
      </div>

      <motion.div
        ref={rightRef}
        className="relative hidden lg:block"
        style={{ alignSelf: 'stretch', overflow: 'hidden' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.0, delay: 0.3 }}
      >
        <div
          style={{
            position: 'absolute',
            right: '-2%',
            bottom: '-1%',
            width: 'min(56vw, 920px)',
            height: 'min(96vh, 1040px)',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '54%',
              left: '54%',
              transform: 'translate(-50%, -50%)',
              width: 640,
              height: 520,
              background:
                'radial-gradient(ellipse, rgba(124,58,237,0.38) 0%, rgba(76,29,149,0.10) 56%, transparent 82%)',
              filter: 'blur(88px)',
              zIndex: 1,
              pointerEvents: 'none',
            }}
          />

          <div
            style={{
              position: 'absolute',
              top: '63%',
              left: '50%',
              width: 760,
              height: 760,
              transform: 'translate(-50%, -50%)',
              zIndex: 2,
              pointerEvents: 'none',
              opacity: 0.95,
            }}
          >
            <OrbitLayer />
          </div>

          <img
            src="/assets/poz-cutout.png"
            alt="Franc — Founder of FrancAI"
            draggable={false}
            style={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              height: '100%',
              width: 'auto',
              maxWidth: 'none',
              objectFit: 'contain',
              zIndex: 3,
              userSelect: 'none',
              filter:
                'drop-shadow(0 0 90px rgba(109,40,217,0.46)) ' +
                'drop-shadow(0 0 24px rgba(168,85,247,0.18)) ' +
                'drop-shadow(0 42px 84px rgba(0,0,0,0.92))',
            }}
          />

          <div
            style={{
              position: 'absolute',
              top: '63%',
              left: '50%',
              width: 760,
              height: 760,
              transform: 'translate(-50%, -50%)',
              zIndex: 4,
              pointerEvents: 'none',
              opacity: 0.88,
            }}
          >
            <OrbitLayer front />
          </div>

          <div
            style={{
              position: 'absolute',
              bottom: '3%',
              left: '58%',
              transform: 'translateX(-50%)',
              width: 360,
              height: 56,
              background:
                'radial-gradient(ellipse, rgba(109,40,217,0.40) 0%, transparent 70%)',
              filter: 'blur(22px)',
              zIndex: 5,
              pointerEvents: 'none',
            }}
          />
        </div>

        <motion.div
          style={{
            position: 'absolute',
            top: '14%',
            right: '10%',
            zIndex: 8,
            pointerEvents: 'none',
          }}
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <AutomationLiveBadge />
        </motion.div>

        <motion.div
          style={{
            position: 'absolute',
            bottom: '13%',
            left: '7%',
            zIndex: 8,
            pointerEvents: 'none',
          }}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          <BuildBadge />
        </motion.div>

        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 6,
            pointerEvents: 'none',
            background: 'linear-gradient(to right, rgba(5,5,15,0.78) 0%, transparent 18%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '18%',
            background:
              'linear-gradient(to top, #05050f 0%, rgba(5,5,15,0.58) 44%, transparent 100%)',
            zIndex: 6,
            pointerEvents: 'none',
          }}
        />
      </motion.div>
    </section>
  )
}
