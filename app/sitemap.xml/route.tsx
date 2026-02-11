import { articles, categories } from "../knowledge/_data/articleContent"

const BASE_URLS = [
  { url: "/", priority: "1.0", changefreq: "weekly" },
  { url: "/book-demo", priority: "0.9", changefreq: "monthly" },
  { url: "/pl/dla-biur-nieruchomosci", priority: "0.8", changefreq: "monthly" },
  { url: "/es/para-inmobiliarias", priority: "0.8", changefreq: "monthly" },
  { url: "/uk/estate-agency-software", priority: "0.8", changefreq: "monthly" },
  { url: "/us/real-estate-agency-software", priority: "0.8", changefreq: "monthly" },
  { url: "/ae/real-estate-agency-software-dubai", priority: "0.8", changefreq: "monthly" },
  { url: "/legal/privacy-policy", priority: "0.5", changefreq: "monthly" },
  { url: "/legal/terms-and-conditions", priority: "0.5", changefreq: "monthly" },
  { url: "/legal/cookies-policy", priority: "0.5", changefreq: "monthly" },
  { url: "/legal/platform-disclaimer", priority: "0.5", changefreq: "monthly" },
]

const KNOWLEDGE_STATIC_URLS = [
  { url: "/knowledge", priority: "0.8", changefreq: "weekly" },
  { url: "/knowledge/research", priority: "0.8", changefreq: "monthly" },
  { url: "/knowledge/insights", priority: "0.8", changefreq: "weekly" },
  { url: "/knowledge/privacy", priority: "0.3", changefreq: "yearly" },
  { url: "/knowledge/terms", priority: "0.3", changefreq: "yearly" },
]

const KNOWLEDGE_CATEGORY_URLS = categories.map((category: any) => ({
  url: `/knowledge/insights/${category.id}`,
  priority: "0.7",
  changefreq: "monthly",
}))

const KNOWLEDGE_ARTICLE_URLS = Object.values(articles).map((article: any) => ({
  url: `/knowledge/insights/${article.category}/${article.slug}`,
  priority: "0.7",
  changefreq: "monthly",
}))

const URLS = [...BASE_URLS, ...KNOWLEDGE_STATIC_URLS, ...KNOWLEDGE_CATEGORY_URLS, ...KNOWLEDGE_ARTICLE_URLS]

export async function GET(request: Request) {
  const { origin } = new URL(request.url)
  const lastmod = new Date().toISOString()

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${URLS.map(
  ({ url, priority, changefreq }) => `  <url>
    <loc>${origin}${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`,
).join("\n")}
</urlset>`

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  })
}
