import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const escapeHtml = (value: unknown) =>
  String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')

const clean = (value: unknown, max: number) => String(value ?? '').trim().slice(0, max)

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }

  try {
    // Honeypot: real visitors never see or fill this field; bots usually do.
    if (body?.botField) {
      return NextResponse.json({ ok: true }, { status: 200 })
    }

    const name = clean(body?.name, 120)
    const email = clean(body?.email, 200)
    const company = clean(body?.company, 200)
    const website = clean(body?.website, 300)
    const message = clean(body?.message, 5000)

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }
    if (!EMAIL_RE.test(email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
    }

    const resend = new Resend(process.env.RESEND_API_KEY)
    const { error } = await resend.emails.send({
      from: 'FrancAI Contact <onboarding@resend.dev>',
      to: 'francaiagency@gmail.com',
      replyTo: email,
      subject: `New inquiry from ${name.replace(/[\r\n]+/g, ' ')}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px">
          <h2 style="color:#1a1a2e;margin-bottom:24px">New Contact Form Submission</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:10px 0;color:#6b7280;font-size:13px;width:100px">Name</td><td style="padding:10px 0;font-weight:600;color:#111">${escapeHtml(name)}</td></tr>
            <tr><td style="padding:10px 0;color:#6b7280;font-size:13px">Email</td><td style="padding:10px 0;color:#111"><a href="mailto:${escapeHtml(email)}" style="color:#7c3aed">${escapeHtml(email)}</a></td></tr>
            <tr><td style="padding:10px 0;color:#6b7280;font-size:13px">Company</td><td style="padding:10px 0;color:#111">${escapeHtml(company) || '—'}</td></tr>
            <tr><td style="padding:10px 0;color:#6b7280;font-size:13px">Website</td><td style="padding:10px 0;color:#111">${escapeHtml(website) || '—'}</td></tr>
          </table>
          <div style="margin-top:24px;padding:20px;background:#f9fafb;border-radius:8px;border-left:3px solid #7c3aed">
            <p style="color:#6b7280;font-size:13px;margin:0 0 8px">Message</p>
            <p style="color:#111;margin:0;white-space:pre-wrap">${escapeHtml(message)}</p>
          </div>
          <p style="margin-top:24px;color:#6b7280;font-size:12px">Sent from the FrancAI contact form · Reply directly to respond to ${escapeHtml(name)}</p>
        </div>
      `,
    })

    if (error) {
      console.error('[contact] Resend error:', error)
      return NextResponse.json({ error: 'Email failed to send' }, { status: 502 })
    }

    return NextResponse.json({ ok: true }, { status: 200 })
  } catch (err) {
    console.error('[contact] Resend error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
