"use client"

import { useEffect, useRef, useState } from "react"
import { Globe, Award, Users, Target, Zap } from "lucide-react"

export function EstalaraBenefits() {
  const benefits = [
    {
      icon: Globe,
      title: "The buyers are there. Now they can find you.",
      description:
        "International investors are actively searching for properties in your market — and not finding you. Not because your listings aren't good. Because the portals you're paying for weren't built for cross-border transactions. Estalara is.",
      highlighted: false,
    },
    {
      icon: Award,
      title: "Your brand owns the channel. Not the portal.",
      description:
        "Buyers see your agency. Your logo. Your name. Estalara runs silently in the background. You stop renting visibility from platforms that keep the relationship. You start owning it.",
      highlighted: true,
    },
    {
      icon: Users,
      title: "One agent. One LIVE. Dozens of qualified investors.",
      description:
        "A single live showcase reaches serious buyers across four countries, answers their questions in real time, in their language — and tells you exactly who's ready to move. No international team required.",
      highlighted: false,
    },
    {
      icon: Target,
      title: "Walk into every call already knowing who's serious.",
      description:
        "A call, a tour, a follow-up - and nothing. Every agent knows that cost. Real-time intent scoring tracks watch time, questions, and engagement intensity so you spend time only on buyers who are ready to transact.",
      highlighted: false,
    },
    {
      icon: Zap,
      title: "Close in 19 days. Not 34.",
      description:
        "The average sales cycle drops by 40% when buyers can see, trust, and engage with a property before they ever book a flight. That's not just a stat - that's one extra commission per quarter, for every agent on your team.",
      highlighted: false,
    },
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#F8F6F3]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <p className="text-xs sm:text-sm uppercase tracking-widest text-[#8B8B8B] mb-3 sm:mb-4">
            Benefits
          </p>
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
              <BenefitCard key={index} benefit={benefit} index={index} />
            ))}
          </div>
          
          {/* Second row - 3 items */}
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {benefits.slice(2, 5).map((benefit, index) => (
              <BenefitCard key={index + 2} benefit={benefit} index={index + 2} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function BenefitCard({
  benefit,
  index,
}: {
  benefit: { icon: any; title: string; description: string; highlighted: boolean }
  index: number
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const isHighlighted = benefit.highlighted

  return (
    <div
      ref={cardRef}
      data-testid={`benefit-card-${index}`}
      className={`
        rounded-2xl p-6 sm:p-8 transition-all duration-300
        ${isHighlighted
          ? "bg-[#1A1A1A] border-2 border-[#C8A96E] benefit-card-highlighted"
          : "bg-white border border-[#E8E4DF] hover:border-[#D4CFC8] hover:shadow-lg"
        }
        benefit-card-reveal
        ${isVisible ? "benefit-card-visible" : ""}
      `}
      style={{
        transitionDelay: isVisible ? `${index * 120}ms` : "0ms",
      }}
    >
      <div
        className={`
          w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-5 sm:mb-6
          ${isHighlighted ? "bg-[#C8A96E]/20" : "bg-[#F8F6F3]"}
        `}
      >
        <benefit.icon
          className={`w-6 h-6 sm:w-7 sm:h-7 ${isHighlighted ? "text-[#C8A96E]" : "text-[#1A1A1A]"}`}
        />
      </div>
      <h3
        className={`text-lg sm:text-xl font-semibold mb-3 leading-snug ${
          isHighlighted ? "text-white" : "text-[#1A1A1A]"
        }`}
      >
        {benefit.title}
      </h3>
      <p
        className={`text-sm sm:text-base leading-relaxed ${
          isHighlighted ? "text-[#A8A8A8]" : "text-[#5C5C5C]"
        }`}
      >
        {benefit.description}
      </p>
    </div>
  )
}
