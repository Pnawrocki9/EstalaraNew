import Link from "next/link"
import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { articles, categories } from "../../_data/articleContent"
import { buildKnowledgeMetadata } from "../../_lib/metadata"

type CategoryPageProps = {
  params: {
    categoryId: string
  }
}

export function generateStaticParams() {
  return categories.map((category: any) => ({
    categoryId: category.id,
  }))
}

export const dynamicParams = false

export function generateMetadata({ params }: CategoryPageProps): Metadata {
  const category = categories.find((item: any) => item.id === params.categoryId)
  if (!category) {
    return buildKnowledgeMetadata({
      title: "Category Not Found | Estalara Knowledge",
      description: "The requested category could not be found.",
      path: `/knowledge/insights/${params.categoryId}`,
    })
  }

  return buildKnowledgeMetadata({
    title: `${category.title} | Estalara Knowledge`,
    description: category.description,
    path: `/knowledge/insights/${category.id}`,
  })
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = categories.find((item: any) => item.id === params.categoryId)
  const categoryArticles = Object.values(articles).filter((article: any) => article.category === params.categoryId) as any[]

  if (!category) {
    notFound()
  }

  return (
    <>
      <section className="py-12 px-4 border-b border-[#E8E4DE]" data-testid="category-header">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/knowledge/insights"
            className="inline-flex items-center text-sm text-[#6A6A6A] hover:text-[#1A1A1A] mb-6"
            data-testid="back-to-insights"
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
            Back to Insights
          </Link>
          <h1 className="font-serif text-4xl md:text-5xl text-[#1A1A1A] mb-4">{category.title}</h1>
          <p className="text-lg text-[#4A4A4A]">{category.description}</p>
        </div>
      </section>

      <section className="py-16 px-4" data-testid="articles-section">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {categoryArticles.map((article: any) => (
              <Link
                key={article.id}
                href={`/knowledge/insights/${article.category}/${article.slug}`}
                className="group bg-white p-6 rounded-lg shadow-sm border border-[#E8E4DE] hover:shadow-md transition-shadow"
                data-testid={`article-card-${article.slug}`}
              >
                {article.featured && (
                  <span className="inline-block text-xs bg-[#1A1A1A] text-white px-2 py-1 rounded mb-3">Featured</span>
                )}
                <h3 className="font-serif text-lg text-[#1A1A1A] mb-3 group-hover:underline leading-tight">{article.title}</h3>
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

      <section className="py-16 px-4 bg-[#F5F3F0]" data-testid="other-categories">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-2xl mb-8">Explore Other Topics</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {categories
              .filter((item: any) => item.id !== params.categoryId)
              .map((item: any) => (
                <Link
                  key={item.id}
                  href={`/knowledge/insights/${item.id}`}
                  className="group bg-white p-6 rounded-lg shadow-sm border border-[#E8E4DE] hover:shadow-md transition-shadow"
                  data-testid={`other-category-${item.id}`}
                >
                  <h3 className="font-serif text-lg text-[#1A1A1A] mb-2 group-hover:underline">{item.title}</h3>
                  <p className="text-sm text-[#4A4A4A]">{item.description}</p>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  )
}
