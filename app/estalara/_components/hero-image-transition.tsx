"use client"

import Image from "next/image"
import { useEffect, useState, useCallback } from "react"

interface HeroImage {
  src: string
  alt: string
}

const heroImages: HeroImage[] = [
  {
    src: "/images/estalara/hero-live-walkthrough.jpg",
    alt: "Real estate agent conducting a LIVE property walkthrough presentation",
  },
  {
    src: "/images/estalara/hero-agent-phone.jpg",
    alt: "Real estate agent showcasing property listings on mobile device",
  },
]

export function HeroImageTransition({ children }: { children?: React.ReactNode }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const advanceSlide = useCallback(() => {
    setIsTransitioning(true)
    // After the transition begins, update the active index midway through
    // so the next image is already fading in
    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % heroImages.length)
    }, 50)
  }, [])

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    // Cycle images every 8 seconds (6s hold + 2s transition)
    const interval = setInterval(() => {
      advanceSlide()
    }, 8000)

    return () => clearInterval(interval)
  }, [advanceSlide])

  // Reset transitioning state after the CSS transition completes
  useEffect(() => {
    if (isTransitioning) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false)
      }, 2000) // matches CSS transition duration
      return () => clearTimeout(timeout)
    }
  }, [isTransitioning])

  return (
    <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#1A1A1A]/10">
      {/* Image layers */}
      <div className="relative w-full aspect-video">
        {heroImages.map((image, index) => {
          const isActive = index === activeIndex
          return (
            <div
              key={image.src}
              className="absolute inset-0 w-full h-full"
              style={{
                opacity: isActive ? 1 : 0,
                transform: isActive ? "scale(1)" : "scale(1.05)",
                transition: "opacity 2s cubic-bezier(0.4, 0, 0.2, 1), transform 8s cubic-bezier(0.4, 0, 0.2, 1)",
                zIndex: isActive ? 1 : 0,
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={1200}
                height={675}
                className={`w-full h-full object-cover hero-image-kenburns ${isActive ? "hero-image-active" : ""}`}
                priority={index === 0}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1024px"
              />
            </div>
          )
        })}
      </div>

      {/* Overlay children (UI elements) */}
      {children}

      {/* Slide indicator dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (index !== activeIndex) {
                setIsTransitioning(true)
                setTimeout(() => setActiveIndex(index), 50)
              }
            }}
            className={`transition-all duration-500 rounded-full ${
              index === activeIndex
                ? "w-6 h-2 bg-white/90"
                : "w-2 h-2 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Show image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
