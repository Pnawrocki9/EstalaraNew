import type { Metadata } from "next"
import { EstalaraHeader } from "@/app/estalara/_components/header"
import { EstalaraFooter } from "@/app/estalara/_components/footer"
import { RegionLandingPage, type RegionLandingContent } from "@/app/estalara/_components/region-landing-page"
import { HOMEPAGE_LANGUAGE_ALTERNATES } from "@/lib/site"

const content: RegionLandingContent = {
  cta: "Book a demo",
  hero: {
    h1: "Estate agency software",
    subheadline:
      "Estalara is the modern property marketing platform that helps estate agents present properties professionally, reach international buyers, and capture leads directly\u2014without relying on listing portals.",
  },
  problem: {
    label: "The challenge",
    title: "Why are estate agencies losing opportunities?",
    items: [
      {
        title: "Portal dependency",
        description:
          "Estate agents pay significant fees to property portals whilst losing control over their data and client relationships.",
      },
      {
        title: "Lack of differentiation",
        description:
          "On portals, every listing looks the same. Building a recognisable brand and standing out from competitors becomes nearly impossible.",
      },
      {
        title: "Low-quality enquiries",
        description:
          "Estate agent lead generation through traditional channels often means fielding enquiries from uncommitted browsers.",
      },
      {
        title: "Limited international reach",
        description:
          "A proper property marketing platform should connect you with overseas investors, but most portals focus only on domestic buyers.",
      },
    ],
  },
  solution: {
    label: "The solution",
    title: "How Estalara supports estate agencies",
    subtitle:
      "Estate agency marketing software that enables you to build your own sales channel and reduce reliance on property portals.",
    items: [
      {
        title: "Professional property presentation",
        description:
          "Property listing websites designed to showcase your properties in a way that builds trust and generates genuine interest.",
      },
      {
        title: "Automatic SEO optimisation",
        description:
          "Every property page is optimised for search engines, increasing visibility amongst buyers searching for properties online.",
      },
      {
        title: "Global buyer reach",
        description:
          "Connect with investors worldwide. Your properties are visible to international buyers searching for UK property investments.",
      },
      {
        title: "Direct lead ownership",
        description:
          "Every enquiry comes straight to you. No intermediaries, no hidden fees for accessing your own leads.",
      },
      {
        title: "Analytics and insights",
        description:
          "Track interest in your listings, analyse buyer behaviour, and refine your sales strategy based on real data.",
      },
    ],
  },
  useCases: {
    label: "Use cases",
    title: "Which estate agencies benefit from Estalara?",
    items: [
      {
        title: "Premium and luxury properties",
        description:
          "Present exclusive apartments and houses in a manner that reflects their value and attracts discerning buyers.",
      },
      {
        title: "Selling to international investors",
        description:
          "Reach buyers from the Middle East, Asia, Europe, and beyond who are actively seeking UK property investments.",
      },
      {
        title: "Building agency brand",
        description:
          "Create an independent marketing channel and position your agency as an alternative to property portals.",
      },
    ],
  },
  finalCta: {
    title: "Ready for modern property marketing?",
    subtitle:
      "Book a free demo and discover how Estalara can help your agency attract more qualified buyers. Estate agency software that delivers results.",
    note: "No obligation. Personalised demonstration for your agency.",
  },
}

export const metadata: Metadata = {
  title: "Estate Agency Software | Estalara",
  description:
    "Modern estate agency software for UK property professionals. Professional property marketing platform, lead generation, and listing websites. Book a demo today.",
  keywords:
    "estate agency software, property marketing platform, estate agent lead generation, property listing websites, estate agency marketing software",
  alternates: {
    canonical: "/uk/estate-agency-software",
    languages: HOMEPAGE_LANGUAGE_ALTERNATES,
  },
  openGraph: {
    title: "Estate Agency Software | Estalara",
    description:
      "Modern estate agency software for UK property professionals. Professional property marketing and lead generation.",
    locale: "en_GB",
  },
}

export default function UKLandingPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF9]">
      <EstalaraHeader />
      <main lang="en-GB">
        <RegionLandingPage content={content} />
      </main>
      <EstalaraFooter />
    </div>
  )
}
