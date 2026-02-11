const URLS = [
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
