import Link from "next/link"
import type { Metadata } from "next"

import { buildKnowledgeMetadata } from "../_lib/metadata"

export const metadata: Metadata = buildKnowledgeMetadata({
  title: "Privacy Policy | Estalara Knowledge",
  description: "Privacy policy for the Estalara Knowledge section.",
  path: "/knowledge/privacy",
})

export default function PrivacyPage() {
  return (
    <article className="py-12 px-4" data-testid="privacy-page">
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

        <h1 className="font-serif text-4xl text-[#1A1A1A] mb-6">Privacy Policy</h1>
        <p className="text-sm text-[#6A6A6A] mb-8">Last updated: January 2026</p>

        <div className="prose prose-lg max-w-none text-[#2A2A2A]">
          <section className="mb-8">
            <h2 className="font-serif text-2xl mb-4">Introduction</h2>
            <p className="mb-4">
              Estalara Homes (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your information when you visit our website
              estalara.com/knowledge (the &quot;Site&quot;) and use our services.
            </p>
            <p className="mb-4">
              Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy,
              please do not access the site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl mb-4">Information We Collect</h2>
            <h3 className="font-serif text-xl mb-3">Personal Data</h3>
            <p className="mb-4">We may collect personally identifiable information that you voluntarily provide to us when you:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Subscribe to our newsletter</li>
              <li>Request a demo or consultation</li>
              <li>Contact us through our website</li>
              <li>Participate in surveys or promotions</li>
            </ul>
            <p className="mb-4">
              This information may include your name, email address, company name, and any other information you choose
              to provide.
            </p>

            <h3 className="font-serif text-xl mb-3">Usage Data</h3>
            <p className="mb-4">We automatically collect certain information when you visit our Site, including:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Pages visited and time spent</li>
              <li>Referring website addresses</li>
              <li>IP address (anonymized where required by law)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl mb-4">How We Use Your Information</h2>
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Provide, operate, and maintain our website</li>
              <li>Send you newsletters and marketing communications (with your consent)</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Analyze usage patterns to improve our content and services</li>
              <li>Detect and prevent fraud or abuse</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl mb-4">Sharing Your Information</h2>
            <p className="mb-4">We do not sell your personal information. We may share your information with:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>Service Providers:</strong> Third parties that help us operate our website and deliver services
              </li>
              <li>
                <strong>Business Partners:</strong> Estalara and affiliated companies for marketing purposes (with your
                consent)
              </li>
              <li>
                <strong>Legal Requirements:</strong> When required by law or to protect our rights
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl mb-4">Cookies and Tracking</h2>
            <p className="mb-4">
              We use cookies and similar tracking technologies to collect information about your browsing activities. You
              can control cookies through your browser settings. Disabling cookies may affect some functionality of our
              Site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl mb-4">Data Security</h2>
            <p className="mb-4">
              We implement appropriate technical and organizational security measures to protect your personal
              information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee
              absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl mb-4">Your Rights</h2>
            <p className="mb-4">Depending on your location, you may have the right to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your personal data</li>
              <li>Opt-out of marketing communications</li>
              <li>Lodge a complaint with a supervisory authority</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl mb-4">Contact Us</h2>
            <p className="mb-4">If you have questions about this Privacy Policy, please contact us at:</p>
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

          <section className="mb-8">
            <h2 className="font-serif text-2xl mb-4">Changes to This Policy</h2>
            <p className="mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page and updating the &quot;Last updated&quot; date.
            </p>
          </section>
        </div>
      </div>
    </article>
  )
}
