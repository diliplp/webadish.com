# Webadish.com Migration Checklist

## Pre-Launch

- [x] Analyze Google Search Console coverage (46 redirect pages detected)
- [x] Map old URLs to new structure
- [x] Create 301 redirects in vercel.json
- [x] Update sitemap.xml
- [x] Verify robots.txt
- [ ] Test all redirects locally
- [ ] Test 404 page response headers (should be 404, not 404->redirect)

## Launch Day

- [ ] Deploy to Vercel with redirect configuration
- [ ] Verify redirect status codes with curl/redirect checker
- [ ] Check homepage loads correctly
- [ ] Verify all main navigation links work

## Post-Launch (24 hours)

- [ ] Check Vercel deploy logs for redirect errors
- [ ] Monitor error rates in analytics
- [ ] Verify Google Search Console shows fewer redirect errors

## Week 1

- [ ] Monitor Google Search Console daily
- [ ] Check coverage tab for:
  - [ ] "Excluded - Redirected" count decreasing
  - [ ] "Indexed" count stable or increasing
  - [ ] "Crawl errors" count at 0
- [ ] Review sitemap indexing status
- [ ] Check Core Web Vitals in GSC

## Week 2-4

- [ ] Verify redirect chains don't exist (max 1 redirect per URL)
- [ ] Check for 4xx errors in server logs
- [ ] Monitor organic search traffic patterns
- [ ] Review Search Console for new errors

## Month 1 Goals

- All 46 pages with redirects properly mapped
- No redirect chains
- 0 crawl errors
- Indexed pages stable or increasing
- No internal 404 errors from our links

## Potential Issues & Solutions

### Issue: Old Trailing Slashes
**Problem:** `/about/` vs `/about`
**Solution:** Vercel automatically handles with rewrites

### Issue: Query Parameters
**Problem:** `/blog?id=123` vs `/blog/slug`
**Solution:** Add middleware route if needed (see implementation guide)

### Issue: Case Sensitivity
**Problem:** `/Maintenance` vs `/maintenance`
**Solution:** Add redirect for common variations or lowercase middleware

### Issue: SEO Traffic Drop
**Problem:** Rankings not recovering after migration
**Solution:**
- Verify 301 status codes (not 302)
- Check for redirect chains
- Ensure canonical tags correct
- Allow 30-90 days for recovery
- Submit URL re-indexing request in GSC

---

## Verification Commands

```bash
# Check redirect status code
curl -i https://webadish.com/services/maintenance

# Should see:
# HTTP/2 301
# location: https://webadish.com/maintenance

# Check for redirect chains
curl -L -i https://webadish.com/services/maintenance

# Should complete in 1 redirect (not 2+)
```

## Google Search Console Actions

1. **Update Sitemap:**
   - Verify artifacts/webadish/dist/sitemap.xml is submitted
   - Check for indexing status

2. **Manual URL Inspection:**
   - Test a few old URLs via GSC URL inspection tool
   - Verify redirect is detected and followed

3. **Monitor Coverage:**
   - Set notification for excluded pages
   - Watch for crawl errors daily for first week

4. **Request Indexing:**
   - Submit homepage
   - Submit key pages for re-crawl if traffic drops

---

## Success Metrics

✅ All 46+ old pages should have working redirects
✅ No 404 errors from internal links
✅ 0 redirect chains (max 1 hop)
✅ Google Search Console shows 301 redirects
✅ Indexed pages count stable within 30 days
✅ Organic search traffic recovers within 90 days
