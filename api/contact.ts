import nodemailer from 'nodemailer';

const MIN_FORM_FILL_MS = 3000;
const MAX_FORM_AGE_MS = 24 * 60 * 60 * 1000;

export default async function handler(req: any, res: any) {
  try {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }

    const { name, email, phone, service, message, fax_number, form_started_at, turnstile_token } = req.body || {};

    console.log('📧 Contact form received:', { name, email, service });

    if (fax_number) {
      console.warn('Silently dropped contact submission due to honeypot hit');
      return res.status(200).json({ success: true });
    }

    const startedAt = typeof form_started_at === 'number' ? form_started_at : Number(form_started_at);
    const now = Date.now();
    if (!startedAt || now - startedAt < MIN_FORM_FILL_MS || now - startedAt > MAX_FORM_AGE_MS) {
      console.warn('Silently dropped contact submission due to invalid form timing');
      return res.status(200).json({ success: true });
    }

    // Validate required fields
    if (!name || !email || !message) {
      console.log('❌ Validation failed - missing fields');
      return res.status(400).json({ error: 'Missing required fields: name, email, message' });
    }

    if (!looksLikeRealName(name) || !looksLikeRealMessage(message) || !looksLikeRealPhone(phone || '')) {
      console.warn('Silently dropped suspicious contact submission', { email, service });
      return res.status(200).json({ success: true });
    }

    if (process.env.TURNSTILE_SECRET_KEY) {
      const isTurnstileValid = await verifyTurnstileToken(turnstile_token, req);
      if (!isTurnstileValid) {
        console.warn('Silently dropped contact submission due to Turnstile failure', { email, service });
        return res.status(200).json({ success: true });
      }
    }

    // Check environment variables
    if (!process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
      console.error('❌ Missing SMTP credentials in environment variables');
      return res.status(500).json({ error: 'Email service not configured. Please contact admin.' });
    }

    // Create transporter for Hostinger SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.hostinger.com',
      port: parseInt(process.env.SMTP_PORT || '465'),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Test connection
    console.log('🔌 Testing SMTP connection...');
    await transporter.verify();
    console.log('✅ SMTP connection verified');

    // Email to support
    const mailOptions = {
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
    };

    // Send email to support
    console.log('📤 Sending email to support@webadish.com...');
    const supportResult = await transporter.sendMail(mailOptions);
    console.log('✅ Support email sent:', supportResult.messageId);

    // Send confirmation email to user
    console.log(`📤 Sending confirmation email to ${email}...`);
    const confirmationEmail = {
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
    };

    const confirmResult = await transporter.sendMail(confirmationEmail);
    console.log('✅ Confirmation email sent:', confirmResult.messageId);

    console.log('✨ Contact form processed successfully');
    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    const errorMsg = error instanceof Error ? error.message : String(error);
    console.error('❌ Email error:', errorMsg);
    console.error('Full error:', error);
    res.status(500).json({ error: `Failed to send email: ${errorMsg}` });
  }
}

function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

function countLetters(value: string): number {
  const matches = value.match(/\p{L}/gu);
  return matches ? matches.length : 0;
}

function countWords(value: string): number {
  return value.trim().split(/\s+/).filter(Boolean).length;
}

function looksLikeRealName(value: string): boolean {
  if (typeof value !== 'string') return false;
  if (value.length < 2 || value.length > 80) return false;
  if (!/^[\p{L}\s.'’-]+$/u.test(value)) return false;
  return countLetters(value) >= 2;
}

function looksLikeRealMessage(value: string): boolean {
  if (typeof value !== 'string') return false;
  if (value.length < 12 || value.length > 4000) return false;
  if (!/^[\p{L}\p{N}\s.,'’"!?():/&+@#%-]*$/u.test(value)) return false;
  if (countWords(value) < 3) return false;

  const letters = countLetters(value);
  const compactLength = value.replace(/\s+/g, '').length;
  if (!compactLength || letters / compactLength < 0.45) return false;
  if (/[bcdfghjklmnpqrstvwxyz]{7,}/i.test(value)) return false;

  return true;
}

function looksLikeRealPhone(value: string): boolean {
  if (!value) return true;
  const normalized = value.replace(/[^\d+]/g, '');
  return normalized.length >= 7 && normalized.length <= 16;
}

async function verifyTurnstileToken(token: string, req: any): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true;
  if (!token) return false;

  const forwarded = req.headers['x-forwarded-for'];
  const remoteIp = Array.isArray(forwarded) ? forwarded[0] : typeof forwarded === 'string' ? forwarded.split(',')[0].trim() : '';

  const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      secret,
      response: token,
      remoteip: remoteIp,
    }),
  });

  if (!response.ok) return false;

  const data = await response.json();
  return Boolean(data.success);
}
