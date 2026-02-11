import Link from "next/link"

export function KnowledgeFooter() {
  return (
    <footer className="bg-[#1A1A1A] text-white" data-testid="site-footer">
      <div className="border-b border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <p className="text-sm text-[#9A9A9A] uppercase tracking-wider mb-4">Get Started</p>
          <h2 className="font-serif text-3xl md:text-4xl mb-6">Ready to go LIVE and GLOBAL?</h2>
          <p className="text-[#9A9A9A] mb-8 max-w-2xl mx-auto">
            Book a private demo to see how we can put your listings on global map of real estate.
          </p>
          <a
            href="https://estalara.com/book-demo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-[#1A1A1A] bg-white rounded-full hover:bg-[#F0F0F0] transition-colors"
            data-testid="footer-book-demo"
          >
            Book a Demo
          </a>
          <div className="mt-6 text-sm text-[#9A9A9A]">
            <p>Contact us directly</p>
            <p className="mt-1">
              Email:{" "}
              <a href="mailto:estalara@estalara.com" className="text-white hover:underline">
                estalara@estalara.com
              </a>
            </p>
            <p className="text-xs mt-1">Time2Show, Inc.</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1">
            <Link href="/knowledge" className="inline-block">
              <img src="/estalara-logo.png" alt="Estalara" className="h-6 w-auto brightness-0 invert" />
            </Link>
            <p className="mt-4 text-sm text-[#9A9A9A]">
              Industry Research & Analysis for Real Estate Professionals
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://estalara.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#9A9A9A] hover:text-white transition-colors"
                >
                  About Estalara
                </a>
              </li>
              <li>
                <a
                  href="https://estalara.com/book-demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#9A9A9A] hover:text-white transition-colors"
                >
                  Book a Demo
                </a>
              </li>
              <li>
                <a href="mailto:estalara@estalara.com" className="text-sm text-[#9A9A9A] hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider mb-4">Resources</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/knowledge/research" className="text-sm text-[#9A9A9A] hover:text-white transition-colors">
                  Key Signals
                </Link>
              </li>
              <li>
                <Link href="/knowledge/insights" className="text-sm text-[#9A9A9A] hover:text-white transition-colors">
                  Research
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#2A2A2A]">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-[#9A9A9A]">&copy; {new Date().getFullYear()} Time2Show, Inc. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
