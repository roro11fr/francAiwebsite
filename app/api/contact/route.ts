import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(req: NextRequest) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const body = await req.json()
    const { name, email, company, message } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    await resend.emails.send({
      from: 'FrancAI Contact <onboarding@resend.dev>',
      to: 'catalin.franciuc@student.usv.ro',
      replyTo: email,
      subject: `New inquiry from ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px">
          <h2 style="color:#1a1a2e;margin-bottom:24px">New Contact Form Submission</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:10px 0;color:#6b7280;font-size:13px;width:100px">Name</td><td style="padding:10px 0;font-weight:600;color:#111">${name}</td></tr>
            <tr><td style="padding:10px 0;color:#6b7280;font-size:13px">Email</td><td style="padding:10px 0;color:#111"><a href="mailto:${email}" style="color:#7c3aed">${email}</a></td></tr>
            <tr><td style="padding:10px 0;color:#6b7280;font-size:13px">Company</td><td style="padding:10px 0;color:#111">${company || '—'}</td></tr>
          </table>
          <div style="margin-top:24px;padding:20px;background:#f9fafb;border-radius:8px;border-left:3px solid #7c3aed">
            <p style="color:#6b7280;font-size:13px;margin:0 0 8px">Message</p>
            <p style="color:#111;margin:0;white-space:pre-wrap">${message}</p>
          </div>
          <p style="margin-top:24px;color:#6b7280;font-size:12px">Sent from the FrancAI contact form · Reply directly to respond to ${name}</p>
        </div>
      `,
    })

    return NextResponse.json({ ok: true }, { status: 200 })
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
