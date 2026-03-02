"use client"

import { useEffect, useRef, useState } from "react"
import { AlertTriangle, ShieldOff, UserX } from "lucide-react"

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  return [ref, isVisible] as const
}

export function EstalaraProblem() {
  const problems = [
    {
      icon: AlertTriangle,
      title: "The Lead Quality Gap",
      subtitle: "You are paying for noise, not intent.",
      sections: [
        {
          label: "The Hard Reality",
          text: "Real estate portals excel at generating clicks, but a click is not a commitment. Most of the traffic you pay for consists of \u201Cwindow shoppers\u201D and accidental browsers.",
        },
        {
          label: "The Pain",
          text: "Your team wastes 80% of their time chasing \u201Cghost leads\u201D who never pick up the phone. You are starving for quality in a sea of low-intent volume.",
        },
        {
          label: "The Result",
          text: "High marketing spend, exhausted agents, and a CRM full of dead data.",
        },
      ],
      quote:
        "\u201CZillow/OtoDom leads are often people who just want to see a house in an hour, not buy it.\u201D \u2014 Common Agent Complaint on Reddit.",
    },
    {
      icon: ShieldOff,
      title: "The Trust Friction",
      subtitle: "Static listings can\u2019t bridge the distance.",
      sections: [
        {
          label: "The Hard Reality",
          text: "International investors are ready to buy, but they are terrified of \u201CPhotoshop-real-estate.\u201D Static galleries and 2D tours (or even 3D/VR) don\u2019t provide the transparency needed for a cross-border commitment.",
        },
        {
          label: "The Pain",
          text: "Distance creates hesitation. When a buyer can\u2019t \u201Cfeel\u201D the property or talk to you in real-time, the momentum dies. Silence is the ultimate deal-killer.",
        },
        {
          label: "The Result",
          text: "You lose high-value commissions to local competitors because you couldn\u2019t build trust across 2,000 miles.",
        },
      ],
    },
    {
      icon: UserX,
      title: "The Relationship Leak",
      subtitle: "You are building the portal\u2019s brand, not yours.",
      sections: [
        {
          label: "The Hard Reality",
          text: "Portals provide exposure, but they keep the relationship. You are often just a \u201CContact Agent\u201D button on a platform you don\u2019t own.",
        },
        {
          label: "The Pain",
          text: "Every time you pay for a lead, you are \u201Crenting\u201D your own audience. If you stop paying, your visibility and your connection to the investor pool vanish instantly.",
        },
        {
          label: "The Result",
          text: "You lack a proprietary database of high-intent investors. You are stuck in a cycle of rising portal fees with zero leverage.",
        },
      ],
    },
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <p className="text-xs sm:text-sm uppercase tracking-widest text-[#8B8B8B] mb-3 sm:mb-4">
            The Problem
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white max-w-3xl mx-auto text-balance">
            {"Views don\u2019t sell properties. Buyers do."}
          </h2>
          <p className="text-[#A3A3A3] mt-3 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            Portals are great for discovery. They are terrible for closing.
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {problems.map((problem, index) => (
            <ProblemCard key={index} problem={problem} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProblemCard({
  problem,
  index,
}: {
  problem: {
    icon: any
    title: string
    subtitle: string
    sections: { label: string; text: string }[]
    quote?: string
  }
  index: number
}) {
  const [ref, isVisible] = useScrollReveal()

  return (
    <div
      ref={ref}
      className={`
        bg-[#2A2A2A] rounded-xl p-5 sm:p-6 lg:p-8 border border-[#3A3A3A]
        hover:border-[#4A4A4A] transition-all duration-300
        benefit-card-reveal
        ${isVisible ? "benefit-card-visible" : ""}
      `}
      style={{ transitionDelay: isVisible ? `${index * 120}ms` : "0ms" }}
    >
      {/* Icon */}
      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#3A3A3A] flex items-center justify-center mb-4 sm:mb-5">
        <problem.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
      </div>

      {/* Title */}
      <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white mb-1.5">
        {problem.title}
      </h3>

      {/* Subtitle */}
      <p className="text-[#C8A96E] text-sm sm:text-base font-medium mb-4 sm:mb-5">
        {problem.subtitle}
      </p>

      {/* Sections */}
      <div className="space-y-4">
        {problem.sections.map((section, sIndex) => (
          <div key={sIndex}>
            <p className="text-sm lg:text-base leading-relaxed">
              <span className="text-white font-semibold">{section.label}:</span>{" "}
              <span className="text-[#A3A3A3]">{section.text}</span>
            </p>
          </div>
        ))}
      </div>

      {/* Quote (optional) */}
      {problem.quote && (
        <div className="mt-5 pt-4 border-t border-[#3A3A3A]">
          <p className="text-[#8B8B8B] text-xs sm:text-sm italic leading-relaxed">
            {problem.quote}
          </p>
        </div>
      )}
    </div>
  )
}
