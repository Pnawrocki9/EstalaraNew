"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useRef, useEffect } from "react"
import { ChevronUp } from "lucide-react"

const legalLinks = [
  { name: "Privacy Policy", href: "/legal/privacy-policy" },
  { name: "Terms & Conditions", href: "/legal/terms-and-conditions" },
  { name: "Cookies Policy", href: "/legal/cookies-policy" },
  { name: "Platform Disclaimer", href: "/legal/platform-disclaimer" },
]

export function EstalaraFooter() {
  const [isLegalOpen, setIsLegalOpen] = useState(false)
  const legalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (legalRef.current && !legalRef.current.contains(event.target as Node)) {
        setIsLegalOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <footer className="py-8 px-6 lg:px-8 border-t border-[#E8E4DF] bg-[#F8F6F3]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo + Company */}
          <div className="flex items-center gap-2">
            <Image
              src="/images/estalara/estalara-logo.svg"
              alt="Estalara"
              width={110}
              height={34}
              className="h-7 w-auto"
            />
            <span className="text-[#8B8B8B] text-sm">by Time2Show, Inc.</span>
          </div>

          {/* Center: LinkedIn + Legal */}
          <div className="flex items-center gap-6">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/estalara/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-[#5C5C5C] hover:text-[#0A66C2] transition-colors"
              aria-label="Estalara on LinkedIn"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <span className="hidden sm:inline">LinkedIn</span>
            </a>

            {/* Legal Dropdown */}
            <div className="relative" ref={legalRef}>
              <button
                onClick={() => setIsLegalOpen(!isLegalOpen)}
                className="flex items-center gap-1.5 text-sm text-[#5C5C5C] hover:text-[#1A1A1A] transition-colors"
                aria-expanded={isLegalOpen}
                aria-haspopup="true"
              >
                Legal
                <ChevronUp
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isLegalOpen ? "" : "rotate-180"
                  }`}
                />
              </button>

              {isLegalOpen && (
                <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-64 bg-[#1A1A1A] rounded-lg shadow-xl border border-[#2A2A2A] py-4 px-5 z-50">
                  <p className="text-xs font-semibold text-[#8B8B8B] uppercase tracking-wider mb-3">
                    Legal
                  </p>
                  <nav className="flex flex-col gap-2">
                    {legalLinks.map((link, index) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className={`text-sm transition-colors ${
                          index === 0
                            ? "text-white font-semibold hover:text-[#C9A96E]"
                            : "text-[#8B8B8B] hover:text-white"
                        }`}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </nav>
                </div>
              )}
            </div>
          </div>

          {/* Copyright */}
          <p className="text-xs text-[#8B8B8B]">
            {new Date().getFullYear()} Time2Show, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
