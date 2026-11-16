import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries/types";
import type { LegalDoc } from "@/lib/legal/content";
import { business } from "@/lib/business";
import { Footer, Header, SkipLink } from "./site";

type Props = { locale: Locale; t: Dictionary; doc: LegalDoc; showDrafts: boolean };

export default function LegalPage({ locale, t, doc, showDrafts }: Props) {
  const date = new Date(business.policyUpdated).toLocaleDateString(locale === "pl" ? "pl-PL" : "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <SkipLink label={t.nav.skip} />
      <Header locale={locale} t={t} showDrafts={showDrafts} />
      <main id="main" className="container-site pb-20 pt-12 sm:pt-16">
        <p className="m-0 text-[15px]">
          <a className="link-quiet" href={`/${locale}`}>
            ← {t.footer.backHome}
          </a>
        </p>
        <h1 className="display mb-0 mt-6 text-[clamp(40px,5.5vw,72px)]">{doc.title}</h1>
        <p className="mb-0 mt-3 text-[15px] text-muted">
          {doc.updatedLabel}: <time dateTime={business.policyUpdated}>{date}</time>
        </p>
        <p className="mb-0 mt-6 max-w-[64ch] text-[19px] leading-relaxed">{doc.intro}</p>

        <div className="mt-10 max-w-[72ch]">
          {doc.sections.map((section) => (
            <section key={section.heading} className="border-t border-line pb-4 pt-6">
              <h2 className="m-0 text-[22px] font-bold leading-snug">{section.heading}</h2>
              {section.blocks.map((block, i) => {
                if (block.type === "p")
                  return (
                    <p key={i} className="mb-0 mt-3 text-[17px] leading-relaxed">
                      {block.text}
                    </p>
                  );
                if (block.type === "ul")
                  return (
                    <ul key={i} className="mb-0 mt-3 list-disc space-y-1.5 pl-5 text-[17px] leading-relaxed text-muted marker:text-ink/40">
                      {block.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  );
                return (
                  <div key={i} className="mt-4 overflow-x-auto" role="region" aria-label={section.heading} tabIndex={0}>
                    <table className="w-full min-w-[640px] border-collapse text-left text-[15px]">
                      <thead>
                        <tr>
                          {block.head.map((h) => (
                            <th key={h} scope="col" className="border-b border-ink py-2 pr-4 font-semibold">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {block.rows.map((row) => (
                          <tr key={row[0]}>
                            {row.map((cell, ci) => (
                              <td key={ci} className={`border-b border-line py-2.5 pr-4 align-top ${ci === 0 ? "font-mono text-[14px]" : "text-muted"}`}>
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                );
              })}
            </section>
          ))}
        </div>
      </main>
      <Footer locale={locale} t={t} />
    </>
  );
}
