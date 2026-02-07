import { Eye, Globe, Wallet } from "lucide-react"

export function EstalaraProblem() {
  const problems = [
    {
      icon: Eye,
      title: "Invisibility",
      description:
        "Your listings are buried in overcrowded, expensive portals where you compete against thousands of others.",
    },
    {
      icon: Globe,
      title: "Friction",
      description:
        "Language barriers and distance create mistrust. Buyers hesitate when they can't physically visit.",
    },
    {
      icon: Wallet,
      title: "The Extraction Model",
      description:
        "Portals drain your marketing budget for low-quality leads and low ROI. You rent an audience when you should be owning the channel.",
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
            Traditional portals are failing the global transaction
          </h2>
          <p className="text-[#A3A3A3] mt-4 max-w-xl mx-auto">
            {"Old methods create a 'Local Trap' that blocks cross-border revenue"}
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
