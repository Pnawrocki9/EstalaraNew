"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Building2, Eye, Globe, Target, BarChart3, Search, Users, Award, TrendingUp } from "lucide-react"

export interface RegionLandingContent {
  cta: string
  hero: {
    h1: string
    subheadline: string
  }
  problem: {
    label: string
    title: string
    items: Array<{ title: string; description: string }>
  }
  solution: {
    label: string
    title: string
    subtitle: string
    items: Array<{ title: string; description: string }>
  }
  useCases: {
    label: string
    title: string
    items: Array<{ title: string; description: string }>
  }
  finalCta: {
    title: string
    subtitle: string
    note: string
  }
}

const problemIcons = [Building2, Eye, Target, Globe]
const solutionIcons = [Award, Search, Globe, Users, BarChart3]
const useCaseIcons = [Building2, Globe, TrendingUp]

export function RegionLandingPage({ content }: { content: RegionLandingContent }) {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 lg:pt-40 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 bg-[#FAFAF9]">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#18181B] leading-tight tracking-tight text-balance"
          >
            {content.hero.h1}
          </h1>
          <p className="text-base sm:text-lg text-[#71717A] mt-6 max-w-2xl mx-auto leading-relaxed">
            {content.hero.subheadline}
          </p>
          <div className="mt-8">
            <Button
              asChild
              className="bg-[#18181B] text-white hover:bg-[#27272A] text-sm px-8 h-12 rounded-full group"
            >
              <Link href="/book-demo" className="flex items-center gap-2">
                {content.cta}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 sm:py-24 bg-[#FAFAF9]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold text-[#C9A66B] uppercase tracking-[0.2em]">
              {content.problem.label}
            </span>
            <h2
              className="text-2xl sm:text-3xl font-bold text-[#18181B] mt-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {content.problem.title}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {content.problem.items.map((item, index) => {
              const Icon = problemIcons[index] || problemIcons[0]
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border border-[#E4E4E7]/60 hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center mb-4">
                    <Icon className="h-5 w-5 text-red-500" />
                  </div>
                  <h3 className="font-semibold text-[#18181B] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#71717A] leading-relaxed">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold text-[#C9A66B] uppercase tracking-[0.2em]">
              {content.solution.label}
            </span>
            <h2
              className="text-2xl sm:text-3xl font-bold text-[#18181B] mt-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {content.solution.title}
            </h2>
            <p className="text-[#71717A] mt-4 max-w-2xl mx-auto">
              {content.solution.subtitle}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.solution.items.map((item, index) => {
              const Icon = solutionIcons[index] || solutionIcons[0]
              return (
                <div
                  key={index}
                  className="bg-[#FAFAF9] rounded-xl p-6 border border-[#E4E4E7]/60"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#C9A66B]/10 flex items-center justify-center mb-4">
                    <Icon className="h-5 w-5 text-[#C9A66B]" />
                  </div>
                  <h3 className="font-semibold text-[#18181B] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#71717A] leading-relaxed">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 sm:py-24 bg-[#0F1419] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold text-[#C9A66B] uppercase tracking-[0.2em]">
              {content.useCases.label}
            </span>
            <h2
              className="text-2xl sm:text-3xl font-bold text-white mt-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {content.useCases.title}
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {content.useCases.items.map((item, index) => {
              const Icon = useCaseIcons[index] || useCaseIcons[0]
              return (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#C9A66B]/20 flex items-center justify-center mb-4">
                    <Icon className="h-5 w-5 text-[#C9A66B]" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-white/70 leading-relaxed">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 sm:py-24 bg-[#FAFAF9]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-2xl sm:text-3xl font-bold text-[#18181B]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {content.finalCta.title}
          </h2>
          <p className="text-[#71717A] mt-4 max-w-xl mx-auto">
            {content.finalCta.subtitle}
          </p>
          <div className="mt-8">
            <Button
              asChild
              className="bg-[#18181B] text-white hover:bg-[#27272A] text-sm px-8 h-12 rounded-full group"
            >
              <Link href="/book-demo" className="flex items-center gap-2">
                {content.cta}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </Button>
          </div>
          <p className="text-xs text-[#A1A1AA] mt-6">{content.finalCta.note}</p>
        </div>
      </section>
    </>
  )
}
