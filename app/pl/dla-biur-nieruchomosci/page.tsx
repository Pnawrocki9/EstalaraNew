import type { Metadata } from "next"
import { EstalaraHeader } from "@/app/estalara/_components/header"
import { EstalaraFooter } from "@/app/estalara/_components/footer"
import { RegionLandingPage, type RegionLandingContent } from "@/app/estalara/_components/region-landing-page"

const content: RegionLandingContent = {
  cta: "Umów demo",
  hero: {
    h1: "Oprogramowanie dla biur nieruchomości",
    subheadline:
      "Estalara to nowoczesna platforma, która pomaga biurom nieruchomości prezentować oferty w sposób profesjonalny, docierać do międzynarodowych inwestorów i pozyskiwać leady bez pośredników.",
  },
  problem: {
    label: "Wyzwania",
    title: "Dlaczego agencje nieruchomości tracą klientów?",
    items: [
      {
        title: "Uzależnienie od portali ogłoszeniowych",
        description:
          "Biura nieruchomości płacą wysokie prowizje portalom, tracąc kontrolę nad swoimi danymi i relacjami z klientami.",
      },
      {
        title: "Brak wyróżnienia na rynku",
        description:
          "Na portalach wszystkie oferty wyglądają podobnie. Trudno zbudować rozpoznawalną markę i wyróżnić się wśród konkurencji.",
      },
      {
        title: "Niska jakość leadów",
        description:
          "Pozyskiwanie leadów nieruchomości z tradycyjnych źródeł często oznacza kontakt z osobami niezainteresowanymi zakupem.",
      },
      {
        title: "Ograniczony zasięg międzynarodowy",
        description:
          "Marketing nieruchomości dla biur wymaga dotarcia do zagranicznych inwestorów, co jest trudne bez odpowiednich narzędzi.",
      },
    ],
  },
  solution: {
    label: "Rozwiązanie",
    title: "Jak Estalara wspiera agencje nieruchomości?",
    subtitle:
      "Narzędzia dla agencji nieruchomości, które pozwalają budować własny kanał sprzedaży i uniezależnić się od portali.",
    items: [
      {
        title: "Profesjonalna prezentacja ofert",
        description:
          "Prezentacja ofert nieruchomości online w sposób, który przyciąga uwagę i buduje zaufanie potencjalnych kupców.",
      },
      {
        title: "Optymalizacja SEO",
        description:
          "Automatycznie tworzone strony zoptymalizowane pod wyszukiwarki, które zwiększają widoczność Twoich nieruchomości.",
      },
      {
        title: "Zasięg międzynarodowy",
        description:
          "Docieraj do inwestorów z całego świata. Twoje oferty są widoczne dla kupców szukających nieruchomości w Polsce.",
      },
      {
        title: "Własność leadów",
        description:
          "Każdy lead trafia bezpośrednio do Ciebie. Żadnych pośredników, żadnych ukrytych opłat za kontakt z klientem.",
      },
      {
        title: "Analityka i raporty",
        description:
          "Śledź zainteresowanie ofertami, analizuj zachowania użytkowników i optymalizuj strategię sprzedaży.",
      },
    ],
  },
  useCases: {
    label: "Zastosowania",
    title: "Dla jakich biur jest Estalara?",
    items: [
      {
        title: "Nieruchomości premium i luksusowe",
        description:
          "Prezentuj ekskluzywne apartamenty i domy w sposób, który oddaje ich wartość i przyciąga wymagających klientów.",
      },
      {
        title: "Sprzedaż zagranicznym inwestorom",
        description:
          "Docieraj do kupców z Niemiec, Skandynawii, Wielkiej Brytanii i innych krajów szukających nieruchomości w Polsce.",
      },
      {
        title: "Budowanie marki agencji",
        description:
          "Stwórz niezależny kanał marketingowy i buduj rozpoznawalność swojego biura jako alternatywa dla portali nieruchomości.",
      },
    ],
  },
  finalCta: {
    title: "Gotowy na nowoczesny marketing nieruchomości?",
    subtitle:
      "Umów bezpłatne demo i zobacz, jak Estalara może pomóc Twojemu biuru pozyskiwać więcej klientów. Oprogramowanie dla biur nieruchomości, które naprawdę działa.",
    note: "Bez zobowiązań. Personalizowana prezentacja dla Twojej agencji.",
  },
}

export const metadata: Metadata = {
  title: "Oprogramowanie dla biur nieruchomości | Estalara",
  description:
    "Nowoczesne oprogramowanie dla biur nieruchomości. Profesjonalna prezentacja ofert, pozyskiwanie leadów i marketing nieruchomości bez pośredników. Umów demo.",
  keywords:
    "oprogramowanie dla biur nieruchomości, marketing nieruchomości dla biur, pozyskiwanie leadów nieruchomości, prezentacja ofert nieruchomości online, narzędzia dla agencji nieruchomości",
  alternates: {
    canonical: "/pl/dla-biur-nieruchomosci",
  },
  openGraph: {
    title: "Oprogramowanie dla biur nieruchomości | Estalara",
    description:
      "Nowoczesne oprogramowanie dla biur nieruchomości. Profesjonalna prezentacja ofert i pozyskiwanie leadów.",
    locale: "pl_PL",
  },
}

export default function PolandLandingPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF9]">
      <EstalaraHeader />
      <main>
        <RegionLandingPage content={content} />
      </main>
      <EstalaraFooter />
    </div>
  )
}
