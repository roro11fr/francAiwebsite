'use client'

import { useState, FormEvent } from 'react'
import { ArrowRight, CheckCircle, Clock, Star } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { useInView } from '@/hooks/useInView'
import { SectionLabel } from '@/components/ui/SectionWrapper'
import { Button } from '@/components/ui/Button'

interface FormState { name: string; email: string; company: string; message: string }

export function Contact() {
  const { t } = useLanguage()
  const { ref, isVisible } = useInView()
  const [form, setForm] = useState<FormState>({ name: '', email: '', company: '', message: '' })
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) { setSuccess(true); setForm({ name: '', email: '', company: '', message: '' }) }
      else setError(t.ui.error)
    } catch { setError(t.ui.error) }
    finally { setSubmitting(false) }
  }

  return (
    /* True split-screen — no SectionWrapper, direct section */
    <section id="contact" className="grid grid-cols-1 lg:grid-cols-2">

      {/* LEFT — dark, contact info */}
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="bg-ink-900 relative overflow-hidden px-8 sm:px-12 lg:px-14 xl:px-16 py-16 lg:py-24 flex flex-col justify-between gap-12"
      >
        <div className="absolute inset-0 fine-grid" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-violet-700 rounded-full blur-[160px] opacity-10 pointer-events-none" />

        <div className="relative z-10">
          <div className={`animate-enter ${isVisible ? 'is-visible' : ''}`}>
            <SectionLabel inverted>{t.contact.label}</SectionLabel>
          </div>
          <div className={`animate-enter animate-enter-delay-1 ${isVisible ? 'is-visible' : ''}`}>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[3rem] xl:text-[3.5rem] text-white leading-tight tracking-tight mb-5">
              {t.contact.title}{' '}
              <span className="text-violet-400">{t.contact.titleAccent}</span>
            </h2>
            <p className="text-zinc-500 text-base font-ui font-light leading-relaxed max-w-sm">
              {t.contact.subtitle}
            </p>
          </div>
        </div>

        {/* Trust signals */}
        <div className={`animate-enter animate-enter-delay-2 ${isVisible ? 'is-visible' : ''} relative z-10 space-y-5`}>
          <div className="flex items-start gap-4">
            <div className="w-9 h-9 rounded-lg bg-white/8 border border-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Clock size={15} className="text-violet-400" />
            </div>
            <div>
              <p className="font-ui font-semibold text-white text-sm mb-0.5">{t.ui.responseTime}</p>
              <p className="text-zinc-600 text-xs font-ui">{t.ui.within24h}</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-9 h-9 rounded-lg bg-white/8 border border-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Star size={15} className="text-violet-400" />
            </div>
            <div>
              <p className="font-ui font-semibold text-white text-sm mb-0.5">{t.ui.freeConsultation}</p>
              <p className="text-zinc-600 text-xs font-ui">{t.ui.noObligations}</p>
            </div>
          </div>

          {/* Email link */}
          <a
            href="mailto:catalin.franciuc@student.usv.ro"
            className="inline-flex items-center gap-2 text-sm font-ui text-zinc-500 hover:text-violet-400 transition-colors duration-200 mt-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-violet-600 flex-shrink-0" />
            catalin.franciuc@student.usv.ro
          </a>
        </div>
      </div>

      {/* RIGHT — white, form */}
      <div className="bg-white px-8 sm:px-12 lg:px-14 xl:px-16 py-16 lg:py-24 flex flex-col justify-center">

        {success ? (
          <div className="flex flex-col items-center justify-center text-center min-h-[320px] gap-5">
            <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center">
              <CheckCircle size={28} className="text-emerald-600" />
            </div>
            <p className="font-ui font-bold text-ink-900 text-lg">{t.contact.form.success}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-ui font-semibold text-zinc-400 uppercase tracking-widest mb-2">
                  {t.contact.form.name}
                </label>
                <input
                  type="text" name="name" required value={form.name} onChange={handleChange}
                  placeholder={t.contact.form.name}
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 text-ink-900 text-sm font-ui outline-none transition-all focus:border-violet-500 focus:ring-3 focus:ring-violet-100 placeholder:text-zinc-400"
                />
              </div>
              <div>
                <label className="block text-xs font-ui font-semibold text-zinc-400 uppercase tracking-widest mb-2">
                  {t.contact.form.email}
                </label>
                <input
                  type="email" name="email" required value={form.email} onChange={handleChange}
                  placeholder={t.contact.form.email}
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 text-ink-900 text-sm font-ui outline-none transition-all focus:border-violet-500 focus:ring-3 focus:ring-violet-100 placeholder:text-zinc-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-ui font-semibold text-zinc-400 uppercase tracking-widest mb-2">
                {t.contact.form.company}
              </label>
              <input
                type="text" name="company" value={form.company} onChange={handleChange}
                placeholder={t.contact.form.company}
                className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 text-ink-900 text-sm font-ui outline-none transition-all focus:border-violet-500 focus:ring-3 focus:ring-violet-100 placeholder:text-zinc-400"
              />
            </div>

            <div>
              <label className="block text-xs font-ui font-semibold text-zinc-400 uppercase tracking-widest mb-2">
                {t.ui.messageLabel}
              </label>
              <textarea
                name="message" required value={form.message} onChange={handleChange}
                placeholder={t.contact.form.message}
                style={{ minHeight: '140px' }}
                className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 text-ink-900 text-sm font-ui outline-none transition-all focus:border-violet-500 focus:ring-3 focus:ring-violet-100 placeholder:text-zinc-400 resize-vertical"
              />
            </div>

            {error && <p className="text-red-600 text-sm font-ui">{error}</p>}

            <Button type="submit" variant="primary" size="lg" disabled={submitting} className="w-full group justify-between">
              {submitting ? t.contact.form.submitting : t.contact.form.submit}
              {!submitting && <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />}
            </Button>

            <p className="text-zinc-400 text-xs font-ui text-center">{t.contact.cta.subtitle}</p>
          </form>
        )}
      </div>
    </section>
  )
}
