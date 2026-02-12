/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  // 301 redirects — old static HTML pages from the previous website.
  // Tells Google these pages have permanently moved, so it drops them
  // from the index and transfers any SEO value to the new URLs.
  async redirects() {
    return [
      { source: "/about.html", destination: "/", permanent: true },
      { source: "/pricing.html", destination: "/book-demo", permanent: true },
      { source: "/faq.html", destination: "/", permanent: true },
      { source: "/agents.html", destination: "/", permanent: true },
      { source: "/agencies.html", destination: "/", permanent: true },
      { source: "/disclaimer.html", destination: "/legal/platform-disclaimer", permanent: true },
      { source: "/terms-conditions.html", destination: "/legal/terms-and-conditions", permanent: true },
      { source: "/cookies-policy.html", destination: "/legal/cookies-policy", permanent: true },
      { source: "/privacy.html", destination: "/legal/privacy-policy", permanent: true },
    ]
  },
}

export default nextConfig
