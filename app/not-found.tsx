import Link from "next/link"

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#F8F6F3] px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-[#8B8B8B]">404</p>
        <h1 className="mt-4 font-serif text-4xl text-[#1A1A1A]">Page not found</h1>
        <p className="mt-4 text-[#5C5C5C]">
          The page you are looking for may have moved or no longer exists. Use one of the links below to continue.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-[#1A1A1A] px-6 py-3 text-sm font-medium text-white hover:bg-[#2A2A2A]"
          >
            Go to Home
          </Link>
          <Link
            href="/knowledge"
            className="inline-flex items-center justify-center rounded-full border border-[#D4CFC8] bg-white px-6 py-3 text-sm font-medium text-[#1A1A1A] hover:bg-[#F3F0EB]"
          >
            Explore Knowledge
          </Link>
          <Link
            href="/book-demo"
            className="inline-flex items-center justify-center rounded-full border border-[#D4CFC8] bg-white px-6 py-3 text-sm font-medium text-[#1A1A1A] hover:bg-[#F3F0EB]"
          >
            Book a Demo
          </Link>
        </div>
      </div>
    </main>
  )
}
