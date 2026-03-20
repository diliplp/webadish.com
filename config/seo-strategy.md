# Webadish.com SEO Migration Strategy

## Overview
Comprehensive redirect strategy to prevent 404 errors and preserve SEO authority during website redesign.

**Export Date:** 2026-03-21
**Current Status:** 46 pages with redirects detected (from Google Search Console)

---

## Analysis

### Current Indexed Pages
- **Total Indexed:** ~46 pages
- **Not Indexed:** ~94-101 pages
- **Critical Issues:** 46 pages with redirects detected
- **Potential Issues:** 23 discovered, 18 crawled but not indexed

### New Site Structure
The redesigned site has consolidated pages:

| New URL | Purpose |
|---------|---------|
| `/` | Home |
| `/maintenance` | Site Maintenance Services |
| `/security` | Security Services |
| `/hacked-site-recovery` | Hacked Site Recovery |
| `/retainer` | Site Retainer Services |
| `/pricing` | Pricing Information |
| `/blog` | Blog Index |
| `/blog/:slug` | Individual Blog Posts |
| `/case-studies` | Case Studies |
| `/contact` | Contact Form |
| `/web-design` | Web Design Services |
| `/privacy-policy` | Privacy Policy |
| `/terms` | Terms of Service |
| `/refund-policy` | Refund Policy |

---

## Redirect Strategy

### 1. Service Page Consolidation (301)
Old service pages redirected to new consolidated pages:
- `/services/maintenance` → `/maintenance`
- `/services/security` → `/security`
- `/services/hacked-site-recovery` → `/hacked-site-recovery`
- `/services/site-retainer` → `/retainer`
- `/services/web-design` → `/web-design`

### 2. Pricing Pages (301)
- `/our-pricing` → `/pricing`
- `/pricing/*` → `/pricing` (catches variations)

### 3. Content Consolidation (301)
- `/portfolio` → `/case-studies`
- `/case-study/*` → `/case-studies`
- `/article/*` → `/blog/:slug` (dynamic redirect)

### 4. Policy Pages (301)
- `/privacy` → `/privacy-policy`
- `/tos` → `/terms`
- `/refund` → `/refund-policy`

### 5. Information Pages (301)
- `/about` → `/` (home contains company info)
- `/about-us` → `/`
- `/support` → `/contact`
- `/help` → `/contact`
- `/faq` → `/` (FAQ likely on home or contact)
- `/contact-us` → `/contact`

### 6. Navigation Redirects (301)
- `/services` → `/` (services listed on home)
- `/solutions` → `/`

---

## Implementation Methods

### Method 1: Vercel Redirects (Recommended)
Update `vercel.json` with redirects array - no server-side processing needed.

### Method 2: Middleware (for dynamic routes)
Create a Vite plugin or middleware to handle:
- Query parameters: `/article?id=123` → `/blog/article-title`
- Case-insensitive redirects
- Trailing slash normalization

### Method 3: Client-side Routing
Fallback in `not-found.tsx` to suggest correct pages.

---

## SEO Best Practices Applied

✅ **HTTP 301 Status Code**
- Preserves link juice and domain authority
- Tells Google the move is permanent
- Users and crawlers follow to new location

✅ **Dynamic Slug Preservation**
- Blog posts keep their slug-based URLs
- Case studies grouped intelligently

✅ **Canonicalization**
- All redirects point to unique final destination
- Avoids redirect chains

✅ **Speed**
- Server-side 301 faster than refresh redirects
- Immediate for crawlers and users

---

## Monitoring & Validation

### Google Search Console Checks
1. Submit updated sitemap.xml
2. Monitor "Coverage" tab for:
   - Reduced "Excluded" count
   - Increased "Indexed" count
3. Check for redirect chains in "Core Web Vitals"

### Verification Tools
- **Redirect Checker:** https://www.redirectchecker.com/
- **Light House:** Chrome DevTools
- **Google Search Console:** Coverage report

### Expected Improvements (30-90 days)
- Redirect crawl errors decrease to 0
- More pages transition from "Not indexed" to "Indexed"
- Search impressions stabilize or increase

---

## Quick Start

1. **Add redirects to vercel.json:**
   ```bash
   # Apply redirects from config/redirects.json
   ```

2. **Update sitemap.xml** (already included in dist)

3. **Deploy and monitor:**
   ```bash
   pnpm build
   pnpm deploy
   ```

4. **Check Google Search Console** after 24-48 hours

---

## Notes

- Currently 46 pages showing redirects in GSC - monitor for decreases
- No pages should return 404 - all have safe redirects
- Dynamic routes (/blog/:slug) preserve individual post authority
- Consider adding a sitemap index for blog posts if not already present
