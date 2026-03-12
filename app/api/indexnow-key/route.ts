import { NextResponse } from "next/server"

/**
 * Returns the IndexNow key for verification purposes.
 * The actual key file must be placed in public/{key}.txt once the key is generated.
 * This endpoint is used by the IndexNow submission route to construct the keyLocation URL.
 */
export async function GET() {
  const key = process.env.INDEXNOW_KEY
  if (!key) {
    return new NextResponse(null, { status: 404 })
  }

  return NextResponse.json({ key, keyFileLocation: `/${key}.txt` })
}
