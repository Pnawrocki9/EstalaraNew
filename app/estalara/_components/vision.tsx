import Image from "next/image"

export function EstalaraVision() {
  return (
    <section className="py-20 lg:py-32 px-6 lg:px-8 bg-[#F0EDE8]">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <p className="text-sm uppercase tracking-widest text-[#8B8B8B] mb-10">
          Our Vision
        </p>

        {/* Top: Headline + Image Row */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-16 lg:mb-20">
          {/* Left: Portrait-style Image */}
          <div className="order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/estalara/vision-global-real-estate.jpg"
                alt="Modern waterfront cityscape representing global real estate opportunity"
                width={640}
                height={480}
                className="w-full h-[340px] lg:h-[440px] object-cover"
              />
            </div>
            <p className="text-xs text-[#8B8B8B] mt-4 italic">
              Real estate is becoming global. Agencies should be able to follow.
            </p>
          </div>

          {/* Right: Opening statement */}
          <div className="order-1 lg:order-2">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight text-[#1A1A1A] mb-8 text-balance">
              Capital is increasingly global. Real estate demand is no longer confined by borders.
            </h2>
            <p className="text-[#5C5C5C] text-base lg:text-lg leading-relaxed mb-6">
              Cross-border property transactions already represent a significant and high-value part of the market, especially in premium and investment-grade real estate. Yet for most agencies, international buyers remain difficult to reach consistently and efficiently.
            </p>
            <p className="text-[#1A1A1A] font-medium text-base lg:text-lg leading-relaxed">
              We believe this gap defines one of the largest growth opportunities in modern real estate.
            </p>
          </div>
        </div>

        {/* Middle: Three-column editorial text */}
        <div className="border-t border-[#D5D0C8] pt-12 lg:pt-16 mb-16 lg:mb-20">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <div>
              <h3 className="font-serif text-lg font-semibold text-[#1A1A1A] mb-3">
                Local expertise, global reach
              </h3>
              <p className="text-[#5C5C5C] text-sm lg:text-base leading-relaxed">
                Agents bring local expertise, trust, and human judgment. Estalara brings intelligence, live interaction, and global reach. Together, we turn international demand into a practical, repeatable channel for local agencies.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-lg font-semibold text-[#1A1A1A] mb-3">
                Beyond traditional portals
              </h3>
              <p className="text-[#5C5C5C] text-sm lg:text-base leading-relaxed">
                Traditional portals play a critical role in discovery and visibility. But listings alone were never designed to support cross-border decision-making, where trust, clarity, and real-time interaction matter most. Estalara extends their reach with live showcases, multilingual communication, and real-time intent identification.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-lg font-semibold text-[#1A1A1A] mb-3">
                Ownership of brand and relationships
              </h3>
              <p className="text-[#5C5C5C] text-sm lg:text-base leading-relaxed">
                Our vision is to give every agency the ability to attract and serve global buyers without changing who they are, abandoning their local focus, or losing ownership of their brand and relationships. Estalara is the invisible engine behind your global growth.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom: Closing statement */}
        <div className="border-t border-[#D5D0C8] pt-12 lg:pt-16">
          <div className="max-w-3xl">
            <p className="text-[#5C5C5C] text-base lg:text-lg leading-relaxed mb-6">
              By removing distance, language barriers, and trust friction, Estalara allows agents to focus on what truly matters: working with serious investors, closing higher-value transactions, and spending their time where their expertise creates the greatest return.
            </p>
            <div className="flex flex-col gap-2">
              <p className="font-serif text-xl lg:text-2xl text-[#1A1A1A]">
                We are not replacing agents.
              </p>
              <p className="font-serif text-xl lg:text-2xl text-[#1A1A1A]">
                We are not replacing portals.
              </p>
              <p className="font-serif text-xl lg:text-2xl text-[#1A1A1A] mt-4 font-semibold">
                We are adding the missing layer between discovery and commitment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
