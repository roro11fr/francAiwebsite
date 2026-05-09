'use client'

import { useState, FormEvent } from 'react'
import { ArrowRight, CheckCircle, Clock, Shield } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { useInView } from '@/hooks/useInView'
import { SectionLabel } from '@/components/ui/SectionWrapper'

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
    <section id="contact" className="bg-ink-900 relative overflow-hidden">
      <div className="absolute inset-0 fine-grid" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-violet-800 rounded-full blur-[220px] opacity-10 pointer-events-none" />

      <div ref={ref as React.RefObject<HTMLDivElement>} className="relative z-10 max-w-screen-xl mx-auto px-6 sm:px-10 py-20 lg:py-28">

        <div className={`animate-enter ${isVisible ? 'is-visible' : ''} mb-14`}>
          <SectionLabel inverted>{t.contact.label}</SectionLabel>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[3.5rem] text-white leading-tight tracking-tight max-w-xl">
              {t.contact.title}{' '}
              <span className="text-violet-400">{t.contact.titleAccent}</span>
            </h2>
            <p className="text-zinc-500 text-base font-ui font-light leading-relaxed max-w-sm lg:text-right">
              {t.contact.subtitle}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">

          {/* Form — takes 3 cols */}
          <div className={`animate-enter animate-enter-delay-1 ${isVisible ? 'is-visible' : ''} lg:col-span-3`}>
            {success ? (
              <div className="flex flex-col items-center justify-center text-center min-h-[360px] gap-5">
                <div className="w-16 h-16 rounded-full bg-violet-500/15 border border-violet-500/30 flex items-center justify-center">
                  <CheckCircle size={28} className="text-violet-400" />
                </div>
                <p className="font-ui font-bold text-white text-lg">{t.contact.form.success}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-ui font-semibold text-zinc-500 uppercase tracking-widest mb-2">
                      {t.contact.form.name}
                    </label>
                    <input
                      type="text" name="name" required value={form.name} onChange={handleChange}
                      placeholder={t.contact.form.name}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm font-ui outline-none transition-all focus:border-violet-500/60 focus:bg-violet-500/5 placeholder:text-zinc-600"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-ui font-semibold text-zinc-500 uppercase tracking-widest mb-2">
                      {t.contact.form.email}
                    </label>
                    <input
                      type="email" name="email" required value={form.email} onChange={handleChange}
                      placeholder={t.contact.form.email}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm font-ui outline-none transition-all focus:border-violet-500/60 focus:bg-violet-500/5 placeholder:text-zinc-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-ui font-semibold text-zinc-500 uppercase tracking-widest mb-2">
                    {t.contact.form.company}
                  </label>
                  <input
                    type="text" name="company" value={form.company} onChange={handleChange}
                    placeholder={t.contact.form.company}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm font-ui outline-none transition-all focus:border-violet-500/60 focus:bg-violet-500/5 placeholder:text-zinc-600"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-ui font-semibold text-zinc-500 uppercase tracking-widest mb-2">
                    {t.ui.messageLabel}
                  </label>
                  <textarea
                    name="message" required value={form.message} onChange={handleChange}
                    placeholder={t.contact.form.message}
                    style={{ minHeight: '160px' }}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm font-ui outline-none transition-all focus:border-violet-500/60 focus:bg-violet-500/5 placeholder:text-zinc-600 resize-vertical"
                  />
                </div>

                {error && <p className="text-red-400 text-sm font-ui">{error}</p>}

                <button
                  type="submit"
                  disabled={submitting}
                  className="group w-full relative inline-flex items-center justify-between gap-2 px-6 py-4 rounded-xl text-sm font-semibold text-white overflow-hidden disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{
                    background: 'linear-gradient(135deg,#7c3aed,#9333ea)',
                    boxShadow: '0 0 28px rgba(124,58,237,0.30)',
                  }}
                >
                  <span className="relative z-10">
                    {submitting ? t.contact.form.submitting : t.contact.form.submit}
                  </span>
                  {!submitting && (
                    <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                  )}
                  <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
                </button>

                <p className="text-zinc-600 text-xs font-ui text-center">{t.contact.cta.subtitle}</p>
              </form>
            )}
          </div>

          {/* Trust signals — takes 2 cols */}
          <div className={`animate-enter animate-enter-delay-2 ${isVisible ? 'is-visible' : ''} lg:col-span-2 flex flex-col gap-5 lg:pt-2`}>
            <div className="flex items-start gap-4 p-5 rounded-xl bg-white/[0.03] border border-white/8">
              <div className="w-9 h-9 rounded-lg bg-violet-500/15 border border-violet-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Clock size={15} className="text-violet-400" />
              </div>
              <div>
                <p className="font-ui font-semibold text-white text-sm mb-0.5">{t.ui.responseTime}</p>
                <p className="text-zinc-600 text-xs font-ui">{t.ui.within24h}</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-xl bg-white/[0.03] border border-white/8">
              <div className="w-9 h-9 rounded-lg bg-violet-500/15 border border-violet-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Shield size={15} className="text-violet-400" />
              </div>
              <div>
                <p className="font-ui font-semibold text-white text-sm mb-0.5">{t.ui.freeConsultation}</p>
                <p className="text-zinc-600 text-xs font-ui">{t.ui.noObligations}</p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white/[0.03] border border-white/8">
              <p className="text-zinc-500 text-sm font-ui leading-relaxed mb-3">
                {t.contact.cta.title}
              </p>
              <a
                href="mailto:catalin.franciuc@student.usv.ro"
                className="inline-flex items-center gap-2 text-sm font-ui text-zinc-500 hover:text-violet-400 transition-colors duration-200"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-violet-600 flex-shrink-0" />
                catalin.franciuc@student.usv.ro
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
