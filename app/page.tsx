import { EstalaraHero } from "./estalara/_components/hero"
import { EstalaraStats } from "./estalara/_components/stats"
import { EstalaraProblem } from "./estalara/_components/problem"
import { EstalaraSolution } from "./estalara/_components/solution"
import { EstalaraFeatures } from "./estalara/_components/features"
import { EstalaraAICapabilities } from "./estalara/_components/ai-capabilities"
import { EstalaraVision } from "./estalara/_components/vision"
import { EstalaraCTA } from "./estalara/_components/cta"
import { EstalaraHeader } from "./estalara/_components/header"
import { EstalaraFooter } from "./estalara/_components/footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-[#F8F6F3]">
      <EstalaraHeader />
      <main>
        <EstalaraHero />
        <EstalaraStats />
        <EstalaraProblem />
        <EstalaraSolution />
        <EstalaraFeatures />
        <EstalaraAICapabilities />
        <EstalaraVision />
        <EstalaraCTA />
      </main>
      <EstalaraFooter />
    </div>
  )
}
