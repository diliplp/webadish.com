
import nodemailer from 'nodemailer';

const MIN_FORM_FILL_MS = 3000;
const MAX_FORM_AGE_MS = 24 * 60 * 60 * 1000;

// Spam keyword patterns in message/name (bots, SEO spam, etc.)
const SPAM_PATTERNS = [
  /\b(seo\s+service|backlink|link.?build|rank.*google|search.?engine.?optimiz|google.*rank|increase.*traffic|website.*traffic|buy.*traffic)/i,
  /\b(casino|poker|slot|gambling|bet.*site|crypto.*invest|bitcoin.*profit|forex.*signal|make.*money.*online|earn.*\$|work.*from.*home.*earn)/i,
  /\b(payday.*loan|cheap.*med|generic.*viagra|cialis|buy.*follower|instagram.*follower|tiktok.*follower)/i,
  /\b(http:\/\/|www\.)[\w.-]+\.(ru|cn|tk|pw|top|xyz|click|download)\b/i,
];

// Known disposable / throwaway email domains
const DISPOSABLE_DOMAINS = new Set([
  'mailinator.com', 'guerrillamail.com', 'guerrillamail.org', 'guerrillamail.net',
  'sharklasers.com', 'grr.la', 'yopmail.com', 'yopmail.fr', 'cool.fr.nf',
  'trashmail.com', 'trashmail.me', 'trashmail.at', 'trashmail.io',
  'temp-mail.org', 'tempr.email', 'dispostable.com', 'maildrop.cc',
  'throwam.com', 'throwam.net', 'spamgourmet.com', 'spamgourmet.org',
  'getairmail.com', 'fakeinbox.com', 'mailnull.com', 'spamspot.com',
  'mt2015.com', 'mt2014.com', 'discard.email', 'spamfree24.org',
]);

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
    const flags: string[] = [];

    log('received', {
      email: (typeof email === 'string' ? email : '').slice(0, 40),
      service: typeof service === 'string' ? service : '[non-string]',
      hasTurnstileToken: typeof turnstile_token === 'string' && turnstile_token.length > 0,
      hasFormStartedAt: Boolean(form_started_at),
    });

    // --- HONEYPOT: bots fill hidden fields, real users don't ---
    if (fax_number) {
      flags.push('honeypot');
      log('honeypot_flagged');
    }

    // --- TIMING: bots fill forms in milliseconds ---
    const startedAt = typeof form_started_at === 'number' ? form_started_at : Number(form_started_at);
    const now = Date.now();
    // Use Number.isFinite to correctly reject 0, NaN, Infinity — not just falsy
    if (Number.isFinite(startedAt) && startedAt > 0) {
      if (now - startedAt < MIN_FORM_FILL_MS) {
        flags.push('timing_fast');
        log('timing_too_fast_flagged', { elapsed: now - startedAt });
      }
      if (now - startedAt > MAX_FORM_AGE_MS) {
        flags.push('timing_old');
        log('timing_too_old_flagged', { elapsed: now - startedAt });
      }
    }

    // --- TYPE SAFETY: coerce body fields to strings before any checks ---
    const nameStr = typeof name === 'string' ? name.trim() : '';
    const emailStr = typeof email === 'string' ? email.trim() : '';
    const phoneStr = typeof phone === 'string' ? phone.trim() : '';
    const messageStr = typeof message === 'string' ? message.trim() : '';
    const serviceStr = typeof service === 'string' ? service.trim() : '';

    // --- REQUIRED FIELDS ---
    if (!nameStr || !emailStr || !messageStr) {
      log('validation_failed_missing_fields');
      if (acceptsHtml) {
        return respondHtml(res, 400, 'error', requestId, 'Please fill name, email, and message.', returnTo);
      }
      return res.status(400).json({ error: 'Missing required fields: name, email, message' });
    }

    // --- DISPOSABLE EMAIL ---
    const emailDomain = emailStr.split('@').pop()?.toLowerCase() ?? '';
    if (emailDomain && DISPOSABLE_DOMAINS.has(emailDomain)) {
      flags.push('disposable_email');
      log('disposable_email_flagged', { domain: emailDomain });
    }

    // --- SPAM KEYWORD DETECTION ---
    const textToScan = `${nameStr} ${messageStr}`;
    if (SPAM_PATTERNS.some(p => p.test(textToScan))) {
      flags.push('spam_pattern');
      log('spam_pattern_flagged');
    }

    // --- FIELD QUALITY: return friendly errors (real users can see and fix these) ---
    if (!looksLikeRealName(nameStr)) {
      const err = 'Please enter your real full name.';
      if (acceptsHtml) return respondHtml(res, 400, 'error', requestId, err, returnTo);
      return res.status(400).json({ error: err });
    }
    if (!looksLikeRealPhone(phoneStr)) {
      const err = 'Please enter a valid phone number, or leave it blank.';
      if (acceptsHtml) return respondHtml(res, 400, 'error', requestId, err, returnTo);
      return res.status(400).json({ error: err });
    }
    if (!looksLikeRealMessage(messageStr)) {
      const err = 'Please describe your request in more detail (at least a few words, no special characters only).';
      if (acceptsHtml) return respondHtml(res, 400, 'error', requestId, err, returnTo);
      return res.status(400).json({ error: err });
    }

    // --- TURNSTILE: verify if token is present; allow through if missing (Turnstile may not have loaded) ---
    const turnstileTokenStr = typeof turnstile_token === 'string' ? turnstile_token : '';
    if (process.env.TURNSTILE_SECRET_KEY && turnstileTokenStr) {
      const isTurnstileValid = await verifyTurnstileToken(turnstileTokenStr, req);
      if (!isTurnstileValid) {
        flags.push('turnstile_invalid');
        log('turnstile_failed_flagged');
      } else {
        log('turnstile_passed');
      }
    } else if (process.env.TURNSTILE_SECRET_KEY && !turnstileTokenStr) {
      log('turnstile_missing_continue');
    }

    const flagPrefix = flags.length ? `[Flagged: ${flags.join(', ')}] ` : '';

    const supportMail: OutboundMail = {
      to: 'support@webadish.com',
      subject: `${flagPrefix}New Contact Form Submission from ${nameStr}`,
      html: `
        <h2>New Contact Form Submission</h2>
        ${flags.length ? `<p><strong>Flags:</strong> ${escapeHtml(flags.join(', '))}</p>` : ''}
        <p><strong>Name:</strong> ${escapeHtml(nameStr)}</p>
        <p><strong>Email:</strong> ${escapeHtml(emailStr)}</p>
        ${phoneStr ? `<p><strong>Phone:</strong> ${escapeHtml(phoneStr)}</p>` : ''}
        ${serviceStr ? `<p><strong>Service Needed:</strong> ${escapeHtml(serviceStr)}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(messageStr).replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>Received at: ${new Date().toISOString()} | Ref: ${escapeHtml(requestId)}</small></p>
      `,
      replyTo: emailStr,
    };

    log('sending_support_email');
    const supportResult = await sendMail(supportMail, requestId);
    log('support_email_sent', { provider: supportResult.provider, messageId: supportResult.id });

    const confirmationMail: OutboundMail = {
      to: emailStr,
      subject: 'We received your message - WebAdish',
      html: `
        <h2>Thank you for contacting WebAdish!</h2>
        <p>Hi ${escapeHtml(nameStr)},</p>
        <p>We've received your message and our team will get back to you within 4 business hours.</p>
        <p>For urgent issues (site hacked), please call us directly at <strong>+91 999 875 7045</strong>.</p>
        <p>Best regards,<br>WebAdish Team</p>
      `,
    };

    if (!flags.length) {
      try {
        const confirmResult = await sendMail(confirmationMail, requestId);
        log('confirmation_email_sent', { provider: confirmResult.provider, messageId: confirmResult.id });
      } catch (confirmationError) {
        log('confirmation_email_failed_continue', {
          error: confirmationError instanceof Error ? confirmationError.message : String(confirmationError),
        });
      }
    } else {
      log('confirmation_email_skipped_flagged_submission', { flags });
    }

    log('completed_success');
    if (acceptsHtml) {
      return respondHtml(res, 200, 'success', requestId, 'Thanks. Your request was submitted successfully. We will reply within 4 business hours.', returnTo);
    }
    res.status(200).json({ success: true, message: 'Email sent successfully', request_id: requestId });
  } catch (error) {
    const errorMsg = error instanceof Error ? error.message : String(error);
    console.error(`[contact:${requestId}] failed`, errorMsg);
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
  if (body && typeof body === 'object' && !Array.isArray(body)) return body;
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

type MailSendResult = {
  id: string;
  provider: 'resend' | 'smtp';
};

async function sendMail(mail: OutboundMail, requestId: string): Promise<MailSendResult> {
  const attempts: string[] = [];

  if (process.env.RESEND_API_KEY) {
    try {
      const result = await sendViaResend(mail, requestId);
      return { ...result, provider: 'resend' };
    } catch (error) {
      attempts.push(error instanceof Error ? error.message : String(error));
    }
  } else {
    attempts.push('RESEND_API_KEY is missing');
  }

  if (hasSmtpConfig()) {
    try {
      const result = await sendViaSmtp(mail);
      return { ...result, provider: 'smtp' };
    } catch (error) {
      attempts.push(error instanceof Error ? error.message : String(error));
    }
  } else {
    attempts.push('SMTP credentials are missing');
  }

  throw new Error(`All email providers failed: ${attempts.join(' | ')}`);
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
  if (mail.replyTo) payload.reply_to = mail.replyTo;

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    const reason = typeof data?.message === 'string' ? data.message : `HTTP ${response.status}`;
    throw new Error(`Resend failed: ${reason}`);
  }

  return { id: typeof data?.id === 'string' ? data.id : 'unknown' };
}

function hasSmtpConfig(): boolean {
  return Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASSWORD);
}

async function sendViaSmtp(mail: OutboundMail): Promise<{ id: string }> {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD;

  if (!host || !user || !pass) {
    throw new Error('SMTP configuration is incomplete');
  }

  const port = Number(process.env.SMTP_PORT || 465);
  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: {
      user,
      pass,
    },
  });

  const info = await transporter.sendMail({
    from: process.env.SMTP_FROM_EMAIL || user || 'noreply@webadish.com',
    to: mail.to,
    subject: mail.subject,
    html: mail.html,
    replyTo: mail.replyTo,
  });

  return { id: info.messageId || 'smtp' };
}

function escapeHtml(text: string): string {
  const map: Record<string, string> = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

function countLetters(value: string): number {
  return (value.match(/\p{L}/gu) || []).length;
}

function countWords(value: string): number {
  return value.trim().split(/\s+/).filter(Boolean).length;
}

function looksLikeRealName(value: string): boolean {
  if (typeof value !== 'string') return false;
  if (value.length < 2 || value.length > 80) return false;
  if (!/^[\p{L}\s.''-]+$/u.test(value)) return false;
  return countLetters(value) >= 2;
}

function looksLikeRealMessage(value: string): boolean {
  if (typeof value !== 'string') return false;
  if (value.length < 12 || value.length > 4000) return false;
  if (countWords(value) < 3) return false;
  // Must contain at least 40% actual letters (catches pure-symbol/number spam)
  const letters = countLetters(value);
  const compactLength = value.replace(/\s+/g, '').length;
  if (!compactLength || letters / compactLength < 0.35) return false;
  // No implausibly long consonant clusters (gibberish)
  if (/[bcdfghjklmnpqrstvwxyz]{8,}/i.test(value)) return false;
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
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ secret, response: token, remoteip: remoteIp }),
  });

  if (!response.ok) return false;
  const data = await response.json();
  return Boolean(data.success);
}
