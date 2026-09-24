import { OFFICE_INFO, INSTITUTIONAL_PROFILE } from "./data";

export function getLegalServiceSchema() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://pinheiro-martins.pages.dev";

  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": `${siteUrl}/#legalservice`,
    name: OFFICE_INFO.name,
    alternateName: OFFICE_INFO.shortName,
    description:
      "Pinheiro & Martins Advocacia e Assessoria Jurídica. Atendimento jurídico especializado, estratégico e humanizado nas áreas Cível, Família, Sucessões, Trabalhista, Previdenciária, Imobiliária, Bancária, Consumidor e Tributária. Sede física no bairro Portão em Curitiba/PR e atendimento digital em todo o Brasil.",
    url: siteUrl,
    telephone: `+${OFFICE_INFO.whatsapp}`,
    priceRange: "$$",
    image: `${siteUrl}/og-image_optimized_300.jpeg`,
    logo: `${siteUrl}/logo_sem_fundo_usarnomodoclaro.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua Deputado Estefano Mikilita, 125 - Sala 604",
      addressLocality: "Curitiba",
      addressRegion: "PR",
      postalCode: "81070-430",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -25.4745,
      longitude: -49.2941,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "09:00",
        closes: "16:00",
      },
    ],
    sameAs: [OFFICE_INFO.instagramUrl, OFFICE_INFO.linkedinUrl],
    department: [
      {
        "@type": "Organization",
        name: INSTITUTIONAL_PROFILE.name,
        description: INSTITUTIONAL_PROFILE.role,
      },
    ],
  };
}