import type { ReactNode } from "react";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries/types";
import { business, hasPlaceholders } from "@/lib/business";
import HeaderLogo from "./header-logo";
import LanguageSwitcher from "./language-switcher";
import ContactForm from "./contact-form";
import { CookieSettingsButton } from "./consent";

export const EMAIL = business.email;

type SiteProps = { locale: Locale; t: Dictionary; showDrafts: boolean };

/* ---------- Layout system ----------
   Spacing: 64px between sections on mobile, 96px on desktop; 40px from heading block to content.
   Reading measure: running text capped at ~62–68 characters (Baymard: 50–75; WCAG 1.4.8: ≤80).
   Type scale: H1 52–104 · H2 34–60 · card title 20 · body 18 · secondary 16 · meta 14–15. */

const MEASURE = "max-w-[64ch]";

function Section({
  id,
  title,
  intro,
  children,
}: {
  id: string;
  title: string;
  intro?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="container-site pt-16 sm:pt-24">
      <div className="border-t border-ink pt-6 sm:pt-8">
        <h2 id={`${id}-title`} className="display m-0 max-w-[20ch] text-[clamp(34px,4.4vw,60px)] leading-[0.95]">
          {title}
        </h2>
        {intro && <div className={`mt-4 space-y-3 text-[17px] leading-relaxed text-muted sm:text-[18px] ${MEASURE}`}>{intro}</div>}
        <div className="mt-8 sm:mt-10">{children}</div>
      </div>
    </section>
  );
}

/* ---------- Header and footer (shared with the legal pages) ---------- */

export function Header({ locale, t, showDrafts }: SiteProps) {
  const other: Locale = locale === "en" ? "pl" : "en";
  const home = `/${locale}`;
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
        <nav aria-label="Main" className="flex flex-none items-center gap-x-2 text-[16px] sm:gap-x-7">
          {[
            ["what", t.nav.work],
            ["how", t.nav.how],
            ["faq", t.nav.faq],
            ["about", t.nav.about],
          ].map(([id, label]) => (
            <a key={id} href={`${home}#${id}`} className="hidden min-h-11 items-center no-underline hover:underline lg:inline-flex">
              {label}
            </a>
          ))}
          <LanguageSwitcher
            target={other}
            label={other.toUpperCase()}
            className="inline-flex min-h-11 min-w-11 items-center justify-center text-muted no-underline hover:text-ink"
          />
          <a href={`${home}#contact`} className="btn-primary min-h-11 whitespace-nowrap px-3.5 text-[15px] sm:px-5 sm:text-[16px]">
            {t.nav.cta}
          </a>
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
              {business.legalName} · NIP {business.nip}
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
      <div className="pb-14 pt-12 sm:pb-20 sm:pt-20">
        <h1 id="hero-title" className="display m-0 max-w-[1000px] text-[clamp(52px,7.6vw,104px)]">
          {t.hero.titleStart} <span className="text-accent">{t.hero.titleAccent}</span>
        </h1>
        <p className={`mb-0 mt-8 text-[19px] leading-[1.55] sm:text-[21px] ${MEASURE}`}>{t.hero.body}</p>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
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
      <div className="flex flex-wrap items-baseline gap-x-10 gap-y-3 border-t border-line pt-6">
        <p className="m-0 text-[15px] text-muted">{t.clients.label}</p>
        <ul className="m-0 flex list-none flex-wrap gap-x-9 gap-y-2 p-0 text-[19px] font-bold sm:text-[20px]">
          {t.clients.names.map((name) => (
            <li key={name}>{name}</li>
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
    <Section
      id="problems"
      title={p.title}
      intro={
        <>
          <p className="m-0">{p.intro}</p>
          <p className="m-0">
            {p.paths}{" "}
            <a href="#contact" className="link-quiet font-semibold text-ink">
              {p.pathsLink}
            </a>
          </p>
        </>
      }
    >
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
    <Section id="example" title={e.title} intro={<p className="m-0">{e.intro}</p>}>
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
    </Section>
  );
}

function Services({ t }: { t: Dictionary }) {
  const s = t.services;
  return (
    <Section id="what" title={s.title} intro={<p className="m-0">{s.intro}</p>}>
      <ol className="m-0 grid list-none gap-x-10 gap-y-14 p-0 lg:grid-cols-3">
        {s.groups.map((group, gi) => (
          <li key={gi} className="min-w-0">
            <p className="m-0 font-mono text-[14px] font-medium text-accent-ink">{String(gi + 1).padStart(2, "0")}</p>
            <h3 className="display mb-0 mt-1 text-[clamp(32px,3vw,40px)]">{group.title}</h3>
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

function Principles({ t }: { t: Dictionary }) {
  const p = t.principles;
  return (
    <Section id="how" title={p.title} intro={<p className="m-0">{p.intro}</p>}>
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
      <dl className="m-0 grid gap-x-14 md:grid-cols-2">
        {f.items.map((item, i) => (
          <div key={i} className="border-t border-line pb-7 pt-5">
            <dt>
              <h3 className="m-0 text-[19px] font-bold leading-[1.3]">{item.q}</h3>
            </dt>
            <dd className="m-0 mt-2 text-[16px] leading-relaxed text-muted">{item.a}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}

function About({ t }: { t: Dictionary }) {
  const a = t.about;
  return (
    <Section id="about" title={a.title}>
      <div className="flex flex-wrap gap-x-12 gap-y-8">
        <div
          role="img"
          aria-label={a.photoNote}
          className="flex aspect-[4/5] w-full max-w-[240px] flex-none items-end bg-paper-deep p-4"
        >
          <span aria-hidden="true" className="display text-[56px] text-ink/55">
            JK
          </span>
        </div>
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
    <section id="contact" aria-labelledby="contact-title" className="container-site pb-16 pt-16 sm:pb-24 sm:pt-24">
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
