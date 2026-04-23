import nodemailer from 'nodemailer';

const MIN_FORM_FILL_MS = 3000;
const MAX_FORM_AGE_MS = 24 * 60 * 60 * 1000;

export default async function handler(req: any, res: any) {
  const requestId = buildRequestId(req);
  res.setHeader('x-contact-request-id', requestId);
  const acceptsHtml = typeof req?.headers?.accept === 'string' && req.headers.accept.includes('text/html');

  const log = (stage: string, details?: Record<string, unknown>) => {
    console.log(`[contact:${requestId}] ${stage}`, details || {});
  };

  try {
    if (req.method !== 'POST') {
      log('rejected_method', { method: req.method });
      if (acceptsHtml) {
        return respondHtml(res, 405, 'error', requestId, 'Contact form method not allowed.', '/contact');
      }
      return res.status(405).json({ error: 'Method not allowed' });
    }

    const body = normalizeBody(req);
    const { name, email, phone, service, message, fax_number, form_started_at, turnstile_token, return_to } = body;
    const returnTo = normalizeReturnTo(return_to);

    log('received', {
      email: typeof email === 'string' ? email : '',
      service: typeof service === 'string' ? service : '',
      hasTurnstileToken: Boolean(turnstile_token),
      hasHoneypotValue: Boolean(fax_number),
    });

    const honeypotHit = Boolean(fax_number);
    if (honeypotHit) {
      log('honeypot_hit_continue');
    }

    const startedAt = typeof form_started_at === 'number' ? form_started_at : Number(form_started_at);
    const now = Date.now();
    if (!startedAt || now - startedAt < MIN_FORM_FILL_MS || now - startedAt > MAX_FORM_AGE_MS) {
      log('timing_unusual_continue', { startedAt });
    }

    // Validate required fields
    if (!name || !email || !message) {
      log('validation_failed_missing_fields');
      if (acceptsHtml) {
        return respondHtml(res, 400, 'error', requestId, 'Please fill name, email, and message.', returnTo);
      }
      return res.status(400).json({ error: 'Missing required fields: name, email, message' });
    }

    if (!looksLikeRealName(name) || !looksLikeRealMessage(message) || !looksLikeRealPhone(phone || '')) {
      log('quality_flagged_continue');
    }

    if (process.env.TURNSTILE_SECRET_KEY && turnstile_token) {
      const isTurnstileValid = await verifyTurnstileToken(turnstile_token, req);
      if (!isTurnstileValid) {
        log('turnstile_failed_continue');
      }
      if (isTurnstileValid) {
        log('turnstile_passed');
      }
    } else if (process.env.TURNSTILE_SECRET_KEY) {
      log('turnstile_missing_continue');
    }

    const hasSmtp = Boolean(process.env.SMTP_USER && process.env.SMTP_PASSWORD);
    const hasResend = Boolean(process.env.RESEND_API_KEY);
    if (!hasSmtp && !hasResend) {
      log('email_provider_missing');
      if (acceptsHtml) {
        return respondHtml(res, 500, 'error', requestId, 'Email service is temporarily unavailable. Please call +91 9998757045.', returnTo);
      }
      return res.status(500).json({ error: 'Email service not configured. Please contact admin.', request_id: requestId });
    }

    const transporter = hasSmtp
      ? nodemailer.createTransport({
          host: process.env.SMTP_HOST || 'smtp.hostinger.com',
          port: parseInt(process.env.SMTP_PORT || '465'),
          secure: true,
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD,
          },
          connectionTimeout: 12000,
          greetingTimeout: 12000,
          socketTimeout: 20000,
        })
      : null;

    // Email to support
    const supportMail = {
      to: 'support@webadish.com',
      subject: `${honeypotHit ? '[Flagged] ' : ''}New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        ${phone ? `<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>` : ''}
        ${service ? `<p><strong>Service Needed:</strong> ${escapeHtml(service)}</p>` : ''}
        ${honeypotHit ? `<p><strong>Honeypot Flag:</strong> Hidden field had a value</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>Received at: ${new Date().toISOString()}</small></p>
      `,
      replyTo: email,
    };

    log('sending_support_email');
    const supportResult = await sendWithFallback(
      supportMail,
      transporter,
      hasResend,
      requestId,
      log,
      true,
    );
    log('support_email_sent', supportResult);

    // Send confirmation email to user
    log('sending_confirmation_email');
    const confirmationMail = {
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

    try {
      const confirmResult = await sendWithFallback(
        confirmationMail,
        transporter,
        hasResend,
        requestId,
        log,
        false,
      );
      if (confirmResult) {
        log('confirmation_email_sent', confirmResult);
      }
    } catch (confirmationError) {
      const errorMsg = confirmationError instanceof Error ? confirmationError.message : String(confirmationError);
      log('confirmation_email_failed_continue', { error: errorMsg });
    }

    log('completed_success');
    if (acceptsHtml) {
      return respondHtml(res, 200, 'success', requestId, 'Thanks. Your request was submitted successfully. We will reply within 4 business hours.', returnTo);
    }
    res.status(200).json({ success: true, message: 'Email sent successfully', request_id: requestId });
  } catch (error) {
    const errorMsg = error instanceof Error ? error.message : String(error);
    console.error(`[contact:${requestId}] failed`, errorMsg);
    console.error(error);
    if (acceptsHtml) {
      const fallbackReturnTo = normalizeReturnTo(normalizeBody(req).return_to);
      return respondHtml(res, 500, 'error', requestId, 'We could not submit your request just now. Please call +91 9998757045.', fallbackReturnTo);
    }
    res.status(500).json({ error: 'Failed to send message. Please try again in a minute.', request_id: requestId });
  }
}

function buildRequestId(req: any): string {
  const vercelId = typeof req?.headers?.['x-vercel-id'] === 'string' ? req.headers['x-vercel-id'] : '';
  if (vercelId) return `vr_${vercelId.replace(/[^a-zA-Z0-9:_-]/g, '').slice(0, 80)}`;
  return `rq_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
}

function normalizeBody(req: any): Record<string, any> {
  const body = req?.body;
  if (body && typeof body === 'object' && !Array.isArray(body)) {
    return body;
  }
  if (typeof body === 'string') {
    const trimmed = body.trim();
    if (!trimmed) return {};
    try {
      return JSON.parse(trimmed);
    } catch {
      const params = new URLSearchParams(trimmed);
      return Object.fromEntries(params.entries());
    }
  }
  return {};
}

function normalizeReturnTo(value: unknown): string {
  if (typeof value !== 'string') return '/contact';
  const trimmed = value.trim();
  if (!trimmed || !trimmed.startsWith('/') || trimmed.startsWith('//')) return '/contact';
  if (trimmed.includes('\n') || trimmed.includes('\r')) return '/contact';
  return trimmed;
}

function respondHtml(
  res: any,
  statusCode: number,
  status: 'success' | 'error',
  requestId: string,
  message: string,
  returnTo: string,
) {
  const safeMessage = escapeHtml(message);
  const safeRef = escapeHtml(requestId);
  const safeReturnTo = escapeHtml(returnTo);
  const title = status === 'success' ? 'Request Submitted' : 'Submission Error';
  const accent = status === 'success' ? '#16a34a' : '#dc2626';

  return res
    .status(statusCode)
    .setHeader('Content-Type', 'text/html; charset=utf-8')
    .send(`<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title} | WebAdish</title></head><body style="font-family:Alata,Arial,sans-serif;background:#f8fafc;margin:0;padding:0;"><main style="max-width:640px;margin:40px auto;padding:0 16px;"><section style="background:#fff;border:1px solid #e5e7eb;border-radius:16px;padding:28px;box-shadow:0 10px 30px rgba(2,6,23,.06);"><p style="margin:0 0 8px;color:${accent};font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;">WebAdish Contact</p><h1 style="margin:0 0 12px;font-size:28px;line-height:1.2;color:#111827;">${title}</h1><p style="margin:0 0 14px;color:#374151;font-size:16px;line-height:1.6;">${safeMessage}</p><p style="margin:0 0 22px;color:#6b7280;font-size:12px;">Reference: ${safeRef}</p><div style="display:flex;flex-wrap:wrap;gap:10px;"><a href="${safeReturnTo}" style="display:inline-block;background:#2563eb;color:#fff;text-decoration:none;padding:10px 14px;border-radius:10px;font-weight:600;font-size:14px;">Back to contact page</a><a href="https://wa.me/919998757045" style="display:inline-block;border:1px solid #d1d5db;color:#111827;text-decoration:none;padding:10px 14px;border-radius:10px;font-weight:600;font-size:14px;">WhatsApp us</a></div></section></main></body></html>`);
}

type OutboundMail = {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
};

async function sendWithFallback(
  mail: OutboundMail,
  transporter: nodemailer.Transporter | null,
  hasResend: boolean,
  requestId: string,
  log: (stage: string, details?: Record<string, unknown>) => void,
  required: boolean,
) {
  let lastError: unknown = null;

  if (transporter) {
    try {
      const smtpResult = await transporter.sendMail({
        from: process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER || 'noreply@webadish.com',
        to: mail.to,
        subject: mail.subject,
        html: mail.html,
        replyTo: mail.replyTo,
      });
      return { provider: 'smtp', messageId: smtpResult.messageId };
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : String(error);
      log('smtp_send_failed', { error: errorMsg, to: mail.to });
      lastError = error;
    }
  }

  if (hasResend) {
    try {
      const resendResult = await sendViaResend(mail, requestId);
      return { provider: 'resend', messageId: resendResult.id };
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : String(error);
      log('resend_send_failed', { error: errorMsg, to: mail.to });
      lastError = error;
    }
  }

  if (required) {
    throw lastError instanceof Error ? lastError : new Error('No email provider available');
  }

  return null;
}

async function sendViaResend(mail: OutboundMail, requestId: string): Promise<{ id: string }> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) throw new Error('RESEND_API_KEY is missing');

  const from = process.env.RESEND_FROM_EMAIL || process.env.SMTP_FROM_EMAIL || 'noreply@webadish.com';
  const payload: Record<string, unknown> = {
    from,
    to: [mail.to],
    subject: mail.subject,
    html: mail.html,
    tags: [{ name: 'source', value: 'webadish-contact' }, { name: 'request_id', value: requestId.slice(0, 64) }],
  };
  if (mail.replyTo) {
    payload.reply_to = mail.replyTo;
  }

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    const reason = typeof data?.message === 'string' ? data.message : `HTTP ${response.status}`;
    throw new Error(`Resend failed: ${reason}`);
  }

  return { id: typeof data?.id === 'string' ? data.id : 'unknown' };
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
