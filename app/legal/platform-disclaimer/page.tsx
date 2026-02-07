import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Platform Disclaimer | Estalara",
  description: "Estalara Platform Disclaimer",
}

export default function PlatformDisclaimerPage() {
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
            Platform Disclaimer
          </h1>
          <p className="text-sm text-[#8B8B8B]">
            Last Updated: 30 September 2025
          </p>
        </div>

        <div className="prose prose-neutral max-w-none text-[#3A3A3A] leading-relaxed space-y-6">
          <p>
            Estalara is a software-as-a-service (SaaS) technology provider. The Estalara platform delivers software tools for creating, managing and presenting real estate-related content and data. Estalara does not act as a real estate broker, agent, advisor, intermediary or transaction facilitator.
          </p>
          <p>
            All information, content and outputs generated or displayed using the platform may originate from users, third parties, public sources or automated processes. Estalara does not verify, validate or guarantee the accuracy, completeness or suitability of such information for any specific purpose.
          </p>
          <p>
            The platform does not provide legal, tax, financial, investment or real estate advice. Any decisions made based on the use of the platform are the sole responsibility of the user. Users should obtain independent professional advice before making business, legal or investment decisions.
          </p>
          <p>
            Estalara is not responsible for the actions, representations or services of any third parties, including real estate agencies or end users operating under white-label versions of the platform.
          </p>
          <p>
            To the maximum extent permitted by law, Estalara disclaims all liability for any loss or damage arising from the use of, or reliance on, the platform or any information generated through it.
          </p>
          <p>
            Use of the platform constitutes acceptance of this Disclaimer.
          </p>
          <p>
            For questions, contact us at{" "}
            <a href="mailto:estalara@estalara.com" className="text-[#0F766E] hover:underline">
              estalara@estalara.com
            </a>.
          </p>
        </div>
      </div>
    </main>
  )
}
