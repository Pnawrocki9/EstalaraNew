const DEFAULT_SITE_URL = "https://www.estalara.com"

function normalizeSiteUrl(value: string): string {
  const trimmed = value.trim()
  if (!trimmed) return DEFAULT_SITE_URL

  const withProtocol = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`
  const normalized = withProtocol.replace(/\/+$/, "")

  try {
    const url = new URL(normalized)
    return `${url.protocol}//${url.host}`
  } catch {
    return DEFAULT_SITE_URL
  }
}

function resolveConfiguredSiteUrl(): string {
  const candidates = [
    process.env.NEXT_PUBLIC_SITE_URL,
    process.env.SITE_URL,
    process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : undefined,
  ]

  for (const candidate of candidates) {
    if (candidate && candidate.trim()) {
      return normalizeSiteUrl(candidate)
    }
  }

  return DEFAULT_SITE_URL
}

export const SITE_URL = resolveConfiguredSiteUrl()

export function toAbsoluteUrl(pathname: string = "/"): string {
  if (/^https?:\/\//i.test(pathname)) {
    return pathname
  }

  const path = pathname.startsWith("/") ? pathname : `/${pathname}`
  return new URL(path, SITE_URL).toString()
}

export const HOMEPAGE_LANGUAGE_ALTERNATES: Record<string, string> = {
  "x-default": "/",
  en: "/",
  "en-US": "/us/real-estate-agency-software",
  "en-GB": "/uk/estate-agency-software",
  "en-AE": "/ae/real-estate-agency-software-dubai",
  "es-ES": "/es/para-inmobiliarias",
  "pl-PL": "/pl/dla-biur-nieruchomosci",
}
