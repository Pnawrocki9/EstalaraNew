import Image from "next/image"

export function EstalaraVision() {
  return (
    <section className="py-14 sm:py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[#F8F6F3]">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <p className="text-xs sm:text-sm uppercase tracking-widest text-[#8B8B8B] mb-6 sm:mb-10 text-center">
          Our Vision
        </p>

        {/* Top: Headline + Image Row */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-10 sm:mb-16 lg:mb-20">
          {/* Left: Portrait-style Image */}
          <div className="order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/estalara/vision-global-real-estate.jpg"
                alt="Modern waterfront cityscape representing global real estate opportunity"
                width={640}
                height={480}
                className="w-full h-[220px] sm:h-[340px] lg:h-[440px] object-cover"
              />
            </div>
            <p className="text-xs text-[#8B8B8B] mt-3 sm:mt-4 italic">
              Real estate is becoming global. Agencies should be able to follow.
            </p>
          </div>

          {/* Right: Opening statement - trimmed */}
          <div className="order-1 lg:order-2">
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-[2.75rem] leading-tight text-[#1A1A1A] mb-5 sm:mb-8 text-balance">
              Capital is increasingly global. Real estate demand is no longer confined by borders.
            </h2>
            <p className="text-[#5C5C5C] text-sm sm:text-base lg:text-lg leading-relaxed">
              Cross-border transactions already represent a significant and high-value part of the market, especially in premium and investment-grade real estate. Yet for most agencies, international buyers remain difficult to reach consistently and efficiently.
            </p>
          </div>
        </div>

        {/* Vision Statement - Hero moment within the section */}
        <div className="relative -mx-4 sm:-mx-6 lg:-mx-8 mb-10 sm:mb-16 lg:mb-20">
          <div className="bg-[#1A1A1A] py-12 sm:py-16 lg:py-24 px-6 sm:px-10 lg:px-16">
            <div className="max-w-4xl mx-auto text-center">
              <p className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white leading-snug sm:leading-snug lg:leading-tight mb-6 sm:mb-8">
                A world where every property is truly seen - and every serious buyer is always found.
              </p>
              <p className="text-lg sm:text-xl lg:text-2xl text-[#C9A962] font-medium tracking-wide">
                Estalara is the invisible engine behind your global growth.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom: Closing statement */}
        <div className="border-t border-[#D5D0C8] pt-8 sm:pt-12 lg:pt-16">
          <div className="max-w-3xl">
            <p className="text-[#5C5C5C] text-sm sm:text-base lg:text-lg leading-relaxed mb-5 sm:mb-6">
              By removing distance, language barriers, and trust friction, Estalara allows agents to focus on what truly matters: working with serious investors, closing higher-value transactions, and spending their time where their expertise creates the greatest return.
            </p>
            <div className="flex flex-col gap-1.5 sm:gap-2">
              <p className="font-serif text-lg sm:text-xl lg:text-2xl text-[#1A1A1A]">
                We are not replacing agents.
              </p>
              <p className="font-serif text-lg sm:text-xl lg:text-2xl text-[#1A1A1A]">
                We are not replacing portals.
              </p>
              <p className="font-serif text-lg sm:text-xl lg:text-2xl text-[#1A1A1A] mt-3 sm:mt-4 font-semibold">
                We are adding the missing layer between discovery and commitment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
