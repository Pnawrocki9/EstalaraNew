export function EstalaraStats() {
  const stats = [
    {
      value: "$213B",
      label: "Global FDI Rebound",
      description: "+17% y/y in Q3 2025",
    },
    {
      value: "$56B",
      label: "US Foreign Investment",
      description: "+33% y/y growth",
    },
    {
      value: "$450B",
      label: "Digital Nomad Economy",
      description: "Reshaping global markets",
    },
    {
      value: "19 days",
      label: "Average Sales Time",
      description: "Down from 34 days thanks to LIVE shows",
    },
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-t border-[#E8E4DF]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <p className="text-xs sm:text-sm uppercase tracking-widest text-[#8B8B8B] mb-3 sm:mb-4">
            The Global Opportunity
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#1A1A1A] max-w-2xl mx-auto text-balance">
            Capital is crossing borders faster than ever before
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 border border-[#E8E4DF] hover:border-[#D4CFC8] transition-colors"
            >
              <p className="text-xl sm:text-3xl lg:text-4xl font-semibold text-[#1A1A1A] mb-1 sm:mb-2">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm lg:text-base font-medium text-[#1A1A1A] mb-0.5 sm:mb-1">
                {stat.label}
              </p>
              <p className="text-[10px] sm:text-xs lg:text-sm text-[#8B8B8B]">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
