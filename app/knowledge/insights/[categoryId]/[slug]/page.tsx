import Link from "next/link"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import type { ReactNode } from "react"

import { articles, categories } from "../../../_data/articleContent"
import { buildKnowledgeMetadata } from "../../../_lib/metadata"
import { toAbsoluteUrl } from "@/lib/site"

type ArticlePageProps = {
  params: {
    categoryId: string
    slug: string
  }
}

type TableData = {
  headers: string[]
  rows: string[][]
}

const monthMap: Record<string, number> = {
  january: 0,
  february: 1,
  march: 2,
  april: 3,
  may: 4,
  june: 5,
  july: 6,
  august: 7,
  september: 8,
  october: 9,
  november: 10,
  december: 11,
}

function toIsoDate(rawDate: string | undefined): string | undefined {
  if (!rawDate || !rawDate.trim()) return undefined

  const value = rawDate.trim()

  if (/^\d{4}-\d{2}-\d{2}/.test(value)) {
    const parsed = new Date(value)
    return Number.isNaN(parsed.getTime()) ? undefined : parsed.toISOString()
  }

  const [monthText, yearText] = value.split(/\s+/)
  const month = monthMap[monthText?.toLowerCase()]
  const year = Number.parseInt(yearText ?? "", 10)
  if (month === undefined || Number.isNaN(year)) return undefined

  return new Date(Date.UTC(year, month, 1)).toISOString()
}

function parseTableRow(line: string): string[] {
  return line
    .trim()
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((cell) => cell.trim())
}

function isTableSeparator(line: string): boolean {
  const cells = parseTableRow(line)
  return cells.length > 0 && cells.every((cell) => /^:?-{3,}:?$/.test(cell.replace(/\s+/g, "")))
}

function parseMarkdownTable(lines: string[], startIndex: number): { table: TableData; nextIndex: number } {
  const tableLines: string[] = []
  let index = startIndex

  while (index < lines.length && lines[index].trim().startsWith("|")) {
    tableLines.push(lines[index].trim())
    index += 1
  }

  const headerLine = tableLines[0] ?? ""
  const separatorOffset = tableLines[1] && isTableSeparator(tableLines[1]) ? 2 : 1
  const rowLines = tableLines.slice(separatorOffset)

  return {
    table: {
      headers: parseTableRow(headerLine),
      rows: rowLines.map(parseTableRow),
    },
    nextIndex: index,
  }
}

function renderArticleContent(content: string): ReactNode[] {
  const lines = content.split("\n")
  const blocks: ReactNode[] = []
  let index = 0

  while (index < lines.length) {
    const rawLine = lines[index]
    const line = rawLine.trim()

    if (!line) {
      index += 1
      continue
    }

    if (line.startsWith("```")) {
      const codeLines: string[] = []
      index += 1
      while (index < lines.length && !lines[index].trim().startsWith("```")) {
        codeLines.push(lines[index])
        index += 1
      }
      if (index < lines.length) {
        index += 1
      }
      blocks.push(
        <pre key={`code-${blocks.length}`} className="my-6 overflow-x-auto rounded-lg bg-[#1A1A1A] p-4 text-sm text-white">
          <code>{codeLines.join("\n")}</code>
        </pre>,
      )
      continue
    }

    if (line.startsWith("## ")) {
      blocks.push(
        <h2 key={`h2-${blocks.length}`} className="font-serif text-2xl mt-10 mb-4 text-[#1A1A1A]">
          {line.replace("## ", "")}
        </h2>,
      )
      index += 1
      continue
    }

    if (line.startsWith("### ")) {
      blocks.push(
        <h3 key={`h3-${blocks.length}`} className="font-serif text-xl mt-8 mb-3 text-[#1A1A1A]">
          {line.replace("### ", "")}
        </h3>,
      )
      index += 1
      continue
    }

    if (line.startsWith("|")) {
      const { table, nextIndex } = parseMarkdownTable(lines, index)
      blocks.push(
        <div key={`table-${blocks.length}`} className="my-6 overflow-x-auto">
          <table className="min-w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-[#D9D6D0] bg-[#F5F3F0]">
                {table.headers.map((header, headerIdx) => (
                  <th key={`th-${headerIdx}`} className="px-3 py-2 text-left font-semibold text-[#1A1A1A]">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {table.rows.map((row, rowIdx) => (
                <tr key={`row-${rowIdx}`} className="border-b border-[#EEEAE3]">
                  {row.map((cell, cellIdx) => (
                    <td key={`cell-${rowIdx}-${cellIdx}`} className="px-3 py-2 align-top">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>,
      )
      index = nextIndex
      continue
    }

    if (line.startsWith("- ")) {
      const items: string[] = []
      while (index < lines.length && lines[index].trim().startsWith("- ")) {
        items.push(lines[index].trim().replace("- ", ""))
        index += 1
      }
      blocks.push(
        <ul key={`ul-${blocks.length}`} className="my-4 list-disc pl-6 space-y-2">
          {items.map((item, itemIdx) => (
            <li key={`ul-item-${itemIdx}`}>{item}</li>
          ))}
        </ul>,
      )
      continue
    }

    if (/^\d+\.\s/.test(line)) {
      const items: string[] = []
      while (index < lines.length && /^\d+\.\s/.test(lines[index].trim())) {
        items.push(lines[index].trim().replace(/^\d+\.\s/, ""))
        index += 1
      }
      blocks.push(
        <ol key={`ol-${blocks.length}`} className="my-4 list-decimal pl-6 space-y-2">
          {items.map((item, itemIdx) => (
            <li key={`ol-item-${itemIdx}`}>{item}</li>
          ))}
        </ol>,
      )
      continue
    }

    if (line.startsWith("*Source:") || line.startsWith("*Based on")) {
      blocks.push(
        <p key={`source-${blocks.length}`} className="text-sm text-[#6A6A6A] italic my-4">
          {line.replace(/^\*/, "").replace(/\*$/, "")}
        </p>,
      )
      index += 1
      continue
    }

    if (line.startsWith("**") && line.endsWith("**")) {
      blocks.push(
        <p key={`strong-${blocks.length}`} className="font-semibold my-4">
          {line.replace(/\*\*/g, "")}
        </p>,
      )
      index += 1
      continue
    }

    blocks.push(
      <p key={`p-${blocks.length}`} className="my-4">
        {line}
      </p>,
    )
    index += 1
  }

  return blocks
}

function SocialShare({ title, url }: { title: string; url: string }) {
  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    email: `mailto:?subject=${encodedTitle}&body=Check out this article: ${encodedUrl}`,
  }

  return (
    <div className="flex items-center gap-3" data-testid="social-share">
      <span className="text-xs text-[#6A6A6A]">Share:</span>
      <a
        href={shareLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full bg-[#F5F3F0] hover:bg-[#E8E4DE] transition-colors"
        title="Share on Twitter"
        data-testid="share-twitter"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </a>
      <a
        href={shareLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full bg-[#F5F3F0] hover:bg-[#E8E4DE] transition-colors"
        title="Share on LinkedIn"
        data-testid="share-linkedin"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      </a>
      <a
        href={shareLinks.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full bg-[#F5F3F0] hover:bg-[#E8E4DE] transition-colors"
        title="Share on Facebook"
        data-testid="share-facebook"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      </a>
      <a
        href={shareLinks.email}
        className="p-2 rounded-full bg-[#F5F3F0] hover:bg-[#E8E4DE] transition-colors"
        title="Share via Email"
        data-testid="share-email"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      </a>
    </div>
  )
}

export function generateStaticParams() {
  return Object.values(articles).map((article: any) => ({
    categoryId: article.category,
    slug: article.slug,
  }))
}

export const dynamicParams = false

export function generateMetadata({ params }: ArticlePageProps): Metadata {
  const article = (articles as any)[params.slug]
  if (!article || article.category !== params.categoryId) {
    return buildKnowledgeMetadata({
      title: "Article Not Found | Estalara Knowledge",
      description: "The requested article could not be found.",
      path: `/knowledge/insights/${params.categoryId}/${params.slug}`,
    })
  }

  return buildKnowledgeMetadata({
    title: `${article.title} | Estalara Knowledge`,
    description: article.excerpt,
    path: `/knowledge/insights/${article.category}/${article.slug}`,
  })
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = (articles as any)[params.slug]
  if (!article || article.category !== params.categoryId) {
    notFound()
  }

  const relatedArticles = article.relatedArticles?.map((relSlug: string) => (articles as any)[relSlug]).filter(Boolean).slice(0, 4) || []
  const category = categories.find((item: any) => item.id === article.category) as any
  const sharePath = `/knowledge/insights/${article.category}/${article.slug}`
  const shareUrl = toAbsoluteUrl(sharePath)
  const publishedIso = toIsoDate(article.publishedDate)
  const updatedIso = toIsoDate(article.updatedDate || article.publishedDate)

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    author: {
      "@type": "Organization",
      name: "Estalara Research",
    },
    publisher: {
      "@type": "Organization",
      name: "Estalara",
      logo: {
        "@type": "ImageObject",
        url: toAbsoluteUrl("/images/estalara/estalara-logo.svg"),
      },
    },
    datePublished: publishedIso,
    dateModified: updatedIso || publishedIso,
    mainEntityOfPage: shareUrl,
    keywords: Array.isArray(article.tags) ? article.tags.join(", ") : undefined,
  }

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: toAbsoluteUrl("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Knowledge",
        item: toAbsoluteUrl("/knowledge"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Insights",
        item: toAbsoluteUrl("/knowledge/insights"),
      },
      {
        "@type": "ListItem",
        position: 4,
        name: category?.title || "Category",
        item: toAbsoluteUrl(`/knowledge/insights/${article.category}`),
      },
      {
        "@type": "ListItem",
        position: 5,
        name: article.title,
        item: shareUrl,
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <article className="py-12 px-4" data-testid="article-page">
        <div className="max-w-3xl mx-auto">
          <nav className="mb-8" data-testid="article-breadcrumb">
            <Link href="/knowledge" className="text-sm text-[#6A6A6A] hover:text-[#1A1A1A]">
              Home
            </Link>
            <span className="mx-2 text-[#6A6A6A]">/</span>
            <Link href="/knowledge/insights" className="text-sm text-[#6A6A6A] hover:text-[#1A1A1A]">
              Insights
            </Link>
            <span className="mx-2 text-[#6A6A6A]">/</span>
            <Link href={`/knowledge/insights/${params.categoryId}`} className="text-sm text-[#6A6A6A] hover:text-[#1A1A1A]">
              {category?.title}
            </Link>
          </nav>

          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs bg-[#F5F3F0] px-3 py-1 rounded-full text-[#4A4A4A]">{category?.title}</span>
              {article.featured && <span className="text-xs bg-[#1A1A1A] text-white px-3 py-1 rounded-full">Featured</span>}
            </div>

            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1A1A1A] leading-tight mb-6" data-testid="article-title">
              {article.title}
            </h1>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center text-sm text-[#6A6A6A] gap-4">
                <span>{article.publishedDate}</span>
                <span>•</span>
                <span>{article.readTime} min read</span>
                <span>•</span>
                <span>Last updated: {article.updatedDate}</span>
              </div>
              <SocialShare title={article.title} url={shareUrl} />
            </div>
          </div>

          <div className="prose prose-lg max-w-none" data-testid="article-content">
            <div className="article-content text-[#2A2A2A] leading-relaxed">
              {renderArticleContent(article.content)}
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-[#E8E4DE]" data-testid="sources-section">
            <h3 className="font-serif text-xl mb-6">Sources & References</h3>
            <p className="text-sm text-[#4A4A4A] mb-6">All data and statistics in this article have been verified against the following sources:</p>
            <div className="space-y-4">
              {article.sources.map((source: any, idx: number) => (
                <div key={idx} className="bg-[#F5F3F0] p-4 rounded-lg">
                  <p className="font-medium text-sm mb-1">{source.name}</p>
                  <p className="text-sm text-[#4A4A4A] mb-2">{source.data}</p>
                  <div className="flex items-center text-xs text-[#6A6A6A]">
                    {source.url && (
                      <a href={source.url} target="_blank" rel="noopener noreferrer" className="hover:underline text-[#1A1A1A]">
                        View Source
                      </a>
                    )}
                    {source.url && source.accessed && <span className="mx-2">•</span>}
                    {source.accessed && <span>Accessed: {source.accessed}</span>}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-[#FAF8F5] border border-[#E8E4DE] rounded-lg">
              <p className="text-xs text-[#6A6A6A] italic">
                <strong>Disclaimer:</strong> Real estate markets fluctuate. While we strive for accuracy, readers should
                verify current data and consult professionals for specific decisions.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-[#E8E4DE]" data-testid="article-tags">
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag: string, idx: number) => (
                <span key={idx} className="text-xs bg-[#F5F3F0] px-3 py-1 rounded-full text-[#4A4A4A]">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>

      {relatedArticles.length > 0 && (
        <section className="py-16 px-4 bg-[#F5F3F0]" data-testid="related-articles">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-2xl mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedArticles.map((related: any) => (
                <Link
                  key={related.id}
                  href={`/knowledge/insights/${related.category}/${related.slug}`}
                  className="group bg-white p-6 rounded-lg shadow-sm border border-[#E8E4DE] hover:shadow-md transition-shadow"
                  data-testid={`related-${related.slug}`}
                >
                  <h3 className="font-serif text-base text-[#1A1A1A] mb-2 group-hover:underline leading-tight">{related.title}</h3>
                  <p className="text-xs text-[#6A6A6A]">{related.readTime} min read</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 px-4" data-testid="article-cta">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-2xl mb-4">Want to apply these insights?</h2>
          <p className="text-[#4A4A4A] mb-8">
            See how Estalara helps real estate professionals leverage live presentations and behavioral analytics.
          </p>
          <Link
            href="/book-demo"
            className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-white bg-[#1A1A1A] rounded-full hover:bg-[#2A2A2A] transition-colors"
            data-testid="article-book-demo"
          >
            Book a Demo
          </Link>
        </div>
      </section>
    </>
  )
}
