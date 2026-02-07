import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Terms & Conditions | Estalara",
  description: "Estalara Terms & Conditions",
}

export default function TermsAndConditionsPage() {
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
            Terms & Conditions
          </h1>
          <p className="text-sm text-[#8B8B8B]">
            Last Updated: 30 September 2025
          </p>
        </div>

        <div className="prose prose-neutral max-w-none text-[#3A3A3A] leading-relaxed space-y-8">

          {/* 1. Acceptance of Terms */}
          <section>
            <h2 className="font-serif text-xl font-bold text-[#1A1A1A] mb-3">1. Acceptance of Terms</h2>
            <p>
              {'These Terms of Service ("Terms") govern access to and use of the Estalara website and related services available at www.estalara.com (the "Website"). By accessing or using the Website, you agree to be bound by these Terms. If you do not agree, you must not use the Website.'}
            </p>
            <p>
              {'These Terms constitute a legally binding agreement between you and Time2Show, Inc., doing business as Estalara ("Estalara," "we," "us," or "our").'}
            </p>
          </section>

          {/* 2. Scope of these Terms */}
          <section>
            <h2 className="font-serif text-xl font-bold text-[#1A1A1A] mb-3">2. Scope of These Terms</h2>
            <p>These Terms apply solely to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>visitors to the Website</li>
              <li>prospective and existing business customers</li>
              <li>{"communications, demos and informational materials relating to Estalara\u2019s software"}</li>
            </ul>
            <p>
              {"These Terms do not govern the use of Estalara\u2019s software by customers under a separate written agreement, nor do they apply to end users of white-label platforms operated by Estalara\u2019s customers."}
            </p>
          </section>

          {/* 3. Eligibility */}
          <section>
            <h2 className="font-serif text-xl font-bold text-[#1A1A1A] mb-3">3. Eligibility</h2>
            <p>
              The Website is intended for business users aged 18 or older. By using the Website, you represent that you meet this requirement and are acting in a professional or commercial capacity.
            </p>
          </section>

          {/* 4. Description of Services */}
          <section>
            <h2 className="font-serif text-xl font-bold text-[#1A1A1A] mb-3">4. Description of Services</h2>
            <p>
              Estalara provides a software-as-a-service (SaaS) platform for real estate professionals. Information on the Website is provided for general informational and marketing purposes only and does not constitute a binding offer unless expressly stated in a written agreement.
            </p>
            <p>
              Estalara does not provide real estate brokerage, advisory, investment, legal, tax or transaction services.
            </p>
          </section>

          {/* 5. Acceptable Use */}
          <section>
            <h2 className="font-serif text-xl font-bold text-[#1A1A1A] mb-3">5. Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>use the Website for unlawful purposes</li>
              <li>interfere with or disrupt the Website or its security</li>
              <li>attempt to gain unauthorised access to systems or data</li>
              <li>copy, scrape or reverse engineer Website content or functionality</li>
              <li>submit false or misleading information</li>
            </ul>
            <p>
              We may restrict or suspend access to the Website if we reasonably believe these Terms have been violated.
            </p>
          </section>

          {/* 6. Intellectual Property */}
          <section>
            <h2 className="font-serif text-xl font-bold text-[#1A1A1A] mb-3">6. Intellectual Property</h2>
            <p>
              All Website content, including text, design, software, trademarks and logos, is owned by or licensed to Estalara and protected by applicable intellectual-property laws.
            </p>
            <p>
              You may view and use the Website for your internal business purposes only. No rights are granted except as expressly stated in these Terms.
            </p>
          </section>

          {/* 7. No Warranties */}
          <section>
            <h2 className="font-serif text-xl font-bold text-[#1A1A1A] mb-3">7. No Warranties</h2>
            <p>
              {"The Website and all content are provided \u201cas is\u201d and \u201cas available.\u201d To the maximum extent permitted by law, Estalara disclaims all warranties, express or implied, including warranties of accuracy, completeness, fitness for a particular purpose and non-infringement."}
            </p>
          </section>

          {/* 8. Limitation of Liability */}
          <section>
            <h2 className="font-serif text-xl font-bold text-[#1A1A1A] mb-3">8. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Estalara shall not be liable for any indirect, incidental, consequential, special or punitive damages, or for loss of profits, revenue, data or business, arising out of or related to your use of the Website.
            </p>
            <p>
              Our total liability arising out of or relating to the Website shall not exceed USD 100.
            </p>
          </section>

          {/* 9. Indemnification */}
          <section>
            <h2 className="font-serif text-xl font-bold text-[#1A1A1A] mb-3">9. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless Estalara and its affiliates from any claims, damages, liabilities and expenses arising from your misuse of the Website or violation of these Terms.
            </p>
          </section>

          {/* 10. Third-Party Links */}
          <section>
            <h2 className="font-serif text-xl font-bold text-[#1A1A1A] mb-3">10. Third-Party Links</h2>
            <p>
              The Website may contain links to third-party websites or services. Estalara does not control and is not responsible for third-party content, policies or practices.
            </p>
          </section>

          {/* 11. Privacy */}
          <section>
            <h2 className="font-serif text-xl font-bold text-[#1A1A1A] mb-3">11. Privacy</h2>
            <p>
              Our{" "}
              <Link href="/legal/privacy-policy" className="text-[#0F766E] hover:underline">Privacy Policy</Link>
              {" "}explains how we process personal data in connection with the Website. By using the Website, you acknowledge that processing is subject to that policy.
            </p>
          </section>

          {/* 12. Changes to the Website or Terms */}
          <section>
            <h2 className="font-serif text-xl font-bold text-[#1A1A1A] mb-3">12. Changes to the Website or Terms</h2>
            <p>
              We may modify the Website or these Terms at any time. Updated Terms will be posted on the Website. Continued use constitutes acceptance of the revised Terms.
            </p>
          </section>

          {/* 13. Governing Law */}
          <section>
            <h2 className="font-serif text-xl font-bold text-[#1A1A1A] mb-3">13. Governing Law</h2>
            <p>
              These Terms are governed by the laws of the State of Delaware, USA, without regard to conflict-of-law principles.
            </p>
          </section>

          {/* 14. Miscellaneous */}
          <section>
            <h2 className="font-serif text-xl font-bold text-[#1A1A1A] mb-3">14. Miscellaneous</h2>
            <p><strong>Entire agreement:</strong> These Terms constitute the entire agreement regarding Website use.</p>
            <p><strong>Severability:</strong> If any provision is unenforceable, the remainder remains in effect.</p>
            <p><strong>Assignment:</strong> We may assign these Terms; you may not without our consent.</p>
            <p><strong>No waiver:</strong> Failure to enforce a provision is not a waiver.</p>
          </section>

          {/* 15. Contact */}
          <section>
            <h2 className="font-serif text-xl font-bold text-[#1A1A1A] mb-3">15. Contact</h2>
            <p>
              Time2Show, Inc. (d/b/a Estalara)<br />
              Email: <a href="mailto:estalara@estalara.com" className="text-[#0F766E] hover:underline">estalara@estalara.com</a>
            </p>
          </section>

        </div>
      </div>
    </main>
  )
}
