import type { ReactNode } from "react";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries/types";
import HeaderLogo from "./header-logo";
import LanguageSwitcher from "./language-switcher";
import ContactForm from "./contact-form";

export const EMAIL = "jake@rundown.digital";

type SiteProps = { locale: Locale; t: Dictionary; showDrafts: boolean };

/* ---------- Layout primitives ----------
   Every section: a heading row across the full width (title left, intro right),
   then full-width content in a grid. No empty side columns. */

function Section({
  id,
  title,
  intro,
  children,
  className = "",
}: {
  id: string;
  title: string;
  intro?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`container-site pt-16 sm:pt-20 ${className}`}>
      <div className="flex flex-wrap items-end gap-x-12 gap-y-4 border-t border-ink pt-6">
        <h2 id={`${id}-title`} className="display m-0 min-w-0 flex-[1_1_340px] text-[clamp(34px,4vw,56px)] leading-[0.95]">
          {title}
        </h2>
        {intro && <div className="min-w-0 flex-[1.4_1_440px] space-y-3 text-[17px] text-muted">{intro}</div>}
      </div>
      <div className="mt-8 sm:mt-10">{children}</div>
    </section>
  );
}

/* ---------- Header and hero ---------- */

function Header({ locale, t, showDrafts }: SiteProps) {
  const other: Locale = locale === "en" ? "pl" : "en";
  return (
    <header className="container-site flex items-center justify-between gap-x-4 py-[18px] sm:gap-x-10">
      <HeaderLogo
        homeHref={`/${locale}`}
        homeLabel={t.nav.home}
        showPicker={showDrafts}
        labels={t.logoPicker}
        allLogosHref={`/${locale}/logos`}
      />
      <nav aria-label="Main" className="flex flex-none items-center gap-x-4 text-[16px] sm:gap-x-7">
        {[
          ["#what", t.nav.work],
          ["#how", t.nav.how],
          ["#faq", t.nav.faq],
          ["#about", t.nav.about],
        ].map(([href, label]) => (
          <a key={href} href={href} className="hidden no-underline hover:underline lg:inline">
            {label}
          </a>
        ))}
        <LanguageSwitcher
          target={other}
          label={other.toUpperCase()}
          className="inline-flex min-h-11 items-center text-muted no-underline hover:text-ink"
        />
        <a href="#contact" className="btn-primary min-h-11 whitespace-nowrap px-4 text-[15px] sm:px-5 sm:text-[16px]">
          {t.nav.cta}
        </a>
      </nav>
    </header>
  );
}

function Hero({ t }: { t: Dictionary }) {
  return (
    <section aria-labelledby="hero-title" className="container-site">
      <div className="border-t border-ink pb-14 pt-14 sm:pb-16 sm:pt-16">
        <h1 id="hero-title" className="display max-w-[1000px] text-[clamp(52px,7.5vw,112px)]">
          {t.hero.titleStart} <span className="text-accent">{t.hero.titleAccent}</span>
        </h1>
        <div className="mt-9 flex flex-wrap items-end gap-x-12 gap-y-7">
          <p className="m-0 max-w-[680px] flex-[1_1_480px] text-[19px] leading-normal sm:text-[21px]">{t.hero.body}</p>
          <div className="flex flex-[0_1_300px] flex-col items-start gap-3">
            <a href="#contact" className="btn-primary">
              {t.hero.cta}
            </a>
            <p className="m-0 text-[16px]">
              {t.hero.emailPrefix}{" "}
              <a className="link-quiet font-semibold" href={`mailto:${EMAIL}`}>
                {EMAIL}
              </a>
            </p>
            <p className="m-0 text-[15px] text-muted">{t.hero.replyNote}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Clients({ t }: { t: Dictionary }) {
  return (
    <section aria-label={t.clients.label} className="container-site">
      <div className="flex flex-wrap items-baseline gap-x-10 gap-y-3 border-t border-line py-6">
        <p className="m-0 text-[15px] text-muted">{t.clients.label}</p>
        <ul className="m-0 flex list-none flex-wrap gap-x-10 gap-y-2 p-0 text-[20px] font-bold">
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
            <a href="#contact" className="link-quiet font-semibold">
              {p.pathsLink}
            </a>
          </p>
        </>
      }
    >
      <ul className="m-0 grid list-none gap-x-10 p-0 sm:grid-cols-2 lg:grid-cols-3">
        {p.items.map((item, i) => (
          <li key={i} className="border-t border-line py-5">
            <h3 className="m-0 text-[21px] font-bold leading-snug">
              {open}
              {item.quote}
              {close}
            </h3>
            <p className="mb-0 mt-2 text-[16px] text-muted">{item.fix}</p>
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
      <li
        key={i}
        className={`flex gap-3.5 border-t py-2.5 ${after ? "border-ink" : "border-line"} ${last ? "border-b" : ""}`}
      >
        <span className="w-5 flex-none font-bold">{i + 1}</span>
        {after && last ? <strong className="font-semibold text-accent">{text}</strong> : <span>{text}</span>}
      </li>
    );
  };
  return (
    <Section id="example" title={e.title} intro={<p className="m-0">{e.intro}</p>}>
      <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
        <div>
          <h3 className="mb-3 text-[22px] font-bold text-muted">{e.beforeLabel}</h3>
          <ol className="m-0 list-none p-0 text-muted">{e.before.map((s, i) => step(s, i, e.before, false))}</ol>
          <p className="mb-0 mt-3.5 text-[15px] text-muted">{e.beforeNote}</p>
        </div>
        <div>
          <h3 className="mb-3 text-[22px] font-bold">{e.afterLabel}</h3>
          <ol className="m-0 list-none p-0">{e.after.map((s, i) => step(s, i, e.after, true))}</ol>
          <p className="mb-0 mt-3.5 text-[15px]">{e.afterNote}</p>
        </div>
      </div>
    </Section>
  );
}

function Services({ t }: { t: Dictionary }) {
  const s = t.services;
  return (
    <Section id="what" title={s.title} intro={<p className="m-0">{s.intro}</p>}>
      <ol className="m-0 grid list-none gap-x-10 gap-y-12 p-0 lg:grid-cols-3">
        {s.groups.map((group, gi) => (
          <li key={gi} className="min-w-0">
            <div className="mb-4">
              <span className="font-mono text-[15px] font-medium text-accent">{String(gi + 1).padStart(2, "0")}</span>
              <h3 className="display mb-1 mt-1 text-[40px]">{group.title}</h3>
              <p className="m-0 text-[15px] text-muted">{group.summary}</p>
            </div>
            <ul className="m-0 list-none p-0">
              {group.items.map((item, i) => (
                <li key={i} className={`border-t border-ink/80 py-4 ${i === group.items.length - 1 ? "border-b border-b-line" : ""}`}>
                  <h4 className="m-0 text-[18px] font-bold leading-snug">{item.title}</h4>
                  <p className="mb-0 mt-1.5 text-[16px] text-muted">{item.body}</p>
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
      <div className="grid gap-x-14 gap-y-10 lg:grid-cols-[1.5fr_1fr]">
        <ul className="m-0 list-none p-0 text-[clamp(20px,2.1vw,24px)] leading-snug">
          {p.wont.map((item, i) => (
            <li key={i} className={`border-t border-line py-4 ${i === p.wont.length - 1 ? "border-b" : ""}`}>
              {/* Sentence punctuation (e.g. a Polish comma) stays outside the strike. */}
              <s className="font-bold decoration-accent decoration-[3px]">{item.struck}</s>
              {/^[,;:.]/.test(item.rest) ? "" : " "}
              <span className="text-muted">{item.rest}</span>
            </li>
          ))}
        </ul>
        <div>
          <h3 className="sr-only">{p.promisesTitle}</h3>
          <ul className="m-0 list-none p-0">
            {p.promises.map((promise) => (
              <li key={promise.title} className="border-t border-ink py-4">
                <h4 className="m-0 text-[19px] font-bold">{promise.title}</h4>
                <p className="mb-0 mt-1 text-[16px] text-muted">{promise.body}</p>
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
            <li key={i} className="border-t border-ink py-5">
              <p className="m-0 text-[14px] text-muted">
                {c.company} · {c.readTime}
              </p>
              <h3 className="mb-0 mt-2 text-[20px] font-bold leading-snug">{c.title}</h3>
              <p className="mb-0 mt-1.5 text-[16px] text-muted">{c.result}</p>
            </li>
          ))}
        </ul>
        <figure className="m-0 mt-8">
          <blockquote className="m-0 max-w-[860px] font-serif text-[26px] italic leading-snug">{w.quote.text}</blockquote>
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
      <dl className="m-0 grid gap-x-12 md:grid-cols-2">
        {f.items.map((item, i) => (
          <div key={i} className="border-t border-line py-5">
            <dt>
              <h3 className="m-0 text-[19px] font-bold leading-snug">{item.q}</h3>
            </dt>
            <dd className="m-0 mt-2 text-[16px] text-muted">{item.a}</dd>
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
          className="flex aspect-[4/5] w-full max-w-[260px] flex-none items-end bg-paper-deep p-4"
        >
          <span className="display text-[56px] text-ink/15">JK</span>
        </div>
        <div className="min-w-0 flex-[1_1_480px]">
          {a.paragraphs.map((para, i) => (
            <p key={i} className="mb-4 mt-0 max-w-[760px] text-[19px] leading-relaxed">
              {para}
            </p>
          ))}
          <ul className="m-0 mt-6 grid list-none gap-x-8 p-0 sm:grid-cols-3">
            {a.team.map((member) => (
              <li key={member.role} className="border-t border-line py-4">
                <h3 className="m-0 text-[17px] font-bold">{member.role}</h3>
                <p className="mb-0 mt-1 text-[15px] text-muted">{member.body}</p>
              </li>
            ))}
          </ul>
          <p className="mb-0 mt-4 text-[15px] text-muted">{a.location}</p>
        </div>
      </div>
    </Section>
  );
}

function Contact({ t }: { t: Dictionary }) {
  const c = t.contact;
  return (
    <section id="contact" aria-labelledby="contact-title" className="container-site pb-20 pt-16 sm:pt-20">
      <div className="border-t border-ink pt-6">
        <h2 id="contact-title" className="display max-w-[1000px] text-[clamp(44px,6.5vw,96px)]">
          {c.title}
        </h2>
        <div className="mt-10 flex flex-wrap gap-x-16 gap-y-10">
          <div className="min-w-0 max-w-[520px] flex-[1_1_380px]">
            <p className="m-0 text-[20px]">{c.body}</p>
            <p className="mb-0 mt-6 text-[16px] text-muted">
              {c.orEmail}{" "}
              <a className="link-quiet font-semibold" href={`mailto:${EMAIL}`}>
                {EMAIL}
              </a>
            </p>
            <p className="mb-0 mt-10 font-serif text-[21px] italic leading-relaxed">{c.ps}</p>
          </div>
          <div className="min-w-0 flex-[1_1_480px]">
            <ContactForm copy={c} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer({ t }: { t: Dictionary }) {
  return (
    <footer className="container-site">
      <div className="flex flex-wrap justify-between gap-x-10 gap-y-3 border-t border-line pb-10 pt-6 text-[15px] text-muted">
        <p className="m-0">{t.footer.line}</p>
        <p className="m-0">
          {t.footer.rights} {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}

/* ---------- Page ---------- */

export default function Site(props: SiteProps) {
  const { t, showDrafts } = props;
  return (
    <>
      <a
        href="#main"
        className="absolute left-4 top-4 z-50 -translate-y-20 bg-ink px-4 py-3 text-white focus:translate-y-0"
      >
        {t.nav.skip}
      </a>
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
        <Contact t={t} />
      </main>
      <Footer t={t} />
    </>
  );
}
