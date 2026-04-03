import { toAbsoluteUrl } from "@/lib/site"

const SHARED_DISALLOW = [
  "Disallow: /api/",
  "Disallow: /admin/",
  "Disallow: /*?_rsc=",
  "Disallow: /*?__nextDataReq=",
  "Disallow: /*?hs_preview=",
  "Disallow: /*?fbclid=",
  "Disallow: /*?gclid=",
]

function botBlock(name: string): string[] {
  return [`User-agent: ${name}`, "Allow: /", ...SHARED_DISALLOW, ""]
}

export async function GET() {
  const lines = [
    "# robots.txt for Estalara",
    "",
    ...botBlock("GPTBot"),
    ...botBlock("ChatGPT-User"),
    ...botBlock("ClaudeBot"),
    ...botBlock("CCBot"),
    ...botBlock("PerplexityBot"),
    ...botBlock("Googlebot"),
    ...botBlock("Bingbot"),
    ...botBlock("*"),
    `Sitemap: ${toAbsoluteUrl("/sitemap.xml")}`,
    `# llms.txt: ${toAbsoluteUrl("/llms.txt")}`,
    "",
  ].join("\n")

  return new Response(lines, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  })
}
