import type { Metadata } from "next"
import { EstalaraHero } from "./estalara/_components/hero"
import { EstalaraStats } from "./estalara/_components/stats"
import { EstalaraProblem } from "./estalara/_components/problem"
import { EstalaraSolution } from "./estalara/_components/solution"
import { EstalaraFeatures } from "./estalara/_components/features"
import { EstalaraAICapabilities } from "./estalara/_components/ai-capabilities"
import { EstalaraVision } from "./estalara/_components/vision"
import { EstalaraCTA } from "./estalara/_components/cta"
import { EstalaraHeader } from "./estalara/_components/header"
import { EstalaraFooter } from "./estalara/_components/footer"

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
}

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

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: siteUrl,
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
      <EstalaraHeader />
      <main>
        <EstalaraHero />
        <EstalaraStats />
        <EstalaraProblem />
        <EstalaraSolution />
        <EstalaraFeatures />
        <EstalaraAICapabilities />
        <EstalaraVision />
        <EstalaraCTA />
      </main>
      <EstalaraFooter />
    </div>
  )
}
