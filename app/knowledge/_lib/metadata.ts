import type { Metadata } from "next"
import { SITE_URL } from "@/lib/site"

type KnowledgeMetadataInput = {
  title: string
  description: string
  path: string
}

export function buildKnowledgeMetadata({ title, description, path }: KnowledgeMetadataInput): Metadata {
  const canonicalPath = path.startsWith("/") ? path : `/${path}`
  const canonical = `${SITE_URL}${canonicalPath}`

  return {
    title,
    description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "article",
      siteName: "Estalara",
      images: [
        {
          url: "/estalara-social-share.jpg",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/estalara-social-share.jpg"],
    },
  }
}
