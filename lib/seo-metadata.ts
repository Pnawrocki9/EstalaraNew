export const BASE_URL = 'https://estalara.com'
export const DEFAULT_OG_IMAGE = `${BASE_URL}/images/og/default-og.jpg`

export interface HreflangEntry {
  hreflang: string
  href: string
}

export const HREFLANG_GLOBAL: HreflangEntry[] = [
  { hreflang: 'en',       href: `${BASE_URL}/` },
  { hreflang: 'en-GB',    href: `${BASE_URL}/uk/estate-agency-software` },
  { hreflang: 'en-US',    href: `${BASE_URL}/us/real-estate-agency-software` },
  { hreflang: 'pl',       href: `${BASE_URL}/pl/dla-biur-nieruchomosci` },
  { hreflang: 'es',       href: `${BASE_URL}/es/para-inmobiliarias` },
  { hreflang: 'ar-AE',    href: `${BASE_URL}/ae/real-estate-agency-software-dubai` },
  { hreflang: 'x-default', href: `${BASE_URL}/` },
]

export const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Estalara',
  legalName: 'Time2Show, Inc.',
  url: BASE_URL,
  logo: `${BASE_URL}/images/estalara/estalara-logo.svg`,
  contactPoint: { '@type': 'ContactPoint', email: 'estalara@estalara.com', contactType: 'sales' },
  address: { '@type': 'PostalAddress', streetAddress: '1111B S Governors Ave STE 20579', addressLocality: 'Dover', addressRegion: 'DE', postalCode: '19904', addressCountry: 'US' },
  sameAs: ['https://www.linkedin.com/company/estalara/'],
}

export const SOFTWARE_APPLICATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Estalara',
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'Real Estate Software',
  operatingSystem: 'Web',
  description: 'Live property streaming platform for real estate agencies. Reach international buyers with AI-powered live showcases, multilingual chat, and purchase-intent lead scoring.',
  url: BASE_URL,
  screenshot: `${BASE_URL}/images/estalara/hero-live-walkthrough.jpg`,
  featureList: ['Live property streaming to international buyers', 'AI-powered multilingual chat assistant', 'Purchase intent lead scoring', 'Multi-platform broadcast (YouTube, Instagram, Facebook, TikTok)', 'Automatic AI-generated ad campaigns'],
  offers: { '@type': 'Offer', availability: 'https://schema.org/InStock', url: `${BASE_URL}/book-demo` },
  creator: { '@type': 'Organization', name: 'Time2Show, Inc.', sameAs: 'https://www.linkedin.com/company/estalara/' },
}

export const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How is Estalara different from a real estate portal?', acceptedAnswer: { '@type': 'Answer', text: 'Portals show listings and generate traffic. Estalara qualifies buyers in real time through live property showcases, scores their purchase intent, and delivers only serious buyers to your team — under your own brand.' } },
    { '@type': 'Question', name: 'How does Estalara reach international buyers?', acceptedAnswer: { '@type': 'Answer', text: 'Estalara runs AI-generated ad campaigns on Facebook, Google, and Instagram targeting foreign investors searching in your area. During live sessions, it provides real-time AI translation to buyers in any language.' } },
    { '@type': 'Question', name: 'How much does Estalara reduce the sales cycle?', acceptedAnswer: { '@type': 'Answer', text: 'Agencies using Estalara report reducing their average sales cycle from 34 days to 19 days — a 40% reduction — because buyers arrive at in-person viewings already informed, trusting, and ready to transact.' } },
    { '@type': 'Question', name: 'Does Estalara work for international real estate markets?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Estalara is used by agencies in the UK, US, Poland, Spain, and Dubai to reach buyers from Europe, Asia, the Americas, and the GCC.' } },
  ],
}
