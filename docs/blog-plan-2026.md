# Blog Plan: May–October 2026

**Site:** webadish.com (global + India market)  
**Cadence:** 3–4 posts/month  
**Status key:** ✅ Done · 🔲 Pending

---

## May 2026

| # | Status | Title | Category | Slug |
|---|--------|-------|----------|------|
| 1 | ✅ | WordPress Care Plans Explained: What Monthly Maintenance Actually Prevents | Buyer Intent | `what-a-wordpress-care-plan-includes` |
| 2 | 🔲 | CERT-In 6-Hour Incident Reporting: What Indian WordPress Site Owners Must Know | Guides | `cert-in-6-hour-reporting-wordpress` |
| 3 | 🔲 | WordPress XML-RPC: Why a Rarely-Used Feature Is a Common Attack Vector | Security | `wordpress-xmlrpc-attack-vector` |
| 4 | 🔲 | Recovering a WordPress Site After a Shared Hosting Compromise | Recovery | `wordpress-shared-hosting-recovery` |

---

## June 2026

| # | Status | Title | Category | Slug |
|---|--------|-------|----------|------|
| 5 | 🔲 | WooCommerce Payment Gateway Security: What Stripe, Razorpay, and PayPal Cover — and What They Don't | Security | `woocommerce-payment-gateway-security` |
| 6 | 🔲 | The Real Cost of Running Nulled WordPress Plugins | Security | `wordpress-nulled-plugins-risk` |
| 7 | 🔲 | How to Choose a WordPress Maintenance Plan: A Framework for Indian Businesses | Buyer Intent | `wordpress-maintenance-plan-india` |

---

## July 2026

| # | Status | Title | Category | Slug |
|---|--------|-------|----------|------|
| 8 | 🔲 | WordPress Two-Factor Authentication: Which Options Work for Business Sites | Security | `wordpress-two-factor-authentication` |
| 9 | 🔲 | WordPress Database Attacks: How SQL Injection Works and How to Block It | Security | `wordpress-sql-injection-explained` |
| 10 | 🔲 | What Is a WordPress Security Audit? A Decision Framework for Business Sites | Buyer Intent | `what-is-a-wordpress-security-audit` |
| 11 | 🔲 | WooCommerce Refund Fraud: How Attackers Exploit Store Workflows | Security | `woocommerce-refund-fraud` |

---

## August 2026

| # | Status | Title | Category | Slug |
|---|--------|-------|----------|------|
| 12 | 🔲 | Education Sector WordPress Security: Why School and College Sites Are High-Value Targets | Security | `wordpress-security-education-sector-india` |
| 13 | 🔲 | WordPress Staging Environments: Why They Are a Business Risk Control, Not a Dev Tool | Maintenance | `wordpress-staging-environment-business-case` |
| 14 | 🔲 | India eCommerce Data Protection: What DPDP Means for Your WooCommerce Store | Guides | `dpdp-woocommerce-india` |
| 15 | 🔲 | What Happens to WordPress Rankings After a Malware Infection | Security | `wordpress-malware-seo-impact` |

---

## September 2026

| # | Status | Title | Category | Slug |
|---|--------|-------|----------|------|
| 16 | 🔲 | WordPress Brute Force Attacks: How Login Protection Actually Works | Security | `wordpress-brute-force-protection` |
| 17 | 🔲 | Why WooCommerce Stores Need Payment Page Monitoring (Not Just Malware Scanning) | Security | `woocommerce-payment-page-monitoring` |
| 18 | 🔲 | The Business Case for a WordPress Security Retainer: Prevention vs. Recovery Costs | Buyer Intent | `wordpress-security-retainer-roi` |
| 19 | 🔲 | Dealership Website Security in India: WordPress Risks for Auto Businesses | Security | `wordpress-security-auto-dealership-india` |

---

## October 2026

| # | Status | Title | Category | Slug |
|---|--------|-------|----------|------|
| 20 | 🔲 | WordPress PHP Version End-of-Life: What Business Sites Need to Do Before Support Ends | Maintenance | `wordpress-php-end-of-life` |
| 21 | 🔲 | Ransomware and WordPress: What the Risk Actually Looks Like for Business Sites | Security | `wordpress-ransomware-risk` |
| 22 | 🔲 | WordPress File Permissions: The Misconfiguration That Lets Attackers In | Security | `wordpress-file-permissions-security` |
| 23 | 🔲 | WordPress Backup Strategy for Business: What "Daily Backups" Actually Means | Maintenance | `wordpress-backup-strategy-business` |

---

## Distribution Summary

| Category | Count |
|----------|-------|
| Security | 10 |
| Buyer Intent | 4 |
| Maintenance | 4 |
| Guides (India/compliance) | 3 |
| Recovery | 2 |

**India-specific posts:** 2 (CERT-In), 7 (India maintenance), 12 (education), 14 (DPDP + WooCommerce), 19 (auto dealerships)  
**WooCommerce-specific posts:** 5 (payment gateways), 11 (refund fraud), 14 (DPDP), 17 (payment page monitoring)

---

## Writing Notes

- All posts go in `artifacts/webadish/src/pages/BlogPost.tsx` (add to `posts` object)
- All posts get a listing entry in `artifacts/webadish/src/pages/Blog.tsx` (add to `posts` array, newest first)
- Banner images: reuse existing SVGs from `/blog/` — match by category (Security → `plugin-audit-banner.svg`, Recovery → `incident-recovery-banner.svg`, Maintenance → `maintenance-operations-banner.svg`, Buyer Intent → `hosting-vs-managed-security-banner.svg`, Guides → `dpdp-act-wordpress-guide-banner.svg`)
- Internal links: `/maintenance`, `/retainer`, `/security`, `/hacked-site-recovery`, `/contact`, `/pricing`
- India posts: reference INR pricing from `/india` page — Rs 5,000–Rs 10,000 (basic), Rs 15,000–Rs 25,000 (security + maintenance)
- Run `pnpm --filter @workspace/webadish build` after each post to verify no TypeScript errors
