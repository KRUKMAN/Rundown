"use client";

import Cookies from "js-cookie";
import type { Locale } from "@/lib/i18n/config";

type Props = { target: Locale; label: string; className?: string };

export default function LanguageSwitcher({ target, label, className }: Props) {
  return (
    <a
      href={`/${target}`}
      hrefLang={target}
      lang={target}
      onClick={() => Cookies.set("NEXT_LOCALE", target, { expires: 365, sameSite: "lax" })}
      className={className}
    >
      {label}
    </a>
  );
}
