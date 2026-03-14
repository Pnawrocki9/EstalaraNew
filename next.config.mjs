/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
      {
        source: "/api/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
      {
        source: "/admin/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ]
  },

  async redirects() {
    return [
      // Old static HTML pages from the previous website
      { source: "/about.html", destination: "/", permanent: true },
      { source: "/pricing.html", destination: "/book-demo", permanent: true },
      { source: "/faq.html", destination: "/", permanent: true },
      { source: "/agents.html", destination: "/", permanent: true },
      { source: "/agencies.html", destination: "/", permanent: true },
      { source: "/disclaimer.html", destination: "/legal/platform-disclaimer", permanent: true },
      { source: "/terms-conditions.html", destination: "/legal/terms-and-conditions", permanent: true },
      { source: "/cookies-policy.html", destination: "/legal/cookies-policy", permanent: true },
      { source: "/privacy.html", destination: "/legal/privacy-policy", permanent: true },
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/dpa.html", destination: "/legal/privacy-policy", permanent: true },
      { source: "/gdpr.html", destination: "/legal/privacy-policy", permanent: true },
      { source: "/streaming.html", destination: "/", permanent: true },

      // Missing /legal/ prefix
      { source: "/cookies-policy", destination: "/legal/cookies-policy", permanent: true },
      { source: "/privacy-policy", destination: "/legal/privacy-policy", permanent: true },
      { source: "/terms-and-conditions", destination: "/legal/terms-and-conditions", permanent: true },
      { source: "/platform-disclaimer", destination: "/legal/platform-disclaimer", permanent: true },

      // Non-existent language versions — redirect to homepage
      { source: "/fr", destination: "/", permanent: false },
      { source: "/fr/:path*", destination: "/", permanent: false },
      { source: "/de", destination: "/", permanent: false },
      { source: "/de/:path*", destination: "/", permanent: false },
      { source: "/it", destination: "/", permanent: false },
      { source: "/it/:path*", destination: "/", permanent: false },
    ]
  },
}

export default nextConfig
