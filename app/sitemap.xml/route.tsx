import { articles, categories } from "../knowledge/_data/articleContent"
import { toAbsoluteUrl } from "@/lib/site"

type SitemapEntry = {
  url: string
  priority: string
  changefreq: string
  lastmod: string
}

const FALLBACK_LASTMOD = "2026-02-11T00:00:00.000Z"

const monthMap: Record<string, number> = {
  january: 0,
  february: 1,
  march: 2,
  april: 3,
  may: 4,
  june: 5,
  july: 6,
  august: 7,
  september: 8,
  october: 9,
  november: 10,
  december: 11,
}

function toIsoDate(rawDate: string | undefined): string {
  if (!rawDate || !rawDate.trim()) {
    return FALLBACK_LASTMOD
  }

  const value = rawDate.trim()

  if (/^\d{4}-\d{2}-\d{2}/.test(value)) {
    const parsed = new Date(value)
    return Number.isNaN(parsed.getTime()) ? FALLBACK_LASTMOD : parsed.toISOString()
  }

  const [monthText, yearText] = value.split(/\s+/)
  if (!monthText || !yearText) {
    return FALLBACK_LASTMOD
  }

  const month = monthMap[monthText.toLowerCase()]
  const year = Number.parseInt(yearText, 10)
  if (month === undefined || Number.isNaN(year)) {
    return FALLBACK_LASTMOD
  }

  return new Date(Date.UTC(year, month, 1)).toISOString()
}

function maxDate(values: string[]): string {
  return values.reduce((latest, current) => (current > latest ? current : latest), FALLBACK_LASTMOD)
}

const STATIC_LASTMOD = toIsoDate(process.env.NEXT_PUBLIC_SITE_LASTMOD || "2026-02-11")

const articleEntries = Object.values(articles).map((article: any): SitemapEntry => ({
  url: `/knowledge/insights/${article.category}/${article.slug}`,
  priority: "0.7",
  changefreq: "monthly",
  lastmod: toIsoDate(article.updatedDate || article.publishedDate),
}))

const categoryEntries = categories.map((category: any): SitemapEntry => {
  const categoryArticleDates = articleEntries
    .filter((entry) => entry.url.startsWith(`/knowledge/insights/${category.id}/`))
    .map((entry) => entry.lastmod)

  return {
    url: `/knowledge/insights/${category.id}`,
    priority: "0.7",
    changefreq: "monthly",
    lastmod: categoryArticleDates.length > 0 ? maxDate(categoryArticleDates) : STATIC_LASTMOD,
  }
})

const latestKnowledgeDate = articleEntries.length > 0 ? maxDate(articleEntries.map((entry) => entry.lastmod)) : STATIC_LASTMOD

const BASE_URLS = [
  { url: "/", priority: "1.0", changefreq: "weekly", lastmod: STATIC_LASTMOD },
  { url: "/book-demo", priority: "0.9", changefreq: "monthly", lastmod: STATIC_LASTMOD },
  { url: "/pl/dla-biur-nieruchomosci", priority: "0.8", changefreq: "monthly", lastmod: STATIC_LASTMOD },
  { url: "/es/para-inmobiliarias", priority: "0.8", changefreq: "monthly", lastmod: STATIC_LASTMOD },
  { url: "/uk/estate-agency-software", priority: "0.8", changefreq: "monthly", lastmod: STATIC_LASTMOD },
  { url: "/us/real-estate-agency-software", priority: "0.8", changefreq: "monthly", lastmod: STATIC_LASTMOD },
  { url: "/ae/real-estate-agency-software-dubai", priority: "0.8", changefreq: "monthly", lastmod: STATIC_LASTMOD },
  { url: "/legal/privacy-policy", priority: "0.5", changefreq: "monthly", lastmod: STATIC_LASTMOD },
  { url: "/legal/terms-and-conditions", priority: "0.5", changefreq: "monthly", lastmod: STATIC_LASTMOD },
  { url: "/legal/cookies-policy", priority: "0.5", changefreq: "monthly", lastmod: STATIC_LASTMOD },
  { url: "/legal/platform-disclaimer", priority: "0.5", changefreq: "monthly", lastmod: STATIC_LASTMOD },
] satisfies SitemapEntry[]

const KNOWLEDGE_STATIC_URLS = [
  { url: "/knowledge", priority: "0.8", changefreq: "weekly", lastmod: latestKnowledgeDate },
  { url: "/knowledge/research", priority: "0.8", changefreq: "monthly", lastmod: latestKnowledgeDate },
  { url: "/knowledge/insights", priority: "0.8", changefreq: "weekly", lastmod: latestKnowledgeDate },
  { url: "/knowledge/privacy", priority: "0.3", changefreq: "yearly", lastmod: STATIC_LASTMOD },
  { url: "/knowledge/terms", priority: "0.3", changefreq: "yearly", lastmod: STATIC_LASTMOD },
] satisfies SitemapEntry[]

const URLS: SitemapEntry[] = [...BASE_URLS, ...KNOWLEDGE_STATIC_URLS, ...categoryEntries, ...articleEntries]

export async function GET() {

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${URLS.map(
  ({ url, priority, changefreq, lastmod }) => `  <url>
    <loc>${toAbsoluteUrl(url)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`,
).join("\n")}
</urlset>`

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400, stale-while-revalidate=86400",
    },
  })
}
