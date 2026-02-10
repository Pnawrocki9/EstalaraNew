import type React from "react"
import "./globals.css"
import "./estalara.css"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import Script from "next/script"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

function getMetadataBaseUrl() {
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`
  }
  return "http://localhost:3000"
}

const siteUrl = getMetadataBaseUrl()

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Estalara | From Local Listings to Live Global Sales",
  description:
    "The white-label platform that helps real estate agencies go beyond traditional portals by converting LIVE investor interactions into AI-qualified hot leads worldwide.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Estalara - From Local Listings to Live Global Sales",
    description:
      "The white-label platform that helps real estate agencies go beyond traditional portals with LIVE investor interactions and AI-qualified hot leads.",
    siteName: "Estalara",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/estalara-social-share.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Estalara - LIVE property presentations and AI-powered lead intent scoring",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Estalara - From Local Listings to Live Global Sales",
    description:
      "The white-label platform that helps real estate agencies go beyond traditional portals with LIVE investor interactions and AI-qualified hot leads.",
    images: [
      {
        url: "/estalara-social-share.jpg",
        width: 1200,
        height: 630,
        alt: "Estalara - LIVE property presentations and AI-powered lead intent scoring",
      },
    ],
  },
}

// JSON-LD Structured Data
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Estalara",
  legalName: "Time2Show, Inc.",
  url: siteUrl,
  logo: `${siteUrl}/images/estalara/estalara-logo.svg`,
  description:
    "The white-label platform that helps real estate agencies go beyond traditional portals by converting LIVE investor interactions into AI-qualified hot leads worldwide.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1111B S Governors Ave STE 20579",
    addressLocality: "Dover",
    addressRegion: "DE",
    postalCode: "19904",
    addressCountry: "US",
  },
  email: "estalara@estalara.com",
  sameAs: [
    "https://www.linkedin.com/company/estalara/",
  ],
}

const softwareApplicationJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Estalara",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "White-label SaaS platform for real estate agencies featuring LIVE global property presentations, AI-powered lead intent scoring, multilingual streaming, and automated advertising campaigns.",
  offers: {
    "@type": "Offer",
    category: "SaaS",
    availability: "https://schema.org/OnlineOnly",
  },
  creator: {
    "@type": "Organization",
    name: "Time2Show, Inc.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${inter.className}`}>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />

        {/* Google Search Console – site ownership verification */}
        {process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION && (
          <meta
            name="google-site-verification"
            content={process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION}
          />
        )}

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationJsonLd) }}
        />

        {/* Google Tag Manager (deferred) */}
        <Script id="gtm-script" strategy="lazyOnload">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-NFLHXXGK');`}
        </Script>

        {/* Google Analytics (deferred) */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-W6LV22900R" strategy="lazyOnload" />
        <Script id="gtag-init" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-W6LV22900R');
          `}
        </Script>
      </head>
      <body className="estalara-root">
        {children}

        {/* Vercel Speed Insights and Analytics components */}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
