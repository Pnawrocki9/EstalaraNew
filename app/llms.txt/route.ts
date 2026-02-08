export async function GET(request: Request) {
  const { origin } = new URL(request.url)

  const content = `# Estalara

> The white-label platform that helps real estate agencies go beyond traditional portals by converting LIVE investor interactions into AI-qualified hot leads worldwide.

Estalara is a SaaS product by Time2Show, Inc. It provides real estate agencies with tools for LIVE global property presentations, AI-powered lead intent scoring, multilingual streaming, and automated advertising campaigns.

## Core Pages

- [Home](${origin}/)
- [Book a Demo](${origin}/book-demo)

## Legal

- [Privacy Policy](${origin}/legal/privacy-policy)
- [Terms & Conditions](${origin}/legal/terms-and-conditions)
- [Cookies Policy](${origin}/legal/cookies-policy)
- [Platform Disclaimer](${origin}/legal/platform-disclaimer)

## Key Features

- **LIVE Global Presentations**: Present properties to investors worldwide with 1-to-many interactive showcases
- **AI Lead Intent Scoring**: Real-time sentiment analysis identifies hot prospects during live sessions
- **Multilingual AI Translation**: Automatic translation to German, Spanish, Mandarin, and more
- **White-Label Platform**: Operates under the agency's own brand identity
- **Flash Import**: Paste a listing link from any portal and auto-convert to a high-performing property page
- **AI-Driven Advertising**: Auto-generate campaigns targeting international investors on Facebook, Google, and more

## Company

- **Legal Entity**: Time2Show, Inc. (d/b/a Estalara)
- **Registered Address**: 1111B S Governors Ave STE 20579, Dover, DE 19904, USA
- **Contact**: estalara@estalara.com
- **LinkedIn**: https://www.linkedin.com/company/estalara/
`

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  })
}
