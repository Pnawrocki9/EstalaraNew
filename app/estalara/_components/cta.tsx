"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, Phone } from "lucide-react"
import { ShareButton } from "./share-button"

export function EstalaraCTA() {
  return (
    <section id="demo" className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#1A1A1A]">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-xs sm:text-sm uppercase tracking-widest text-[#8B8B8B] mb-3 sm:mb-4">
          Get Started
        </p>
        <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-white mb-4 sm:mb-6 text-balance">
          Ready to go LIVE and GLOBAL?
        </h2>
        <p className="text-[#A3A3A3] text-base sm:text-lg mb-8 sm:mb-10 max-w-xl mx-auto">
          Book a private demo to see how we can put your listings on global map of real estate.
        </p>

        <div className="flex items-center justify-center gap-3 mb-8 sm:mb-12">
          <ShareButton variant="dark" />
          <Button
            asChild
            size="lg"
            className="bg-white text-[#1A1A1A] hover:bg-[#F8F6F3] rounded-full px-10 py-6 text-base font-medium"
          >
            <Link href="/book-demo" className="flex items-center gap-2">
              Book a Demo
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

        {/* Contact Info */}
        <div className="border-t border-[#3A3A3A] pt-10">
          <p className="text-sm text-[#8B8B8B] mb-6">Contact us directly</p>
          <div className="flex items-center justify-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#2A2A2A] flex items-center justify-center">
                <Mail className="w-4 h-4 text-white" />
              </div>
              <div className="text-left">
                <p className="text-xs text-[#8B8B8B]">Email</p>
                <a
                  href="mailto:estalara@estalara.com"
                  className="text-white hover:underline text-sm"
                >
                  estalara@estalara.com
                </a>
              </div>
            </div>
          </div>
          <p className="text-xs text-[#5C5C5C] mt-8">
            Time2Show, Inc.
          </p>
        </div>
      </div>
    </section>
  )
}
