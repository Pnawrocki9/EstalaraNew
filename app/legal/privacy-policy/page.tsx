import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Privacy Policy | Estalara",
  description:
    "Learn how Time2Show, Inc. (d/b/a Estalara) collects, processes, and protects your personal data. Covers website visits, customer communications, and SaaS platform operations under GDPR.",
  alternates: {
    canonical: "/legal/privacy-policy",
  },
}

export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </h1>
          <p className="text-sm text-[#8B8B8B]">
            Effective Date: 1 January 2025 | Last Updated: 30 September 2025
          </p>
        </div>

        <div className="prose prose-neutral max-w-none text-[#3A3A3A] leading-relaxed space-y-8">

          {/* 1. Introduction */}
          <section>
            <h2 className="font-serif text-xl font-bold text-[#1A1A1A] mb-3">1. Introduction</h2>
            <p>
              {'This Privacy Policy explains how Time2Show, Inc., doing business as Estalara ("Estalara," "we," "us," or "our") collects and processes personal data in connection with:'}
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>visits to www.estalara.com</li>
              <li>communications with prospective and existing business customers</li>
              <li>operation of our software-as-a-service (SaaS) platform for real estate professionals</li>
            </ul>
            <p>
              Estalara provides software tools to real estate agencies and other professional customers, including on a white-label basis. Estalara does not provide real estate brokerage, advisory or transaction services.
            </p>
            <p>
              Where Estalara processes personal data on behalf of customers using the platform, such processing is governed by a Data Processing Agreement (DPA) between Estalara and the relevant customer. In those cases, the customer acts as the data controller, and Estalara acts as a data processor. End users should refer to the privacy policy of the relevant real estate agency or service provider.
            </p>
          </section>

          {/* 2. Definitions */}
          <section>
            <h2 className="font-serif text-xl font-bold text-[#1A1A1A] mb-3">2. Definitions</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>{'"Personal Data"'}</strong> means any information relating to an identified or identifiable natural person.</li>
              <li><strong>{'"Processing"'}</strong> means any operation performed on personal data, as defined in Article 4(2) GDPR.</li>
              <li><strong>{'"Controller"'}</strong> means the entity that determines the purposes and means of processing.</li>
              <li><strong>{'"Processor"'}</strong> means the entity that processes personal data on behalf of a controller.</li>
              <li><strong>{'"Data Subject"'}</strong> means the individual to whom personal data relates.</li>
            </ul>
          </section>

          {/* 3. Data Controller */}
          <section>
            <h2 className="font-serif text-xl font-bold text-[#1A1A1A] mb-3">3. Data Controller Information</h2>
            <p><strong>Controller for this Privacy Policy:</strong></p>
            <p>
              Time2Show, Inc. (d/b/a Estalara)<br />
              1111B S Governors Ave STE 20579<br />
              Dover, DE 19904, USA<br />
              Email: <a href="mailto:privacy@estalara.com" className="text-[#0F766E] hover:underline">privacy@estalara.com</a>
            </p>
          </section>

          {/* 4. Personal data we collect */}
          <section>
            <h2 className="font-serif text-xl font-bold text-[#1A1A1A] mb-3">4. Personal Data We Collect</h2>

            <h3 className="font-semibold text-[#1A1A1A] mt-4 mb-2">A. Information you provide to us</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Contact details (name, email address, phone number)</li>
              <li>Company and professional information</li>
              <li>Communications sent via contact forms, email or demos</li>
              <li>Contractual and billing information for customers</li>
            </ul>

            <h3 className="font-semibold text-[#1A1A1A] mt-4 mb-2">B. Information collected automatically</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>IP address and approximate location</li>
              <li>Browser type, device information and operating system</li>
              <li>Usage data relating to visits to estalara.com</li>
              <li>Cookies and similar technologies (see{" "}
                <Link href="/legal/cookies-policy" className="text-[#0F766E] hover:underline">Cookie Policy</Link>)
              </li>
            </ul>

            <h3 className="font-semibold text-[#1A1A1A] mt-4 mb-2">C. Customer platform data</h3>
            <p>
              When customers use the Estalara platform, personal data may be processed on their behalf. Such data is processed strictly in accordance with the applicable DPA, and this Privacy Policy does not apply to that processing.
            </p>
          </section>

          {/* 5. Legal basis */}
          <section>
            <h2 className="font-serif text-xl font-bold text-[#1A1A1A] mb-3">5. Legal Basis for Processing</h2>
            <p>We process personal data based on:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Contractual necessity:</strong> to respond to inquiries and manage customer relationships</li>
              <li><strong>Legitimate interests:</strong> to operate, secure and improve our services and website</li>
              <li><strong>Consent:</strong> where required for marketing communications or non-essential cookies</li>
              <li><strong>Legal obligations:</strong> where required under applicable law</li>
            </ul>
          </section>

          {/* 6. How we use personal data */}
          <section>
            <h2 className="font-serif text-xl font-bold text-[#1A1A1A] mb-3">6. How We Use Personal Data</h2>
            <p>We use personal data to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>operate and maintain our website and services</li>
              <li>communicate with customers and prospects</li>
              <li>provide support and respond to inquiries</li>
              <li>improve product functionality and security</li>
              <li>comply with legal and regulatory requirements</li>
            </ul>
          </section>

          {/* 7. Data sharing */}
          <section>
            <h2 className="font-serif text-xl font-bold text-[#1A1A1A] mb-3">7. Data Sharing</h2>
            <p>We may share personal data with:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Service providers such as hosting, analytics, CRM and communication tools</li>
              <li>Professional advisers (legal, accounting, compliance)</li>
              <li>Authorities where required by law</li>
            </ul>
            <p>We do not sell personal data.</p>
          </section>

          {/* 8. International data transfers */}
          <section>
            <h2 className="font-serif text-xl font-bold text-[#1A1A1A] mb-3">8. International Data Transfers</h2>
            <p>
              Personal data may be transferred outside your jurisdiction. Where required, we rely on:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>adequacy decisions</li>
              <li>Standard Contractual Clauses (SCCs)</li>
              <li>other lawful transfer mechanisms</li>
            </ul>
          </section>

          {/* 9. Data retention */}
          <section>
            <h2 className="font-serif text-xl font-bold text-[#1A1A1A] mb-3">9. Data Retention</h2>
            <p>
              We retain personal data only for as long as necessary for the purposes described above or as required by law. Retention periods depend on the nature of the relationship and applicable legal obligations.
            </p>
          </section>

          {/* 10. Your rights */}
          <section>
            <h2 className="font-serif text-xl font-bold text-[#1A1A1A] mb-3">10. Your Rights</h2>
            <p>Depending on your location, you may have rights to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>access, correct or delete personal data</li>
              <li>restrict or object to processing</li>
              <li>data portability</li>
              <li>withdraw consent</li>
            </ul>
            <p>
              Requests can be submitted to{" "}
              <a href="mailto:privacy@estalara.com" className="text-[#0F766E] hover:underline">privacy@estalara.com</a>.
              We may need to verify your identity.
            </p>
          </section>

          {/* 11. Security */}
          <section>
            <h2 className="font-serif text-xl font-bold text-[#1A1A1A] mb-3">11. Security</h2>
            <p>
              We implement appropriate technical and organisational measures designed to protect personal data, including encryption, access controls, monitoring and staff training. No system is completely secure, and we cannot guarantee absolute security.
            </p>
          </section>

          {/* 12. Children's privacy */}
          <section>
            <h2 className="font-serif text-xl font-bold text-[#1A1A1A] mb-3">{"12. Children\u2019s Privacy"}</h2>
            <p>
              Our services are intended for adults. We do not knowingly collect personal data from individuals under 18.
            </p>
          </section>

          {/* 13. Changes */}
          <section>
            <h2 className="font-serif text-xl font-bold text-[#1A1A1A] mb-3">13. Changes to This Policy</h2>
            <p>
              {"We may update this Privacy Policy periodically. The \u201cLast Updated\u201d date reflects the most recent version."}
            </p>
          </section>

          {/* 14. Contact */}
          <section>
            <h2 className="font-serif text-xl font-bold text-[#1A1A1A] mb-3">14. Contact</h2>
            <p><strong>Privacy Office</strong></p>
            <p>
              Time2Show, Inc.<br />
              Email: <a href="mailto:estalara@estalara.com" className="text-[#0F766E] hover:underline">estalara@estalara.com</a>
            </p>
          </section>

          {/* 15. Relationship to customer privacy policies */}
          <section>
            <h2 className="font-serif text-xl font-bold text-[#1A1A1A] mb-3">15. Relationship to Customer Privacy Policies</h2>
            <p>
              {"If you interact with a real estate agency or other service provider using technology powered by Estalara, that entity\u2019s privacy policy applies, not this one. Estalara acts solely as a data processor in such cases."}
            </p>
          </section>

          {/* 16. Related documents */}
          <section>
            <h2 className="font-serif text-xl font-bold text-[#1A1A1A] mb-3">16. Related Documents</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><Link href="/legal/cookies-policy" className="text-[#0F766E] hover:underline">Cookie Policy</Link></li>
              <li>Data Processing Agreement (available to customers upon request)</li>
              <li>Sub-processor list (available upon request)</li>
            </ul>
          </section>

        </div>
      </div>
    </main>
  )
}
