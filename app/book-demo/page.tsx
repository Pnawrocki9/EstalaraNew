"use client"

import React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ArrowLeft, CheckCircle2, Calendar, Users, Globe, Sparkles } from "lucide-react"

export default function BookDemoPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setErrorMessage(null)

    const form = e.currentTarget
    const formData = new FormData(form)

    const payload = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      company: formData.get("company") as string,
      agencySize: formData.get("agencySize") as string,
      country: formData.get("country") as string,
      message: (formData.get("message") as string) || "",
    }

    try {
      const response = await fetch("/api/book-demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || "Something went wrong. Please try again.")
      }

      setIsSubmitted(true)
    } catch (err: any) {
      setErrorMessage(err.message || "Something went wrong. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#F8F6F3] flex items-center justify-center px-6">
        <div className="max-w-md text-center">
          <div className="w-16 h-16 bg-[#22C55E]/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-8 h-8 text-[#22C55E]" />
          </div>
          <h1 className="font-serif text-3xl text-[#1A1A1A] mb-4">Thank you!</h1>
          <p className="text-[#5C5C5C] mb-8">
            We've received your request and will be in touch within 24 hours to schedule your personalized demo.
          </p>
          <Button asChild className="bg-[#1A1A1A] text-white hover:bg-[#333] rounded-full px-8">
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#F8F6F3]">
      {/* Header */}
      <header className="px-6 lg:px-8 py-6">
        <div className="max-w-6xl mx-auto">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-[#5C5C5C] hover:text-[#1A1A1A] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>
        </div>
      </header>

      <main className="px-6 lg:px-8 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left Column - Info */}
            <div className="lg:sticky lg:top-8">
              <h1 className="font-serif text-4xl sm:text-5xl text-[#1A1A1A] leading-tight mb-6">
                Book a Demo
              </h1>
              <p className="text-lg text-[#5C5C5C] leading-relaxed mb-10">
                See how Estalara can transform your agency's global reach. Fill out the form and our team will schedule a personalized walkthrough.
              </p>

              {/* Benefits */}
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#1A1A1A] flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-[#1A1A1A] mb-1">30-minute personalized demo</h3>
                    <p className="text-sm text-[#5C5C5C]">Tailored to your agency's specific needs and portfolio</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#1A1A1A] flex items-center justify-center flex-shrink-0">
                    <Globe className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-[#1A1A1A] mb-1">See LIVE global presentations</h3>
                    <p className="text-sm text-[#5C5C5C]">Experience real-time multilingual streaming firsthand</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#1A1A1A] flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-[#1A1A1A] mb-1">AI-powered lead qualification</h3>
                    <p className="text-sm text-[#5C5C5C]">Learn how sentiment analysis identifies hot prospects</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#1A1A1A] flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-[#1A1A1A] mb-1">No commitment required</h3>
                    <p className="text-sm text-[#5C5C5C]">Just a friendly conversation about your goals</p>
                  </div>
                </div>
              </div>

              
            </div>

            {/* Right Column - Form */}
            <div className="bg-white rounded-2xl p-8 lg:p-10 border border-[#E8E4DF] shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-[#1A1A1A] mb-2">
                      First name
                    </label>
                    <Input
                      id="firstName"
                      name="firstName"
                      required
                      className="bg-[#F8F6F3] border-[#E8E4DF] focus:border-[#1A1A1A] focus:ring-[#1A1A1A] rounded-lg"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-[#1A1A1A] mb-2">
                      Last name
                    </label>
                    <Input
                      id="lastName"
                      name="lastName"
                      required
                      className="bg-[#F8F6F3] border-[#E8E4DF] focus:border-[#1A1A1A] focus:ring-[#1A1A1A] rounded-lg"
                      placeholder="Smith"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#1A1A1A] mb-2">
                    Work email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="bg-[#F8F6F3] border-[#E8E4DF] focus:border-[#1A1A1A] focus:ring-[#1A1A1A] rounded-lg"
                    placeholder="john@agency.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-[#1A1A1A] mb-2">
                    Agency name
                  </label>
                  <Input
                    id="company"
                    name="company"
                    required
                    className="bg-[#F8F6F3] border-[#E8E4DF] focus:border-[#1A1A1A] focus:ring-[#1A1A1A] rounded-lg"
                    placeholder="Luxury Homes International"
                  />
                </div>

                <div>
                  <label htmlFor="agencySize" className="block text-sm font-medium text-[#1A1A1A] mb-2">
                    Agency size
                  </label>
                  <Select name="agencySize" required>
                    <SelectTrigger className="bg-[#F8F6F3] border-[#E8E4DF] focus:border-[#1A1A1A] focus:ring-[#1A1A1A] rounded-lg">
                      <SelectValue placeholder="Select agency size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-5">1-5 agents</SelectItem>
                      <SelectItem value="6-20">6-20 agents</SelectItem>
                      <SelectItem value="21-50">21-50 agents</SelectItem>
                      <SelectItem value="51-100">51-100 agents</SelectItem>
                      <SelectItem value="100+">100+ agents</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-[#1A1A1A] mb-2">
                    Country
                  </label>
                  <Select name="country" required>
                    <SelectTrigger className="bg-[#F8F6F3] border-[#E8E4DF] focus:border-[#1A1A1A] focus:ring-[#1A1A1A] rounded-lg">
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                      <SelectItem value="uae">United Arab Emirates</SelectItem>
                      <SelectItem value="es">Spain</SelectItem>
                      <SelectItem value="pt">Portugal</SelectItem>
                      <SelectItem value="fr">France</SelectItem>
                      <SelectItem value="it">Italy</SelectItem>
                      <SelectItem value="pl">Poland</SelectItem>
                      <SelectItem value="de">Germany</SelectItem>
                      <SelectItem value="ch">Switzerland</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#1A1A1A] mb-2">
                    What are you most interested in? <span className="text-[#5C5C5C] font-normal">(optional)</span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={3}
                    className="bg-[#F8F6F3] border-[#E8E4DF] focus:border-[#1A1A1A] focus:ring-[#1A1A1A] rounded-lg resize-none"
                    placeholder="Tell us about your goals or questions..."
                  />
                </div>

                {errorMessage && (
                  <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 text-sm">
                    {errorMessage}
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-[#1A1A1A] text-white hover:bg-[#333] rounded-full py-6 text-base font-medium disabled:opacity-50"
                >
                  {isLoading ? "Submitting..." : "Request Demo"}
                </Button>

                <p className="text-xs text-center text-[#5C5C5C]">
                  By submitting, you agree to our{" "}
                  <Link href="/" className="underline hover:text-[#1A1A1A]">
                    Privacy Policy
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
