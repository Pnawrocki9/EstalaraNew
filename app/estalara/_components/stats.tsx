"use client"

import { useEffect, useRef, useState } from "react"

function AnimatedLine({ 
  children, 
  className = "" 
}: { 
  children: React.ReactNode
  className?: string 
}) {
  const [isVisible, setIsVisible] = useState(false)
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        } else {
          setIsVisible(false)
        }
      },
      {
        threshold: 0.5,
        rootMargin: "0px 0px -5% 0px"
      }
    )

    if (lineRef.current) {
      observer.observe(lineRef.current)
    }

    return () => {
      if (lineRef.current) {
        observer.unobserve(lineRef.current)
      }
    }
  }, [])

  return (
    <div
      ref={lineRef}
      className={`
        overflow-hidden py-6 sm:py-8 lg:py-12
        ${className}
      `}
    >
      <div
        className={`
          transition-all duration-1000 ease-out
          ${isVisible 
            ? "translate-x-0 opacity-100" 
            : "translate-x-[100vw] opacity-0"
          }
        `}
      >
        {children}
      </div>
    </div>
  )
}

export function EstalaraStats() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-t border-[#E8E4DF] bg-[#F8F6F3]">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <p className="text-xs sm:text-sm uppercase tracking-widest text-[#8B8B8B]">
            The Global Opportunity
          </p>
        </div>

        {/* Animated Text Lines */}
        <div className="space-y-2 sm:space-y-4">
          {/* Line 1 */}
          <AnimatedLine>
            <p className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#5C5C5C] text-center leading-tight">
              Foreign buyers represent up to{" "}
              <span className="text-[#1A1A1A] font-semibold">40%</span>{" "}
              of premium transactions in key markets.
            </p>
          </AnimatedLine>

          {/* Line 2 */}
          <AnimatedLine>
            <p className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#5C5C5C] text-center leading-tight">
              They come ready to pay.{" "}
              <span className="text-[#8B8B8B]">The question is whether they can find you.</span>
            </p>
          </AnimatedLine>

          {/* Line 3 */}
          <AnimatedLine>
            <p className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#5C5C5C] text-center leading-tight">
              But they won't fly in just to browse.
            </p>
            <p className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-[#8B8B8B] text-center leading-tight mt-2 sm:mt-4">
              They want to see before they commit.
            </p>
          </AnimatedLine>

          {/* Line 4 - Highlight */}
          <AnimatedLine className="mt-4 sm:mt-8">
            <p className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#1A1A1A] text-center leading-tight">
              That's where{" "}
              <span className="font-semibold relative inline-block">
                LIVE
                <span className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-[2px] sm:h-[3px] bg-[#1A1A1A]/40"></span>
              </span>{" "}
              changes everything.
            </p>
          </AnimatedLine>
        </div>
      </div>
    </section>
  )
}
