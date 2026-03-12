# Google Indexing Verification Report — estalara.com

**Date:** 2026-03-12  
**Domain:** estalara.com (canonical), www.estalara.com (redirected)  
**Hosting:** Netlify (Next.js 14 App Router)

---

## Executive Summary

**estalara.com is currently NOT indexed by Google.** Neither `site:estalara.com` nor `site:www.estalara.com` returns any results. A brand-name search for "estalara" also yields no relevant results.

The on-page technical SEO is solid — there are no blocking directives preventing indexing. The root cause is almost certainly that **Google Search Console has not been configured** and the **sitemap has not been submitted**, so Google has no signal to discover and crawl the site.

| Check                          | Status           | Notes                                            |
|--------------------------------|------------------|--------------------------------------------------|
| Google index (`site:` query)   | NOT INDEXED      | Zero pages in Google's index                     |
| Brand search ("estalara")      | NOT FOUND        | No relevant results                              |
| Site live & accessible         | PASS (200 OK)    | `https://estalara.com` returns 200               |
| HTTPS enforced                 | PASS             | `http://` → 301 → `https://`                    |
| www → non-www redirect         | PASS             | `www.estalara.com` → 301 → `estalara.com`       |
| robots.txt                     | PASS             | Googlebot explicitly allowed, `/api/` blocked    |
| sitemap.xml                    | PASS             | 35 URLs, valid XML, correct Content-Type         |
| Meta robots / noindex          | PASS (none)      | No `noindex` or `nofollow` directives anywhere   |
| X-Robots-Tag HTTP header       | PASS (absent)    | No blocking headers                              |
| Canonical URLs                 | PASS             | All pages have correct `<link rel="canonical">`  |
| Hreflang alternates            | PASS             | 7 language variants on homepage                  |
| Open Graph / Twitter Cards     | PASS             | Complete metadata on all pages                   |
| JSON-LD structured data        | PASS             | Organization, SoftwareApplication, BreadcrumbList|
| Google Search Console verified | NOT SET UP       | No verification meta tag or file found           |
| IndexNow support               | NOT IMPLEMENTED  | No IndexNow key or API route                     |

---

## Detailed Findings

### 1. Redirect Chain — PASS

All domain variants converge correctly to a single canonical origin:

```
http://estalara.com       → 301 → https://estalara.com     (Netlify)
https://www.estalara.com  → 301 → https://estalara.com     (Netlify)
http://www.estalara.com   → 301 → https://estalara.com     (Netlify, 2-hop)
```

No redirect loops detected. The 301 status codes are correct for permanent redirects.

### 2. robots.txt — PASS

Served at `https://estalara.com/robots.txt` via dynamic route handler.

- Googlebot: `Allow: /`, `Disallow: /api/`, `Disallow: /admin/`
- Wildcard (`*`): same rules
- Sitemap directive: `Sitemap: https://estalara.com/sitemap.xml`
- Cache: `public, max-age=3600`

No issues. Googlebot has full access to all public pages.

### 3. sitemap.xml — PASS

Served at `https://estalara.com/sitemap.xml` with proper `Content-Type: application/xml`.

- **35 URLs** included (homepage, book-demo, 5 regional pages, 4 legal pages, knowledge hub, categories, articles)
- Stable `lastmod` dates (not dynamic/request-time)
- Appropriate `priority` and `changefreq` values
- Strong cache headers: `s-maxage=86400, stale-while-revalidate=86400`

### 4. On-Page Meta Tags — PASS

Homepage HTML inspection shows:

- `<title>Estalara | From Local Listings to Live Global Sales</title>`
- `<meta name="description" content="...">` (166 chars, good)
- `<link rel="canonical" href="https://estalara.com"/>` (correct)
- 7 `<link rel="alternate" hrefLang="...">` tags
- Complete Open Graph and Twitter Card meta tags
- **No `<meta name="robots" content="noindex">` found anywhere**

### 5. HTTP Response Headers — PASS

```
HTTP/2 200
content-type: text/html; charset=utf-8
strict-transport-security: max-age=31536000
x-content-type-options: nosniff
x-powered-by: Next.js
server: Netlify
```

- No `X-Robots-Tag` header blocking indexing
- HSTS enabled (good)
- Googlebot user-agent receives the same 200 response as regular browsers

### 6. Structured Data — PASS

Three JSON-LD blocks verified in the HTML:

1. **Organization** — name, legalName, url, logo, address, email, sameAs
2. **SoftwareApplication** — category, operatingSystem, offers
3. **BreadcrumbList** — page-specific breadcrumbs

### 7. Google Search Console — NOT SET UP

**This is the primary blocker for indexing.**

- No `<meta name="google-site-verification" content="...">` tag found in HTML
- No `googleXXXXXXX.html` verification file found in the codebase
- No DNS TXT record verification can be confirmed from here

The TECHNICAL-SEO-IMPLEMENTATION-REPORT.md explicitly lists "Submit updated sitemap and validate in GSC" as a pending TODO item, confirming GSC has not been configured.

### 8. IndexNow — NOT IMPLEMENTED

No IndexNow key file or API integration found. IndexNow enables proactive notification to Bing, Yandex, and other supporting engines when pages are published or updated.

---

## Root Cause Analysis

The site is **technically ready** to be indexed — there are zero on-page or server-side blockers. The lack of indexing is due to:

1. **No Google Search Console (GSC) setup** — Google has no explicit instruction to discover and crawl the site
2. **No sitemap submission** — Even though `sitemap.xml` exists and is referenced in `robots.txt`, Google may not have discovered it without GSC
3. **Insufficient inbound links** — Without external backlinks or directory listings, Google's natural discovery crawl may not have reached the site yet
4. **No IndexNow pings** — Bing/Yandex haven't been notified of new content

---

## Action Items

### Immediate (today)

| # | Action | Owner | Details |
|---|--------|-------|---------|
| 1 | **Set up Google Search Console** | Site admin | Go to [search.google.com/search-console](https://search.google.com/search-console), add `estalara.com` as a property, and verify ownership (DNS TXT record or HTML file method recommended) |
| 2 | **Submit sitemap in GSC** | Site admin | After verification, go to Sitemaps → Add `https://estalara.com/sitemap.xml` |
| 3 | **Request indexing of key pages** | Site admin | In GSC URL Inspection tool, submit these URLs for indexing: `https://estalara.com/`, `https://estalara.com/book-demo`, `https://estalara.com/knowledge` |
| 4 | **Add GSC verification meta tag** | Developer | Add `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` env var with the GSC verification code (implemented in this branch) |

### This week

| # | Action | Owner | Details |
|---|--------|-------|---------|
| 5 | **Set up Bing Webmaster Tools** | Site admin | Verify at [bing.com/webmasters](https://www.bing.com/webmasters), submit sitemap |
| 6 | **Monitor GSC coverage report** | Site admin | Check for crawl errors, excluded pages, valid indexed pages |
| 7 | **Submit to Google Business Profile** | Site admin | If applicable, create/claim a Google Business listing |

### Next 2 weeks

| # | Action | Owner | Details |
|---|--------|-------|---------|
| 8 | **Build initial backlinks** | Marketing | Submit to SaaS directories, PropTech listings, startup databases |
| 9 | **Share on social media** | Marketing | LinkedIn company page posts linking to site |
| 10 | **Monitor indexing progress** | Site admin | Use `site:estalara.com` weekly to track indexed page count |

---

## Changes Implemented in This Branch

### 1. Google Search Console verification meta tag support

Added `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` environment variable support in `app/layout.tsx`. When set, Next.js automatically emits `<meta name="google-site-verification" content="...">` in the HTML head.

**Setup steps:**
1. Go to Google Search Console and add `estalara.com`
2. Choose "HTML tag" verification method
3. Copy the verification code (just the `content` value)
4. Add to Netlify environment variables: `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your_code_here`
5. Redeploy

### 2. IndexNow API route

Added `app/api/indexnow/route.ts` for proactive search engine notification when content changes. Supports Bing, Yandex, and other IndexNow-compatible engines.

**Setup steps:**
1. Generate an IndexNow key at [indexnow.org/getstarted](https://www.indexnow.org/getstarted)
2. Add to Netlify env vars: `INDEXNOW_KEY=your_key_here`
3. Place the key file in `public/{your_key}.txt` containing just the key string
4. Optionally set `INDEXNOW_API_SECRET` for authentication on the submit endpoint

**Usage:**
```bash
curl -X POST https://estalara.com/api/indexnow \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_API_SECRET" \
  -d '{"urls": ["/", "/book-demo", "/knowledge"]}'
```

### 3. IndexNow key info endpoint

Added `app/api/indexnow-key/route.ts` to verify the configured key and its expected file location.

---

## Expected Timeline

After completing the immediate action items:

| Milestone | Expected Timeframe |
|-----------|-------------------|
| GSC verification complete | Same day |
| Sitemap processed by Google | 1–3 days |
| Homepage indexed | 3–7 days |
| Core pages indexed | 1–2 weeks |
| Full site indexed (35 URLs) | 2–4 weeks |
| Regional pages ranking | 4–8 weeks |

---

## Monitoring

After GSC is set up, monitor these metrics weekly:

- **Coverage report** — Valid indexed pages vs. excluded/error pages
- **Sitemaps report** — Submitted vs. discovered URLs
- **URL Inspection** — Check individual page indexing status
- **Performance report** — Impressions, clicks, CTR, position (once pages start appearing)
- **Core Web Vitals** — LCP, FID/INP, CLS

---

*Report generated as part of the Google indexing verification for estalara.com*
