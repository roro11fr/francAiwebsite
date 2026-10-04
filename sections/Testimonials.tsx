'use client'

import { useRef, useState } from 'react'
import { Play, ArrowUpRight } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { useInView } from '@/hooks/useInView'
import { SectionLabel } from '@/components/ui/SectionWrapper'

function VideoCard({ slug, name, playLabel }: { slug: string; name: string; playLabel: string }) {
  const ref = useRef<HTMLVideoElement>(null)
  const [started, setStarted] = useState(false)

  const start = () => {
    setStarted(true)
    ref.current?.play()
  }

  // Only one testimonial plays at a time
  const pauseOthers = () => {
    document.querySelectorAll<HTMLVideoElement>('video[data-testimonial]').forEach((v) => {
      if (v !== ref.current) v.pause()
    })
  }

  return (
    <div className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-black border border-white/8">
      <video
        ref={ref}
        data-testimonial
        src={`/testimoniale/${slug}.mp4`}
        poster={`/testimoniale/${slug}.jpg`}
        preload="none"
        playsInline
        controls={started}
        onPlay={pauseOthers}
        className="absolute inset-0 w-full h-full object-cover"
        aria-label={`${playLabel}: ${name}`}
      />
      {!started && (
        <button
          type="button"
          onClick={start}
          aria-label={`${playLabel}: ${name}`}
          className="group absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/70 via-black/10 to-transparent"
        >
          <span
            className="w-16 h-16 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
            style={{ background: 'linear-gradient(135deg,#7c3aed,#9333ea)', boxShadow: '0 0 32px rgba(124,58,237,0.55)' }}
          >
            <Play size={24} className="text-white ml-1" fill="currentColor" />
          </span>
        </button>
      )}
    </div>
  )
}

export function Testimonials() {
  const { t } = useLanguage()
  const { ref, isVisible } = useInView()

  return (
    <section id="testimoniale" className="bg-ink-900 relative overflow-hidden">
      <div className="absolute inset-0 fine-grid" />
      <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-violet-800 rounded-full blur-[220px] opacity-10 pointer-events-none" />

      <div ref={ref as React.RefObject<HTMLDivElement>} className="relative z-10 max-w-screen-xl mx-auto px-6 sm:px-10 py-20 lg:py-28">
        <div className={`animate-enter ${isVisible ? 'is-visible' : ''} mb-12 flex flex-col lg:flex-row lg:items-end justify-between gap-4`}>
          <div>
            <SectionLabel inverted>{t.testimonials.label}</SectionLabel>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[3.5rem] text-white leading-tight tracking-tight">
              {t.testimonials.title}{' '}
              <span className="text-violet-400">{t.testimonials.titleAccent}</span>
            </h2>
          </div>
          <p className="text-zinc-500 text-sm font-ui font-light leading-relaxed max-w-xs lg:text-right">
            {t.testimonials.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.testimonials.items.map((item, i) => (
            <figure
              key={item.slug}
              className={`animate-enter animate-enter-delay-${i + 1} ${isVisible ? 'is-visible' : ''} flex flex-col gap-4`}
            >
              <VideoCard slug={item.slug} name={item.name} playLabel={t.testimonials.play} />
              <figcaption>
                <p className="font-display font-extrabold text-white text-lg leading-tight">{item.name}</p>
                <p className="text-violet-300/70 text-[11px] font-ui uppercase tracking-[0.08em] mt-1">{item.place}</p>
                <p className="text-zinc-400 text-sm font-ui leading-relaxed mt-2">{item.project}</p>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-3 text-sm font-ui font-semibold text-violet-300 hover:text-white transition-colors"
                >
                  {t.testimonials.visit}
                  <ArrowUpRight size={14} />
                </a>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
