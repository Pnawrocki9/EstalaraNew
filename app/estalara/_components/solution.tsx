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
      title: "Import your listing",
      description:
        "Paste link from integrated portal. We create a property page in 30 seconds.",
    },
    {
      step: "02",
      title: "We find buyers for you",
      description:
        "AI runs your ads on Facebook, Google, Instagram. Targets foreign investors looking in your area. No online marketing knowledge required.",
    },
    {
      step: "03",
      title: "You go LIVE from the property",
      description:
        "Show the apartment, answer questions, build trust. We record who engages, who asks, who stays till the end and much more.",
    },
    {
      step: "04",
      title: "You get hot leads",
      description:
        "After LIVE: list of serious buyers with contact details and engagement scores in your mailbox.",
    },
  ]

  return (
    <>
    <section id="solution" className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <p className="text-xs sm:text-sm uppercase tracking-widest text-[#8B8B8B] mb-3 sm:mb-4">
            The Solution
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white max-w-4xl mx-auto leading-snug">
            The traditional real estate portal gets the traffic.
            <span className="block mt-2">You get the buyer.</span>
            <span className="block mt-2 text-[#A3A3A3]">There's a difference.</span>
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12 sm:mb-20">
          <div>
            <ul className="space-y-6">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-[#1A1A1A]" />
                  </div>
                  <p className="text-[#A3A3A3] text-base lg:text-lg leading-relaxed">
                    {benefit}
                  </p>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-white font-medium text-lg">
              {"This isn't just the future. It's the new reality for agencies ready to scale."}
            </p>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-[#3A3A3A]">
              <Image
                src="/images/estalara/property-3.jpg"
                alt="Luxury beachfront property"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Stats Overlay */}
            <div className="relative sm:absolute sm:-bottom-6 sm:-left-6 mt-4 sm:mt-0 bg-white rounded-xl p-3 sm:p-4 shadow-lg border border-[#E8E4DF]">
              <p className="text-xl sm:text-2xl font-semibold text-[#1A1A1A]">34 to 19 days</p>
              <p className="text-xs sm:text-sm text-[#5C5C5C]">Average sales cycle reduction</p>
            </div>
          </div>
        </div>

        {/* Steps */}
      </div>
    </section>
    
    {/* How It Works - Beige Section */}
    <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#F8F6F3]">
      <div className="max-w-7xl mx-auto">
        <div className="pt-2">
          <p className="text-xs sm:text-sm uppercase tracking-widest text-[#8B8B8B] mb-3 sm:mb-4 text-center">
            How it works
          </p>
          <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl text-[#1A1A1A] mb-8 sm:mb-12 text-center">
            Global dominance in four steps
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-5xl sm:text-6xl lg:text-8xl font-serif text-[#E8E4DF] mb-3 sm:mb-4">
                  {step.step}
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-[#1A1A1A] mb-2 sm:mb-3">
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
    </>
  )
}
