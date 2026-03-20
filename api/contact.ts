import { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, service, message } = req.body;

  console.log('📧 Contact form received:', { name, email, service });

  // Validate required fields
  if (!name || !email || !message) {
    console.log('❌ Validation failed - missing fields');
    return res.status(400).json({ error: 'Missing required fields: name, email, message' });
  }

  try {
    // Create transporter for Hostinger SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.hostinger.com',
      port: parseInt(process.env.SMTP_PORT || '465'),
      secure: true, // SSL
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Email to support
    const mailOptions = {
      from: process.env.SMTP_FROM_EMAIL || 'noreply@webadish.com',
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
    await transporter.sendMail(mailOptions);
    console.log('✅ Support email sent');

    // Send confirmation email to user
    console.log(`📤 Sending confirmation email to ${email}...`);
    const confirmationEmail = {
      from: process.env.SMTP_FROM_EMAIL || 'noreply@webadish.com',
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

    await transporter.sendMail(confirmationEmail);
    console.log('✅ Confirmation email sent');

    console.log('✨ Contact form processed successfully');
    return res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    const errorMsg = error instanceof Error ? error.message : String(error);
    console.error('❌ Email error:', errorMsg);
    console.error('Full error:', error);
    return res.status(500).json({ error: `Failed to send email: ${errorMsg}` });
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
