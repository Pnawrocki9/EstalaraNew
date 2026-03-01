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
      title: "Show the property to the world \u2013 live \u2013 without travel.",
      tagline: "Show one property. Reach 47 buyers. In one evening.",
      description:
        "Walk through the apartment with your phone. Buyers from China to USA watch live, ask questions, and fall in love \u2013 before they ever book a flight. Same as an open house. Just without the travel costs.",
    },
    {
      icon: Languages,
      title: "Instant Multilingual Communication",
      tagline: "You speak. They understand. Automatically.",
      description:
        "Talk through the property in English while your German buyer reads every word in German \u2014 in real time. No translator on call, no awkward pauses. Your local team suddenly speaks every language.",
    },
    {
      icon: Bot,
      title: "24/7 Smart Assistant",
      tagline: "It\u2019s 2 AM in Tokyo. A buyer has a question. It\u2019s answered.",
      description:
        "Estalara\u2019s AI knows every detail of every listing and replies instantly \u2013 in the buyer\u2019s language. It even knows the nearest schools and gyms. You wake up to a conversation that\u2019s already halfway to a showing.",
    },
    {
      icon: Target,
      title: "Lead Readiness Scoring",
      tagline: "Stop guessing who\u2019s serious. We\u2019ll just tell you.",
      description:
        "After every LIVE, you get a ranked list: who watched the whole thing, who asked about financing, who came back three times. James at the top? Call James first. It\u2019s that simple.",
    },
    {
      icon: Zap,
      title: "One Presentation, Many Channels",
      tagline: "One LIVE session. YouTube, Instagram, and Facebook \u2014 all at once.",
      description:
        "You present once from the property. We broadcast it everywhere your buyers scroll. More eyes, zero extra effort. The only thing you need to do is show up.",
    },
    {
      icon: Clock,
      title: "Faster Sales Close Time",
      tagline: "From first look to signed contract in 19 days \u2013 not 34 (US statistics)",
      description:
        "Buyers who\u2019ve seen a property live and had their questions answered don\u2019t need convincing on arrival. They come ready. That\u2019s one extra commission per quarter, for every agent on your team.",
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
                <p className="text-[#1A1A1A] font-medium text-sm lg:text-base mb-2">
                  {feature.tagline}
                </p>
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
