"use client";

import { useMemo, useTransition } from "react";
import Cookies from "js-cookie";
import { usePathname, useRouter } from "next/navigation";
import { locales, type Locale } from "@/lib/i18n/config";

type LanguageSwitcherProps = {
  currentLocale: Locale;
  label: string;
};

export default function LanguageSwitcher({ currentLocale, label }: LanguageSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname() || "/";
  const [isPending, startTransition] = useTransition();

  const basePath = useMemo(() => {
    const localePattern = new RegExp(`^/(${locales.join("|")})(?=/|$)`);
    const stripped = pathname.replace(localePattern, "");
    return stripped === "" ? "/" : stripped;
  }, [pathname]);

  const handleSelect = (nextLocale: Locale) => {
    Cookies.set("NEXT_LOCALE", nextLocale, { expires: 365, sameSite: "lax" });
    const nextPath = basePath === "/" ? `/${nextLocale}` : `/${nextLocale}${basePath}`;
    startTransition(() => {
      router.push(nextPath);
      router.refresh();
    });
  };

  return (
    <div className="flex items-center gap-2 text-xs text-white/70">
      <span className="hidden sm:inline">{label}</span>
      <div className="flex rounded border border-white/10 bg-white/5 overflow-hidden">
        {locales.map((loc) => {
          const isActive = loc === currentLocale;
          return (
            <button
              key={loc}
              type="button"
              onClick={() => handleSelect(loc)}
              disabled={isActive || isPending}
              className={`px-3 py-1 text-[11px] uppercase tracking-wide font-bold transition-colors ${
                isActive ? "bg-white text-black" : "text-white/70 hover:text-white"
              }`}
            >
              {loc}
            </button>
          );
        })}
      </div>
    </div>
  );
}
