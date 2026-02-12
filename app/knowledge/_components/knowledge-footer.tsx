import Link from "next/link"
import { EstalaraFooter } from "@/app/estalara/_components/footer"

export function KnowledgeFooter() {
  return (
    <>
      <div className="border-t border-[#E8E4DE] bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="text-xs uppercase tracking-wide text-[#8B8B8B]">Knowledge Legal</p>
          <div className="flex items-center gap-4 text-sm">
            <Link href="/knowledge/privacy" className="text-[#5C5C5C] hover:text-[#1A1A1A] hover:underline">
              Knowledge Privacy
            </Link>
            <Link href="/knowledge/terms" className="text-[#5C5C5C] hover:text-[#1A1A1A] hover:underline">
              Knowledge Terms
            </Link>
          </div>
        </div>
      </div>
      <EstalaraFooter />
    </>
  )
}
