import Link from "next/link"
import type { Metadata } from "next"

import { buildKnowledgeMetadata } from "../_lib/metadata"

export const metadata: Metadata = buildKnowledgeMetadata({
  title: "Terms of Use | Estalara Knowledge",
  description: "Terms of use for the Estalara Knowledge section.",
  path: "/knowledge/terms",
})

export default function TermsPage() {
  return (
    <article className="py-12 px-4" data-testid="terms-page">
      <div className="max-w-3xl mx-auto">
        <Link href="/knowledge" className="inline-flex items-center text-sm text-[#6A6A6A] hover:text-[#1A1A1A] mb-6">
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

        <h1 className="font-serif text-4xl text-[#1A1A1A] mb-6">Terms of Use</h1>
        <p className="text-sm text-[#6A6A6A] mb-8">Last updated: January 2026</p>

        <div className="prose prose-lg max-w-none text-[#2A2A2A]">
          <section className="mb-8">
            <h2 className="font-serif text-2xl mb-4">Acceptance of Terms</h2>
            <p className="mb-4">
              By accessing and using Estalara Homes (estalara.com/knowledge), you accept and agree to be bound by these
              Terms of Use. If you do not agree to these terms, please do not use our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl mb-4">Use of Content</h2>
            <p className="mb-4">
              All content on this website, including text, graphics, data, articles, research, and other materials
              (&quot;Content&quot;), is provided for informational and educational purposes only.
            </p>
            <h3 className="font-serif text-xl mb-3">Permitted Use</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>You may view, download, and print Content for personal, non-commercial use</li>
              <li>You may share links to our Content with proper attribution</li>
              <li>You may quote limited portions of Content with attribution to Estalara Homes</li>
            </ul>
            <h3 className="font-serif text-xl mb-3">Prohibited Use</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Reproducing, distributing, or republishing Content without permission</li>
              <li>Using Content for commercial purposes without written consent</li>
              <li>Modifying or creating derivative works from our Content</li>
              <li>Removing copyright or proprietary notices</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl mb-4">Disclaimer of Warranties</h2>
            <p className="mb-4">
              THE CONTENT ON THIS WEBSITE IS PROVIDED &quot;AS IS&quot; WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. WE DO NOT
              WARRANT THAT:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>The Content is accurate, complete, or current</li>
              <li>The website will be uninterrupted or error-free</li>
              <li>Any errors will be corrected</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl mb-4">Not Professional Advice</h2>
            <p className="mb-4">
              The Content on this website is for general informational purposes only and does not constitute:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Legal advice</li>
              <li>Financial or investment advice</li>
              <li>Real estate advice for specific transactions</li>
              <li>Professional recommendations</li>
            </ul>
            <p className="mb-4">
              Real estate markets fluctuate, and data presented may become outdated. Always consult qualified
              professionals for decisions regarding property transactions, investments, or legal matters.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl mb-4">Third-Party Sources</h2>
            <p className="mb-4">Our Content includes data and statistics from third-party sources including but not limited to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>National Association of Realtors (NAR)</li>
              <li>Knight Frank</li>
              <li>McKinsey & Company</li>
              <li>Zillow, Redfin, and other real estate platforms</li>
              <li>Government agencies and research institutions</li>
            </ul>
            <p className="mb-4">
              We strive to accurately represent third-party data and provide source attribution. However, we are not
              responsible for errors in third-party sources. Users should verify data with original sources for critical
              decisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl mb-4">Limitation of Liability</h2>
            <p className="mb-4">
              TO THE FULLEST EXTENT PERMITTED BY LAW, ESTALARA HOMES, TIME2SHOW, INC., AND THEIR AFFILIATES SHALL NOT BE
              LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF
              THIS WEBSITE OR RELIANCE ON ANY CONTENT.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl mb-4">Intellectual Property</h2>
            <p className="mb-4">
              All Content, trademarks, logos, and intellectual property on this website are owned by Time2Show, Inc. or
              its licensors. The Estalara and Estalara Homes names and logos are trademarks of Time2Show, Inc.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl mb-4">External Links</h2>
            <p className="mb-4">
              Our website may contain links to third-party websites. We are not responsible for the content, privacy
              policies, or practices of external sites. Accessing external links is at your own risk.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl mb-4">Modifications</h2>
            <p className="mb-4">
              We reserve the right to modify these Terms of Use at any time. Changes will be effective immediately upon
              posting. Your continued use of the website after changes constitutes acceptance of the modified terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl mb-4">Governing Law</h2>
            <p className="mb-4">
              These Terms of Use shall be governed by and construed in accordance with the laws of the State of Delaware,
              United States, without regard to conflict of law principles.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl mb-4">Contact</h2>
            <p className="mb-4">For questions about these Terms of Use, contact us at:</p>
            <p className="mb-2">
              <strong>Email:</strong>{" "}
              <a href="mailto:estalara@estalara.com" className="text-[#1A1A1A] underline">
                estalara@estalara.com
              </a>
            </p>
            <p className="mb-4">
              <strong>Company:</strong> Time2Show, Inc.
            </p>
          </section>
        </div>
      </div>
    </article>
  )
}
