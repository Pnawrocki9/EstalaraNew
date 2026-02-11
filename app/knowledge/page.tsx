import Link from "next/link"
import type { Metadata } from "next"

import { articles, categories } from "./_data/articleContent"
import { buildKnowledgeMetadata } from "./_lib/metadata"

export const metadata: Metadata = buildKnowledgeMetadata({
  title: "Knowledge Base | Estalara",
  description:
    "Industry research and analysis on live presentations, buyer behavior, digital trust, and global real estate selling dynamics.",
  path: "/knowledge",
})

export default function KnowledgeHomePage() {
  const featuredArticle = Object.values(articles).find((article: any) => article.featured) as any

  return (
    <>
      <section className="py-16 md:py-24 px-4" data-testid="hero-section">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-[#6A6A6A] uppercase tracking-wider mb-4">Industry Research & Analysis</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1A1A1A] leading-tight mb-6">
            The Way Properties Are Sold Is Changing. Here&apos;s What the Data Shows.
          </h1>
          <p className="text-lg text-[#4A4A4A] mb-10 max-w-2xl mx-auto">
            Research, analysis, and insights on how live interaction, behavioral signals, and digital trust are
            reshaping real estate transactions worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/knowledge/research"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-[#1A1A1A] rounded-full hover:bg-[#2A2A2A] transition-colors"
              data-testid="explore-research-btn"
            >
              Explore the Research
            </Link>
            <Link
              href="/knowledge/insights"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-[#1A1A1A] border border-[#1A1A1A] rounded-full hover:bg-[#1A1A1A] hover:text-white transition-colors"
              data-testid="browse-insights-btn"
            >
              Browse Insights
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F5F3F0] px-4" data-testid="evidence-section">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm text-[#6A6A6A] uppercase tracking-wider mb-2 text-center">The Evidence</p>
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-12">What the Data Reveals</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm" data-testid="stat-card-1">
              <p className="font-serif text-5xl text-[#1A1A1A] mb-4">100%</p>
              <p className="text-[#4A4A4A] mb-4">
                of homebuyers used the internet during their home search in 2024, making digital presence essential.
              </p>
              <p className="text-xs text-[#9A9A9A]">Source: NAR Profile of Home Buyers and Sellers, 2024</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm" data-testid="stat-card-2">
              <p className="font-serif text-5xl text-[#1A1A1A] mb-4">$53.3B</p>
              <p className="text-[#4A4A4A] mb-4">
                in US residential real estate purchased by international buyers, demonstrating the global market
                opportunity.
              </p>
              <p className="text-xs text-[#9A9A9A]">Source: NAR International Transactions Report, 2024</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm" data-testid="stat-card-3">
              <p className="font-serif text-5xl text-[#1A1A1A] mb-4">38%</p>
              <p className="text-[#4A4A4A] mb-4">
                of home buyers are millennials (ages 25-43), the largest buyer demographic expecting digital-first
                experiences.
              </p>
              <p className="text-xs text-[#9A9A9A]">Source: NAR Generational Trends Report, 2024</p>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link
              href="/knowledge/research"
              className="inline-flex items-center text-sm text-[#1A1A1A] font-medium hover:underline"
              data-testid="see-full-research-link"
            >
              See Full Research Library
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4" data-testid="pillars-section">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm text-[#6A6A6A] uppercase tracking-wider mb-2 text-center">Knowledge Pillars</p>
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-4">Understanding the Shift</h2>
          <p className="text-center text-[#4A4A4A] mb-12 max-w-2xl mx-auto">
            Deep analysis across four critical dimensions of modern real estate sales transformation.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {categories.map((category: any) => (
              <Link
                key={category.id}
                href={`/knowledge/insights/${category.id}`}
                className="group bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-[#E8E4DE]"
                data-testid={`pillar-${category.id}`}
              >
                <h3 className="font-serif text-xl text-[#1A1A1A] mb-3 group-hover:underline">{category.title}</h3>
                <p className="text-[#4A4A4A] text-sm">{category.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {featuredArticle && (
        <section className="py-16 bg-[#F5F3F0] px-4" data-testid="featured-section">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm text-[#6A6A6A] uppercase tracking-wider mb-4 text-center">Latest Analysis</p>

            <Link
              href={`/knowledge/insights/${featuredArticle.category}/${featuredArticle.slug}`}
              className="block bg-white p-8 md:p-12 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-[#E8E4DE]"
              data-testid="featured-article-card"
            >
              <span className="inline-block text-xs bg-[#F5F3F0] px-3 py-1 rounded-full text-[#4A4A4A] mb-4">
                Featured Research
              </span>
              <h3 className="font-serif text-2xl md:text-3xl text-[#1A1A1A] mb-4">&quot;{featuredArticle.title}&quot;</h3>
              <p className="text-[#4A4A4A] mb-6">{featuredArticle.excerpt}</p>
              <div className="flex items-center text-sm text-[#6A6A6A]">
                <span>{featuredArticle.readTime} min read</span>
                <span className="mx-2">•</span>
                <span>Read Analysis</span>
              </div>
            </Link>
          </div>
        </section>
      )}

      <section className="py-16 px-4" data-testid="evolution-section">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-[#6A6A6A] uppercase tracking-wider mb-2 text-center">Industry Evolution</p>
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-6">Platforms Leading This Shift</h2>
          <p className="text-center text-[#4A4A4A] mb-8 max-w-2xl mx-auto">
            As the industry evolves, new tools are emerging that enable agents to leverage live presentation,
            behavioral analytics, and global reach. Platforms like <strong>Estalara</strong> represent this new
            generation of real estate technology—built around real-time interaction rather than static listing
            distribution.
          </p>
          <p className="text-center text-[#4A4A4A] mb-10 max-w-2xl mx-auto">
            These tools don&apos;t replace agent expertise; they amplify it by providing the infrastructure for
            authentic, data-informed client engagement.
          </p>
          <div className="text-center">
            <a
              href="https://estalara.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-[#1A1A1A] font-medium hover:underline"
              data-testid="learn-about-estalara"
            >
              Learn about Estalara
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-2"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F5F3F0] px-4" data-testid="perspective-section">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-[#6A6A6A] uppercase tracking-wider mb-2 text-center">Industry Perspective</p>
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-10">The Inevitable Shift</h2>

          <blockquote className="bg-white p-8 md:p-12 rounded-lg shadow-sm border border-[#E8E4DE] mb-12">
            <p className="font-serif text-xl md:text-2xl text-[#1A1A1A] italic leading-relaxed mb-6">
              &quot;The real estate industry has been remarkably resistant to fundamental change. But buyer
              expectations don&apos;t wait for industry readiness. Agents who understand behavioral signals and master
              real-time engagement will define the next decade of property sales.&quot;
            </p>
            <cite className="text-sm text-[#6A6A6A] not-italic">— Industry Analysis, Estalara Homes Research</cite>
          </blockquote>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-[#E8E4DE]">
              <p className="text-[#4A4A4A]">
                Traditional portals optimize for volume, not quality—leaving agents competing on price rather than
                differentiation.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-[#E8E4DE]">
              <p className="text-[#4A4A4A]">
                Buyers increasingly distrust curated listing photos, seeking authentic interaction before committing.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-[#E8E4DE]">
              <p className="text-[#4A4A4A]">
                International capital flows require new engagement models that transcend geographic limitations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-[#E8E4DE]">
              <p className="text-[#4A4A4A]">
                Agent differentiation now depends on interaction quality, not listing quantity.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
