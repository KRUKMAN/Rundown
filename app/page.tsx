import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import { defaultLocale, isLocale, locales } from "@/lib/i18n/config";

function pickLocale(acceptLanguage: string, cookieLocale?: string) {
  if (isLocale(cookieLocale)) return cookieLocale;

  const accepted = acceptLanguage
    .split(",")
    .map((part) => part.split(";")[0]?.trim().toLowerCase())
    .filter(Boolean);

  for (const language of accepted) {
    const match = locales.find((locale) => language.startsWith(locale.toLowerCase()));
    if (match) return match;
  }

  return defaultLocale;
}

export default async function Home() {
  const cookieStore = await cookies();
  const headerStore = await headers();

  const cookieLocale = cookieStore.get("NEXT_LOCALE")?.value;
  const acceptLanguage = headerStore.get("accept-language") || "";
  const locale = pickLocale(acceptLanguage, cookieLocale);

  redirect(`/${locale}`);
}
