import type { Metadata } from "next"
import { EstalaraHeader } from "@/app/estalara/_components/header"
import { EstalaraFooter } from "@/app/estalara/_components/footer"
import { RegionLandingPage, type RegionLandingContent } from "@/app/estalara/_components/region-landing-page"
import { HOMEPAGE_LANGUAGE_ALTERNATES } from "@/lib/site"
import { DEFAULT_OG_IMAGE } from "@/lib/seo-metadata"

const content: RegionLandingContent = {
  cta: "Book a demo",
  hero: {
    h1: "Real estate agency software",
    subheadline:
      "Estalara is the modern real estate marketing platform that helps brokerages present properties professionally, reach international investors, and own your real estate leads\u2014without portal dependency.",
  },
  problem: {
    label: "The challenge",
    title: "Why are real estate agencies losing deals?",
    items: [
      {
        title: "Portal dependency",
        description:
          "Brokerages pay significant fees to listing platforms while losing control over their data and client relationships.",
      },
      {
        title: "Lack of differentiation",
        description:
          "On listing sites, every property looks the same. Building a recognizable brand and standing out from competitors becomes nearly impossible.",
      },
      {
        title: "Low-quality leads",
        description:
          "Real estate lead generation through traditional channels often means fielding inquiries from uncommitted browsers.",
      },
      {
        title: "Limited international exposure",
        description:
          "Property marketing software should connect you with global investors, but most platforms focus only on domestic buyers.",
      },
    ],
  },
  solution: {
    label: "The solution",
    title: "How Estalara supports real estate agencies",
    subtitle:
      "Tools for real estate brokers that enable you to build your own sales channel and reduce reliance on listing portals.",
    items: [
      {
        title: "Professional property presentation",
        description:
          "Property pages designed to showcase your listings in a way that builds trust and generates genuine buyer interest.",
      },
      {
        title: "Automatic SEO optimization",
        description:
          "Every property page is optimized for search engines, increasing visibility among buyers searching online.",
      },
      {
        title: "Global investor reach",
        description:
          "Connect with investors worldwide. Your properties are visible to international buyers seeking US real estate investments.",
      },
      {
        title: "Own your real estate leads",
        description:
          "Every inquiry comes straight to you. No intermediaries, no hidden fees for accessing your own leads.",
      },
      {
        title: "Analytics and insights",
        description:
          "Track interest in your listings, analyze buyer behavior, and refine your sales strategy based on real data.",
      },
    ],
  },
  useCases: {
    label: "Use cases",
    title: "Which real estate agencies benefit from Estalara?",
    items: [
      {
        title: "Luxury and investment properties",
        description:
          "Present high-end condos, estates, and investment properties in a manner that reflects their value and attracts qualified buyers.",
      },
      {
        title: "Selling to international investors",
        description:
          "Reach buyers from Canada, Europe, Asia, and Latin America who are actively seeking US property investments.",
      },
      {
        title: "Building brokerage brand",
        description:
          "Create an independent marketing channel and position your brokerage as a modern alternative to traditional listing platforms.",
      },
    ],
  },
  finalCta: {
    title: "Ready for modern real estate marketing?",
    subtitle:
      "Book a free demo and discover how Estalara can help your agency attract more qualified buyers. Real estate agency software that delivers results.",
    note: "No obligation. Personalized demonstration for your brokerage.",
  },
}

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://estalara.com/" },
    { "@type": "ListItem", position: 2, name: "Real Estate Agency Software US", item: "https://estalara.com/us/real-estate-agency-software" },
  ],
}

export const metadata: Metadata = {
  title: "Real Estate Agency Software — International Buyer Platform | Estalara",
  description:
    "Real estate software for US brokerages targeting international buyers. Live property streaming, AI lead scoring, multilingual chat. Own your leads, not the portal's.",
  keywords:
    "real estate agency software, real estate marketing platform, real estate lead generation, property marketing software, tools for real estate brokers",
  alternates: {
    canonical: "https://estalara.com/us/real-estate-agency-software",
    languages: HOMEPAGE_LANGUAGE_ALTERNATES,
  },
  openGraph: {
    title: "Real Estate Agency Software — International Buyer Platform | Estalara",
    description:
      "Real estate software for US brokerages targeting international buyers. Live property streaming, AI lead scoring, multilingual chat.",
    locale: "en_US",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: "Estalara Real Estate Agency Software US" }],
  },
}

export default function USLandingPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF9]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <EstalaraHeader />
      <main lang="en-US">
        <RegionLandingPage content={content} />
      </main>
      <EstalaraFooter />
    </div>
  )
}
