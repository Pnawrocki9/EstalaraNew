import { NextRequest, NextResponse } from "next/server"
import { SITE_URL } from "@/lib/site"

const INDEXNOW_KEY = process.env.INDEXNOW_KEY
const INDEXNOW_ENDPOINTS = [
  "https://api.indexnow.org/indexnow",
  "https://www.bing.com/indexnow",
  "https://yandex.com/indexnow",
]

export async function POST(request: NextRequest) {
  if (!INDEXNOW_KEY) {
    return NextResponse.json(
      { error: "INDEXNOW_KEY environment variable not configured" },
      { status: 503 },
    )
  }

  const authHeader = request.headers.get("authorization")
  const expectedToken = process.env.INDEXNOW_API_SECRET
  if (expectedToken && authHeader !== `Bearer ${expectedToken}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  let body: { urls?: string[] }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 })
  }

  const urls = body.urls
  if (!Array.isArray(urls) || urls.length === 0 || urls.length > 10_000) {
    return NextResponse.json(
      { error: "Provide 1–10,000 URLs in the 'urls' array" },
      { status: 400 },
    )
  }

  const payload = {
    host: new URL(SITE_URL).host,
    key: INDEXNOW_KEY,
    keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
    urlList: urls.map((u) =>
      u.startsWith("http") ? u : `${SITE_URL}${u.startsWith("/") ? u : `/${u}`}`,
    ),
  }

  const results = await Promise.allSettled(
    INDEXNOW_ENDPOINTS.map(async (endpoint) => {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify(payload),
      })
      return { endpoint, status: res.status, ok: res.ok }
    }),
  )

  return NextResponse.json({
    submitted: urls.length,
    results: results.map((r) =>
      r.status === "fulfilled" ? r.value : { error: String(r.reason) },
    ),
  })
}
