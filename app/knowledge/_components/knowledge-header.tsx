"use client"

import Link from "next/link"
import { useState } from "react"

export function KnowledgeHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-[#FAF8F5] border-b border-[#E8E4DE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/knowledge" className="flex items-center" data-testid="header-logo">
            <img src="/estalara-logo.png" alt="Estalara" className="h-8 w-auto" />
          </Link>

          <nav className="hidden md:flex items-center space-x-8" data-testid="main-navigation">
            <Link
              href="/knowledge/research"
              className="text-sm text-[#4A4A4A] hover:text-[#1A1A1A] transition-colors"
              data-testid="nav-research"
            >
              Key Signals
            </Link>
            <Link
              href="/knowledge/insights"
              className="text-sm text-[#4A4A4A] hover:text-[#1A1A1A] transition-colors"
              data-testid="nav-insights"
            >
              Research
            </Link>
            <a
              href="https://estalara.com/book-demo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-[#1A1A1A] rounded-full hover:bg-[#2A2A2A] transition-colors"
              data-testid="book-demo-btn"
            >
              Book a Demo
            </a>
          </nav>

          <button
            className="md:hidden p-2 text-[#4A4A4A]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="mobile-menu-btn"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#E8E4DE] py-4" data-testid="mobile-menu">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/knowledge/research"
                className="text-sm text-[#4A4A4A] hover:text-[#1A1A1A] transition-colors px-2 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Key Signals
              </Link>
              <Link
                href="/knowledge/insights"
                className="text-sm text-[#4A4A4A] hover:text-[#1A1A1A] transition-colors px-2 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Research
              </Link>
              <a
                href="https://estalara.com/book-demo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-[#1A1A1A] rounded-full hover:bg-[#2A2A2A] transition-colors mx-2"
              >
                Book a Demo
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
