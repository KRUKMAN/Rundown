import type { Metadata } from "next";
import AIAutomationClient from "@/app/ai-automation/ai-automation-client";
import { defaultLocale, isLocale, locales, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";

type PageProps = {
  params: Promise<{
    locale: Locale;
  }>;
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = isLocale(resolvedParams.locale) ? resolvedParams.locale : defaultLocale;
  const dictionary = await getDictionary(locale);

  const languageAlternates: Record<string, string> = locales.reduce(
    (acc, value) => ({
      ...acc,
      [value]: `/${value}`,
    }),
    {} as Record<string, string>
  );

  languageAlternates["x-default"] = `/${defaultLocale}`;

  const alternateLocale = locales
    .filter((loc) => loc !== locale)
    .map((loc) => (loc === "pl" ? "pl_PL" : "en_US"));

  return {
    title: dictionary.metadata.title,
    description: dictionary.metadata.description,
    alternates: {
      canonical: `/${locale}`,
      languages: languageAlternates,
    },
    openGraph: {
      title: dictionary.metadata.title,
      description: dictionary.metadata.description,
      locale: dictionary.metadata.ogLocale,
      alternateLocale,
    },
  };
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  const locale = isLocale(resolvedParams.locale) ? resolvedParams.locale : defaultLocale;
  const dictionary = await getDictionary(locale);

  return <AIAutomationClient locale={locale} dictionary={dictionary} />;
}
