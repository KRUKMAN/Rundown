import type { Metadata } from "next";
import Site from "@/components/site";
import { defaultLocale, isLocale, locales, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { showDrafts } from "@/lib/env";

type PageProps = { params: Promise<{ locale: Locale }> };

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : defaultLocale;
  const t = getDictionary(locale);

  const languages: Record<string, string> = Object.fromEntries(locales.map((l) => [l, `/${l}`]));
  languages["x-default"] = `/${defaultLocale}`;

  return {
    title: t.metadata.title,
    description: t.metadata.description,
    alternates: { canonical: `/${locale}`, languages },
    openGraph: {
      title: t.metadata.title,
      description: t.metadata.description,
      locale: t.metadata.ogLocale,
      alternateLocale: locales.filter((l) => l !== locale).map((l) => (l === "pl" ? "pl_PL" : "en_US")),
      siteName: "The Rundown",
      type: "website",
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : defaultLocale;
  return <Site locale={locale} t={getDictionary(locale)} showDrafts={showDrafts} />;
}
