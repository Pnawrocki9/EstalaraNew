import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { ShareButton } from "./share-button"

// Ad Mockup Visualization - Expanded with multiple ad versions
function AdsMockup() {
  return (
    <div className="relative py-6 px-3 sm:px-6 h-full flex flex-col justify-center">
      {/* AI Generated Badge */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-[#1A1A1A] text-white text-[8px] sm:text-[9px] px-2.5 sm:px-3 py-1 rounded-full flex items-center gap-1.5 z-10 shadow-lg whitespace-nowrap">
        <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
        AI Generated &middot; 20 Versions
      </div>

      {/* Ad Grid */}
      <div className="mt-6 grid grid-cols-3 gap-2 sm:gap-3">
        {/* Facebook Ad - Primary */}
        <div className="col-span-2 row-span-2 bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
          <div className="bg-[#1877F2] px-3 py-1.5 flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            <span className="text-white text-[9px] font-medium">Sponsored</span>
          </div>
          <div className="h-24 sm:h-28 bg-gradient-to-br from-amber-100 via-amber-50 to-orange-50 flex items-center justify-center relative">
            <div className="w-20 h-14 bg-amber-200/80 rounded-lg" />
            <div className="absolute bottom-1.5 right-1.5 bg-white/90 backdrop-blur-sm text-[7px] px-1.5 py-0.5 rounded-full text-gray-600 font-medium">1/6 photos</div>
          </div>
          <div className="p-3">
            <div className="text-[10px] font-semibold text-gray-800">Luxury Villa Marbella</div>
            <div className="text-[8px] text-gray-500 mt-0.5">$2.4M | 5 bed | 4 bath | Sea view</div>
            <div className="text-[7px] text-gray-400 mt-1">Exclusive beachfront property with panoramic Mediterranean views and private pool.</div>
            <div className="mt-2 bg-[#1877F2] text-white text-[8px] text-center py-1.5 rounded-md font-medium">Learn More</div>
          </div>
        </div>

        {/* Google Search Ad */}
        <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
          <div className="px-2.5 py-1.5 flex items-center gap-1 border-b border-gray-100">
            <svg className="w-3 h-3" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
            <span className="text-[7px] text-gray-500 font-medium">Ad</span>
          </div>
          <div className="p-2">
            <div className="text-[8px] text-[#1a0dab] font-semibold leading-tight">Premium Villa | Estalara</div>
            <div className="text-[6px] text-[#006621] truncate mt-0.5">estalara.com/villa-marbella</div>
            <div className="text-[6px] text-gray-600 mt-1 leading-relaxed">Beachfront villa. Virtual tour. Contact now.</div>
          </div>
        </div>

        {/* Instagram Story Ad */}
        <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
          <div className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] px-2.5 py-1.5 flex items-center gap-1">
            <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            <span className="text-white text-[7px] font-medium">Story</span>
          </div>
          <div className="p-2 flex flex-col items-center">
            <div className="w-full h-8 bg-gradient-to-br from-amber-100 to-orange-50 rounded-md flex items-center justify-center">
              <div className="w-6 h-4 bg-amber-200/80 rounded-sm" />
            </div>
            <div className="text-[6px] text-gray-700 font-semibold mt-1.5 text-center">Swipe Up</div>
          </div>
        </div>
      </div>

      {/* Thumbnail Strip - Additional Ad Versions */}
      <div className="mt-3 flex items-center gap-2">
        <div className="flex items-center gap-1.5 flex-1 overflow-hidden">
          {/* YouTube Ad Thumbnail */}
          <div className="flex-shrink-0 w-16 h-10 bg-white rounded-lg border border-gray-200 shadow-sm flex flex-col items-center justify-center gap-0.5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
            <svg className="w-3.5 h-3.5 text-red-600" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            <span className="text-[5px] text-gray-500 font-medium">YouTube</span>
          </div>

          {/* LinkedIn Ad Thumbnail */}
          <div className="flex-shrink-0 w-16 h-10 bg-white rounded-lg border border-gray-200 shadow-sm flex flex-col items-center justify-center gap-0.5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
            <svg className="w-3.5 h-3.5 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            <span className="text-[5px] text-gray-500 font-medium">LinkedIn</span>
          </div>

          {/* TikTok Ad Thumbnail */}
          <div className="flex-shrink-0 w-16 h-10 bg-white rounded-lg border border-gray-200 shadow-sm flex flex-col items-center justify-center gap-0.5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
            <span className="text-[5px] text-gray-500 font-medium">TikTok</span>
          </div>
        </div>

        {/* More versions indicator */}
        <div className="flex-shrink-0 w-10 h-10 bg-[#F0EDE9] rounded-lg border border-[#E8E4DF] flex items-center justify-center">
          <span className="text-[9px] text-[#5C5C5C] font-semibold">+2</span>
        </div>
      </div>
    </div>
  )
}

// Re-streaming Visualization - Expanded with animated flow
function RestreamingMockup() {
  return (
    <div className="relative py-10 sm:py-16 px-6 sm:px-12 h-full flex flex-col justify-center">
      <style>{`
        @keyframes stream-pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.5); }
        }
        @keyframes dash-flow {
          to { stroke-dashoffset: -20; }
        }
        @keyframes orbit-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-3px); }
        }
      `}</style>

      {/* Central Estalara Hub - Larger */}
      <div className="flex items-center justify-center">
        <div className="relative">
          {/* Outer pulse rings */}
          <div className="absolute inset-0 -m-4 rounded-2xl bg-[#1A1A1A]/5 animate-ping" style={{ animationDuration: '3s' }} />
          <div className="absolute inset-0 -m-2 rounded-2xl bg-[#1A1A1A]/10 animate-ping" style={{ animationDuration: '2s' }} />
          
          {/* Main hub */}
          <div className="relative w-20 h-20 sm:w-28 sm:h-28 bg-[#1A1A1A] rounded-2xl flex flex-col items-center justify-center z-10 shadow-xl">
            {/* Estalara Logo Text */}
            <span className="text-white font-serif text-xs sm:text-base font-bold tracking-wide">Estalara</span>
            {/* LIVE indicator */}
            <div className="flex items-center gap-1 sm:gap-1.5 mt-1 sm:mt-1.5">
              <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-red-500 rounded-full animate-pulse" />
              <span className="text-red-400 text-[9px] sm:text-xs font-bold uppercase tracking-wider">LIVE</span>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Connection Lines SVG */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
        {/* Lines from center to each platform */}
        <line x1="50%" y1="50%" x2="15%" y2="18%" stroke="#D4CFC8" strokeWidth="1.5" strokeDasharray="4 4" style={{ animation: 'dash-flow 1s linear infinite' }} />
        <line x1="50%" y1="50%" x2="85%" y2="18%" stroke="#D4CFC8" strokeWidth="1.5" strokeDasharray="4 4" style={{ animation: 'dash-flow 1s linear infinite', animationDelay: '0.2s' }} />
        <line x1="50%" y1="50%" x2="8%" y2="55%" stroke="#D4CFC8" strokeWidth="1.5" strokeDasharray="4 4" style={{ animation: 'dash-flow 1s linear infinite', animationDelay: '0.4s' }} />
        <line x1="50%" y1="50%" x2="92%" y2="55%" stroke="#D4CFC8" strokeWidth="1.5" strokeDasharray="4 4" style={{ animation: 'dash-flow 1s linear infinite', animationDelay: '0.6s' }} />
        <line x1="50%" y1="50%" x2="50%" y2="95%" stroke="#D4CFC8" strokeWidth="1.5" strokeDasharray="4 4" style={{ animation: 'dash-flow 1s linear infinite', animationDelay: '0.8s' }} />
      </svg>

      {/* Platform Icons - Positioned Around Hub */}
      {/* YouTube - Top Left */}
      <div className="absolute top-3 left-2 sm:top-6 sm:left-8 z-10" style={{ animation: 'orbit-float 3s ease-in-out infinite' }}>
        <div className="w-9 h-9 sm:w-14 sm:h-14 bg-white rounded-lg sm:rounded-xl shadow-lg border border-gray-100 flex items-center justify-center hover:scale-110 transition-transform duration-300">
          <svg className="w-4 h-4 sm:w-7 sm:h-7 text-red-600" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
        </div>
        <span className="block text-center text-[7px] sm:text-[10px] text-[#5C5C5C] font-medium mt-0.5 sm:mt-1">YouTube</span>
      </div>

      {/* Instagram - Top Right */}
      <div className="absolute top-3 right-2 sm:top-6 sm:right-8 z-10" style={{ animation: 'orbit-float 3s ease-in-out infinite 0.3s' }}>
        <div className="w-9 h-9 sm:w-14 sm:h-14 bg-white rounded-lg sm:rounded-xl shadow-lg border border-gray-100 flex items-center justify-center hover:scale-110 transition-transform duration-300">
          <svg className="w-4 h-4 sm:w-7 sm:h-7" viewBox="0 0 24 24"><defs><linearGradient id="ig-restream" x1="0%" y1="100%" x2="100%" y2="0%"><stop offset="0%" stopColor="#FFDC80"/><stop offset="50%" stopColor="#F77737"/><stop offset="100%" stopColor="#C13584"/></linearGradient></defs><path fill="url(#ig-restream)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
        </div>
        <span className="block text-center text-[7px] sm:text-[10px] text-[#5C5C5C] font-medium mt-0.5 sm:mt-1">Instagram</span>
      </div>

      {/* Facebook - Middle Left */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 sm:left-3 z-10" style={{ animation: 'orbit-float 3s ease-in-out infinite 0.6s' }}>
        <div className="w-9 h-9 sm:w-14 sm:h-14 bg-white rounded-lg sm:rounded-xl shadow-lg border border-gray-100 flex items-center justify-center hover:scale-110 transition-transform duration-300">
          <svg className="w-4 h-4 sm:w-7 sm:h-7 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
        </div>
        <span className="block text-center text-[7px] sm:text-[10px] text-[#5C5C5C] font-medium mt-0.5 sm:mt-1">Facebook</span>
      </div>

      {/* TikTok - Middle Right */}
      <div className="absolute top-1/2 -translate-y-1/2 right-0 sm:right-3 z-10" style={{ animation: 'orbit-float 3s ease-in-out infinite 0.9s' }}>
        <div className="w-9 h-9 sm:w-14 sm:h-14 bg-white rounded-lg sm:rounded-xl shadow-lg border border-gray-100 flex items-center justify-center hover:scale-110 transition-transform duration-300">
          <svg className="w-4 h-4 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
        </div>
        <span className="block text-center text-[7px] sm:text-[10px] text-[#5C5C5C] font-medium mt-0.5 sm:mt-1">TikTok</span>
      </div>

      {/* LinkedIn - Bottom Center */}
      <div className="absolute bottom-1 sm:bottom-2 left-1/2 -translate-x-1/2 z-10" style={{ animation: 'orbit-float 3s ease-in-out infinite 1.2s' }}>
        <div className="w-9 h-9 sm:w-14 sm:h-14 bg-white rounded-lg sm:rounded-xl shadow-lg border border-gray-100 flex items-center justify-center hover:scale-110 transition-transform duration-300">
          <svg className="w-4 h-4 sm:w-7 sm:h-7 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        </div>
        <span className="block text-center text-[7px] sm:text-[10px] text-[#5C5C5C] font-medium mt-0.5 sm:mt-1">LinkedIn</span>
      </div>
    </div>
  )
}

// AI Chat Visualization - Expanded with multiple Q&A examples
function AIChatMockup() {
  return (
    <div className="flex items-center justify-center px-4 py-6 h-full">
      <div className="w-full max-w-sm bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
        {/* Chat Header */}
        <div className="bg-[#1A1A1A] px-3 py-2 flex items-center gap-2">
          <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
            <span className="text-white text-[8px] font-bold">AI</span>
          </div>
          <div className="flex-1">
            <div className="text-white text-[9px] font-medium">Estalara Assistant</div>
            <div className="text-white/60 text-[7px] flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
              Online 24/7
            </div>
          </div>
          <div className="text-white/40 text-[7px] bg-white/10 px-1.5 py-0.5 rounded-full">3 conversations</div>
        </div>
        
        {/* Chat Messages - Scrollable area with multiple Q&A */}
        <div className="p-2.5 space-y-2.5 bg-gray-50 max-h-[320px] overflow-y-auto">
          {/* Q&A 1: Sea view */}
          <div className="flex justify-end">
            <div className="bg-[#1A1A1A] text-white text-[8px] px-2.5 py-1.5 rounded-lg rounded-br-sm max-w-[80%]">
              Does villa have sea view?
            </div>
          </div>
          <div className="flex justify-start">
            <div className="bg-white text-gray-800 text-[8px] px-2.5 py-1.5 rounded-lg rounded-bl-sm max-w-[85%] shadow-sm border border-gray-100 leading-relaxed">
              Yes! Panoramic Mediterranean views from the master suite and terrace. Would you like a virtual tour?
            </div>
          </div>
          <div className="flex justify-end">
            <div className="bg-[#1A1A1A] text-white text-[8px] px-2.5 py-1.5 rounded-lg rounded-br-sm">
              Yes, schedule please
            </div>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-2 py-0.5">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-[6px] text-gray-400 uppercase tracking-wider">External data enrichment</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Q&A 2: Schools */}
          <div className="flex justify-end">
            <div className="bg-[#1A1A1A] text-white text-[8px] px-2.5 py-1.5 rounded-lg rounded-br-sm max-w-[80%]">
              What schools are in the area?
            </div>
          </div>
          <div className="flex justify-start">
            <div className="bg-white text-gray-800 text-[8px] px-2.5 py-2 rounded-lg rounded-bl-sm max-w-[88%] shadow-sm border border-gray-100 leading-relaxed">
              <p>In the area there are 5 schools:</p>
              <ul className="mt-1 space-y-0.5 text-[7px] text-gray-600">
                <li className="flex items-start gap-1"><span className="text-[#22C55E] mt-px">&#8226;</span>Colegio San Jose - 0.4 km (International Baccalaureate)</li>
                <li className="flex items-start gap-1"><span className="text-[#22C55E] mt-px">&#8226;</span>British School Marbella - 1.2 km</li>
                <li className="flex items-start gap-1"><span className="text-[#22C55E] mt-px">&#8226;</span>Swans International School - 2.1 km</li>
                <li className="flex items-start gap-1"><span className="text-[#22C55E] mt-px">&#8226;</span>Aloha College - 3.5 km (Ages 3-18)</li>
                <li className="flex items-start gap-1"><span className="text-[#22C55E] mt-px">&#8226;</span>Laude San Pedro - 4.0 km</li>
              </ul>
            </div>
          </div>

          {/* Q&A 3: Gyms */}
          <div className="flex justify-end">
            <div className="bg-[#1A1A1A] text-white text-[8px] px-2.5 py-1.5 rounded-lg rounded-br-sm max-w-[80%]">
              Are there any gyms close to the apartment?
            </div>
          </div>
          <div className="flex justify-start">
            <div className="bg-white text-gray-800 text-[8px] px-2.5 py-2 rounded-lg rounded-bl-sm max-w-[88%] shadow-sm border border-gray-100 leading-relaxed">
              <p>Yes, there are 2 gyms around:</p>
              <ul className="mt-1 space-y-1 text-[7px] text-gray-600">
                <li className="flex items-start gap-1">
                  <span className="text-[#22C55E] mt-px">&#8226;</span>
                  <span><strong className="text-gray-700">FitZone Marbella</strong> - 350m walk (Premium gym with pool, classes & personal training. Open 6AM-11PM)</span>
                </li>
                <li className="flex items-start gap-1">
                  <span className="text-[#22C55E] mt-px">&#8226;</span>
                  <span><strong className="text-gray-700">CrossFit Puerto Banus</strong> - 1.1 km (Boutique CrossFit box with outdoor training area. Open 7AM-9PM)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Typing Indicator */}
        <div className="px-3 py-2 bg-gray-50 border-t border-gray-100">
          <div className="flex items-center gap-1">
            <span className="w-1 h-1 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
            <span className="w-1 h-1 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
            <span className="w-1 h-1 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
          </div>
        </div>
      </div>
    </div>
  )
}

// Post-Session Report Visualization - Styled like Lead Intent Panel
function SentimentMockup() {
  return (
    <div className="flex items-center justify-center px-4 py-6 h-full">
      <div className="w-full max-w-sm bg-white/95 backdrop-blur-sm rounded-xl shadow-xl border border-white/20 overflow-hidden">
        {/* Report Header */}
        <div className="px-3.5 py-2.5 border-b border-[#E8E4DF]/50 bg-white/80">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-[11px] font-semibold text-[#1A1A1A]">Session Report</h4>
              <p className="text-[8px] text-[#5C5C5C]">Villa Mediterra - LIVE Showcase</p>
            </div>
            <div className="text-right">
              <p className="text-[8px] font-medium text-[#1A1A1A]">47 viewers</p>
              <p className="text-[7px] text-[#5C5C5C]">32 min session</p>
            </div>
          </div>
          {/* Summary Stats Row */}
          <div className="flex items-center gap-3 mt-2 pt-2 border-t border-[#E8E4DF]/40">
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
              <span className="text-[8px] text-[#5C5C5C]">Hot: <strong className="text-green-700">3</strong></span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              <span className="text-[8px] text-[#5C5C5C]">Warm: <strong className="text-amber-700">5</strong></span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
              <span className="text-[8px] text-[#5C5C5C]">Cold: <strong className="text-gray-600">39</strong></span>
            </div>
          </div>
        </div>

        {/* Scrollable Lead List */}
        <div className="max-h-[260px] overflow-y-auto">
          {/* Hot Leads Section */}
          <div className="border-b border-[#E8E4DF]/30">
            <div className="px-3 py-1.5 bg-green-50/80 sticky top-0 z-10">
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                <span className="text-[10px] font-semibold text-green-700">Hot Leads - Immediate Follow-up</span>
              </div>
            </div>
            
            {/* Lead 1 - Expanded */}
            <div className="p-2.5 bg-white/60 border-l-2 border-green-500">
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-[#3B82F6] animate-pulse" />
                  <span className="font-medium text-[#1A1A1A] text-[11px]">James Mueller</span>
                </div>
                <span className="bg-green-100 text-green-700 text-[9px] font-semibold px-1.5 py-0.5 rounded-full">High 94%</span>
              </div>
              <div className="bg-[#F8F9FA]/80 rounded-lg p-2 border border-[#E8E4DF]/50">
                <div className="space-y-1 text-[10px]">
                  <div className="flex items-center justify-between">
                    <span className="text-[#5C5C5C]">Watch Time:</span>
                    <span className="font-semibold text-[#1A1A1A] tabular-nums">28:45</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#5C5C5C]">Questions:</span>
                    <span className="font-semibold text-[#1A1A1A]">5</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#5C5C5C]">Key Signal:</span>
                    <span className="font-semibold text-green-700">Asked about financing</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-1 mt-1.5">
                <span className="text-[7px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded">Financing</span>
                <span className="text-[7px] bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded">Price inquiry</span>
                <span className="text-[7px] bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded">Viewed 3x</span>
              </div>
            </div>

            {/* Lead 2 */}
            <div className="px-3 py-1.5 flex items-center justify-between hover:bg-green-50/30 transition-colors border-l-2 border-transparent hover:border-green-300">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-[#3B82F6]" />
                <span className="text-[#1A1A1A] text-[11px]">Anna Schmidt</span>
              </div>
              <span className="bg-green-100 text-green-700 text-[9px] font-semibold px-1.5 py-0.5 rounded-full">High 89%</span>
            </div>
            
            {/* Lead 3 */}
            <div className="px-3 py-1.5 flex items-center justify-between hover:bg-green-50/30 transition-colors border-l-2 border-transparent hover:border-green-300">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-[#3B82F6]" />
                <span className="text-[#1A1A1A] text-[11px]">Carlos Rivera</span>
              </div>
              <span className="bg-green-100 text-green-700 text-[9px] font-semibold px-1.5 py-0.5 rounded-full">High 85%</span>
            </div>
          </div>

          {/* Warm Leads Section */}
          <div className="border-b border-[#E8E4DF]/30">
            <div className="px-3 py-1.5 bg-amber-50/80 sticky top-0 z-10">
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                <span className="text-[10px] font-semibold text-amber-700">Warm Leads - Nurture</span>
              </div>
            </div>
            <div className="px-3 py-1.5 flex items-center justify-between border-l-2 border-transparent hover:border-amber-300 hover:bg-amber-50/30 transition-colors">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-amber-500" />
                <span className="text-[#1A1A1A] text-[11px]">Sarah Jones</span>
              </div>
              <span className="bg-amber-100 text-amber-700 text-[9px] font-semibold px-1.5 py-0.5 rounded-full">Med 67%</span>
            </div>
            <div className="px-3 py-1.5 flex items-center justify-between border-l-2 border-transparent hover:border-amber-300 hover:bg-amber-50/30 transition-colors">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-amber-500" />
                <span className="text-[#1A1A1A] text-[11px]">Emily Liu</span>
              </div>
              <span className="bg-amber-100 text-amber-700 text-[9px] font-semibold px-1.5 py-0.5 rounded-full">Med 62%</span>
            </div>
            <div className="px-3 py-1.5 flex items-center justify-between border-l-2 border-transparent hover:border-amber-300 hover:bg-amber-50/30 transition-colors">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-amber-500" />
                <span className="text-[#1A1A1A] text-[11px]">Maria Santos</span>
              </div>
              <span className="bg-amber-100 text-amber-700 text-[9px] font-semibold px-1.5 py-0.5 rounded-full">Med 55%</span>
            </div>
          </div>

          {/* Cold / Low Section */}
          <div>
            <div className="px-3 py-1.5 bg-gray-50/80 sticky top-0 z-10">
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                <span className="text-[10px] font-semibold text-gray-600">Cold Leads</span>
                <span className="text-[9px] text-gray-500 ml-auto">39 viewers</span>
              </div>
            </div>
            <div className="px-3 py-1.5 flex items-center justify-between border-l-2 border-transparent">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-gray-400" />
                <span className="text-[#5C5C5C] text-[11px]">David Chen</span>
              </div>
              <span className="bg-gray-100 text-gray-600 text-[9px] font-semibold px-1.5 py-0.5 rounded-full">Low 28%</span>
            </div>
            <div className="px-3 py-1.5 flex items-center justify-between border-l-2 border-transparent">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-gray-400" />
                <span className="text-[#5C5C5C] text-[11px]">Lisa Park</span>
              </div>
              <span className="bg-gray-100 text-gray-600 text-[9px] font-semibold px-1.5 py-0.5 rounded-full">Low 22%</span>
            </div>
            <div className="px-3 py-1.5 text-center">
              <span className="text-[8px] text-gray-400">+ 37 more viewers</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function EstalaraAICapabilities() {
  const capabilities = [
    {
      title: "Ads that write themselves",
      description: "Your listings automatically become compelling, multilingual ad campaigns across every major platform. We create multiple versions of every ad to verify what works best.",
      outcome: "More qualified eyes on your properties, zero marketing effort. You can finally go beyond your local listing portal.",
      mockup: <AdsMockup />,
    },
    {
      title: "One stream, every audience",
      description: "Present once, reach investors on YouTube, Instagram, Facebook, and TikTok simultaneously.",
      outcome: "10x your visibility with a single presentation and generate traffic from your social media channels without any effort.",
      mockup: <RestreamingMockup />,
    },
    {
      title: "Your listings. Answered perfectly. 24/7.",
      description: "Estalara's AI understands every detail of your properties and responds instantly to investor questions in any language. It does not stop at what's written. It enriches each answer with external data to deliver a full, real-world view of the asset.",
      outcome: "No missed leads. No delayed replies. No lost deals.",
      mockup: <AIChatMockup />,
    },
    {
      title: "Know who's ready to buy",
      description: "Real-time sentiment analysis identifies engaged investors and scores their purchase intent.",
      outcome: "Focus only on leads that matter.",
      mockup: <SentimentMockup />,
    },
  ]

  return (
    <section id="ai" className="py-14 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#F8F6F3]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-[#1A1A1A] max-w-3xl mx-auto text-balance leading-tight mb-4 sm:mb-5">
            Intelligence that works while you don't
          </h2>
          <p className="text-[#5C5C5C] max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
            Our AI handles the heavy lifting so you can focus on what you do best: closing deals.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
          {capabilities.map((capability, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl border border-[#E8E4DF] hover:border-[#D4CFC8] hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* Mockup Area */}
              <div className="bg-[#FAFAF9] border-b border-[#E8E4DF] min-h-[320px] sm:min-h-[400px] lg:min-h-[440px] flex items-center justify-center">
                <div className="w-full h-full">
                  {capability.mockup}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-4 sm:p-6 flex-1">
                <h3 className="font-serif text-lg sm:text-xl lg:text-2xl text-[#1A1A1A] mb-2">
                  {capability.title}
                </h3>
                <p className="text-[#5C5C5C] text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                  {capability.description}
                </p>
                <p className="text-[#1A1A1A] text-xs sm:text-sm font-medium flex items-start sm:items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] flex-shrink-0 mt-1 sm:mt-0" />
                  {capability.outcome}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="flex items-center justify-center gap-2">
          <ShareButton variant="light" />
          <Button
            asChild
            size="lg"
            className="bg-[#1A1A1A] text-white hover:bg-[#333] rounded-full px-10 py-6 text-base font-medium"
          >
            <Link href="/book-demo" className="flex items-center gap-2">
              Book Demo
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
