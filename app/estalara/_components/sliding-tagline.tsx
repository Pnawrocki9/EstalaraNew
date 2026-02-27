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
        threshold: 0.3,
        rootMargin: "-10% 0px -10% 0px"
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
      className="relative h-32 sm:h-40 lg:h-48 overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #F8F6F3 50%, #FFFFFF 50%)"
      }}
    >
      <div 
        className={`
          absolute inset-0 flex items-center justify-center
          transition-all duration-1000 ease-out
          ${isVisible 
            ? "translate-x-0 opacity-100" 
            : "translate-x-full opacity-0"
          }
        `}
      >
        <h2 
          className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-normal text-[#1A1A1A] whitespace-nowrap tracking-tight"
          style={{
            textShadow: "0 4px 30px rgba(0,0,0,0.08)"
          }}
        >
          And You Just Sell.
        </h2>
      </div>
    </div>
  )
}
