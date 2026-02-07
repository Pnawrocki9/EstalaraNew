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
    generator: 'v0.app'
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
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover"
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
