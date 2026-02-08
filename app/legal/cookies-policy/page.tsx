import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Cookies Policy | Estalara",
  description:
    "Understand how Estalara uses cookies and similar technologies on estalara.com, including strictly necessary, analytics, functional, and marketing cookies.",
  alternates: {
    canonical: "/legal/cookies-policy",
  },
}

export default function CookiesPolicyPage() {
  return (
    <main className="min-h-screen bg-[#FAF9F6]">
      <div className="max-w-3xl mx-auto px-6 py-16 lg:py-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[#5C5C5C] hover:text-[#1A1A1A] transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="mb-8">
          <Link href="/">
            <Image
              src="/images/estalara/estalara-logo.svg"
              alt="Estalara"
              width={130}
              height={40}
              className="h-8 w-auto mb-8"
            />
          </Link>
          <h1 className="font-serif text-3xl lg:text-4xl font-bold text-[#1A1A1A] mb-4 text-balance">
            Cookies Policy
          </h1>
          <p className="text-sm text-[#8B8B8B]">
            Effective Date: 30 September 2025 | Last Updated: 30 September 2025
          </p>
        </div>

        <div className="prose prose-neutral max-w-none text-[#3A3A3A] leading-relaxed space-y-8">

          {/* 1. Introduction */}
          <section>
            <h2 className="font-serif text-xl font-bold text-[#1A1A1A] mb-3">1. Introduction</h2>
            <p>
              {'This Cookie Policy explains how Time2Show, Inc., doing business as Estalara ("Estalara," "we," "us," or "our") uses cookies and similar technologies when you visit www.estalara.com (the "Website").'}
            </p>
            <p>
              {"This policy applies only to the Estalara website. Use of cookies within white-label platforms operated by Estalara\u2019s customers is governed by the relevant customer\u2019s cookie and privacy policies."}
            </p>
            <p>
              We use cookies in accordance with applicable data-protection and ePrivacy laws, including the GDPR, UK PECR and similar regulations.
            </p>
          </section>

          {/* 2. What are cookies */}
          <section>
            <h2 className="font-serif text-xl font-bold text-[#1A1A1A] mb-3">2. What Are Cookies</h2>
            <p>
              Cookies are small text files stored on your device when you visit a website. They help websites function properly, improve user experience and provide insights into how the website is used.
            </p>
          </section>

          {/* 3. Types of cookies we use */}
          <section>
            <h2 className="font-serif text-xl font-bold text-[#1A1A1A] mb-3">3. Types of Cookies We Use</h2>

            <h3 className="font-semibold text-[#1A1A1A] mt-4 mb-2">3.1 Strictly necessary cookies</h3>
            <p>
              These cookies are essential for the operation of the Website and cannot be disabled. They enable core functionality such as security, page navigation and consent management.
            </p>
            <p><strong>Legal basis:</strong> strictly necessary for the provision of the Website.</p>

            <h3 className="font-semibold text-[#1A1A1A] mt-4 mb-2">3.2 Analytics cookies</h3>
            <p>
              {"Analytics cookies help us understand how visitors interact with the Website, for example by measuring page visits, traffic sources and general usage patterns. This information is used to improve the Website\u2019s performance and usability."}
            </p>
            <p>Analytics cookies are used only with your consent where required by law.</p>
            <p><strong>Legal basis:</strong> consent.</p>

            <h3 className="font-semibold text-[#1A1A1A] mt-4 mb-2">3.3 Functional cookies</h3>
            <p>
              Functional cookies allow the Website to remember your preferences, such as language or region, to provide a more consistent experience. These cookies are optional and used only where enabled by you.
            </p>
            <p><strong>Legal basis:</strong> consent.</p>

            <h3 className="font-semibold text-[#1A1A1A] mt-4 mb-2">3.4 Marketing cookies</h3>
            <p>
              Marketing cookies may be used to measure the effectiveness of marketing campaigns or to display relevant advertisements on third-party platforms. These cookies are set only with your consent.
            </p>
            <p><strong>Legal basis:</strong> consent.</p>
          </section>

          {/* 4. Third-party cookies */}
          <section>
            <h2 className="font-serif text-xl font-bold text-[#1A1A1A] mb-3">4. Third-Party Cookies</h2>
            <p>
              We may use third-party service providers for analytics and marketing purposes, such as website analytics or advertising platforms. These third parties may set cookies on your device in accordance with their own privacy policies.
            </p>
            <p>
              We do not control third-party cookies and encourage you to review the privacy policies of those providers.
            </p>
          </section>

          {/* 5. Cookie management and consent */}
          <section>
            <h2 className="font-serif text-xl font-bold text-[#1A1A1A] mb-3">5. Cookie Management and Consent</h2>
            <p>When you first visit the Website, you will see a cookie banner allowing you to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>accept all cookies</li>
              <li>reject non-essential cookies</li>
              <li>customise your cookie preferences</li>
            </ul>
            <p>
              You can change or withdraw your consent at any time using the cookie settings available on the Website.
            </p>
          </section>

          {/* 6. Cookie duration */}
          <section>
            <h2 className="font-serif text-xl font-bold text-[#1A1A1A] mb-3">6. Cookie Duration</h2>
            <p>
              Some cookies are session-based and expire when you close your browser. Others are persistent and remain on your device for a limited period unless deleted earlier.
            </p>
          </section>

          {/* 7. Browser controls */}
          <section>
            <h2 className="font-serif text-xl font-bold text-[#1A1A1A] mb-3">7. Browser Controls</h2>
            <p>
              You can manage cookies through your browser settings, including deleting existing cookies or blocking new ones. Please note that disabling certain cookies may affect the functionality of the Website.
            </p>
          </section>

          {/* 8. Updates to this policy */}
          <section>
            <h2 className="font-serif text-xl font-bold text-[#1A1A1A] mb-3">8. Updates to This Policy</h2>
            <p>
              {"We may update this Cookie Policy from time to time to reflect changes in technology, law or our practices. Updates will be posted on the Website with a revised \u201cLast Updated\u201d date."}
            </p>
          </section>

          {/* 9. Contact */}
          <section>
            <h2 className="font-serif text-xl font-bold text-[#1A1A1A] mb-3">9. Contact</h2>
            <p>
              For questions about this Cookie Policy, please contact us at:{" "}
              <a href="mailto:estalara@estalara.com" className="text-[#0F766E] hover:underline">estalara@estalara.com</a>
            </p>
          </section>

        </div>
      </div>
    </main>
  )
}
