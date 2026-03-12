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
