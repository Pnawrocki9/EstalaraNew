import type { Metadata } from "next"
import { EstalaraHeader } from "@/app/estalara/_components/header"
import { EstalaraFooter } from "@/app/estalara/_components/footer"
import { RegionLandingPage, type RegionLandingContent } from "@/app/estalara/_components/region-landing-page"
import { HOMEPAGE_LANGUAGE_ALTERNATES } from "@/lib/site"

const content: RegionLandingContent = {
  cta: "Book a demo",
  hero: {
    h1: "Real estate agency software Dubai",
    subheadline:
      "Estalara is the modern property marketing platform Dubai agencies trust to present properties professionally, reach international property buyers Dubai attracts, and capture leads directly.",
  },
  problem: {
    label: "The challenge",
    title: "Why are real estate agencies in Dubai losing opportunities?",
    items: [
      {
        title: "Portal dependency",
        description:
          "Real estate agencies in Dubai pay significant fees to listing platforms while losing control over their data and client relationships.",
      },
      {
        title: "Lack of differentiation",
        description:
          "On portals, every Dubai property looks the same. Building a recognizable brand and standing out in this competitive market becomes nearly impossible.",
      },
      {
        title: "Low-quality enquiries",
        description:
          "Real estate lead generation Dubai through traditional channels often means fielding enquiries from uncommitted browsers.",
      },
      {
        title: "Missing international buyers",
        description:
          "International property buyers Dubai attracts come from around the world, but most platforms fail to reach them effectively.",
      },
    ],
  },
  solution: {
    label: "The solution",
    title: "How Estalara supports Dubai real estate agencies",
    subtitle:
      "Property marketing platform Dubai agencies use to build their own sales channel and reduce portal reliance.",
    items: [
      {
        title: "Professional property presentation",
        description:
          "Property pages designed to showcase Dubai's finest listings in a way that builds trust with discerning international investors.",
      },
      {
        title: "Automatic SEO optimisation",
        description:
          "Every property page is optimised for search engines, increasing visibility for real estate marketing Dubai searches.",
      },
      {
        title: "Global investor reach",
        description:
          "Connect with investors from Europe, Asia, GCC, and beyond who are actively seeking Dubai property investments.",
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
    title: "Which Dubai agencies benefit from Estalara?",
    items: [
      {
        title: "Luxury and off-plan properties",
        description:
          "Present premium apartments, villas, and off-plan developments in a manner that reflects Dubai's world-class real estate standards.",
      },
      {
        title: "Attracting international investors",
        description:
          "Reach international property buyers Dubai attracts\u2014from Russian, Indian, British, and Chinese investors to GCC nationals.",
      },
      {
        title: "Building agency brand",
        description:
          "Create an independent marketing channel and position your agency as a trusted name among real estate agencies in Dubai.",
      },
    ],
  },
  finalCta: {
    title: "Ready for modern real estate marketing in Dubai?",
    subtitle:
      "Book a free demo and discover how Estalara can help your agency attract more qualified international buyers. Real estate agency software Dubai professionals rely on.",
    note: "No obligation. Personalised demonstration for your agency.",
  },
}

export const metadata: Metadata = {
  title: "Real Estate Agency Software Dubai | Estalara",
  description:
    "Real estate agency software Dubai agencies trust. Property marketing platform for reaching international buyers, lead generation, and professional property presentation. Book a demo.",
  keywords:
    "real estate agency software Dubai, real estate marketing Dubai, property marketing platform Dubai, real estate lead generation Dubai, international property buyers Dubai",
  alternates: {
    canonical: "/ae/real-estate-agency-software-dubai",
    languages: HOMEPAGE_LANGUAGE_ALTERNATES,
  },
  openGraph: {
    title: "Real Estate Agency Software Dubai | Estalara",
    description:
      "Real estate agency software Dubai agencies trust. Property marketing platform for international buyers.",
    locale: "en_AE",
  },
}

export default function DubaiLandingPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF9]">
      <EstalaraHeader />
      <main lang="en-AE">
        <RegionLandingPage content={content} />
      </main>
      <EstalaraFooter />
    </div>
  )
}
