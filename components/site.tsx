import type { ReactNode } from "react";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries/types";
import { business, hasPlaceholders } from "@/lib/business";
import HeaderLogo from "./header-logo";
import LanguageSwitcher from "./language-switcher";
import ContactForm from "./contact-form";
import MobileMenu from "./mobile-menu";
import { clientLogos } from "@/lib/clients";
import { CookieSettingsButton } from "./consent";

export const EMAIL = business.email;

type SiteProps = { locale: Locale; t: Dictionary; showDrafts: boolean };

/* ---------- Layout system ----------
   Spacing: 56px between sections on mobile, 80px on desktop; 40px from heading block to content.
   Reading measure: running text capped at ~62–68 characters (Baymard: 50–75; WCAG 1.4.8: ≤80).
   Type scale: H1 52–104 · H2 30–46 · card title 20 · body 18 · secondary 16 · meta 14–15.
   One tinted band (the before/after example) breaks the page rhythm once; everything else sits on paper. */

const MEASURE = "max-w-[64ch]";
const PHOTO_SRC: string | null = null;

function Section({
  id,
  title,
  intro,
  band = false,
  children,
}: {
  id: string;
  title: string;
  intro?: ReactNode;
  band?: boolean;
  children: ReactNode;
}) {
  const inner = (
    <div className="border-t border-ink pt-6 sm:pt-8">
      <h2 id={`${id}-title`} className="display m-0 max-w-[22ch] text-[clamp(30px,3.4vw,46px)] leading-[0.95]">
        {title}
      </h2>
      {intro && <div className={`mt-4 flex flex-col gap-3 text-[17px] leading-relaxed text-muted sm:text-[18px] ${MEASURE}`}>{intro}</div>}
      <div className="mt-8 sm:mt-10">{children}</div>
    </div>
  );
  if (band) {
    return (
      <section id={id} aria-labelledby={`${id}-title`} className="mt-16 bg-paper-deep/60 pb-14 pt-10 sm:mt-20 sm:pb-20 sm:pt-14">
        <div className="container-site">{inner}</div>
      </section>
    );
  }
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="container-site pt-14 sm:pt-20">
      {inner}
    </section>
  );
}

const introP = (text: string) => (text ? <p className="m-0">{text}</p> : undefined);

function CtaBand({ text, button }: Dictionary["ctaBand"]) {
  return (
    <div className="container-site pt-12 sm:pt-16">
      <div className="flex flex-wrap items-center justify-between gap-x-10 gap-y-4 border-t border-ink pt-6 sm:pt-7">
        <p className="m-0 max-w-[46ch] text-[19px] font-semibold leading-snug sm:text-[21px]">{text}</p>
        <a href="#contact" className="btn-primary">
          {button}
        </a>
      </div>
    </div>
  );
}

/* ---------- Header and footer (shared with the legal pages) ---------- */

export function Header({ locale, t, showDrafts }: SiteProps) {
  const other: Locale = locale === "en" ? "pl" : "en";
  const home = `/${locale}`;
  const links = [
    { href: `${home}#what`, label: t.nav.work },
    { href: `${home}#how`, label: t.nav.how },
    { href: `${home}#faq`, label: t.nav.faq },
    { href: `${home}#about`, label: t.nav.about },
  ];
  const cta = { href: `${home}#contact`, label: t.nav.cta };
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur-sm">
      <div className="container-site flex h-[72px] items-center justify-between gap-x-4 sm:gap-x-10">
        <HeaderLogo
          homeHref={home}
          homeLabel={t.nav.home}
          showPicker={showDrafts}
          labels={t.logoPicker}
          allLogosHref={`/${locale}/logos`}
        />
        <nav aria-label="Main" className="flex flex-none items-center gap-x-2 text-[16px] sm:gap-x-6 lg:gap-x-7">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hidden min-h-11 items-center no-underline hover:underline lg:inline-flex">
              {link.label}
            </a>
          ))}
          <LanguageSwitcher
            target={other}
            label={other.toUpperCase()}
            className="inline-flex min-h-11 min-w-11 items-center justify-center text-muted no-underline hover:text-ink"
          />
          <a href={cta.href} className="btn-primary hidden min-h-11 whitespace-nowrap px-5 text-[16px] sm:inline-flex">
            {cta.label}
          </a>
          <MobileMenu links={links} cta={cta} labels={{ menu: t.nav.menu }} />
        </nav>
      </div>
    </header>
  );
}

export function Footer({ locale, t }: { locale: Locale; t: Dictionary }) {
  const link = "inline-flex min-h-11 items-center text-ink underline decoration-[#9b9a95] underline-offset-4 hover:decoration-accent";
  return (
    <footer className="container-site mt-4">
      <div className="grid gap-x-10 gap-y-4 border-t border-line pb-10 pt-6 text-[15px] text-muted md:grid-cols-[1fr_auto]">
        <div className="space-y-1">
          <p className="m-0">{t.footer.line}</p>
          {!hasPlaceholders && (
            <p className="m-0">
              {business.legalName} · NIP {business.nip} · REGON {business.regon}
            </p>
          )}
          <p className="m-0">
            {t.footer.rights} {new Date().getFullYear()} ·{" "}
            <a className="link-quiet" href={`mailto:${EMAIL}`}>
              {EMAIL}
            </a>
          </p>
        </div>
        <nav aria-label="Legal" className="flex flex-wrap items-start gap-x-6">
          <a className={link} href={`/${locale}/privacy`}>
            {t.footer.privacy}
          </a>
          <a className={link} href={`/${locale}/terms`}>
            {t.footer.terms}
          </a>
          <CookieSettingsButton label={t.footer.cookies} className={`${link} cursor-pointer bg-transparent p-0 text-[15px]`} />
        </nav>
      </div>
    </footer>
  );
}

/* ---------- Hero ---------- */

function Hero({ t }: { t: Dictionary }) {
  return (
    <section aria-labelledby="hero-title" className="container-site">
      <div className="pb-14 pt-8 sm:pb-20 sm:pt-20">
        <h1 id="hero-title" className="display m-0 max-w-[1000px] text-[clamp(52px,7.6vw,104px)]">
          {t.hero.titleStart} <span className="text-accent">{t.hero.titleAccent}</span>
        </h1>
        <p className={`mb-0 mt-6 text-[18px] sm:mt-8 leading-[1.55] sm:text-[21px] ${MEASURE}`}>{t.hero.body}</p>
        <div className="mt-6 flex sm:mt-8 flex-wrap items-center gap-x-6 gap-y-3">
          <a href="#contact" className="btn-primary">
            {t.hero.cta}
          </a>
          <p className="m-0 text-[16px]">
            {t.hero.emailPrefix}{" "}
            <a className="link-quiet font-semibold" href={`mailto:${EMAIL}`}>
              {EMAIL}
            </a>
          </p>
        </div>
        <p className="mb-0 mt-3 text-[15px] text-muted">{t.hero.replyNote}</p>
      </div>
    </section>
  );
}

function Clients({ t }: { t: Dictionary }) {
  return (
    <section aria-label={t.clients.label} className="container-site">
      <div className={`flex flex-wrap items-center gap-x-10 gap-y-3 border-t border-line pt-6`}>
        <p className="m-0 text-[15px] text-muted">{t.clients.label}</p>
        <ul className="m-0 flex list-none flex-wrap items-center gap-x-10 gap-y-5 p-0">
          {clientLogos.map((c) => (
            <li key={c.name} className="flex items-center">
              {c.src ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={c.src}
                  alt={c.name}
                  width={Math.round(((c.w ?? 1) / (c.h ?? 1)) * (c.size ?? 28))}
                  height={c.size ?? 28}
                  className="block w-auto"
                  style={{ height: c.size ?? 28 }}
                />
              ) : (
                // Placeholder until the official logo file is added in lib/clients.ts.
                <span className="text-[20px] font-bold leading-none">{c.name}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- Content sections ---------- */

function Problems({ t }: { t: Dictionary }) {
  const p = t.problems;
  const [open, close] = t.locale === "pl" ? ["„", "”"] : ["“", "”"];
  return (
    <Section id="problems" title={p.title} intro={introP(p.intro)}>
      <ul className="m-0 grid list-none gap-x-10 p-0 sm:grid-cols-2 lg:grid-cols-3">
        {p.items.map((item, i) => (
          <li key={i} className="border-t border-line pb-7 pt-5">
            <h3 className="m-0 text-[20px] font-bold leading-[1.3]">
              {open}
              {item.quote}
              {close}
            </h3>
            <p className="mb-0 mt-2 text-[16px] leading-relaxed text-muted">{item.fix}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

function Example({ t }: { t: Dictionary }) {
  const e = t.example;
  const step = (text: string, i: number, list: string[], after: boolean) => {
    const last = i === list.length - 1;
    return (
      <li key={i} className={`flex gap-4 border-t py-3 ${after ? "border-ink" : "border-line"} ${last ? "border-b" : ""}`}>
        <span className="w-5 flex-none font-mono text-[15px] font-medium leading-[1.7]">{i + 1}</span>
        {after && last ? <strong className="font-semibold text-accent">{text}</strong> : <span>{text}</span>}
      </li>
    );
  };
  return (
    <Section id="example" title={e.title} intro={introP(e.intro)} band>
      <div className="grid gap-x-14 gap-y-10 md:grid-cols-2">
        <div>
          <h3 className="mb-3 mt-0 text-[20px] font-bold text-muted">{e.beforeLabel}</h3>
          <ol className="m-0 list-none p-0 text-[17px] text-muted">{e.before.map((s, i) => step(s, i, e.before, false))}</ol>
          <p className="mb-0 mt-4 text-[16px] leading-relaxed text-muted">{e.beforeNote}</p>
        </div>
        <div>
          <h3 className="mb-3 mt-0 text-[20px] font-bold">{e.afterLabel}</h3>
          <ol className="m-0 list-none p-0 text-[17px]">{e.after.map((s, i) => step(s, i, e.after, true))}</ol>
          <p className="mb-0 mt-4 text-[16px] leading-relaxed">{e.afterNote}</p>
        </div>
      </div>
      <div className="mt-12 sm:mt-14">
        <h3 className="mb-0 mt-0 text-[20px] font-bold">{e.elsewhereTitle}</h3>
        <ul className="m-0 mt-3 grid list-none gap-x-10 p-0 sm:grid-cols-2 xl:grid-cols-4">
          {e.elsewhere.map((item) => (
            <li key={item.industry} className="border-t border-ink/70 pb-5 pt-4">
              <h4 className="m-0 text-[18px] font-bold leading-snug">{item.industry}</h4>
              <p className="mb-0 mt-1.5 text-[16px] leading-relaxed sm:text-[17px]">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

function Services({ t }: { t: Dictionary }) {
  const s = t.services;
  return (
    <Section id="what" title={s.title} intro={introP(s.intro)}>
      <ol className="m-0 grid list-none gap-x-14 gap-y-14 p-0 md:grid-cols-2 xl:grid-cols-4 xl:gap-x-8">
        {s.groups.map((group, gi) => (
          <li key={gi} className="min-w-0">
            <p className="m-0 font-mono text-[14px] font-medium text-accent-ink">{String(gi + 1).padStart(2, "0")}</p>
            <h3 className="display mb-0 mt-1 text-[clamp(32px,3vw,40px)] xl:text-[30px]">{group.title}</h3>
            <p className="mb-4 mt-1.5 text-[15px] text-muted">{group.summary}</p>
            <ul className="m-0 list-none border-b border-line p-0">
              {group.items.map((item, i) => (
                <li key={i} className="border-t border-ink/70 pb-5 pt-4">
                  <h4 className="m-0 text-[17px] font-bold leading-snug">{item.title}</h4>
                  <p className="mb-0 mt-1.5 text-[16px] leading-relaxed text-muted">{item.body}</p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}

function Process({ t }: { t: Dictionary }) {
  const p = t.process;
  return (
    <Section id="how" title={p.title} intro={introP(p.intro)}>
      <ol className="m-0 grid list-none gap-x-10 p-0 sm:grid-cols-2 xl:grid-cols-5 xl:gap-x-8">
        {p.steps.map((step, i) => (
          <li key={i} className="border-t border-ink pb-6 pt-4">
            <p className="m-0 font-mono text-[14px] font-medium text-accent-ink">{String(i + 1).padStart(2, "0")}</p>
            <h3 className="mb-0 mt-1.5 text-[18px] font-bold leading-snug">{step.title}</h3>
            <p className="mb-0 mt-1.5 text-[16px] leading-relaxed text-muted">{step.body}</p>
          </li>
        ))}
      </ol>
      <h3 className="mb-0 mt-10 text-[15px] font-semibold uppercase tracking-[0.06em] text-muted sm:mt-12">{p.engagementsTitle}</h3>
      <ul className="m-0 mt-3 grid list-none gap-x-10 p-0 sm:grid-cols-2 xl:grid-cols-4 xl:gap-x-8">
        {p.engagements.map((item) => (
          <li key={item.title} className="border-t border-ink pb-5 pt-4">
            <h4 className="m-0 text-[18px] font-bold leading-snug">{item.title}</h4>
            <p className="mb-0 mt-1.5 text-[16px] leading-relaxed text-muted">{item.body}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

function Fit({ t }: { t: Dictionary }) {
  const f = t.fit;
  const list = (label: string, items: string[], good: boolean) => (
    <div>
      <h3 className="mb-3 mt-0 text-[20px] font-bold">{label}</h3>
      <ul className="m-0 list-none border-b border-line p-0">
        {items.map((item) => (
          <li key={item} className="flex gap-3 border-t border-line py-3.5 text-[17px] leading-snug">
            <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18" className="mt-[3px] flex-none">
              {good ? (
                <path d="M2.5 9.5l4 4 9-10" stroke="currentColor" strokeWidth="2.2" fill="none" className="text-ink" />
              ) : (
                <path d="M3.5 3.5l11 11M14.5 3.5l-11 11" stroke="currentColor" strokeWidth="2.2" fill="none" className="text-accent" />
              )}
            </svg>
            <span className={good ? "" : "text-muted"}>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
  return (
    <Section id="fit" title={f.title}>
      <div className="grid gap-x-14 gap-y-10 md:grid-cols-[3fr_2fr]">
        {list(f.goodLabel, f.good, true)}
        {list(f.badLabel, f.bad, false)}
      </div>
    </Section>
  );
}

function Principles({ t }: { t: Dictionary }) {
  const p = t.principles;
  return (
    <Section id="principles" title={p.title} intro={introP(p.intro)}>
      <div className="grid gap-x-14 gap-y-10 lg:grid-cols-[3fr_2fr]">
        <ul className="m-0 list-none border-b border-line p-0 text-[19px] leading-snug sm:text-[22px]">
          {p.wont.map((item, i) => (
            <li key={i} className="border-t border-line py-4">
              {/* Sentence punctuation (e.g. a Polish comma) stays outside the strike. */}
              <s className="font-bold decoration-accent decoration-[3px]">{item.struck}</s>
              {/^[,;:.]/.test(item.rest) ? "" : " "}
              <span className="text-muted">{item.rest}</span>
            </li>
          ))}
        </ul>
        <div>
          <h3 className="mb-3 mt-0 text-[15px] font-semibold uppercase tracking-[0.06em] text-muted">{p.promisesTitle}</h3>
          <ul className="m-0 list-none p-0">
            {p.promises.map((promise) => (
              <li key={promise.title} className="border-t border-ink pb-5 pt-4">
                <h4 className="m-0 text-[18px] font-bold">{promise.title}</h4>
                <p className="mb-0 mt-1.5 text-[16px] leading-relaxed text-muted">{promise.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

function Work({ t }: { t: Dictionary }) {
  const w = t.work;
  return (
    <Section
      id="work"
      title={w.title}
      intro={
        <>
          <p className="m-0">{w.intro}</p>
          <p className="m-0 inline-block border border-dashed border-accent px-2 py-1 font-mono text-[12px] text-accent-ink">
            {w.draftNote}
          </p>
        </>
      }
    >
      <div className="outline-dashed outline-1 outline-offset-8 outline-accent/50">
        <ul className="m-0 grid list-none gap-x-10 p-0 md:grid-cols-3">
          {w.cases.map((c, i) => (
            <li key={i} className="border-t border-ink pb-6 pt-5">
              <p className="m-0 text-[14px] text-muted">
                {c.company} · {c.readTime}
              </p>
              <h3 className="mb-0 mt-2 text-[20px] font-bold leading-[1.3]">{c.title}</h3>
              <p className="mb-0 mt-1.5 text-[16px] text-muted">{c.result}</p>
            </li>
          ))}
        </ul>
        <figure className="m-0 mt-6">
          <blockquote className={`m-0 font-serif text-[24px] italic leading-snug sm:text-[26px] ${MEASURE}`}>{w.quote.text}</blockquote>
          <figcaption className="mt-3 text-[15px] text-muted">{w.quote.attribution}</figcaption>
        </figure>
      </div>
    </Section>
  );
}

function Faq({ t }: { t: Dictionary }) {
  const f = t.faq;
  return (
    <Section id="faq" title={f.title} intro={<p className="m-0">{f.intro}</p>}>
      {/* Answers stay in the HTML (and in the FAQPage JSON-LD); only the display is collapsed. */}
      <div className="grid items-start gap-x-14 md:grid-cols-2">
        {[f.items.slice(0, Math.ceil(f.items.length / 2)), f.items.slice(Math.ceil(f.items.length / 2))].map((col, ci) => (
          <ul key={ci} className="m-0 list-none border-b border-line p-0">
            {col.map((item) => (
              <li key={item.q} className="border-t border-line">
                <details className="group">
                  <summary className="flex min-h-14 cursor-pointer list-none items-start justify-between gap-4 py-4 [&::-webkit-details-marker]:hidden">
                    <h3 className="m-0 text-[18px] font-bold leading-[1.35] sm:text-[19px]">{item.q}</h3>
                    <svg aria-hidden="true" width="14" height="14" viewBox="0 0 14 14" className="mt-[6px] flex-none transition-transform group-open:rotate-45">
                      <path d="M7 0v14M0 7h14" stroke="currentColor" strokeWidth="2" fill="none" />
                    </svg>
                  </summary>
                  <p className={`mb-0 mt-0 pb-5 text-[16px] leading-relaxed text-muted ${MEASURE}`}>{item.a}</p>
                </details>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </Section>
  );
}

function About({ t }: { t: Dictionary }) {
  const a = t.about;
  return (
    <Section id="about" title={a.title}>
      <div className="flex flex-wrap gap-x-12 gap-y-8">
        {/* Set PHOTO_SRC (a file in /public) once a real photo exists; until then the bio runs alone. */}
        {PHOTO_SRC && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={PHOTO_SRC} alt={a.photoNote} width={240} height={300} className="aspect-[4/5] w-full max-w-[240px] flex-none object-cover" />
        )}
        <div className="min-w-0 flex-[1_1_440px]">
          {a.paragraphs.map((para, i) => (
            <p key={i} className={`mb-4 mt-0 text-[18px] leading-relaxed sm:text-[19px] ${MEASURE}`}>
              {para}
            </p>
          ))}
          <ul className="m-0 mt-6 grid list-none gap-x-8 p-0 sm:grid-cols-3">
            {a.team.map((member) => (
              <li key={member.role} className="border-t border-line pb-4 pt-4">
                <h3 className="m-0 text-[17px] font-bold">{member.role}</h3>
                <p className="mb-0 mt-1 text-[15px] leading-relaxed text-muted">{member.body}</p>
              </li>
            ))}
          </ul>
          <p className="mb-0 mt-3 text-[15px] text-muted">{a.location}</p>
        </div>
      </div>
    </Section>
  );
}

function Contact({ locale, t }: { locale: Locale; t: Dictionary }) {
  const c = t.contact;
  return (
    <section id="contact" aria-labelledby="contact-title" className="container-site pb-16 pt-14 sm:pb-24 sm:pt-20">
      <div className="border-t border-ink pt-6 sm:pt-8">
        <h2 id="contact-title" className="display m-0 max-w-[1100px] text-[clamp(40px,6vw,88px)]">
          {c.title}
        </h2>
        <div className="mt-10 grid gap-x-16 gap-y-10 lg:grid-cols-[5fr_7fr]">
          <div className="min-w-0">
            <p className="m-0 max-w-[48ch] text-[19px] leading-relaxed">{c.body}</p>
            <p className="mb-0 mt-5 text-[16px] text-muted">
              {c.orEmail}{" "}
              <a className="link-quiet font-semibold text-ink" href={`mailto:${EMAIL}`}>
                {EMAIL}
              </a>
            </p>
            <p className="mb-0 mt-8 max-w-[48ch] font-serif text-[20px] italic leading-relaxed">{c.ps}</p>
          </div>
          <div className="min-w-0">
            <ContactForm copy={c} privacyHref={`/${locale}/privacy`} />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Page ---------- */

export function SkipLink({ label }: { label: string }) {
  return (
    <a href="#main" className="absolute left-4 top-4 z-50 -translate-y-24 bg-ink px-4 py-3 text-white focus:translate-y-0">
      {label}
    </a>
  );
}

export default function Site(props: SiteProps) {
  const { locale, t, showDrafts } = props;
  return (
    <>
      <SkipLink label={t.nav.skip} />
      <Header {...props} />
      <main id="main">
        <Hero t={t} />
        <Clients t={t} />
        <Problems t={t} />
        <Example t={t} />
        <Services t={t} />
        <CtaBand {...t.ctaBand} />
        <Process t={t} />
        <Fit t={t} />
        <Principles t={t} />
        {showDrafts && <Work t={t} />}
        <Faq t={t} />
        <About t={t} />
        <Contact locale={locale} t={t} />
      </main>
      <Footer locale={locale} t={t} />
    </>
  );
}
