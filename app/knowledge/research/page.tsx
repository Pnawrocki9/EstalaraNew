import Link from "next/link"
import type { Metadata } from "next"

import { researchStats } from "../_data/articleContent"
import { buildKnowledgeMetadata } from "../_lib/metadata"

export const metadata: Metadata = buildKnowledgeMetadata({
  title: "Research & Industry Data | Estalara Knowledge",
  description: "Verified data points and market signals shaping buyer behavior and global real estate trends.",
  path: "/knowledge/research",
})

export default function KnowledgeResearchPage() {
  return (
    <>
      <section className="py-12 px-4 border-b border-[#E8E4DE]" data-testid="research-header">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/knowledge"
            className="inline-flex items-center text-sm text-[#6A6A6A] hover:text-[#1A1A1A] mb-6"
            data-testid="back-to-home"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          <h1 className="font-serif text-4xl md:text-5xl text-[#1A1A1A] mb-4">Research & Industry Data</h1>
          <p className="text-lg text-[#4A4A4A]">The signals shaping the next phase of the real estate market.</p>
        </div>
      </section>

      <section className="py-16 px-4" data-testid="buyer-behavior-section">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl text-center mb-10">Buyer Behavior Statistics</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {researchStats.buyerBehavior.map((stat: any) => (
              <div key={stat.id} className="bg-white p-8 rounded-lg shadow-sm border border-[#E8E4DE]" data-testid={`stat-${stat.id}`}>
                <p className="font-serif text-5xl text-[#1A1A1A] mb-4">{stat.value}</p>
                <p className="text-[#4A4A4A] mb-4">{stat.description}</p>
                <p className="text-xs text-[#9A9A9A]">
                  Source:{" "}
                  <a href={stat.sourceUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {stat.source}
                  </a>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#F5F3F0]" data-testid="market-transformation-section">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl text-center mb-10">Market Transformation Data</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {researchStats.marketTransformation.map((stat: any) => (
              <div key={stat.id} className="bg-white p-8 rounded-lg shadow-sm border border-[#E8E4DE]" data-testid={`stat-${stat.id}`}>
                <p className="font-serif text-5xl text-[#1A1A1A] mb-4">{stat.value}</p>
                <p className="text-[#4A4A4A] mb-4">{stat.description}</p>
                <p className="text-xs text-[#9A9A9A]">
                  Source:{" "}
                  <a href={stat.sourceUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {stat.source}
                  </a>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4" data-testid="international-buyers-section">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl text-center mb-10">International Buyer Insights</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {researchStats.internationalBuyers.map((stat: any) => (
              <div key={stat.id} className="bg-white p-8 rounded-lg shadow-sm border border-[#E8E4DE]" data-testid={`stat-${stat.id}`}>
                <p className="font-serif text-5xl text-[#1A1A1A] mb-4">{stat.value}</p>
                <p className="text-[#4A4A4A] mb-4">{stat.description}</p>
                <p className="text-xs text-[#9A9A9A]">
                  Source:{" "}
                  <a href={stat.sourceUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {stat.source}
                  </a>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#F5F3F0]" data-testid="trust-decision-section">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl text-center mb-10">Trust & Decision-Making</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {researchStats.trustDecisionMaking.map((stat: any) => (
              <div key={stat.id} className="bg-white p-8 rounded-lg shadow-sm border border-[#E8E4DE]" data-testid={`stat-${stat.id}`}>
                <p className="font-serif text-5xl text-[#1A1A1A] mb-4">{stat.value}</p>
                <p className="text-[#4A4A4A] mb-4">{stat.description}</p>
                <p className="text-xs text-[#9A9A9A]">
                  Source:{" "}
                  <a href={stat.sourceUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {stat.source}
                  </a>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4" data-testid="methodology-section">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-[#E8E4DE]">
            <h3 className="font-serif text-xl mb-4">Data Methodology</h3>
            <p className="text-[#4A4A4A] text-sm leading-relaxed">
              All statistics presented on this page are sourced from publicly available reports by established research
              organizations, industry associations, and consulting firms. We prioritize primary sources and verify data
              points before publication. Source links are provided where available. This data is presented for educational
              purposes and should be verified against original sources for business decisions.
            </p>
            <div className="mt-6 pt-6 border-t border-[#E8E4DE]">
              <h4 className="font-medium text-sm mb-3">Primary Sources Include:</h4>
              <ul className="text-sm text-[#4A4A4A] space-y-1">
                <li>• National Association of Realtors (NAR)</li>
                <li>• Knight Frank Global Research</li>
                <li>• McKinsey & Company</li>
                <li>• Redfin Research Center</li>
                <li>• Zillow Economic Research</li>
                <li>• Realtor.com Housing Research</li>
                <li>• PwC Real Estate Practice</li>
                <li>• Deloitte Real Estate Industry</li>
                <li>• Christie&apos;s International Real Estate</li>
                <li>• JLL Research</li>
              </ul>
            </div>
            <div className="mt-6 pt-6 border-t border-[#E8E4DE]">
              <p className="text-xs text-[#9A9A9A]">Last Updated: January 2026 | Next Review: April 2026</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
