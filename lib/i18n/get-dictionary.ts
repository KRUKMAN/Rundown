import type { Locale } from "./config";
import en from "./dictionaries/en";
import pl from "./dictionaries/pl";
import type { Dictionary } from "./dictionaries/types";

/** Polish typography: a one-letter word (a, i, o, u, w, z) never ends a line, so the space after it is non-breaking. */
function bind<T>(value: T): T {
  if (typeof value === "string") return value.replace(/(^|[\s(„])([aiouwzAIOUWZ]) /g, "$1$2\u00a0") as T;
  if (Array.isArray(value)) return value.map(bind) as T;
  if (value && typeof value === "object") return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, bind(v)])) as T;
  return value;
}

const dictionaries: Record<Locale, Dictionary> = {
  en,
  pl: bind(pl),
};

export type { Dictionary } from "./dictionaries/types";

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? en;
}
