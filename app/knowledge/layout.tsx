import type React from "react"
import type { Metadata } from "next"

import { KnowledgeFooter } from "./_components/knowledge-footer"
import { KnowledgeHeader } from "./_components/knowledge-header"
import { buildKnowledgeMetadata } from "./_lib/metadata"
import "./knowledge.css"

export const metadata: Metadata = buildKnowledgeMetadata({
  title: "Knowledge Base | Estalara",
  description:
    "Research, analysis, and market insights on how live interaction and behavioral trust signals are reshaping modern real estate sales.",
  path: "/knowledge",
})

export default function KnowledgeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="knowledge-root min-h-screen flex flex-col bg-[#FAF8F5]">
      <KnowledgeHeader />
      <main className="flex-grow">{children}</main>
      <KnowledgeFooter />
    </div>
  )
}
