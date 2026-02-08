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
    let dbSuccess = false
    let emailSuccess = false
    let contactSuccess = false

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
        console.error("[book-demo] Supabase insert error:", JSON.stringify(dbError))
      } else {
        dbSuccess = true
        console.log("[book-demo] Successfully stored demo request in Supabase for:", data.email)
      }
    } else {
      console.warn("[book-demo] Supabase not configured – skipping database insert. Check SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY env vars.")
    }

    // --- Resend: add contact to audience + send email notification ---
    const resendApiKey = process.env.RESEND_API_KEY
    const notificationEmail = process.env.NOTIFICATION_EMAIL
    const audienceId = process.env.RESEND_AUDIENCE_ID

    if (resendApiKey) {
      const resend = new Resend(resendApiKey)

      // --- Add contact to Resend audience ---
      if (audienceId) {
        try {
          await resend.contacts.create({
            audienceId,
            email: data.email,
            firstName: data.firstName,
            lastName: data.lastName,
            unsubscribed: false,
          })
          contactSuccess = true
          console.log("[book-demo] Successfully added contact to Resend audience:", data.email)
        } catch (contactError: any) {
          console.error("[book-demo] Failed to add contact to Resend audience:", contactError?.message || JSON.stringify(contactError))
        }
      } else {
        console.warn("[book-demo] RESEND_AUDIENCE_ID not set – skipping contact storage in Resend.")
      }

      // --- Send email notification ---
      if (notificationEmail) {
        const countryLabel = COUNTRY_LABELS[data.country] || data.country
        // IMPORTANT: Use onboarding@resend.dev as the from address.
        // Custom domain "from" addresses require a verified domain in Resend.
        // See: https://resend.com/docs/dashboard/domains/introduction
        const fromEmail = process.env.RESEND_FROM_EMAIL || "Estalara <onboarding@resend.dev>"

        try {
          const { data: emailData, error: emailError } = await resend.emails.send({
            from: fromEmail,
            to: notificationEmail,
            subject: `New Demo Request from ${data.firstName} ${data.lastName} – ${data.company}`,
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

          if (emailError) {
            console.error("[book-demo] Resend email send error:", JSON.stringify(emailError))
            console.error("[book-demo] Hint: If you see a 403/validation_error, your NOTIFICATION_EMAIL must match the Resend account owner email OR you need a verified domain. Current from:", fromEmail, "Current to:", notificationEmail)
          } else {
            emailSuccess = true
            console.log("[book-demo] Successfully sent notification email, id:", emailData?.id)
          }
        } catch (emailError: any) {
          console.error("[book-demo] Failed to send notification email:", emailError?.message || JSON.stringify(emailError))
          console.error("[book-demo] Hint: Verify RESEND_FROM_EMAIL uses a verified domain or 'onboarding@resend.dev'. NOTIFICATION_EMAIL must be the Resend account owner email for free tier.")
        }
      } else {
        console.warn("[book-demo] NOTIFICATION_EMAIL not set – skipping email notification.")
      }
    } else {
      console.warn("[book-demo] RESEND_API_KEY not set – skipping all Resend operations (email + contacts).")
    }

    // If neither database nor any Resend operation succeeded, return an error
    if (!dbSuccess && !emailSuccess && !contactSuccess) {
      console.error("[book-demo] All operations failed for submission from:", data.email)
      return NextResponse.json(
        { error: "We couldn't process your request right now. Please try again later or contact us directly." },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error("[book-demo] Unhandled API error:", error)
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    )
  }
}
