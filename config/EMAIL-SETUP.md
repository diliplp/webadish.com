# Email Configuration Setup - Contact Form

## Implementation Status: ✅ READY

### What Was Implemented

1. **Vercel Function API Route** (`/api/contact.ts`)
   - Accepts POST requests from contact form
   - Validates required fields (name, email, message)
   - Sends email to support@webadish.com
   - Sends confirmation email to user
   - HTML email templates with proper formatting

2. **Updated Contact Form** (`src/pages/Contact.tsx`)
   - Form now calls `/api/contact` API endpoint
   - Shows loading state while sending
   - Displays error messages if email fails
   - Shows success confirmation
   - User can send multiple messages

3. **Dependencies Added**
   - `nodemailer` - SMTP email library
   - `@types/nodemailer` - TypeScript types
   - `@vercel/node` - Vercel serverless runtime types

---

## Setup Instructions

### Step 1: Configure Environment Variables

Add these to **Vercel Dashboard** → Settings → Environment Variables:

```
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=465
SMTP_USER=your-email@webadish.com
SMTP_PASSWORD=your-email-password
SMTP_FROM_EMAIL=noreply@webadish.com
```

### Step 2: Get Hostinger Email Credentials

1. Log in to Hostinger Control Panel
2. Go to Email → Manage Email
3. Find an email account (create one if needed: noreply@webadish.com)
4. Click on the email account
5. Look for "Email account details" or "Access credentials"
6. Note the SMTP settings:
   - IMAP Server: imap.hostinger.com (port 993)
   - SMTP Server: smtp.hostinger.com (port 465 or 587)
   - Username: full email address (noreply@webadish.com)
   - Password: account password

### Step 3: Deploy Changes

```bash
git add .
git commit -m "feat: Implement email functionality for contact form"
git push origin main
```

Vercel will auto-deploy. Check deployment in Vercel dashboard.

### Step 4: Set Environment Variables in Vercel

1. Go to vercel.com → Project Settings → Environment Variables
2. Add each variable from Step 1
3. Make sure they're available for Production environment
4. Redeploy the project (or push a new commit)

### Step 5: Test the Form

1. Visit https://webadish.com/contact
2. Fill in the form with test data
3. Submit
4. Check:
   - Success message appears
   - Email arrives at support@webadish.com
   - Confirmation email sent to your email address

---

## Email Flow

```
User fills form
    ↓
Clicks "Send Message"
    ↓
Browser sends POST to /api/contact
    ↓
Vercel Function receives request
    ↓
Validates fields
    ↓
Connects to SMTP (Hostinger)
    ↓
Sends 2 emails:
  1. To: support@webadish.com (inquiry details)
  2. To: user's email (confirmation)
    ↓
Returns success response
    ↓
Browser shows "Message Sent!" confirmation
```

---

## Alternative: Use SendGrid (Simpler)

If you prefer not to expose SMTP credentials, use SendGrid instead:

### Setup SendGrid

1. Go to https://sendgrid.com (free tier available)
2. Create account and verify domain
3. Create API key
4. Add to Vercel environment variables:
   ```
   SENDGRID_API_KEY=SG.xxxxxxxxxxxxx
   ```

### Modify API Route

Replace SMTP code with SendGrid (I can provide updated version if needed).

**Advantages:**
- No SMTP credentials needed
- Better deliverability
- Tracking and logs
- Free tier: 100 emails/day

---

## Monitoring & Troubleshooting

### Check Email Delivery

**Vercel Function Logs:**
```bash
# View Vercel logs
vercel logs --follow
```

**Manual Test:**
```bash
curl -X POST https://webadish.com/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "message": "Test message"
  }'
```

### Common Issues

| Issue | Solution |
|-------|----------|
| Email not sending | Check SMTP credentials in Vercel env vars |
| 500 error | Verify all required env vars are set |
| "Failed to send email" | Check SMTP_HOST and SMTP_PORT are correct |
| Emails in spam | Add SPF/DKIM records for your domain |
| No confirmation email | Check reply-to address is valid |

---

## Security Notes

- ✅ Form validates required fields
- ✅ HTML is escaped to prevent injection
- ✅ Credentials stored in Vercel environment (not in code)
- ✅ SMTP credentials not exposed to frontend
- ✅ HTTPS enforced on submission

---

## Rate Limiting (Optional)

If you want to add rate limiting to prevent form spam:

```typescript
// Add to api/contact.ts
const rateLimit = new Map();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const lastRequest = rateLimit.get(ip);

  if (lastRequest && now - lastRequest < 60000) { // 1 minute
    return true;
  }

  rateLimit.set(ip, now);
  return false;
}
```

---

## Next Steps

1. ✅ Verify email credentials are correct
2. ✅ Add environment variables to Vercel
3. ✅ Deploy to production
4. ✅ Test contact form
5. ✅ Monitor for email delivery issues

**Status:** Ready for deployment 🚀
