import { NextResponse } from "next/server"
import { z } from "zod"
import { supabase } from "@/lib/supabase"
import { Resend } from "resend"

// ---------------------------------------------------------------------------
// Validation schema
// ---------------------------------------------------------------------------
const bookDemoSchema = z.object({
  firstName: z.string().min(1, "First name is required").max(100),
  lastName: z.string().min(1, "Last name is required").max(100),
  email: z.string().email("Invalid email address"),
  company: z.string().min(1, "Agency name is required").max(200),
  agencySize: z.enum(["1-5", "6-20", "21-50", "51-100", "100+"]),
  country: z.string().min(1, "Country is required").max(10),
  message: z.string().max(2000).optional().default(""),
})

// ---------------------------------------------------------------------------
// Country label mapping (for nicer emails)
// ---------------------------------------------------------------------------
const COUNTRY_LABELS: Record<string, string> = {
  us: "United States",
  uk: "United Kingdom",
  uae: "United Arab Emirates",
  es: "Spain",
  pt: "Portugal",
  fr: "France",
  it: "Italy",
  pl: "Poland",
  de: "Germany",
  ch: "Switzerland",
  other: "Other",
}

// ---------------------------------------------------------------------------
// Rate-limiting (simple in-memory, per-IP, 5 requests / 15 min)
// ---------------------------------------------------------------------------
const rateLimitMap = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT_WINDOW = 15 * 60 * 1000 // 15 minutes
const RATE_LIMIT_MAX = 5

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimitMap.get(ip)

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW })
    return false
  }

  entry.count++
  return entry.count > RATE_LIMIT_MAX
}

// ---------------------------------------------------------------------------
// POST handler
// ---------------------------------------------------------------------------
export async function POST(request: Request) {
  try {
    // --- Rate limiting ---
    const forwarded = request.headers.get("x-forwarded-for")
    const ip = forwarded?.split(",")[0]?.trim() || "unknown"

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      )
    }

    // --- Parse & validate body ---
    const body = await request.json()
    const result = bookDemoSchema.safeParse(body)

    if (!result.success) {
      return NextResponse.json(
        { error: "Validation failed", details: result.error.flatten().fieldErrors },
        { status: 400 }
      )
    }

    const data = result.data

    // --- Store in Supabase ---
    if (supabase) {
      const { error: dbError } = await supabase.from("demo_requests").insert({
        first_name: data.firstName,
        last_name: data.lastName,
        email: data.email,
        company: data.company,
        agency_size: data.agencySize,
        country: data.country,
        message: data.message || "",
        ip_address: ip,
      })

      if (dbError) {
        console.error("Supabase insert error:", dbError)
        // Don't fail the request – still send notification
      }
    } else {
      console.warn("Supabase not configured – skipping database insert")
    }

    // --- Send email notification via Resend ---
    const resendApiKey = process.env.RESEND_API_KEY
    const notificationEmail = process.env.NOTIFICATION_EMAIL

    if (resendApiKey && notificationEmail) {
      const resend = new Resend(resendApiKey)
      const countryLabel = COUNTRY_LABELS[data.country] || data.country

      try {
        await resend.emails.send({
          from: process.env.RESEND_FROM_EMAIL || "Estalara <onboarding@resend.dev>",
          to: notificationEmail,
          subject: `🏢 New Demo Request from ${data.firstName} ${data.lastName} – ${data.company}`,
          html: `
            <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
              <h2 style="color: #1A1A1A; margin-bottom: 24px;">New Demo Request</h2>
              
              <table style="width: 100%; border-collapse: collapse;">
                <tr style="border-bottom: 1px solid #E8E4DF;">
                  <td style="padding: 12px 0; color: #5C5C5C; width: 140px;">Name</td>
                  <td style="padding: 12px 0; color: #1A1A1A; font-weight: 500;">${data.firstName} ${data.lastName}</td>
                </tr>
                <tr style="border-bottom: 1px solid #E8E4DF;">
                  <td style="padding: 12px 0; color: #5C5C5C;">Email</td>
                  <td style="padding: 12px 0;"><a href="mailto:${data.email}" style="color: #1A1A1A; font-weight: 500;">${data.email}</a></td>
                </tr>
                <tr style="border-bottom: 1px solid #E8E4DF;">
                  <td style="padding: 12px 0; color: #5C5C5C;">Agency</td>
                  <td style="padding: 12px 0; color: #1A1A1A; font-weight: 500;">${data.company}</td>
                </tr>
                <tr style="border-bottom: 1px solid #E8E4DF;">
                  <td style="padding: 12px 0; color: #5C5C5C;">Agency Size</td>
                  <td style="padding: 12px 0; color: #1A1A1A; font-weight: 500;">${data.agencySize} agents</td>
                </tr>
                <tr style="border-bottom: 1px solid #E8E4DF;">
                  <td style="padding: 12px 0; color: #5C5C5C;">Country</td>
                  <td style="padding: 12px 0; color: #1A1A1A; font-weight: 500;">${countryLabel}</td>
                </tr>
                ${data.message ? `
                <tr>
                  <td style="padding: 12px 0; color: #5C5C5C; vertical-align: top;">Message</td>
                  <td style="padding: 12px 0; color: #1A1A1A;">${data.message}</td>
                </tr>
                ` : ""}
              </table>

              <div style="margin-top: 24px; padding: 16px; background: #F8F6F3; border-radius: 8px;">
                <p style="margin: 0; font-size: 13px; color: #5C5C5C;">
                  Submitted at ${new Date().toLocaleString("en-US", { timeZone: "UTC", dateStyle: "full", timeStyle: "short" })} UTC
                </p>
              </div>
            </div>
          `,
        })
      } catch (emailError) {
        console.error("Failed to send notification email:", emailError)
        // Don't fail the request – the data is saved
      }
    } else {
      console.warn("Resend not configured – skipping email notification")
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error("Book demo API error:", error)
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    )
  }
}
