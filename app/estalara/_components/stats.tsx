"use client"

import { useEffect, useRef, useState } from "react"

export function EstalaraStats() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -10% 0px"
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const lines = [
    {
      text: (
        <>
          Foreign buyers represent up to <span className="text-[#1A1A1A] font-semibold">40%</span> of premium transactions in key markets.
        </>
      ),
      subtext: "They come ready to pay. The question is whether they can find you.",
      delay: 0,
    },
    {
      text: "But they won't fly in just to browse.",
      subtext: "They want to see before they commit.",
      delay: 400,
    },
    {
      text: (
        <>
          That's where <span className="font-semibold text-[#1A1A1A] relative inline-block">LIVE<span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#1A1A1A]/30"></span></span> changes everything.
        </>
      ),
      subtext: null,
      delay: 800,
      isHighlight: true,
    },
  ]

  return (
    <section 
      ref={sectionRef}
      className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 border-t border-[#E8E4DF] bg-[#F8F6F3]"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Label */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <p className="text-xs sm:text-sm uppercase tracking-widest text-[#8B8B8B] mb-3 sm:mb-4">
            The Global Opportunity
          </p>
        </div>

        {/* Animated Text Sequence */}
        <div className="space-y-10 sm:space-y-14 lg:space-y-16">
          {lines.map((line, index) => (
            <div
              key={index}
              className={`
                text-center transition-all duration-700 ease-out
                ${isVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-8"
                }
                ${line.isHighlight ? "mt-6 sm:mt-10" : ""}
              `}
              style={{
                transitionDelay: isVisible ? `${line.delay}ms` : "0ms"
              }}
            >
              <p 
                className={`
                  font-serif leading-relaxed text-[#5C5C5C]
                  ${line.isHighlight 
                    ? "text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#1A1A1A]" 
                    : "text-xl sm:text-2xl md:text-3xl lg:text-4xl"
                  }
                `}
              >
                {line.text}
              </p>
              {line.subtext && (
                <p 
                  className="font-serif text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#8B8B8B] mt-3 sm:mt-4"
                >
                  {line.subtext}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
