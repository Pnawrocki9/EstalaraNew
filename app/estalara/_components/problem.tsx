import { Eye, Globe, Shield } from "lucide-react"

export function EstalaraProblem() {
  const problems = [
    {
      icon: Eye,
      title: "Visibility",
      paragraphs: [
        "Portals show your listings to many people.",
        "Estalara brings you real buyers, not just views.\nPeople who are ready to ask questions and move forward.",
      ],
    },
    {
      icon: Globe,
      title: "Barriers",
      paragraphs: [
        "International buyers often hesitate because of language, distance, or uncertainty.",
        "Estalara helps them understand the property clearly and confirm their interest before they contact you or you contact them.",
        "You speak only with serious buyers.",
      ],
    },
    {
      icon: Shield,
      title: "Not Your Brand",
      paragraphs: [
        "Traditional portals promote listings.\nEstalara promotes your agency.",
        "Every buyer interacts with your brand.\nEvery conversation strengthens your market position.",
        "Over time, you are not just selling properties.\nYou are becoming the trusted entry point for investors in your country.",
      ],
    },
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <p className="text-xs sm:text-sm uppercase tracking-widest text-[#8B8B8B] mb-3 sm:mb-4">
            The Problem
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white max-w-3xl mx-auto text-balance">
            {"Views don\u2019t sell properties. Buyers do."}
          </h2>
          <p className="text-[#A3A3A3] mt-3 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            Your listings get views. Estalara brings you buyers who are ready to talk seriously.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-[#2A2A2A] rounded-xl p-5 sm:p-6 lg:p-8 border border-[#3A3A3A] hover:border-[#4A4A4A] transition-colors"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#3A3A3A] flex items-center justify-center mb-4 sm:mb-6">
                <problem.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-white mb-2 sm:mb-3">
                {problem.title}
              </h3>
              <div className="space-y-3">
                {problem.paragraphs.map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-[#A3A3A3] text-sm lg:text-base leading-relaxed whitespace-pre-line">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
