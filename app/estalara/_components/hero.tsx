"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { LeadIntentPanel } from "./lead-intent-panel"
import { ShareButton } from "./share-button"

export function EstalaraHero() {

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById("features")
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section className="pt-24 lg:pt-32 pb-16 lg:pb-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Announcement Badge */}
        <div className="flex justify-center mb-8">
          <Link href="/book-demo" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E8E4DF] border border-[#D4CFC8] hover:bg-[#DDD9D3] transition-colors">
            <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
            <span className="text-sm text-[#5C5C5C]">
              Now accepting agencies worldwide
            </span>
            <ArrowRight className="w-4 h-4 text-[#5C5C5C]" />
          </Link>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-normal text-[#1A1A1A] leading-[1.1] tracking-tight mb-6 text-balance">
            From Local Listings
            <br />
            to Live Global Sales
          </h1>
          <p className="text-lg lg:text-xl text-[#5C5C5C] max-w-2xl mx-auto leading-relaxed text-pretty">
            The white-label platform that helps real estate agencies go beyond traditional portals by converting LIVE investor interactions into AI-qualified hot leads worldwide.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <div className="flex items-center gap-2">
            <ShareButton variant="light" />
            <Button
              asChild
              size="lg"
              className="bg-[#1A1A1A] text-white hover:bg-[#333] rounded-full px-8 py-6 text-base font-medium"
            >
              <Link href="/book-demo" className="flex items-center gap-2">
                Book a Demo
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
          <Button
            variant="outline"
            size="lg"
            className="border-[#D4CFC8] text-[#1A1A1A] hover:bg-[#E8E4DF] rounded-full px-8 py-6 text-base font-medium bg-transparent"
            onClick={scrollToFeatures}
          >
            Explore Features
          </Button>
        </div>

        {/* Hero Image */}
        <div className="relative max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#1A1A1A]/10">
            <Image
              src="/images/estalara/hero-live-walkthrough.jpg"
              alt="Real estate agent conducting a LIVE property walkthrough presentation"
              width={1200}
              height={675}
              className="w-full h-auto object-cover aspect-video"
              priority
            />
            
            {/* Lead Intent Score Panel - Top Left Overlay */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10 hidden md:block">
              <LeadIntentPanel />
            </div>
            
            {/* Hot Lead Detection Tab - Top Right, More Prominent with Pulsing Animation */}
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10">
              {/* Pulsing glow effect behind the card */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl blur-xl opacity-60 animate-pulse" />
              
              <div className="relative bg-gradient-to-r from-[#F97316] to-[#EA580C] rounded-2xl px-4 py-3 sm:px-5 sm:py-4 shadow-2xl shadow-orange-500/40 animate-[pulse-subtle_2s_ease-in-out_infinite]">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="relative flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-white" />
                    <div className="absolute w-3 h-3 rounded-full bg-white/60 animate-ping" />
                  </div>
                  <span className="text-sm sm:text-base font-bold text-white tracking-tight">Hot Lead Detected</span>
                </div>
                <div className="flex items-center gap-4 text-white/95">
                  <div className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 opacity-80" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" /></svg>
                    <span className="text-xs sm:text-sm font-semibold">Sentiment: 94%</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 opacity-80" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" /></svg>
                    <span className="text-xs sm:text-sm font-semibold">Intent: High</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Overlay UI Elements */}
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div className="flex flex-col gap-2">
                {/* Investor Flags - Above LIVE Presentation */}
                <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-md">
                  <p className="text-[10px] text-[#5C5C5C] mb-1.5 font-medium uppercase tracking-wide">Watching from</p>
                  <div className="flex items-center gap-1.5">
                    {/* USA */}
                    <div className="w-6 h-4 rounded-sm overflow-hidden shadow-sm border border-black/5" title="United States">
                      <svg viewBox="0 0 60 40" className="w-full h-full">
                        <rect fill="#B22234" width="60" height="40"/>
                        <rect fill="#fff" y="3.08" width="60" height="3.08"/>
                        <rect fill="#fff" y="9.23" width="60" height="3.08"/>
                        <rect fill="#fff" y="15.38" width="60" height="3.08"/>
                        <rect fill="#fff" y="21.54" width="60" height="3.08"/>
                        <rect fill="#fff" y="27.69" width="60" height="3.08"/>
                        <rect fill="#fff" y="33.85" width="60" height="3.08"/>
                        <rect fill="#3C3B6E" width="24" height="21.54"/>
                      </svg>
                    </div>
                    {/* Germany */}
                    <div className="w-6 h-4 rounded-sm overflow-hidden shadow-sm border border-black/5" title="Germany">
                      <svg viewBox="0 0 60 40" className="w-full h-full">
                        <rect fill="#000" width="60" height="13.33"/>
                        <rect fill="#DD0000" y="13.33" width="60" height="13.33"/>
                        <rect fill="#FFCC00" y="26.67" width="60" height="13.33"/>
                      </svg>
                    </div>
                    {/* UAE */}
                    <div className="w-6 h-4 rounded-sm overflow-hidden shadow-sm border border-black/5" title="United Arab Emirates">
                      <svg viewBox="0 0 60 40" className="w-full h-full">
                        <rect fill="#00732F" width="60" height="13.33"/>
                        <rect fill="#fff" y="13.33" width="60" height="13.33"/>
                        <rect fill="#000" y="26.67" width="60" height="13.33"/>
                        <rect fill="#FF0000" width="15" height="40"/>
                      </svg>
                    </div>
                    {/* UK */}
                    <div className="w-6 h-4 rounded-sm overflow-hidden shadow-sm border border-black/5" title="United Kingdom">
                      <svg viewBox="0 0 60 40" className="w-full h-full">
                        <rect fill="#012169" width="60" height="40"/>
                        <path fill="#fff" d="M0,0 L60,40 M60,0 L0,40" stroke="#fff" strokeWidth="6"/>
                        <path fill="#C8102E" d="M0,0 L60,40 M60,0 L0,40" stroke="#C8102E" strokeWidth="4"/>
                        <path fill="#fff" d="M30,0 V40 M0,20 H60" stroke="#fff" strokeWidth="10"/>
                        <path fill="#C8102E" d="M30,0 V40 M0,20 H60" stroke="#C8102E" strokeWidth="6"/>
                      </svg>
                    </div>
                    {/* China */}
                    <div className="w-6 h-4 rounded-sm overflow-hidden shadow-sm border border-black/5" title="China">
                      <svg viewBox="0 0 60 40" className="w-full h-full">
                        <rect fill="#DE2910" width="60" height="40"/>
                        <polygon fill="#FFDE00" points="12,6 13.5,10.5 18,10.5 14.5,13.5 16,18 12,15 8,18 9.5,13.5 6,10.5 10.5,10.5"/>
                      </svg>
                    </div>
                    {/* Saudi Arabia */}
                    <div className="hidden sm:block w-6 h-4 rounded-sm overflow-hidden shadow-sm border border-black/5" title="Saudi Arabia">
                      <svg viewBox="0 0 60 40" className="w-full h-full">
                        <rect fill="#006C35" width="60" height="40"/>
                      </svg>
                    </div>
                    <span className="text-[10px] text-[#5C5C5C] ml-1 font-medium">+12</span>
                  </div>
                </div>
                
                {/* LIVE Presentation Tab */}
                <div className="bg-white/95 backdrop-blur-sm rounded-xl px-5 py-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-sm font-medium text-[#1A1A1A]">LIVE Presentation</span>
                  </div>
                  <p className="text-xs text-[#5C5C5C] mt-1">47 investors watching</p>
                </div>
              </div>
              
              <div className="hidden sm:block bg-white/95 backdrop-blur-sm rounded-xl px-5 py-4 shadow-lg">
                <p className="text-sm font-medium text-[#1A1A1A]">AI Translating</p>
                <p className="text-xs text-[#5C5C5C] mt-1">English to German, Spanish, Mandarin</p>
              </div>
            </div>
          </div>
        </div>

        {/* Property Preview Cards */}
        <div className="max-w-5xl mx-auto mt-8 px-4">
          <div className="flex flex-col sm:flex-row items-stretch justify-center gap-4 sm:gap-6">
              {/* Card 1 */}
              <div className="flex-1 max-w-xs rounded-xl overflow-hidden shadow-lg border border-[#E8E4DF] bg-white group hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <Image
                    src="/images/estalara/property-1.jpg"
                    alt="Luxury villa with pool"
                    width={320}
                    height={180}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-3 left-3 bg-[#1A1A1A]/80 backdrop-blur-sm text-white text-xs font-medium px-2 py-1 rounded-full">
                    Featured
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-[#1A1A1A]">Villa Mediterra</h3>
                  <p className="text-xs text-[#5C5C5C] mt-1">Marbella, Spain</p>
                  <div className="mt-3">
                    <span className="text-base font-bold text-[#1A1A1A]">$2.4M</span>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex-1 max-w-xs rounded-xl overflow-hidden shadow-lg border border-[#E8E4DF] bg-white group hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <Image
                    src="/images/estalara/property-2.jpg"
                    alt="Luxury penthouse interior"
                    width={320}
                    height={180}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-3 left-3 bg-red-500/90 backdrop-blur-sm text-white text-xs font-medium px-2 py-1 rounded-full flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    LIVE Now
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-[#1A1A1A]">Skyline Penthouse</h3>
                  <p className="text-xs text-[#5C5C5C] mt-1">Dubai Marina, UAE</p>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-base font-bold text-[#1A1A1A]">$5.8M</span>
                    <span className="text-xs text-[#22C55E] font-medium">47 investors watching</span>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="flex-1 max-w-xs rounded-xl overflow-hidden shadow-lg border border-[#E8E4DF] bg-white group hover:shadow-xl transition-shadow duration-300 hidden lg:block">
                <div className="relative">
                  <Image
                    src="/images/estalara/property-3.jpg"
                    alt="Beachfront modern home"
                    width={320}
                    height={180}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-3 left-3 bg-[#1A1A1A]/80 backdrop-blur-sm text-white text-xs font-medium px-2 py-1 rounded-full">
                    New Listing
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-[#1A1A1A]">Coastal Retreat</h3>
                  <p className="text-xs text-[#5C5C5C] mt-1">Algarve, Portugal</p>
                  <div className="mt-3">
                    <span className="text-base font-bold text-[#1A1A1A]">$3.2M</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}
