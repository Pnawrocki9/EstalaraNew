import { Eye, Globe, Wallet } from "lucide-react"

export function EstalaraProblem() {
  const problems = [
    {
      icon: Eye,
      title: "Visibility",
      description:
        "Portals help you be seen. Estalara helps you be chosen. Traditional listings get eyes on your properties. Estalara adds the confidence signals and engagement channels that turn visitors into real prospects.",
    },
    {
      icon: Globe,
      title: "Friction",
      description:
        "Distance and language don't have to be barriers anymore. Global buyers want clarity, trust, and fast answers. Estalara brings real-time interaction, translation, and verified intent \u2014 so agents don't lose buyers to uncertainty.",
    },
    {
      icon: Wallet,
      title: "Ownership",
      description:
        "Keep your audience and your value. Portals aggregate attention. Estalara helps you own the relationship, the data, and the outcome. That turns one-time views into repeatable high-value sales.",
    },
  ]

  return (
    <section className="py-16 lg:py-24 px-6 lg:px-8 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-sm uppercase tracking-widest text-[#8B8B8B] mb-4">
            The Problem
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white max-w-3xl mx-auto text-balance">
            {"Discovery doesn\u2019t create conversion."}
          </h2>
          <p className="text-[#A3A3A3] mt-4 max-w-2xl mx-auto">
            Listings get views. Estalara closes the gap between interest and commitment.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-[#2A2A2A] rounded-xl p-6 lg:p-8 border border-[#3A3A3A] hover:border-[#4A4A4A] transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-[#3A3A3A] flex items-center justify-center mb-6">
                <problem.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg lg:text-xl font-semibold text-white mb-3">
                {problem.title}
              </h3>
              <p className="text-[#A3A3A3] text-sm lg:text-base leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
