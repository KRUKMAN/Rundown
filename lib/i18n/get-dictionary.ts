import type { Locale } from "./config";
import en from "./dictionaries/en";
import pl from "./dictionaries/pl";
import type { Dictionary } from "./dictionaries/types";

const dictionaries: Record<Locale, Dictionary> = {
  en,
  pl,
};

export type { Dictionary } from "./dictionaries/types";

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? en;
}
