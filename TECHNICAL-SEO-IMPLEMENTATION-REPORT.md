# Technical SEO Implementation Report — Estalara

**Date:** 2026-02-11  
**Scope:** Immediate technical SEO hardening based on full code + runtime crawl analysis

---

## 1) What was fixed now

### A. Crawlability, indexability, and canonical control

1. **Fixed soft-404 behavior on Knowledge dynamic routes**
   - Invalid category and invalid article URLs now return true **404** responses.
   - Added strict static param behavior for dynamic routes:
     - `app/knowledge/insights/[categoryId]/page.tsx`
     - `app/knowledge/insights/[categoryId]/[slug]/page.tsx`
   - Added `notFound()` handling and `dynamicParams = false`.

2. **Fixed duplicate article URL risk (category/slug mismatch)**
   - Articles now require matching category + slug.
   - Mismatched URLs now return **404** (instead of serving duplicate content).
   - Canonical metadata generation now uses the article’s actual category.

3. **Canonical host consistency hardening**
   - Added shared canonical site utility:
     - `lib/site.ts`
   - Standardized metadata, robots, llms, and sitemap output to a single canonical domain.
   - Added host-level redirect rule for non-www -> www:
     - `next.config.mjs`

4. **Removed risky parent canonical inheritance**
   - Removed root canonical from `app/layout.tsx` to avoid accidental canonical leakage.
   - Home canonical remains defined explicitly in `app/page.tsx`.

---

### B. International SEO (hreflang and language targeting signals)

1. **Added hreflang alternates for homepage + regional pages**
   - `x-default`, `en`, `en-US`, `en-GB`, `en-AE`, `es-ES`, `pl-PL`
   - Implemented in:
     - `app/page.tsx`
     - `app/us/real-estate-agency-software/page.tsx`
     - `app/uk/estate-agency-software/page.tsx`
     - `app/ae/real-estate-agency-software-dubai/page.tsx`
     - `app/es/para-inmobiliarias/page.tsx`
     - `app/pl/dla-biur-nieruchomosci/page.tsx`

2. **Added page-level language hints on regional `<main>` blocks**
   - `lang="en-US"`, `lang="en-GB"`, `lang="en-AE"`, `lang="es-ES"`, `lang="pl-PL"`

---

### C. Robots, sitemap, and llms.txt quality

1. **robots.txt improvements**
   - Added explicit disallow rules for `/api/` and `/admin/` across major bots + wildcard.
   - Added canonical absolute sitemap/llms URLs.
   - File: `app/robots.txt/route.ts`

2. **sitemap.xml improvements**
   - Removed request-time fake `lastmod` behavior.
   - Added stable per-URL `lastmod` logic:
     - static pages use configured static date
     - article URLs use article updated/published dates
     - category/hub dates use latest related article date
   - Added stronger caching strategy.
   - File: `app/sitemap.xml/route.tsx`

3. **llms.txt expansion for AI discoverability**
   - Added canonical + sitemap references.
   - Added Knowledge hubs and all article URLs (not just marketing/legal pages).
   - File: `app/llms.txt/route.ts`

---

### D. Internal linking architecture

1. **Resolved orphan sitemap URLs from internal crawl graph**
   - Added links to `/knowledge/privacy` and `/knowledge/terms` in Knowledge footer.
   - Added `/legal/platform-disclaimer` in global footer legal links.
   - Files:
     - `app/knowledge/_components/knowledge-footer.tsx`
     - `app/estalara/_components/footer.tsx`

2. **Fixed broken section anchor**
   - Footer link `/#ai` now targets an existing section:
     - added `id="ai"` in `app/estalara/_components/ai-capabilities.tsx`

3. **Cleaned internal absolute same-domain links**
   - Replaced unnecessary absolute URLs with internal links in key headers/pages.

---

### E. Rendering semantics and structured data

1. **Improved article rendering semantics**
   - Replaced fragile line-by-line rendering with parser handling:
     - headings
     - proper `<ul>/<ol>/<li>` list trees
     - markdown tables -> semantic `<table>`
     - code fences
   - File: `app/knowledge/insights/[categoryId]/[slug]/page.tsx`

2. **Added article-level schema**
   - Added `Article` JSON-LD + `BreadcrumbList` JSON-LD per Knowledge article.
   - File: `app/knowledge/insights/[categoryId]/[slug]/page.tsx`

3. **Added custom 404 UX page**
   - File: `app/not-found.tsx`

---

### F. Performance-related technical SEO

1. **Re-enabled Next.js image optimization**
   - Removed `images.unoptimized: true` from config.
   - File: `next.config.mjs`

2. **Adjusted hero image preload strategy**
   - Only first hero image uses `priority`, preventing over-preload.
   - File: `app/estalara/_components/hero-image-transition.tsx`

---

## 2) Verification summary (post-fix)

- Production build passes successfully: `npm run build`
- Dynamic status validation:
  - unknown category -> **404**
  - unknown article -> **404**
  - mismatched category/slug -> **404**
  - valid article -> **200**
- Internal crawl vs sitemap:
  - orphan sitemap URLs from homepage crawl: **0**
- Article rendering checks:
  - markdown table content now visible in rendered HTML
  - semantic table tag present
  - malformed orphan `<li>` issue resolved
- Regional pages:
  - hreflang alternate tags emitted
  - language hints present on regional page main content

---

## 3) ToDo list for the following days

## Priority: next 1–3 days

1. **Upgrade Next.js to patched secure release**
   - Current version reports a known vulnerability warning during install.
   - Re-run build and smoke tests after upgrade.

2. **Re-enable strict quality gates in CI/build**
   - Remove:
     - `eslint.ignoreDuringBuilds: true`
     - `typescript.ignoreBuildErrors: true`
   - Fix surfaced lint/type issues.

3. **Validate canonical host redirect in production edge**
   - Confirm no redirect loops.
   - Confirm all variants (`http`, `https`, `www`, non-`www`) converge correctly.

4. **Submit updated sitemap and validate in GSC**
   - Confirm recrawl and soft-404 reduction trend.

---

## Priority: 1–2 weeks

1. **Locale architecture enhancement**
   - Move from page-level `main lang` hints to true route-level language architecture so `<html lang>` reflects locale per localized route.

2. **Add structured data on regional landing pages**
   - Add `WebPage`/`Product` or `SoftwareApplication` detail where appropriate.
   - Add regional breadcrumb schema.

3. **Sitemap split strategy (optional scaling)**
   - Consider separate sitemap index if Knowledge section grows rapidly.

4. **Technical SEO monitoring dashboard**
   - Track:
     - 404/soft-404 counts
     - indexed URL count
     - duplicate URL patterns
     - CWV for top landing pages

---

## Priority: 1–2 months

1. **Server-side locale negotiation strategy**
   - Geo/language-based routing with explicit canonicalization policies.

2. **Automated SEO regression tests**
   - Add test suite to validate:
     - canonical correctness
     - hreflang cluster output
     - structured data presence
     - non-200 handling for invalid dynamic params

3. **Further CWV optimization**
   - Tune hero and animation-heavy components for LCP/INP on mobile.
   - Add RUM alerts by template type.

---

## 4) Files touched in this implementation

- `lib/site.ts`
- `next.config.mjs`
- `app/layout.tsx`
- `app/page.tsx`
- `app/book-demo/layout.tsx`
- `app/knowledge/_lib/metadata.ts`
- `app/robots.txt/route.ts`
- `app/sitemap.xml/route.tsx`
- `app/llms.txt/route.ts`
- `app/knowledge/insights/[categoryId]/page.tsx`
- `app/knowledge/insights/[categoryId]/[slug]/page.tsx`
- `app/knowledge/page.tsx`
- `app/knowledge/_components/knowledge-header.tsx`
- `app/knowledge/_components/knowledge-footer.tsx`
- `app/estalara/_components/header.tsx`
- `app/estalara/_components/footer.tsx`
- `app/estalara/_components/ai-capabilities.tsx`
- `app/estalara/_components/hero-image-transition.tsx`
- `app/estalara/_components/share-button.tsx`
- `app/us/real-estate-agency-software/page.tsx`
- `app/uk/estate-agency-software/page.tsx`
- `app/ae/real-estate-agency-software-dubai/page.tsx`
- `app/es/para-inmobiliarias/page.tsx`
- `app/pl/dla-biur-nieruchomosci/page.tsx`
- `app/not-found.tsx`

