import type { Locale } from "./i18n/config";
import type { Dictionary } from "./i18n/dictionaries/types";

const SITE = "https://rundown.digital";

/** JSON-LD for search engines and AI answer engines: the business, the person, and the FAQ. */
export function structuredData(locale: Locale, t: Dictionary) {
  const pageUrl = `${SITE}/${locale}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${SITE}/#business`,
        name: "The Rundown",
        url: pageUrl,
        email: "jake@rundown.digital",
        description: t.metadata.description,
        founder: { "@id": `${SITE}/#jakub` },
        areaServed: [{ "@type": "Country", name: "Poland" }, "Europe"],
        availableLanguage: ["en", "pl"],
        knowsAbout: t.schema.knowsAbout,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: t.services.title,
          itemListElement: t.schema.serviceTypes.map((name) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name, provider: { "@id": `${SITE}/#business` } },
          })),
        },
      },
      {
        "@type": "Person",
        "@id": `${SITE}/#jakub`,
        name: "Jakub Krukowski",
        jobTitle: t.schema.jobTitle,
        email: "jake@rundown.digital",
        url: pageUrl,
        worksFor: { "@id": `${SITE}/#business` },
        knowsLanguage: ["en", "pl"],
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        inLanguage: locale,
        mainEntity: t.faq.items.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    ],
  };
}
