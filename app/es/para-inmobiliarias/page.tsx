import type { Metadata } from "next"
import { EstalaraHeader } from "@/app/estalara/_components/header"
import { EstalaraFooter } from "@/app/estalara/_components/footer"
import { RegionLandingPage, type RegionLandingContent } from "@/app/estalara/_components/region-landing-page"
import { HOMEPAGE_LANGUAGE_ALTERNATES } from "@/lib/site"

const content: RegionLandingContent = {
  cta: "Solicitar demostración",
  hero: {
    h1: "Software para inmobiliarias",
    subheadline:
      "Estalara es la plataforma moderna que ayuda a las agencias inmobiliarias a presentar propiedades de forma profesional, llegar a inversores internacionales y captar leads directamente.",
  },
  problem: {
    label: "El desafío",
    title: "¿Por qué las inmobiliarias pierden oportunidades?",
    items: [
      {
        title: "Dependencia de los portales inmobiliarios",
        description:
          "Las agencias pagan altas comisiones a los portales, perdiendo control sobre sus datos y relaciones con clientes.",
      },
      {
        title: "Falta de diferenciación",
        description:
          "En los portales, todas las propiedades se ven iguales. Es difícil construir una marca reconocible y destacar entre la competencia.",
      },
      {
        title: "Leads de baja calidad",
        description:
          "La captación de leads inmobiliarios tradicional a menudo significa contactar con personas sin intención real de compra.",
      },
      {
        title: "Alcance internacional limitado",
        description:
          "El marketing inmobiliario digital requiere llegar a compradores extranjeros, lo cual es complicado sin las herramientas adecuadas.",
      },
    ],
  },
  solution: {
    label: "La solución",
    title: "¿Cómo Estalara ayuda a las inmobiliarias?",
    subtitle:
      "Herramientas para agencias inmobiliarias que permiten construir un canal de ventas propio e independizarse de los portales.",
    items: [
      {
        title: "Presentación profesional",
        description:
          "Páginas web para propiedades diseñadas para atraer la atención y generar confianza en compradores potenciales.",
      },
      {
        title: "Optimización SEO automática",
        description:
          "Páginas optimizadas para buscadores que aumentan la visibilidad de tus propiedades en Google y otros motores.",
      },
      {
        title: "Alcance global",
        description:
          "Llega a inversores de todo el mundo. Tus propiedades son visibles para compradores que buscan inmuebles en España.",
      },
      {
        title: "Propiedad de los leads",
        description:
          "Cada lead llega directamente a ti. Sin intermediarios, sin comisiones ocultas por contactar con clientes.",
      },
      {
        title: "Analítica y reportes",
        description:
          "Monitoriza el interés en tus propiedades, analiza el comportamiento de usuarios y optimiza tu estrategia de ventas.",
      },
    ],
  },
  useCases: {
    label: "Casos de uso",
    title: "¿Para qué inmobiliarias es Estalara?",
    items: [
      {
        title: "Propiedades premium y de lujo",
        description:
          "Presenta apartamentos y villas exclusivas de forma que refleje su valor y atraiga a clientes exigentes.",
      },
      {
        title: "Venta a inversores extranjeros",
        description:
          "Alcanza compradores de Reino Unido, Alemania, Países Nórdicos y otros mercados interesados en propiedades en España.",
      },
      {
        title: "Construcción de marca",
        description:
          "Crea un canal de marketing independiente y posiciona tu agencia como una alternativa a los portales inmobiliarios.",
      },
    ],
  },
  finalCta: {
    title: "¿Listo para el marketing inmobiliario moderno?",
    subtitle:
      "Solicita una demostración gratuita y descubre cómo Estalara puede ayudar a tu agencia a captar más clientes. Software para inmobiliarias que realmente funciona.",
    note: "Sin compromiso. Presentación personalizada para tu agencia.",
  },
}

export const metadata: Metadata = {
  title: "Software para inmobiliarias | Estalara",
  description:
    "Software moderno para inmobiliarias. Presentación profesional de propiedades, captación de leads inmobiliarios y marketing digital sin intermediarios. Solicita demo.",
  keywords:
    "software para inmobiliarias, marketing inmobiliario digital, captación de leads inmobiliarios, páginas web para propiedades, herramientas para agencias inmobiliarias",
  alternates: {
    canonical: "/es/para-inmobiliarias",
    languages: HOMEPAGE_LANGUAGE_ALTERNATES,
  },
  openGraph: {
    title: "Software para inmobiliarias | Estalara",
    description:
      "Software moderno para inmobiliarias. Presentación profesional de propiedades y captación de leads.",
    locale: "es_ES",
  },
}

export default function SpainLandingPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF9]">
      <EstalaraHeader />
      <main lang="es-ES">
        <RegionLandingPage content={content} />
      </main>
      <EstalaraFooter />
    </div>
  )
}
