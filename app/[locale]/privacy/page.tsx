import type { Metadata } from "next";
import LegalPage from "@/components/legal-page";
import { defaultLocale, isLocale, locales, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { getLegal } from "@/lib/legal/content";
import { showDrafts } from "@/lib/env";

type PageProps = { params: Promise<{ locale: Locale }> };

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : defaultLocale;
  const doc = getLegal("privacy", locale);
  const languages: Record<string, string> = Object.fromEntries(locales.map((l) => [l, `/${l}/privacy`]));
  return {
    title: `${doc.title} · The Rundown`,
    alternates: { canonical: `/${locale}/privacy`, languages },
  };
}

export default async function Page({ params }: PageProps) {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : defaultLocale;
  return <LegalPage locale={locale} t={getDictionary(locale)} doc={getLegal("privacy", locale)} showDrafts={showDrafts} />;
}
