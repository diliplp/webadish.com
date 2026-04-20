import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };

  return text.replace(/[&<>"']/g, (match) => map[match]);
}

export async function POST(request: Request) {
  try {
    const { name, email, phone, service, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields: name, email, message' }, { status: 400 });
    }

    if (!process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
      return NextResponse.json({ error: 'Email service not configured. Please contact admin.' }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.hostinger.com',
      port: parseInt(process.env.SMTP_PORT || '465', 10),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    await transporter.verify();

    await transporter.sendMail({
      from: process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER || 'noreply@webadish.com',
      to: 'support@webadish.com',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        ${phone ? `<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>` : ''}
        ${service ? `<p><strong>Service Needed:</strong> ${escapeHtml(service)}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>Received at: ${new Date().toISOString()}</small></p>
      `,
      replyTo: email,
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER || 'noreply@webadish.com',
      to: email,
      subject: 'We received your message - WebAdish',
      html: `
        <h2>Thank you for contacting WebAdish!</h2>
        <p>Hi ${escapeHtml(name)},</p>
        <p>We've received your message and our team will get back to you within 4 business hours.</p>
        <p>For urgent issues (site hacked), please call us directly at <strong>+91 999 875 7045</strong></p>
        <p>Best regards,<br>WebAdish Team</p>
      `,
    });

    return NextResponse.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    const errorMsg = error instanceof Error ? error.message : 'Failed to send email';
    return NextResponse.json({ error: `Failed to send email: ${errorMsg}` }, { status: 500 });
  }
}
