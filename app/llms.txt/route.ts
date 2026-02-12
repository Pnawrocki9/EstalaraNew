import { articles, categories } from "../knowledge/_data/articleContent"
import { SITE_URL, toAbsoluteUrl } from "@/lib/site"

function toLink(pathname: string): string {
  return toAbsoluteUrl(pathname)
}

export async function GET() {
  const corePages = [
    "/",
    "/book-demo",
    "/pl/dla-biur-nieruchomosci",
    "/es/para-inmobiliarias",
    "/uk/estate-agency-software",
    "/us/real-estate-agency-software",
    "/ae/real-estate-agency-software-dubai",
  ]

  const legalPages = [
    "/legal/privacy-policy",
    "/legal/terms-and-conditions",
    "/legal/cookies-policy",
    "/legal/platform-disclaimer",
  ]

  const knowledgeHubs = [
    "/knowledge",
    "/knowledge/research",
    "/knowledge/insights",
    ...categories.map((category: any) => `/knowledge/insights/${category.id}`),
  ]

  const knowledgeArticles = Object.values(articles).map(
    (article: any) => `/knowledge/insights/${article.category}/${article.slug}`,
  )

  const content = `# Estalara

> The white-label platform that helps real estate agencies go beyond traditional portals by converting LIVE investor interactions into AI-qualified hot leads worldwide.

Canonical: ${SITE_URL}
Sitemap: ${toLink("/sitemap.xml")}
Last-Reviewed: 2026-02-11

## Core Pages
${corePages.map((path) => `- [${path === "/" ? "Home" : path.slice(1)}](${toLink(path)})`).join("\n")}

## Knowledge Hubs
${knowledgeHubs.map((path) => `- [${path.slice(1)}](${toLink(path)})`).join("\n")}

## Knowledge Articles
${knowledgeArticles.map((path) => `- [${path.slice(1)}](${toLink(path)})`).join("\n")}

## Legal
${legalPages.map((path) => `- [${path.slice(1)}](${toLink(path)})`).join("\n")}

## Key Features
- **LIVE Global Presentations**: Present properties to investors worldwide with 1-to-many interactive showcases
- **AI Lead Intent Scoring**: Real-time sentiment analysis identifies hot prospects during live sessions
- **Multilingual AI Translation**: Automatic translation to German, Spanish, Mandarin, and more
- **White-Label Platform**: Operates under the agency's own brand identity
- **Flash Import**: Paste a listing link from any portal and auto-convert to a high-performing property page
- **AI-Driven Advertising**: Auto-generate campaigns targeting international investors on Facebook, Google, and more

## Company
- **Legal Entity**: Time2Show, Inc. (d/b/a Estalara)
- **Registered Address**: 1111B S Governors Ave STE 20579, Dover, DE 19904, USA
- **Contact**: estalara@estalara.com
- **LinkedIn**: https://www.linkedin.com/company/estalara/
`

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  })
}
