"use client"

import React from "react"

import { Bot, Languages, Clock, Target, Video, Zap } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { useState, useRef, useCallback } from "react"

// 3D Tilt Card Component
function TiltCard({ 
  children,
  className = ""
}: { 
  children: React.ReactNode
  className?: string
}) {
  const [transform, setTransform] = useState("")
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 })
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    
    // Calculate rotation (max 8 degrees for subtle effect)
    const rotateX = ((y - centerY) / centerY) * -8
    const rotateY = ((x - centerX) / centerX) * 8
    
    // Calculate glare position
    const glareX = (x / rect.width) * 100
    const glareY = (y / rect.height) * 100
    
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`)
    setGlarePosition({ x: glareX, y: glareY })
  }, [])

  const handleMouseLeave = useCallback(() => {
    setTransform("")
    setGlarePosition({ x: 50, y: 50 })
  }, [])

  return (
    <div
      ref={cardRef}
      className={`relative transition-transform duration-200 ease-out ${className}`}
      style={{ transform, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Glare overlay */}
      <div 
        className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-hidden"
        style={{ transform: "translateZ(1px)" }}
      >
        <div 
          className="absolute w-full h-full"
          style={{
            background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255,255,255,0.15) 0%, transparent 60%)`,
          }}
        />
      </div>
      {children}
    </div>
  )
}

// 3D Icon with depth effect
function Icon3D({ 
  Icon, 
}: { 
  Icon: LucideIcon
}) {
  return (
    <div className="relative" style={{ transformStyle: "preserve-3d" }}>
      {/* Main icon container */}
      <div 
        className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1A1A1A] via-[#2D2D2D] to-[#1A1A1A] flex items-center justify-center shadow-lg transition-all duration-300"
        style={{ transform: "translateZ(20px)" }}
      >
        {/* Top highlight for 3D effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/15 via-transparent to-black/10" />
        {/* Side highlight */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/5 via-transparent to-black/5" />
        {/* Icon with lift effect */}
        <Icon 
          className="w-6 h-6 text-white relative z-10 drop-shadow-sm" 
          strokeWidth={1.5} 
          style={{ transform: "translateZ(10px)" }}
        />
      </div>
    </div>
  )
}

export function EstalaraFeatures() {
  const features = [
    {
      icon: Video,
      title: "LIVE Interactive Showcases",
      description:
        "1-to-many presentations that eliminate the 'distance tax' on trust. Answer questions in real-time to global audiences.",

    },
    {
      icon: Languages,
      title: "Natural Language Translation",
      description:
        "Sell to a German investor in English while they read in German. Your local team becomes a polyglot global sales force.",

    },
    {
      icon: Bot,
      title: "AI Assistant",
      description:
        "24/7 availability across all time zones. Handles inquiries with hallucination-free accuracy on property details.",

    },
    {
      icon: Target,
      title: "Hot Lead Scoring",
      description:
        "Engagement scoring analyzes viewer questions, watch time, and interaction intensity to flag high-probability prospects instantly.",

    },
    {
      icon: Zap,
      title: "Social Amplification",
      description:
        "Re-stream to YouTube, Instagram, and Facebook instantly. Maximize reach without additional effort.",

    },
    {
      icon: Clock,
      title: "Speed to Close",
      description:
        "VR and LIVE technologies reduce average sales time from 34 days to 19 days. Focus only on closing ready buyers.",

    },
  ]

  return (
    <section id="features" className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <p className="text-xs sm:text-sm uppercase tracking-widest text-[#8B8B8B] mb-3 sm:mb-4">
            Features
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#1A1A1A] max-w-3xl mx-auto text-balance">
            Everything you need to sell globally
          </h2>
          <p className="text-[#5C5C5C] mt-3 sm:mt-4 max-w-xl mx-auto text-sm sm:text-base">
            Powerful tools that transform how agencies connect with international investors
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <TiltCard
              key={index}
              className="group"
            >
              <div className="bg-[#F8F6F3] rounded-2xl p-5 sm:p-6 lg:p-8 border border-[#E8E4DF] group-hover:border-[#D4CFC8] group-hover:shadow-xl transition-all duration-300 h-full">
                <div className="mb-4 sm:mb-6">
                  <Icon3D Icon={feature.icon} />
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-[#1A1A1A] mb-2 sm:mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#5C5C5C] text-sm lg:text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  )
}
