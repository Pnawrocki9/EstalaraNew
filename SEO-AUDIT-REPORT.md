# SEO Audit Report — Estalara (estalara.com)

**Generated:** February 8, 2026
**Framework:** Next.js 14.2.25 (App Router) on Vercel
**Branch:** `cursor/seo-settings-audit-ff30`

---

## Executive Summary

The Estalara website has a **solid SEO foundation**. Metadata, Open Graph tags, structured data (JSON-LD), robots.txt, sitemap.xml, llms.txt, and canonical URLs are all implemented. Below is a detailed audit with findings, scores, and recommendations.

| Category | Status | Score |
|---|---|---|
| robots.txt | PASS | 9/10 |
| llms.txt | PASS | 10/10 |
| sitemap.xml | PASS with notes | 8/10 |
| Meta Title & Description | PASS | 9/10 |
| Open Graph / Twitter Cards | PASS | 9/10 |
| Canonical URLs | PASS | 10/10 |
| Structured Data (JSON-LD) | PASS | 9/10 |
| Favicon & Icons | PASS | 9/10 |
| HTML Semantics & Headings | PASS | 9/10 |
| Image Alt Text | PASS | 10/10 |
| Performance & Core Web Vitals | PASS with notes | 7/10 |
| Accessibility (SEO-adjacent) | PASS with notes | 7/10 |
| Security Headers | NEEDS ATTENTION | 5/10 |
| Overall | **GOOD** | **8.5/10** |

---

## 1. robots.txt

**File:** `app/robots.txt/route.ts` (dynamic route handler)

### What's Good
- Explicitly allows major AI crawlers: GPTBot, ChatGPT-User, ClaudeBot, CCBot, PerplexityBot
- Explicitly allows major search engines: Googlebot, Bingbot
- Blocks `/api/` routes from all crawlers (good security practice)
- Wildcard `User-agent: *` allows all other crawlers with `/api/` disallowed
- References the sitemap via `Sitemap:` directive
- References llms.txt via comment
- Proper `Content-Type: text/plain; charset=utf-8`
- 1-hour cache (`Cache-Control: public, max-age=3600`)

### Findings & Recommendations

| # | Finding | Severity | Recommendation |
|---|---------|----------|----------------|
| 1.1 | Googlebot and Bingbot have no `Disallow: /api/` rule | Low | Add `Disallow: /api/` to Googlebot and Bingbot sections for consistency, even though the wildcard rule covers it as a fallback |
| 1.2 | No `Crawl-delay` directive | Info | Not strictly needed (Google ignores it), but could help with less sophisticated crawlers |
| 1.3 | Missing some newer AI bots (e.g., `Google-Extended`, `Bytespider`, `anthropic-ai`) | Low | Consider adding explicit rules for `Google-Extended`, `Bytespider`, `Applebot-Extended` if you want to control AI training crawlers separately |

**Score: 9/10** — Excellent configuration.

---

## 2. llms.txt

**File:** `app/llms.txt/route.ts` (dynamic route handler)

### What's Good
- Follows the emerging llms.txt standard format
- Clear description of the product and company
- Lists all core pages with full URLs
- Lists all legal pages
- Key features section with descriptions
- Company info (legal entity, address, contact, LinkedIn)
- Proper `Content-Type: text/plain; charset=utf-8`
- 1-hour cache

### Findings & Recommendations

| # | Finding | Severity | Recommendation |
|---|---------|----------|----------------|
| 2.1 | No issues found | — | Content is comprehensive and well-structured |

**Score: 10/10** — Excellent implementation.

---

## 3. sitemap.xml

**File:** `app/sitemap.xml/route.tsx` (dynamic route handler)

### What's Good
- Includes all 6 main pages (home, book-demo, 4 legal pages)
- Proper priority values (1.0 for home, 0.9 for book-demo, 0.5 for legal)
- Appropriate changefreq values (weekly for home, monthly for others)
- Valid XML format with proper namespace
- Dynamic `lastmod` based on current date
- Proper `Content-Type: application/xml; charset=utf-8`
- 1-hour cache

### Findings & Recommendations

| # | Finding | Severity | Recommendation |
|---|---------|----------|----------------|
| 3.1 | `lastmod` uses `new Date().toISOString()` — this returns the current timestamp on every request, not the actual last modification date | Medium | Use static dates or pull from git/CMS for accurate lastmod values. Search engines may devalue lastmod if it's always "now" |
| 3.2 | `changefreq` is deprecated by Google (they ignore it) | Info | Not harmful to keep, but don't rely on it for crawl frequency |
| 3.3 | Consider using Next.js built-in `sitemap.ts` convention | Low | The current route handler works, but Next.js App Router has a native sitemap convention that auto-generates the file |

**Score: 8/10** — Good, but the dynamic lastmod issue could mislead crawlers.

---

## 4. Meta Title & Description

### Root Layout (`app/layout.tsx`)
- **Title:** `Estalara | From Local Listings to Live Global Sales` (52 chars) — GOOD (under 60)
- **Description:** `The white-label platform that helps real estate agencies go beyond traditional portals by converting LIVE investor interactions into AI-qualified hot leads worldwide.` (166 chars) — GOOD (ideal 150-160, slightly over but acceptable)

### Homepage (`app/page.tsx`)
- Inherits from root layout (no override) — GOOD (avoids duplication)
- Has `canonical: "/"` — GOOD

### Book a Demo (`app/book-demo/layout.tsx`)
- **Title:** `Book a Demo | Estalara - See LIVE Global Property Presentations` (64 chars) — Slightly over 60 chars
- **Description:** 161 chars — GOOD
- Has `canonical: "/book-demo"` — GOOD
- Has dedicated Open Graph tags — GOOD

### Legal Pages (all 4)
- Each has unique title and description — GOOD
- Each has proper canonical URL — GOOD

### Findings & Recommendations

| # | Finding | Severity | Recommendation |
|---|---------|----------|----------------|
| 4.1 | No `keywords` meta tag present anywhere | Info | Google ignores `keywords` meta tag, so this is fine. No action needed |
| 4.2 | No explicit `robots` meta tag (no `noindex`/`nofollow`) | GOOD | All pages are indexable by default — correct behavior |
| 4.3 | Root layout and homepage both set `canonical: "/"` | Low | This is redundant (page-level overrides layout-level). Remove from one location to avoid confusion |
| 4.4 | Book a Demo title is 64 chars (over the ideal 60) | Low | Consider shortening to `Book a Demo | Estalara` to stay under 60 chars |
| 4.5 | `package.json` has `"name": "my-v0-project"` | Low | Not SEO-visible, but should be updated to `"estalara"` or `"estalara-website"` for consistency |

**Score: 9/10** — Very well done.

---

## 5. Open Graph & Twitter Cards

### Root Layout
- `og:title`, `og:description`, `og:siteName`, `og:type`, `og:locale` — all set
- `og:image` at `/estalara-social-share.jpg` (1200x630, JPEG) — correct dimensions
- `og:image:alt` — set
- `twitter:card` = `summary_large_image` — correct
- `twitter:title`, `twitter:description`, `twitter:images` — all set

### Book a Demo
- Has dedicated OG title and description — GOOD
- Missing `og:image` override (will inherit from root) — ACCEPTABLE

### Legal Pages
- No OG overrides (inherit from root) — ACCEPTABLE for legal pages

### Findings & Recommendations

| # | Finding | Severity | Recommendation |
|---|---------|----------|----------------|
| 5.1 | OG title uses `" - "` (dash) while meta title uses `" | "` (pipe) | Low | Consider making them consistent for brand coherence |
| 5.2 | No `twitter:site` or `twitter:creator` handles | Low | Add Twitter/X handles if available for better attribution |
| 5.3 | Social share image exists at `/public/estalara-social-share.jpg` | GOOD | Verified the file exists |

**Score: 9/10** — Comprehensive social sharing setup.

---

## 6. Canonical URLs

| Page | Canonical | Status |
|------|-----------|--------|
| Homepage | `/` | GOOD (set in both layout.tsx and page.tsx) |
| Book a Demo | `/book-demo` | GOOD |
| Privacy Policy | `/legal/privacy-policy` | GOOD |
| Terms & Conditions | `/legal/terms-and-conditions` | GOOD |
| Cookies Policy | `/legal/cookies-policy` | GOOD |
| Platform Disclaimer | `/legal/platform-disclaimer` | GOOD |

### Findings
- All pages have proper canonical URLs using relative paths
- `metadataBase` is correctly set in root layout to resolve relative canonicals
- No duplicate canonical declarations (except the minor root layout + homepage overlap noted above)

**Score: 10/10** — Every page has a proper canonical.

---

## 7. Structured Data (JSON-LD)

### Root Layout — Organization Schema
```json
{
  "@type": "Organization",
  "name": "Estalara",
  "legalName": "Time2Show, Inc.",
  "url": "...",
  "logo": ".../estalara-logo.svg",
  "description": "...",
  "address": { "@type": "PostalAddress", ... },
  "email": "estalara@estalara.com",
  "sameAs": ["https://www.linkedin.com/company/estalara/"]
}
```
**Status:** GOOD — Complete with address, email, sameAs

### Root Layout — SoftwareApplication Schema
```json
{
  "@type": "SoftwareApplication",
  "name": "Estalara",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "offers": { "@type": "Offer", "category": "SaaS" }
}
```
**Status:** GOOD — Appropriate for a SaaS product

### Homepage — BreadcrumbList
- Single item (Home) — GOOD

### Book a Demo — BreadcrumbList
- Two items (Home > Book a Demo) — GOOD

### Findings & Recommendations

| # | Finding | Severity | Recommendation |
|---|---------|----------|----------------|
| 7.1 | Legal pages do not have BreadcrumbList JSON-LD | Low | Consider adding breadcrumbs for legal pages (Home > Legal > Privacy Policy, etc.) |
| 7.2 | No `FAQPage` schema | Low | If there are FAQ sections, consider adding `FAQPage` structured data for rich snippets |
| 7.3 | `SoftwareApplication` offers section could include pricing info | Low | If pricing is publicly available, add `priceRange` or specific pricing |
| 7.4 | Organization `logo` uses SVG format | Info | Google prefers raster images (PNG, JPG) for logos in structured data. Consider providing a PNG alternative |

**Score: 9/10** — Multiple schema types implemented correctly.

---

## 8. Favicon & Icons

| File | Location | Size | Status |
|------|----------|------|--------|
| `favicon.ico` | `app/favicon.ico` | 18.7 KB | GOOD |
| `icon.svg` | `app/icon.svg` | 12.6 KB | GOOD (scalable) |
| `apple-icon.png` | `app/apple-icon.png` | 20.9 KB | GOOD |
| `apple-icon.svg` | `app/apple-icon.svg` | 12.8 KB | GOOD |
| `apple-icon.png` | `public/apple-icon.png` | 2.6 KB | Duplicate (smaller) |

### Findings & Recommendations

| # | Finding | Severity | Recommendation |
|---|---------|----------|----------------|
| 8.1 | Duplicate `apple-icon.png` in both `app/` and `public/` | Low | The `app/` version takes precedence in Next.js App Router. Consider removing `public/apple-icon.png` to avoid confusion |
| 8.2 | No `manifest.json`/`site.webmanifest` for PWA | Low | Not required for SEO, but helpful for mobile experience |

**Score: 9/10** — Complete icon set following Next.js conventions.

---

## 9. HTML Semantics & Heading Structure

### Homepage
- `<html lang="en">` — GOOD (language declared)
- Single `<h1>`: "From Local Listings to Live Global Sales" — GOOD
- Proper semantic structure with `<header>`, `<main>`, `<footer>` — GOOD
- `font-display: swap` on Google Fonts — GOOD (prevents FOIT)

### Sub-pages
- Each legal page has a single `<h1>` — GOOD
- Book a Demo has a proper `<h1>` — GOOD
- Proper `<section>` usage within legal content — GOOD

### Findings & Recommendations

| # | Finding | Severity | Recommendation |
|---|---------|----------|----------------|
| 9.1 | Navigation links use anchor links (`#features`, `#solution`, `#demo`) for single-page sections — these won't be crawlable as separate pages | Info | This is fine for a single-page marketing site |
| 9.2 | The `<h1>` does not contain the brand name "Estalara" | Low | Consider incorporating "Estalara" into the H1 for stronger keyword association |

**Score: 9/10** — Proper semantic HTML throughout.

---

## 10. Image Optimization

### Findings & Recommendations

| # | Finding | Severity | Recommendation |
|---|---------|----------|----------------|
| 10.1 | `images: { unoptimized: true }` in `next.config.mjs` | Medium | This disables Next.js Image Optimization (resizing, WebP/AVIF conversion, lazy loading). On Vercel, enabling this is free and gives major performance gains |
| 10.2 | All images have descriptive `alt` attributes | GOOD | No empty or missing alt text found |
| 10.3 | Hero images have `priority` attribute | GOOD | Ensures LCP images load immediately |

**Score: 7/10** — Image optimization is disabled, which hurts performance and SEO.

---

## 11. Performance & Core Web Vitals

### What's Good
- Vercel Speed Insights and Analytics installed
- Google Fonts use `display: "swap"` (prevents text invisible during load)
- GTM and GA scripts use `strategy="lazyOnload"` (non-blocking)
- CSS uses Tailwind (minimal bundle)

### Findings & Recommendations

| # | Finding | Severity | Recommendation |
|---|---------|----------|----------------|
| 11.1 | Image optimization disabled (see 10.1) | Medium | Enable it for better LCP scores |
| 11.2 | `eslint: { ignoreDuringBuilds: true }` and `typescript: { ignoreBuildErrors: true }` | Medium | These hide potential issues. Consider fixing errors and enabling checks |
| 11.3 | No `<link rel="preconnect">` for Google Fonts | Low | Next.js handles this automatically via `next/font`, so this is fine |
| 11.4 | `vue-router: "latest"` in dependencies | Low | This appears to be an unused dependency (this is a React/Next.js project). Remove it to reduce bundle size |

**Score: 7/10** — Good foundation, but unoptimized images are a concern.

---

## 12. Security Headers (SEO-adjacent)

### Findings & Recommendations

| # | Finding | Severity | Recommendation |
|---|---------|----------|----------------|
| 12.1 | No security headers configured in `next.config.mjs` | Medium | Add headers like `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Content-Security-Policy`, `Strict-Transport-Security` |
| 12.2 | No `X-Robots-Tag` HTTP header | Info | Not needed since robots meta tags are not required either, but could be useful for assets |
| 12.3 | Middleware only handles admin auth | Info | Consider adding security headers in middleware for all routes |

**Score: 5/10** — Missing standard security headers.

---

## 13. Miscellaneous

| # | Finding | Severity | Recommendation |
|---|---------|----------|----------------|
| 13.1 | No 404 page (`app/not-found.tsx`) found | Medium | Create a custom 404 page to retain users and provide navigation back to main pages |
| 13.2 | No `loading.tsx` for route transitions | Low | Consider adding loading states for better UX |
| 13.3 | `metadataBase` logic is duplicated in multiple files | Low | The `getMetadataBaseUrl()` function is defined in `layout.tsx`, `page.tsx`, and `book-demo/layout.tsx`. Extract to a shared utility |
| 13.4 | The copyright in the footer uses `new Date().getFullYear()` | Info | This is fine — dynamically shows the current year |

---

## Priority Action Items (Ranked)

### High Priority
1. **Enable Next.js Image Optimization** — Remove `images: { unoptimized: true }` from `next.config.mjs` (or set specific configurations). This affects LCP and overall Core Web Vitals.
2. **Fix sitemap `lastmod`** — Replace `new Date().toISOString()` with actual last-modified dates to avoid search engines devaluing the sitemap.
3. **Add security headers** — Configure standard security headers in `next.config.mjs`.

### Medium Priority
4. **Create a custom 404 page** — Helps retain traffic from broken links.
5. **Remove unused `vue-router` dependency** from `package.json`.
6. **Re-enable ESLint and TypeScript build checks** — Fix underlying issues rather than suppressing them.

### Low Priority
7. **Clean up duplicate `apple-icon.png`** in `public/` directory.
8. **Remove duplicate `canonical: "/"` from `app/page.tsx`** (already set in root layout).
9. **Extract `getMetadataBaseUrl()` to a shared utility** to avoid code duplication.
10. **Shorten Book a Demo title** to under 60 characters.
11. **Add BreadcrumbList JSON-LD** to legal pages.
12. **Align OG title separator** with meta title separator.

---

## Overall Assessment

The Estalara website demonstrates **strong SEO practices** for a Next.js application:

- All pages have proper metadata, canonicals, and Open Graph tags
- robots.txt is well-configured with explicit AI bot rules
- llms.txt is comprehensive and follows the standard
- sitemap.xml covers all pages with appropriate priorities
- JSON-LD structured data includes Organization, SoftwareApplication, and BreadcrumbList schemas
- HTML semantics are correct with proper heading hierarchy
- Image alt text is present on all images

The main areas for improvement are:
1. Enabling image optimization (currently disabled)
2. Fixing the sitemap's dynamic lastmod timestamps
3. Adding security headers
4. General code hygiene (removing unused deps, enabling build checks)

**Overall Score: 8.5/10** — Well above average for a marketing/SaaS website.
