export async function GET(request: Request) {
  const { origin } = new URL(request.url)

  const lines = [
    "# robots.txt for Estalara — allow AI crawlers and search engines",
    "",
    "User-agent: GPTBot",
    "Allow: /",
    "Disallow: /api/",
    "",
    "User-agent: ChatGPT-User",
    "Allow: /",
    "Disallow: /api/",
    "",
    "User-agent: ClaudeBot",
    "Allow: /",
    "Disallow: /api/",
    "",
    "User-agent: CCBot",
    "Allow: /",
    "Disallow: /api/",
    "",
    "User-agent: PerplexityBot",
    "Allow: /",
    "Disallow: /api/",
    "",
    "User-agent: Googlebot",
    "Allow: /",
    "",
    "User-agent: Bingbot",
    "Allow: /",
    "",
    "User-agent: *",
    "Allow: /",
    "Disallow: /api/",
    "",
    `Sitemap: ${origin}/sitemap.xml`,
    `# LLMs.txt: ${origin}/llms.txt`,
  ].join("\n")

  return new Response(lines, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  })
}
