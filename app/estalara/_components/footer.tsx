"use client"

import Link from "next/link"
import Image from "next/image"
import { Linkedin } from "lucide-react"

const productLinks = [
  { name: "Features", href: "/#features" },
  { name: "How It Works", href: "/#solution" },
  { name: "AI Intelligence", href: "/#ai" },
  { name: "Why now", href: "/knowledge" },
  { name: "Book a Demo", href: "/book-demo" },
]

const legalLinks = [
  { name: "Privacy Policy", href: "/legal/privacy-policy" },
  { name: "Terms of Service", href: "/legal/terms-and-conditions" },
  { name: "Cookie Policy", href: "/legal/cookies-policy" },
  { name: "Platform Disclaimer", href: "/legal/platform-disclaimer" },
]

const regionLinks = [
  { name: "Polska", href: "/pl/dla-biur-nieruchomosci" },
  { name: "España", href: "/es/para-inmobiliarias" },
  { name: "United Kingdom", href: "/uk/estate-agency-software" },
  { name: "United States", href: "/us/real-estate-agency-software" },
  { name: "Dubai", href: "/ae/real-estate-agency-software-dubai" },
]

const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  if (!href.includes('#')) {
    e.preventDefault()
    window.location.href = href
  }
}

export function EstalaraFooter() {
  return (
    <footer className="bg-[#FAFAF9] border-t border-[#E4E4E7]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-8">
          {/* Logo + Tagline + Email */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center">
              <Image
                src="/images/estalara/estalara-logo.svg"
                alt="Estalara"
                width={110}
                height={34}
                className="h-7 w-auto"
              />
            </div>
            <p className="text-sm text-[#A1A1AA] mt-3 max-w-xs leading-relaxed">
              From Local Listings to Live Global Sales
            </p>
            <div className="mt-3 text-xs text-[#A1A1AA]/70 leading-relaxed">
              <p className="font-medium text-[#A1A1AA]">Time2Show, Inc.</p>
              <p>1111B S Governors Ave STE 20579</p>
              <p>Dover, Delaware 19904, US</p>
            </div>
            <a
              href="mailto:estalara@estalara.com"
              className="text-sm text-[#C9A66B] hover:text-[#B8923D] transition-colors duration-200 mt-4 inline-block font-medium"
            >
              estalara@estalara.com
            </a>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-xs font-semibold text-[#18181B] uppercase tracking-[0.15em] mb-4">
              Product
            </h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-sm text-[#A1A1AA] hover:text-[#18181B] transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-semibold text-[#18181B] uppercase tracking-[0.15em] mb-4">
              Legal
            </h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#A1A1AA] hover:text-[#18181B] transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Regions */}
          <div>
            <h4 className="text-xs font-semibold text-[#18181B] uppercase tracking-[0.15em] mb-4">
              Regions
            </h4>
            <ul className="space-y-3">
              {regionLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#A1A1AA] hover:text-[#18181B] transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Separator */}
        <div className="my-10 h-px bg-[#E4E4E7]/50" />

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#A1A1AA] text-center sm:text-left">
            &copy; {new Date().getFullYear()} Time2Show, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center">
            <a
              href="https://www.linkedin.com/company/estalara/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[10px] text-[#A1A1AA] hover:text-[#18181B] transition-colors duration-200 uppercase tracking-wider font-medium"
            >
              <Linkedin className="h-3.5 w-3.5" aria-hidden="true" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
