# 📋 SEO Daily/Weekly Checklist

## 🔍 Quick SEO Health Check

### ⏰ **Daily Checks** (First 7 Days After Launch)

**Morning (5 min):**
```
□ Visit https://webadish.com
  ✓ Page loads?
  ✓ HTTPS works (green lock)?
  ✓ No error messages?

□ Test 2-3 key pages:
  ✓ /maintenance
  ✓ /security
  ✓ /pricing

□ Check Vercel dashboard:
  ✓ Latest deployment green ✅?
  ✓ Any error logs?
```

**Evening (5 min):**
```
□ Google Search Console quick check:
  ✓ Any new crawl errors?
  ✓ Indexed page count changed?
  ✓ New issues reported?
```

---

### 📊 **Weekly Checks** (First 4 Weeks)

**Every Monday (15 min):**

```
1. GOOGLE SEARCH CONSOLE
   □ Open: https://search.google.com/search-console
   □ Select webadish.com property

   Coverage Report:
   □ Note "Indexed" count (trend up/down?)
   □ Note "Excluded" count
   □ Check for "Crawl errors" (should be 0)

   Performance Report:
   □ Total impressions (recovering?)
   □ Average CTR (improving?)
   □ Average position (recovering?)

   Core Web Vitals:
   □ Check status (should be 🟢 Good)

2. TEST SCHEMAS
   □ Go to: https://search.google.com/test/rich-results
   □ Paste: https://webadish.com
   □ Verify schemas show up:
     ✓ Organization
     ✓ WebSite
     ✓ Service
     ✓ Breadcrumb

3. TEST KEY PAGES
   □ /maintenance - loads correctly?
   □ /security - loads correctly?
   □ /pricing - loads correctly?
   □ /blog - loads correctly?

4. PAGE SPEED
   □ Go to: https://pagespeed.web.dev/
   □ Test: https://webadish.com
   □ Check all metrics green 🟢
```

---

## 🚨 **Alert Checklist** - If You See These, Investigate

```
⚠️ CRITICAL (Act immediately):
□ Site returns 404
□ Site returns 500 error
□ HTTPS broken (red warning in browser)
□ Vercel shows failed deployment
□ Google Search Console shows manual action

⚠️ HIGH (Check within 24h):
□ New crawl errors in GSC
□ Core Web Vitals show 🟡 or 🔴
□ Indexed page count drops
□ Impressions drop significantly
□ Redirects showing as errors in GSC

⚠️ MEDIUM (Monitor next week):
□ Schema showing errors in Rich Results Test
□ Bounce rate increases significantly
□ Organic traffic not recovering
□ Any missing pages in sitemap
```

---

## 📱 **Mobile Check**

**Weekly mobile responsiveness test:**

```
□ Open site on mobile browser
□ Check homepage loads
□ Test navigation menu
□ Test form submission (Contact page)
□ Check images display correctly
□ Verify text is readable without zooming
□ Test on both portrait and landscape
```

---

## 🔗 **Redirect Testing**

**Test old URLs redirect correctly (do this weekly):**

```bash
# Try these in your browser or with curl:

□ /services/maintenance
  ✓ Should redirect to /maintenance

□ /services/security
  ✓ Should redirect to /security

□ /about
  ✓ Should redirect to /

□ /portfolio
  ✓ Should redirect to /case-studies

□ /contact-us
  ✓ Should redirect to /contact

# Each should return 301, not 404
```

---

## 📊 **Metrics Tracking Template**

**Print this or track in a spreadsheet:**

```
Week 1: ___/___
- GSC Indexed Pages: ___
- GSC Impressions: ___
- GSC Avg Position: ___
- Core Web Vitals: 🟢 / 🟡 / 🔴
- Crawl Errors: ___
- Notes: ___________

Week 2: ___/___
- GSC Indexed Pages: ___
- GSC Impressions: ___
- GSC Avg Position: ___
- Core Web Vitals: 🟢 / 🟡 / 🔴
- Crawl Errors: ___
- Notes: ___________

Week 3: ___/___
- GSC Indexed Pages: ___
- GSC Impressions: ___
- GSC Avg Position: ___
- Core Web Vitals: 🟢 / 🟡 / 🔴
- Crawl Errors: ___
- Notes: ___________

Week 4: ___/___
- GSC Indexed Pages: ___
- GSC Impressions: ___
- GSC Avg Position: ___
- Core Web Vitals: 🟢 / 🟡 / 🔴
- Crawl Errors: ___
- Notes: ___________
```

---

## 🎯 **30-Day Success Criteria**

**If all ✓, you're on track:**

```
□ Site fully accessible at webadish.com
□ HTTPS works (green lock)
□ All pages load correctly
□ Redirects working (tested 5+ old URLs)
□ Sitemap accessible: webadish.com/sitemap.xml
□ robots.txt accessible: webadish.com/robots.txt
□ Google Search Console shows no crawl errors
□ Indexed pages count stable or increasing
□ Core Web Vitals: All 🟢 Green
□ Rich results test: Schemas detected correctly
□ No manual actions in GSC
```

---

## 🔗 **Useful Links**

- Google Search Console: https://search.google.com/search-console
- Rich Results Test: https://search.google.com/test/rich-results
- PageSpeed Insights: https://pagespeed.web.dev
- Lighthouse (Chrome DevTools): DevTools → Lighthouse
- Vercel Dashboard: https://vercel.com/dashboard

---

## 💡 **Pro Tips**

1. **Set GSC Alerts**
   - Enable email notifications in GSC Settings
   - Get alerted for crawl errors, indexing issues

2. **Mobile Test**
   - Always test on actual mobile device
   - Not just browser resize

3. **Incognito Browsing**
   - Test in incognito/private mode
   - Avoids browser cache issues

4. **Test from Different Location**
   - Use VPN to test from different region
   - Helps identify regional DNS issues

5. **Keep Records**
   - Screenshot GSC metrics weekly
   - Helps show progress over 30-90 days

---

**Start Date:** 2026-03-21
**Next Review:** 2026-04-04 (2 weeks)
**Full Assessment:** 2026-06-20 (90 days)
