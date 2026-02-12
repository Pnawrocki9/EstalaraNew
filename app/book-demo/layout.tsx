import type { Metadata } from "next"
import type React from "react"
import { SITE_URL } from "@/lib/site"

export const metadata: Metadata = {
  title: "Book a Demo | Estalara - See LIVE Global Property Presentations",
  description:
    "Schedule a personalized 30-minute demo to see how Estalara helps real estate agencies sell globally with LIVE presentations, AI lead scoring, and multilingual streaming.",
  alternates: {
    canonical: "/book-demo",
  },
  openGraph: {
    title: "Book a Demo | Estalara",
    description:
      "Schedule a personalized demo to see how Estalara transforms your agency's global reach with LIVE investor presentations and AI-qualified hot leads.",
    type: "website",
  },
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
    {
      "@type": "ListItem",
      position: 2,
      name: "Book a Demo",
      item: `${SITE_URL}/book-demo`,
    },
  ],
}

export default function BookDemoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {children}
    </>
  )
}
