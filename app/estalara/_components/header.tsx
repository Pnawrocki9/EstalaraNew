"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ShareButton } from "./share-button"

export function EstalaraHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const anchorPrefix = pathname === "/" ? "" : "/"
  const navLinks = [
    { href: `${anchorPrefix}#features`, label: "Features" },
    { href: `${anchorPrefix}#solution`, label: "How It Works" },
    { href: "https://www.estalara.com/knowledge", label: "Why now" },
    { href: `${anchorPrefix}#demo`, label: "Contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F8F6F3]/80 backdrop-blur-md border-b border-[#E8E4DF]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/estalara/estalara-logo.svg"
              alt="Estalara"
              width={130}
              height={40}
              className="h-8 lg:h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#5C5C5C] hover:text-[#1A1A1A] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-2">
            <ShareButton variant="light" size="sm" position="below" />
            <Button
              asChild
              className="bg-[#1A1A1A] text-white hover:bg-[#333] rounded-full px-6 text-sm font-medium"
            >
              <Link href="/book-demo">Book a Demo</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2.5 -mr-1 text-[#1A1A1A] rounded-lg active:bg-[#E8E4DF]/50 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 border-t border-[#E8E4DF]">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-sm font-medium text-[#5C5C5C] hover:text-[#1A1A1A] active:text-[#1A1A1A] transition-colors px-2 py-2.5 rounded-lg hover:bg-[#E8E4DF]/50 active:bg-[#E8E4DF]/70"
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center gap-2 pt-3">
                <ShareButton variant="light" size="sm" position="below" />
                <Button
                  asChild
                  className="bg-[#1A1A1A] text-white hover:bg-[#333] rounded-full px-6 text-sm font-medium w-fit"
                >
                  <Link href="/book-demo">Book a Demo</Link>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
