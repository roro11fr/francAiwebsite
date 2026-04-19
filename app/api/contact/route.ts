import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, company, message } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // TODO: Connect to email service (Resend, Nodemailer, etc.)
    // Example with Resend:
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: 'FrancAI <noreply@francai.com>',
    //   to: 'catalin.franciuc@student.usv.ro',
    //   subject: `New inquiry from ${name}`,
    //   html: `<p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Company:</b> ${company || 'N/A'}</p><p><b>Message:</b> ${message}</p>`,
    // })

    console.log('Contact form submission:', { name, email, company, message })

    return NextResponse.json({ ok: true }, { status: 200 })
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
