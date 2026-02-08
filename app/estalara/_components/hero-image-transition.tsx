"use client"

import Image from "next/image"
import { useEffect, useState, useCallback, useRef } from "react"

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
  {
    src: "/images/estalara/hero-agent-door.jpg",
    alt: "Real estate agent welcoming clients at the property door",
  },
]

// Transition types that cycle through each image swap
type TransitionType = "crossfade" | "slide" | "clip-reveal" | "zoom-burst" | "blur-dissolve"

const transitionTypes: TransitionType[] = [
  "crossfade",
  "slide",
  "clip-reveal",
  "zoom-burst",
  "blur-dissolve",
]

const HOLD_DURATION = 8000 // ms to hold each image
const TRANSITION_DURATION = 1600 // ms for the transition animation

export function HeroImageTransition({ children }: { children?: React.ReactNode }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [prevIndex, setPrevIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [transitionTypeIndex, setTransitionTypeIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const progressRef = useRef<number | null>(null)
  const holdStartRef = useRef<number>(Date.now())
  const [reducedMotion, setReducedMotion] = useState(false)

  const currentTransition = transitionTypes[transitionTypeIndex]

  // Detect reduced motion preference
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReducedMotion(mq.matches)
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches)
    mq.addEventListener("change", handler)
    return () => mq.removeEventListener("change", handler)
  }, [])

  const advanceSlide = useCallback(() => {
    setIsTransitioning(true)
    setPrevIndex((prev) => prev) // capture current as prev
    setPrevIndex(activeIndex)
    setActiveIndex((prev) => (prev + 1) % heroImages.length)
    setTransitionTypeIndex((prev) => (prev + 1) % transitionTypes.length)
    setProgress(0)
  }, [activeIndex])

  // Main interval for cycling slides
  useEffect(() => {
    if (reducedMotion) return

    const interval = setInterval(() => {
      advanceSlide()
    }, HOLD_DURATION)

    return () => clearInterval(interval)
  }, [advanceSlide, reducedMotion])

  // Progress bar animation
  useEffect(() => {
    if (reducedMotion || isTransitioning) return

    holdStartRef.current = Date.now()
    setProgress(0)

    const tick = () => {
      const elapsed = Date.now() - holdStartRef.current
      const p = Math.min(elapsed / HOLD_DURATION, 1)
      setProgress(p)
      if (p < 1) {
        progressRef.current = requestAnimationFrame(tick)
      }
    }

    progressRef.current = requestAnimationFrame(tick)
    return () => {
      if (progressRef.current) cancelAnimationFrame(progressRef.current)
    }
  }, [activeIndex, isTransitioning, reducedMotion])

  // Reset transitioning state after animation completes
  useEffect(() => {
    if (isTransitioning) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false)
      }, TRANSITION_DURATION)
      return () => clearTimeout(timeout)
    }
  }, [isTransitioning])

  // Build inline styles for each image layer based on current transition type
  const getImageStyle = (index: number): React.CSSProperties => {
    const isActive = index === activeIndex
    const isPrev = index === prevIndex && isTransitioning

    if (reducedMotion) {
      return {
        opacity: isActive ? 1 : 0,
        zIndex: isActive ? 1 : 0,
      }
    }

    const duration = `${TRANSITION_DURATION}ms`

    // --- CROSSFADE ---
    if (currentTransition === "crossfade") {
      if (isTransitioning) {
        return {
          opacity: isActive ? 1 : 0,
          transform: isActive ? "scale(1)" : "scale(1.03)",
          transition: `opacity ${duration} cubic-bezier(0.4, 0, 0.2, 1), transform ${duration} cubic-bezier(0.4, 0, 0.2, 1)`,
          zIndex: isActive ? 2 : 1,
          filter: isActive ? "brightness(1)" : "brightness(1.1)",
        }
      }
      return {
        opacity: isActive ? 1 : 0,
        transform: "scale(1)",
        transition: `opacity ${duration} cubic-bezier(0.4, 0, 0.2, 1)`,
        zIndex: isActive ? 1 : 0,
      }
    }

    // --- SLIDE ---
    if (currentTransition === "slide") {
      if (isTransitioning) {
        if (isActive) {
          return {
            opacity: 1,
            transform: "translateX(0%)",
            transition: `transform ${duration} cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 200ms ease`,
            zIndex: 2,
          }
        }
        if (isPrev) {
          return {
            opacity: 1,
            transform: "translateX(-100%)",
            transition: `transform ${duration} cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 200ms ease`,
            zIndex: 1,
          }
        }
      }
      // Resting state
      if (isActive) {
        return { opacity: 1, transform: "translateX(0%)", zIndex: 1 }
      }
      // Offscreen to the right, ready to slide in
      return {
        opacity: 1,
        transform: "translateX(100%)",
        zIndex: 0,
        transition: "none",
      }
    }

    // --- CLIP REVEAL (diagonal wipe) ---
    if (currentTransition === "clip-reveal") {
      if (isTransitioning) {
        if (isActive) {
          return {
            opacity: 1,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            transition: `clip-path ${duration} cubic-bezier(0.77, 0, 0.175, 1)`,
            zIndex: 2,
          }
        }
        if (isPrev) {
          return {
            opacity: 1,
            zIndex: 1,
          }
        }
      }
      if (isActive) {
        return {
          opacity: 1,
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          zIndex: 1,
        }
      }
      // Clipped away - diagonal from top-right
      return {
        opacity: 1,
        clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
        zIndex: 0,
        transition: "none",
      }
    }

    // --- ZOOM BURST ---
    if (currentTransition === "zoom-burst") {
      if (isTransitioning) {
        if (isActive) {
          return {
            opacity: 1,
            transform: "scale(1)",
            transition: `opacity ${duration} cubic-bezier(0.4, 0, 0.2, 1), transform ${duration} cubic-bezier(0.16, 1, 0.3, 1)`,
            zIndex: 2,
          }
        }
        if (isPrev) {
          return {
            opacity: 0,
            transform: "scale(1.15)",
            transition: `opacity ${duration} cubic-bezier(0.4, 0, 0.2, 1), transform ${duration} cubic-bezier(0.4, 0, 0.2, 1)`,
            zIndex: 1,
          }
        }
      }
      if (isActive) {
        return { opacity: 1, transform: "scale(1)", zIndex: 1 }
      }
      // Ready to enter from slight scale down
      return {
        opacity: 0,
        transform: "scale(0.92)",
        zIndex: 0,
        transition: "none",
      }
    }

    // --- BLUR DISSOLVE ---
    if (currentTransition === "blur-dissolve") {
      if (isTransitioning) {
        if (isActive) {
          return {
            opacity: 1,
            filter: "blur(0px) brightness(1)",
            transition: `opacity ${duration} cubic-bezier(0.4, 0, 0.2, 1), filter ${duration} cubic-bezier(0.4, 0, 0.2, 1)`,
            zIndex: 2,
          }
        }
        if (isPrev) {
          return {
            opacity: 0,
            filter: "blur(12px) brightness(1.2)",
            transition: `opacity ${duration} cubic-bezier(0.4, 0, 0.2, 1), filter ${duration} cubic-bezier(0.4, 0, 0.2, 1)`,
            zIndex: 1,
          }
        }
      }
      if (isActive) {
        return { opacity: 1, filter: "blur(0px)", zIndex: 1 }
      }
      return {
        opacity: 0,
        filter: "blur(8px)",
        zIndex: 0,
        transition: "none",
      }
    }

    // fallback
    return { opacity: isActive ? 1 : 0, zIndex: isActive ? 1 : 0 }
  }

  // Transition label for the indicator
  const transitionLabels: Record<TransitionType, string> = {
    crossfade: "Dissolve",
    slide: "Slide",
    "clip-reveal": "Reveal",
    "zoom-burst": "Zoom",
    "blur-dissolve": "Blur",
  }

  return (
    <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#1A1A1A]/10 group">
      {/* Image layers */}
      <div className="relative w-full aspect-video">
        {heroImages.map((image, index) => {
          const isActive = index === activeIndex
          return (
            <div
              key={image.src}
              className="absolute inset-0 w-full h-full will-change-transform"
              style={getImageStyle(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={1200}
                height={675}
                className={`w-full h-full object-cover hero-image-kenburns ${isActive && !isTransitioning ? "hero-image-active" : ""}`}
                priority={index === 0}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1024px"
              />
            </div>
          )
        })}

        {/* Shimmer overlay during transitions */}
        {isTransitioning && !reducedMotion && (
          <div
            className="absolute inset-0 z-[3] pointer-events-none hero-shimmer"
            style={{
              background:
                "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.08) 45%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.08) 55%, transparent 60%)",
              backgroundSize: "200% 100%",
              animation: `hero-shimmer-sweep ${TRANSITION_DURATION}ms ease-in-out forwards`,
            }}
          />
        )}
      </div>

      {/* Overlay children (UI elements) */}
      {children}

      {/* Progress bar */}
      {!reducedMotion && (
        <div className="absolute bottom-0 left-0 right-0 z-20 h-[3px] bg-white/10">
          <div
            className="h-full bg-white/60 transition-none"
            style={{
              width: `${isTransitioning ? 0 : progress * 100}%`,
              transition: isTransitioning ? "width 300ms ease" : "none",
            }}
          />
        </div>
      )}

      {/* Slide indicator dots + transition label */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {/* Transition type label */}
        <span
          className="text-[10px] uppercase tracking-widest text-white/50 font-medium select-none transition-opacity duration-500"
          style={{ opacity: isTransitioning ? 1 : 0.4 }}
        >
          {transitionLabels[transitionTypes[(transitionTypeIndex + 1) % transitionTypes.length]]}
        </span>

        {/* Dots */}
        <div className="flex items-center gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (index !== activeIndex && !isTransitioning) {
                  setPrevIndex(activeIndex)
                  setIsTransitioning(true)
                  setActiveIndex(index)
                  setTransitionTypeIndex((prev) => (prev + 1) % transitionTypes.length)
                  setProgress(0)
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
    </div>
  )
}
