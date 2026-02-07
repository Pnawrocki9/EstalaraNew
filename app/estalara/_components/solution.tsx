import Image from "next/image"
import { Check } from "lucide-react"

export function EstalaraSolution() {
  const benefits = [
    "Your Brand First: The platform operates under your identity. Estalara is the invisible engine.",
    "LIVE Global Showcase: Present properties LIVE to investors worldwide. We collect data and qualify leads.",
    "Direct Engagement: Build trust instantly through real-time interaction.",
  ]

  const steps = [
    {
      step: "01",
      title: "Flash Import",
      description:
        "Paste a listing link from any portal. Estalara automatically converts it into a modern, high-performing property page built to attract attention and capture serious leads.",
    },
    {
      step: "02",
      title: "AI-Driven Advertising",
      description:
        "Auto-generate campaigns targeting international investors on Facebook, Google, and more. Zero marketing expertise required.",
    },
    {
      step: "03",
      title: "Go LIVE",
      description:
        "Present to investors worldwide with 1-to-many interactive showcases. Re-stream to YouTube, Instagram, and Facebook instantly to engage even more investors.",
    },
  ]

  return (
    <section id="solution" className="py-16 lg:py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-sm uppercase tracking-widest text-[#8B8B8B] mb-4">
            The Solution
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#1A1A1A] max-w-3xl mx-auto text-balance">
            Stop renting visibility. Own the global channel.
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <div>
            <ul className="space-y-6">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#1A1A1A] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-[#5C5C5C] text-base lg:text-lg leading-relaxed">
                    {benefit}
                  </p>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-[#1A1A1A] font-medium text-lg">
              {"This isn't just the future. It's the new reality for agencies ready to scale."}
            </p>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-[#E8E4DF]">
              <Image
                src="/images/estalara/property-3.jpg"
                alt="Luxury beachfront property"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Stats Overlay */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg border border-[#E8E4DF]">
              <p className="text-2xl font-semibold text-[#1A1A1A]">34 to 19 days</p>
              <p className="text-sm text-[#8B8B8B]">Average sales cycle reduction</p>
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="border-t border-[#E8E4DF] pt-16">
          <p className="text-sm uppercase tracking-widest text-[#8B8B8B] mb-8 text-center">
            Global dominance in three steps
          </p>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-6xl lg:text-8xl font-serif text-[#E8E4DF] mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg lg:text-xl font-semibold text-[#1A1A1A] mb-3">
                  {step.title}
                </h3>
                <p className="text-[#5C5C5C] text-sm lg:text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
