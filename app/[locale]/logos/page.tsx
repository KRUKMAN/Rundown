import type { Metadata } from "next";
import { LOGO_IDS, FINALISTS, DEFAULT_LOGO, Logo, logoMeta } from "@/components/logos";
import { defaultLocale, isLocale, locales, type Locale } from "@/lib/i18n/config";

type PageProps = { params: Promise<{ locale: Locale }> };

export const metadata: Metadata = {
  title: "Logo options · The Rundown",
  robots: { index: false, follow: false },
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LogosPage({ params }: PageProps) {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : defaultLocale;
  const ordered = [...FINALISTS, ...LOGO_IDS.filter((id) => !FINALISTS.includes(id))];

  return (
    <main className="container-site py-16">
      <p className="mb-2 text-[15px] text-muted">
        <a className="link-quiet" href={`/${locale}`}>
          ← The Rundown
        </a>
      </p>
      <h1 className="display mb-3 text-[clamp(40px,5vw,72px)]">Logo options</h1>
      <p className="mb-12 max-w-[640px] text-muted">
        Every direction from the design rounds, numbered as on the canvas. Finalists first. Click &ldquo;Use on site&rdquo; to
        see one in the real header; the choice is remembered in this browser. Default is {DEFAULT_LOGO}.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        {ordered.map((id) => {
          const meta = logoMeta(id);
          const finalist = FINALISTS.includes(id);
          return (
            <section key={id} aria-labelledby={`logo-${id}`} className="flex flex-col gap-5 border border-line p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h2 id={`logo-${id}`} className="m-0 text-[20px] font-bold">
                  {id} · {meta.name}
                  {finalist && <span className="ml-2 text-[13px] font-semibold text-accent">finalist</span>}
                </h2>
                <a className="link-quiet text-[15px] font-semibold" href={`/${locale}?logo=${id}`}>
                  Use on site
                </a>
              </div>
              <p className="m-0 text-[15px] text-muted">{meta.note}</p>
              <div className="flex min-h-[120px] items-center">
                <Logo id={id} size={60} />
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex flex-1 items-center bg-ink px-5 py-4">
                  <Logo id={id} size={26} tone="paper" />
                </div>
                <div className="flex items-center border border-line px-5 py-4">
                  <Logo id={id} size={18} />
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}
