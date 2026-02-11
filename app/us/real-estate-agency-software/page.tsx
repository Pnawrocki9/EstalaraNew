import type { Metadata } from "next"
import { EstalaraHeader } from "@/app/estalara/_components/header"
import { EstalaraFooter } from "@/app/estalara/_components/footer"
import { RegionLandingPage, type RegionLandingContent } from "@/app/estalara/_components/region-landing-page"

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

export const metadata: Metadata = {
  title: "Real Estate Agency Software | Estalara",
  description:
    "Modern real estate agency software for US brokerages. Real estate marketing platform, lead generation tools, and property marketing software. Book a demo today.",
  keywords:
    "real estate agency software, real estate marketing platform, real estate lead generation, property marketing software, tools for real estate brokers",
  alternates: {
    canonical: "/us/real-estate-agency-software",
  },
  openGraph: {
    title: "Real Estate Agency Software | Estalara",
    description:
      "Modern real estate agency software for US brokerages. Real estate marketing platform and lead generation.",
    locale: "en_US",
  },
}

export default function USLandingPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF9]">
      <EstalaraHeader />
      <main>
        <RegionLandingPage content={content} />
      </main>
      <EstalaraFooter />
    </div>
  )
}
