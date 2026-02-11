import Link from "next/link"
import type { Metadata } from "next"

import { articles, categories } from "../_data/articleContent"
import { buildKnowledgeMetadata } from "../_lib/metadata"

export const metadata: Metadata = buildKnowledgeMetadata({
  title: "Insights & Analysis | Estalara Knowledge",
  description:
    "In-depth research on live presentations, buyer intent signals, digital trust, and global selling in real estate.",
  path: "/knowledge/insights",
})

export default function InsightsPage() {
  const articlesByCategory = categories.map((category: any) => ({
    ...category,
    articles: Object.values(articles).filter((article: any) => article.category === category.id),
  }))

  return (
    <>
      <section className="py-12 px-4 border-b border-[#E8E4DE]" data-testid="insights-header">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/knowledge"
            className="inline-flex items-center text-sm text-[#6A6A6A] hover:text-[#1A1A1A] mb-6"
            data-testid="back-to-home"
          >
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
              className="mr-2"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          <h1 className="font-serif text-4xl md:text-5xl text-[#1A1A1A] mb-4">Insights & Analysis</h1>
          <p className="text-lg text-[#4A4A4A]">
            In-depth research and analysis on the transformation of real estate sales. Evidence-based insights for
            professionals who want to understand where the industry is heading.
          </p>
        </div>
      </section>

      {articlesByCategory.map((category: any, index: number) => (
        <section
          key={category.id}
          className={`py-16 px-4 ${index % 2 === 1 ? "bg-[#F5F3F0]" : ""}`}
          data-testid={`category-section-${category.id}`}
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl mb-2">{category.title}</h2>
            <p className="text-[#6A6A6A] mb-10">{category.description}</p>

            <div className="grid md:grid-cols-3 gap-6">
              {category.articles.map((article: any) => (
                <Link
                  key={article.id}
                  href={`/knowledge/insights/${article.category}/${article.slug}`}
                  className="group bg-white p-6 rounded-lg shadow-sm border border-[#E8E4DE] hover:shadow-md transition-shadow"
                  data-testid={`article-card-${article.slug}`}
                >
                  {article.featured && (
                    <span className="inline-block text-xs bg-[#1A1A1A] text-white px-2 py-1 rounded mb-3">Featured</span>
                  )}
                  <h3 className="font-serif text-lg text-[#1A1A1A] mb-3 group-hover:underline leading-tight">
                    {article.title}
                  </h3>
                  <p className="text-sm text-[#4A4A4A] mb-4 line-clamp-3">{article.excerpt}</p>
                  <div className="flex items-center text-xs text-[#6A6A6A]">
                    <span>{article.readTime} min read</span>
                    <span className="mx-2">•</span>
                    <span>{article.publishedDate}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  )
}
