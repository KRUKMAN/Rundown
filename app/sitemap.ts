import type { MetadataRoute } from "next";
import { defaultLocale, locales } from "@/lib/i18n/config";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://rundown.digital").replace(/\/$/, "");

export default function sitemap(): MetadataRoute.Sitemap {
  const languageAlternates = locales.reduce(
    (acc, locale) => ({ ...acc, [locale]: `${siteUrl}/${locale}` }),
    {} as Record<string, string>
  );

  languageAlternates["x-default"] = `${siteUrl}/${defaultLocale}`;

  return locales.map((locale) => ({
    url: `${siteUrl}/${locale}`,
    lastModified: new Date(),
    alternates: {
      languages: languageAlternates,
    },
  }));
}
