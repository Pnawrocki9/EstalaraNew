import type { Metadata } from "next"
import { EstalaraHero } from "./estalara/_components/hero"
import { EstalaraBenefits } from "./estalara/_components/benefits"
import { EstalaraStats } from "./estalara/_components/stats"
import { EstalaraProblem } from "./estalara/_components/problem"
import { EstalaraSolution } from "./estalara/_components/solution"
import { SlidingTagline } from "./estalara/_components/sliding-tagline"
import { EstalaraFeatures } from "./estalara/_components/features"
import { EstalaraAICapabilities } from "./estalara/_components/ai-capabilities"
import { EstalaraVision } from "./estalara/_components/vision"
import { EstalaraCTA } from "./estalara/_components/cta"
import { EstalaraHeader } from "./estalara/_components/header"
import { EstalaraFooter } from "./estalara/_components/footer"
import { SITE_URL } from "@/lib/site"
import { FAQ_SCHEMA } from "@/lib/seo-metadata"

export const metadata: Metadata = {
  title: 'Live Property Showcase Platform for Real Estate Agencies | Estalara',
  description: 'Help real estate agencies reach international investors with AI-powered live streaming, multilingual chat, and intent-based lead scoring. Turn portal traffic into qualified buyers.',
  metadataBase: new URL('https://estalara.com'),
  alternates: {
    canonical: 'https://estalara.com/',
    languages: {
      'x-default': 'https://estalara.com/',
      'en': 'https://estalara.com/',
      'en-GB': 'https://estalara.com/uk/estate-agency-software',
      'en-US': 'https://estalara.com/us/real-estate-agency-software',
      'pl': 'https://estalara.com/pl/dla-biur-nieruchomosci',
      'es': 'https://estalara.com/es/para-inmobiliarias',
      'ar-AE': 'https://estalara.com/ae/real-estate-agency-software-dubai',
    },
  },
  openGraph: {
    type: 'website',
    url: 'https://estalara.com/',
    title: 'Estalara — Live Property Showcasing for International Buyers',
    description: 'Help real estate agencies reach international investors with AI-powered live streaming, multilingual chat, and intent-based lead scoring.',
    siteName: 'Estalara',
    locale: 'en_US',
    images: [{ url: 'https://estalara.com/images/og/homepage-og.jpg', width: 1200, height: 630, alt: 'Estalara — Live Property Showcasing' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Estalara — Live Property Showcasing for International Buyers',
    description: 'AI-powered live property streaming for real estate agencies targeting international buyers.',
    images: ['https://estalara.com/images/og/homepage-og.jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
}

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_URL,
    },
  ],
}

export default function Page() {
  return (
    <div className="min-h-screen bg-[#F8F6F3]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <EstalaraHeader />
      <main>
        <EstalaraHero />
        <EstalaraProblem />
        <EstalaraSolution />
        <SlidingTagline />
        <EstalaraStats />
        <EstalaraBenefits />
        <EstalaraFeatures />
        <EstalaraAICapabilities />
        <EstalaraVision />
        <EstalaraCTA />
      </main>
      <EstalaraFooter />
    </div>
  )
}
