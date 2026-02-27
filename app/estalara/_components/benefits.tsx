"use client"

import { TrendingUp, Target, Users, Globe, Zap } from "lucide-react"

export function EstalaraBenefits() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Close deals you'd never have closed before",
      description:
        "International buyers are already searching for properties like yours. They just couldn't reach you - and you couldn't reach them. Estalara opens that market without you changing how you work.",
    },
    {
      icon: Target,
      title: "Stop wasting time on people who aren't ready",
      description:
        "Every serious agent knows the cost of a cold lead: a call, a tour, a follow-up, and nothing. With real-time intent scoring, you walk into every conversation already knowing who's ready to buy - and who isn't.",
    },
    {
      icon: Users,
      title: "Your team scales. Your headcount doesn't.",
      description:
        "One agent. One LIVE showcase. Tens of investors across four countries, questions answered in real time, in their language. The same output that used to require a full international team — handled automatically.",
    },
    {
      icon: Globe,
      title: "Your brand goes global. Your identity stays local.",
      description:
        "Buyers see your agency. Your logo. Your name. Estalara runs silently in the background. You don't become a tech company. You just grow like one.",
    },
    {
      icon: Zap,
      title: "Sell faster than ever before.",
      description:
        "The average sales cycle drops by 40%. That's not only a stat - that's one extra commission per quarter. For every agent on your team.",
    },
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#F8F6F3]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-5xl text-[#1A1A1A] max-w-3xl mx-auto text-balance leading-tight">
            You don't need more tools. You need better outcomes.
          </h2>
          <p className="text-[#5C5C5C] mt-4 sm:mt-6 max-w-2xl mx-auto text-base sm:text-lg lg:text-xl leading-relaxed">
            Estalara is not a feature set. It's a growth engine for agencies ready to compete globally.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid gap-6 sm:gap-8 lg:gap-10">
          {/* First row - 2 items */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {benefits.slice(0, 2).map((benefit, index) => (
              <BenefitCard key={index} benefit={benefit} />
            ))}
          </div>
          
          {/* Second row - 3 items */}
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {benefits.slice(2, 5).map((benefit, index) => (
              <BenefitCard key={index + 2} benefit={benefit} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function BenefitCard({ benefit }: { benefit: { icon: any; title: string; description: string } }) {
  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E4DF] hover:border-[#D4CFC8] hover:shadow-lg transition-all duration-300">
      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#F8F6F3] flex items-center justify-center mb-5 sm:mb-6">
        <benefit.icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#1A1A1A]" />
      </div>
      <h3 className="text-lg sm:text-xl font-semibold text-[#1A1A1A] mb-3 leading-snug">
        {benefit.title}
      </h3>
      <p className="text-[#5C5C5C] text-sm sm:text-base leading-relaxed">
        {benefit.description}
      </p>
    </div>
  )
}
