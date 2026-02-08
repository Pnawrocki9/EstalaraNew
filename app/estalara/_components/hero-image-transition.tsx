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

// CSS animation class names for each transition type
const enterAnimations: Record<TransitionType, string> = {
  crossfade: "hero-anim-crossfade-enter",
  slide: "hero-anim-slide-enter",
  "clip-reveal": "hero-anim-clip-enter",
  "zoom-burst": "hero-anim-zoom-enter",
  "blur-dissolve": "hero-anim-blur-enter",
}

const exitAnimations: Record<TransitionType, string> = {
  crossfade: "hero-anim-crossfade-exit",
  slide: "hero-anim-slide-exit",
  "clip-reveal": "hero-anim-clip-exit",
  "zoom-burst": "hero-anim-zoom-exit",
  "blur-dissolve": "hero-anim-blur-exit",
}

const transitionLabels: Record<TransitionType, string> = {
  crossfade: "Dissolve",
  slide: "Slide",
  "clip-reveal": "Reveal",
  "zoom-burst": "Zoom",
  "blur-dissolve": "Blur",
}

export function HeroImageTransition({ children }: { children?: React.ReactNode }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [prevIndex, setPrevIndex] = useState(-1) // -1 means no previous yet
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
    setPrevIndex(activeIndex)
    setActiveIndex((prev) => (prev + 1) % heroImages.length)
    setTransitionTypeIndex((prev) => (prev + 1) % transitionTypes.length)
    setIsTransitioning(true)
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
        setPrevIndex(-1)
      }, TRANSITION_DURATION)
      return () => clearTimeout(timeout)
    }
  }, [isTransitioning])

  // Determine className and style for each image layer
  const getLayerProps = (index: number) => {
    const isActive = index === activeIndex
    const isPrev = index === prevIndex

    // Base classes for all layers
    let className = "absolute inset-0 w-full h-full"
    let style: React.CSSProperties = {}

    if (reducedMotion) {
      // Instant swap, no animations
      style = {
        opacity: isActive ? 1 : 0,
        zIndex: isActive ? 1 : 0,
      }
      return { className, style }
    }

    if (isTransitioning) {
      if (isActive) {
        // Incoming image: play enter animation
        className += ` ${enterAnimations[currentTransition]}`
        style = { zIndex: 2 }
      } else if (isPrev) {
        // Outgoing image: play exit animation
        className += ` ${exitAnimations[currentTransition]}`
        style = { zIndex: 1 }
      } else {
        // All other images: completely hidden
        style = { opacity: 0, zIndex: 0 }
      }
    } else {
      if (isActive) {
        // Resting visible state
        style = { opacity: 1, zIndex: 1 }
      } else {
        // Hidden
        style = { opacity: 0, zIndex: 0 }
      }
    }

    return { className, style }
  }

  return (
    <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#1A1A1A]/10 group">
      {/* Image layers */}
      <div className="relative w-full aspect-video">
        {heroImages.map((image, index) => {
          const isActive = index === activeIndex
          const { className, style } = getLayerProps(index)
          return (
            <div key={image.src} className={className} style={style}>
              <Image
                src={image.src}
                alt={image.alt}
                width={1200}
                height={675}
                className={`w-full h-full object-cover hero-image-kenburns ${isActive && !isTransitioning ? "hero-image-active" : ""}`}
                priority
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
            className="h-full bg-white/60"
            style={{
              width: `${isTransitioning ? 0 : progress * 100}%`,
              transition: isTransitioning ? "width 300ms ease" : "none",
            }}
          />
        </div>
      )}

      {/* Slide indicator dots + transition label */}
      <div className="absolute bottom-2 sm:bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 sm:gap-3">
        {/* Transition type label */}
        <span
          className="text-[8px] sm:text-[10px] uppercase tracking-widest text-white/50 font-medium select-none transition-opacity duration-500 hidden sm:inline"
          style={{ opacity: isTransitioning ? 1 : 0.4 }}
        >
          {transitionLabels[currentTransition]}
        </span>

        {/* Dots */}
        <div className="flex items-center gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (index !== activeIndex && !isTransitioning) {
                  setPrevIndex(activeIndex)
                  setActiveIndex(index)
                  setTransitionTypeIndex((prev) => (prev + 1) % transitionTypes.length)
                  setIsTransitioning(true)
                  setProgress(0)
                }
              }}
              className={`transition-all duration-500 rounded-full ${
                index === activeIndex
                  ? "w-5 sm:w-6 h-2 bg-white/90"
                  : "w-2 h-2 bg-white/40 hover:bg-white/60"
              }`}
              style={{ minHeight: '8px', minWidth: '8px' }}
              aria-label={`Show image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
