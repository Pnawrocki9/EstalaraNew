"use client"

import { useEffect, useRef, useState } from "react"

export function SlidingTagline() {
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -20% 0px"
      }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [])

  return (
    <div 
      ref={containerRef}
      className="relative h-48 sm:h-56 lg:h-72 overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #F8F6F3 50%, #FFFFFF 50%)"
      }}
    >
      {/* Decorative line at the exact transition */}
      <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[1px] bg-[#E8E4DF]" />
      
      <div 
        className={`
          absolute inset-0 flex items-center justify-center
          transition-all duration-1000 ease-out
          ${isVisible 
            ? "translate-x-0 opacity-100" 
            : "translate-x-[100vw] opacity-0"
          }
        `}
      >
        <h2 
          className="font-serif text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] xl:text-[13rem] font-normal text-[#1A1A1A] whitespace-nowrap tracking-tight select-none"
          style={{
            textShadow: "0 4px 40px rgba(0,0,0,0.06)"
          }}
        >
          And You Just Sell.
        </h2>
      </div>
    </div>
  )
}
