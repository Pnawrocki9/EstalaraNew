# Google Indexing Verification Report — estalara.com

**Date:** 2026-03-12  
**Domain:** estalara.com (canonical), www.estalara.com (redirected)  
**Hosting:** Netlify (Next.js 14 App Router)

---

## Executive Summary

Google Search Console is configured as a **domain property** for `estalara.com`. Current status:

- **21 pages indexed** (growing since mid-February 2026)
- **1,112 pages NOT indexed** (URL bloat from query parameters and internal paths)
- **35 real pages** in the sitemap

The 21 indexed pages confirm that Google can crawl and index the site. The 1,112 non-indexed pages are almost entirely junk URLs — query parameter variants (`?_rsc=`, `?fbclid=`, `?gclid=`, `?hs_preview=`), Next.js internal paths (`/_next/`), and tracking parameter permutations discovered during JavaScript rendering. This is wasting crawl budget and diluting indexing signals.

| Check                          | Status           | Notes                                            |
|--------------------------------|------------------|--------------------------------------------------|
| Google Search Console          | CONFIGURED       | Domain property, 21 pages indexed                |
| Site live & accessible         | PASS (200 OK)    | `https://estalara.com` returns 200               |
| HTTPS enforced                 | PASS             | `http://` → 301 → `https://`                    |
| www → non-www redirect         | PASS             | `www.estalara.com` → 301 → `estalara.com`       |
| robots.txt                     | IMPROVED         | Now blocks `/_next/`, `?_rsc=`, tracking params  |
| sitemap.xml                    | PASS             | 35 URLs, valid XML, correct Content-Type         |
| Meta robots / noindex          | PASS (none)      | No `noindex` on content pages                    |
| X-Robots-Tag HTTP header       | IMPROVED         | Now set on `/api/*` and `/admin/*` paths         |
| Canonical URLs                 | PASS             | Correctly strips query params on all pages       |
| Hreflang alternates            | PASS             | 7 language variants on homepage                  |
| Open Graph / Twitter Cards     | PASS             | Complete metadata on all pages                   |
| JSON-LD structured data        | PASS             | Organization, SoftwareApplication, BreadcrumbList|
| Non-indexed URL bloat          | NEEDS ATTENTION  | 1,112 junk URLs wasting crawl budget             |
| IndexNow support               | ADDED            | `/api/indexnow` endpoint ready                   |

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

### Why only 21 of 35 pages are indexed

Google Search Console is active and the site is partially indexed. The 14 missing pages from the sitemap are likely in one of these GSC buckets:

- **"Crawled - currently not indexed"** — Google saw the page but decided it wasn't worth indexing yet (common for thin or new pages)
- **"Discovered - currently not indexed"** — Google knows about the URL but hasn't prioritized crawling it

**Action:** Check GSC → Pages → "Why pages aren't indexed" to see which of the 35 sitemap URLs are missing and why.

### Why 1,112 pages are NOT indexed (URL bloat)

Google has discovered 1,112 URLs it chose not to index. These are overwhelmingly junk URLs:

1. **Query parameter variants** — Next.js RSC params (`?_rsc=`), data requests (`?__nextDataReq=`), HubSpot preview params (`?hs_preview=`), ad click IDs (`?fbclid=`, `?gclid=`)
2. **Internal Next.js paths** — `/_next/` static asset URLs discovered during JavaScript rendering
3. **Tracking parameter permutations** — Google Ads, Facebook, LinkedIn UTM parameters creating URL variants

The canonical tags are correctly set (verified: they strip all query parameters), so Google knows these are duplicates. But crawling 1,112 junk URLs wastes crawl budget.

**Fixes implemented in this branch:**
- robots.txt now blocks `/_next/`, `?_rsc=`, `?__nextDataReq=`, `?hs_preview=`, `?fbclid=`, `?gclid=`
- `X-Robots-Tag: noindex, nofollow` header added for `/api/*` and `/admin/*` paths

---

## Action Items

### Immediate (deploy this branch)

| # | Action | Owner | Details |
|---|--------|-------|---------|
| 1 | **Deploy updated robots.txt** | Developer | Blocks crawling of junk URL patterns (query params, `/_next/`) |
| 2 | **Deploy X-Robots-Tag headers** | Developer | Prevents indexing of `/api/*` and `/admin/*` paths |
| 3 | **Check GSC "Pages" report** | Site admin | Go to Indexing → Pages → "Why pages aren't indexed" to identify which of the 35 real pages are still missing |
| 4 | **Request indexing of missing pages** | Site admin | For any real page that isn't indexed, use URL Inspection → "Request Indexing" |

### This week

| # | Action | Owner | Details |
|---|--------|-------|---------|
| 5 | **Set up Bing Webmaster Tools** | Site admin | Verify at [bing.com/webmasters](https://www.bing.com/webmasters), submit sitemap |
| 6 | **Monitor "not indexed" count** | Site admin | After robots.txt deploy, the 1,112 should decrease over 2-4 weeks as Google respects the new rules |
| 7 | **Verify sitemap is submitted** | Site admin | GSC → Sitemaps — confirm `https://estalara.com/sitemap.xml` shows "Success" with 35 URLs |

### Next 2 weeks

| # | Action | Owner | Details |
|---|--------|-------|---------|
| 8 | **Build initial backlinks** | Marketing | Submit to SaaS directories, PropTech listings, startup databases |
| 9 | **Share on social media** | Marketing | LinkedIn company page posts linking to site |
| 10 | **Target 35/35 indexed** | Site admin | All sitemap URLs should be indexed within 2-4 weeks |

---

## Changes Implemented in This Branch

### 1. Improved robots.txt — block junk URL crawling

Updated `app/robots.txt/route.ts` to block URL patterns that waste crawl budget:

- `/_next/` — Next.js internal static asset paths
- `?_rsc=` — React Server Component flight data params
- `?__nextDataReq=` — Next.js data request params
- `?hs_preview=` — HubSpot preview params
- `?fbclid=` — Facebook click IDs
- `?gclid=` — Google Ads click IDs

This should significantly reduce the 1,112 non-indexed URL count over time.

### 2. X-Robots-Tag headers for non-content paths

Added `headers()` config in `next.config.mjs` to emit `X-Robots-Tag: noindex, nofollow` on:

- `/api/*` — API endpoints
- `/admin/*` — Admin routes

### 3. Google Search Console verification meta tag support

Added `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` environment variable support in `app/layout.tsx`. When set, Next.js automatically emits `<meta name="google-site-verification" content="...">` in the HTML head.

### 4. IndexNow API route

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

### 5. IndexNow key info endpoint

Added `app/api/indexnow-key/route.ts` to verify the configured key and its expected file location.

---

## Expected Timeline

After deploying this branch:

| Milestone | Expected Timeframe |
|-----------|-------------------|
| New robots.txt live | Same day (after deploy) |
| Non-indexed count starts dropping | 1–2 weeks |
| Remaining 14 pages indexed (35/35) | 2–4 weeks |
| Non-indexed count below 200 | 4–8 weeks |
| Start ranking for non-brand queries | 4–8 weeks |

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
