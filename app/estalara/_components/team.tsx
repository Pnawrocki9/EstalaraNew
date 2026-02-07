export function EstalaraTeam() {
  const team = [
    {
      name: "Piotr Nawrocki",
      role: "CEO",
      description:
        "Experience in building B2B sales and managing distribution for technology companies (Mobileye Intel, Trackimo, iTuran) across Europe and the Middle East.",
    },
    {
      name: "Krystian Wojtkiewicz, PhD",
      role: "CPO",
      description:
        "Co-author of innovative AI systems, Head of the Research Laboratory at Wroclaw University of Science and Technology, and leader of R&D in multiple projects.",
    },
    {
      name: "Rafal Palak, PhD",
      role: "CTO",
      description:
        "Experienced expert with a history of creating advanced solutions for companies such as Santander Bank, Capgemini and BMW.",
    },
  ]

  return (
    <section id="team" className="py-16 lg:py-24 px-6 lg:px-8 border-t border-[#E8E4DF]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-sm uppercase tracking-widest text-[#8B8B8B] mb-4">
            Leadership
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#1A1A1A] max-w-3xl mx-auto text-balance">
            Created by a team with real insight into technology and worldwide markets
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 lg:p-8 border border-[#E8E4DF] hover:border-[#D4CFC8] hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-[#E8E4DF] flex items-center justify-center mb-6">
                <span className="text-2xl font-serif text-[#5C5C5C]">
                  {member.name.charAt(0)}
                </span>
              </div>
              <h3 className="text-lg lg:text-xl font-semibold text-[#1A1A1A] mb-1">
                {member.name}
              </h3>
              <p className="text-sm text-[#8B8B8B] mb-4">{member.role}</p>
              <p className="text-[#5C5C5C] text-sm leading-relaxed">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
