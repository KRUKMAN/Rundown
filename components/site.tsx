import type { ReactNode } from "react";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries/types";
import HeaderLogo from "./header-logo";
import LanguageSwitcher from "./language-switcher";
import ContactForm from "./contact-form";

const EMAIL = "jake@rundown.digital";

type SiteProps = { locale: Locale; t: Dictionary; showDrafts: boolean };

/* ---------- Layout primitives: one skeleton for every section ---------- */

function Section({
  id,
  title,
  intro,
  children,
  aside,
}: {
  id?: string;
  title: string;
  intro?: ReactNode;
  children: ReactNode;
  aside?: ReactNode;
}) {
  const headingId = id ? `${id}-title` : undefined;
  return (
    <section id={id} aria-labelledby={headingId} className="container-site pt-[72px] sm:pt-24">
      <div className="flex flex-wrap gap-8 border-t border-ink pt-6">
        <div className="min-w-0 flex-[1_1_300px] lg:max-w-[360px]">
          <h2 id={headingId} className="display mb-4 text-[clamp(34px,4vw,56px)] leading-[0.95]">
            {title}
          </h2>
          {intro && <div className="space-y-4 text-muted">{intro}</div>}
          {aside}
        </div>
        <div className="min-w-0 flex-[999_1_520px]">{children}</div>
      </div>
    </section>
  );
}

function Row({ title, children, last }: { title: ReactNode; children: ReactNode; last?: boolean }) {
  return (
    <div className={`flex flex-wrap gap-x-6 gap-y-1.5 border-t border-line py-[18px] ${last ? "border-b" : ""}`}>
      <h3 className="m-0 min-w-0 flex-[0_1_220px] text-[20px] font-bold leading-snug">{title}</h3>
      <div className="min-w-0 flex-[1_1_300px] text-muted">{children}</div>
    </div>
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
        <a href="#what" className="hidden no-underline hover:underline md:inline">
          {t.nav.work}
        </a>
        <a href="#how" className="hidden no-underline hover:underline md:inline">
          {t.nav.how}
        </a>
        <a href="#about" className="hidden no-underline hover:underline md:inline">
          {t.nav.about}
        </a>
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
      <div className="border-t border-ink pb-20 pt-16 sm:pb-24 sm:pt-20">
        <h1 id="hero-title" className="display max-w-[1000px] text-[clamp(52px,7.5vw,112px)]">
          {t.hero.titleStart} <span className="text-accent">{t.hero.titleAccent}</span>
        </h1>
        <div className="mt-10 flex flex-wrap items-end gap-8">
          <p className="m-0 max-w-[640px] flex-[1_1_480px] text-[20px] leading-normal sm:text-[22px]">{t.hero.body}</p>
          <div className="flex flex-[0_1_320px] flex-col items-start gap-3">
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
      <div className="flex flex-wrap items-baseline gap-x-8 gap-y-3 border-t border-line py-7">
        <p className="m-0 flex-[0_1_360px] text-[15px] text-muted">{t.clients.label}</p>
        <ul className="m-0 flex flex-[1_1_520px] list-none flex-wrap gap-x-10 gap-y-2 p-0 text-[20px] font-bold">
          {t.clients.names.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- Content sections ---------- */

function Example({ t }: { t: Dictionary }) {
  const e = t.example;
  const step = (text: string, i: number, strong: boolean, isLast: boolean, highlight?: boolean) => (
    <li
      key={i}
      className={`flex gap-3.5 border-t py-2.5 ${strong ? "border-ink" : "border-line"} ${isLast ? "border-b" : ""}`}
    >
      <span className="w-5 flex-none font-bold">{i + 1}</span>
      {highlight ? <strong className="font-semibold text-accent">{text}</strong> : <span>{text}</span>}
    </li>
  );
  return (
    <Section id="example" title={e.title} intro={<p className="m-0">{e.intro}</p>}>
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h3 className="mb-3 text-[22px] font-bold text-muted">{e.beforeLabel}</h3>
          <ol className="m-0 list-none p-0 text-muted">{e.before.map((s, i) => step(s, i, false, i === e.before.length - 1))}</ol>
          <p className="mt-3.5 text-[15px] text-muted">{e.beforeNote}</p>
        </div>
        <div>
          <h3 className="mb-3 text-[22px] font-bold">{e.afterLabel}</h3>
          <ol className="m-0 list-none p-0">
            {e.after.map((s, i) => step(s, i, true, i === e.after.length - 1, i === e.after.length - 1))}
          </ol>
          <p className="mt-3.5 text-[15px]">{e.afterNote}</p>
        </div>
      </div>
    </Section>
  );
}

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
      {p.items.map((item, i) => (
        <Row key={i} title={`${open}${item.quote}${close}`} last={i === p.items.length - 1}>
          <p className="m-0">{item.answer}</p>
        </Row>
      ))}
    </Section>
  );
}

function Services({ t }: { t: Dictionary }) {
  const s = t.services;
  return (
    <Section id="what" title={s.title} intro={<p className="m-0">{s.intro}</p>}>
      <ol className="m-0 flex list-none flex-col gap-12 p-0">
        {s.groups.map((group, gi) => (
          <li key={gi}>
            <div className="mb-3 grid grid-cols-[auto_1fr] items-baseline gap-x-4">
              <span className="font-mono text-[15px] font-medium text-accent">{String(gi + 1).padStart(2, "0")}</span>
              <h3 className="m-0 text-[22px] font-bold leading-tight sm:text-[24px]">{group.title}</h3>
              <p className="col-start-2 mt-1 text-[15px] text-muted">{group.tools}</p>
            </div>
            {group.items.map((item, i) => (
              <div
                key={i}
                className={`flex flex-wrap gap-x-6 gap-y-1.5 border-t border-line py-[18px] ${
                  i === group.items.length - 1 ? "border-b" : ""
                }`}
              >
                <h4 className="m-0 min-w-0 flex-[0_1_220px] text-[19px] font-semibold leading-snug">{item.title}</h4>
                <p className="m-0 min-w-0 flex-[1_1_300px] text-muted">{item.body}</p>
              </div>
            ))}
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
      <ul className="m-0 list-none p-0 text-[clamp(20px,2.2vw,24px)] leading-snug">
        {p.wont.map((item, i) => (
          <li key={i} className={`border-t border-line py-4 ${i === p.wont.length - 1 ? "border-b" : ""}`}>
            {/* Punctuation that belongs to the sentence (e.g. a Polish comma) sits outside the strike. */}
            <s className="font-bold decoration-accent decoration-[3px]">{item.struck}</s>
            {/^[,;:.]/.test(item.rest) ? "" : " "}
            <span className="text-muted">{item.rest}</span>
          </li>
        ))}
      </ul>
      <div className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-3">
        {p.promises.map((promise) => (
          <div key={promise.title}>
            <h3 className="mb-1.5 text-[20px] font-bold">{promise.title}</h3>
            <p className="m-0 text-[16px] text-muted">{promise.body}</p>
          </div>
        ))}
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
      intro={<p className="m-0">{w.intro}</p>}
      aside={
        <p className="mt-4 inline-block border border-dashed border-accent px-2 py-1 font-mono text-[12px] text-accent-ink">
          {w.draftNote}
        </p>
      }
    >
      <div className="outline-dashed outline-1 outline-offset-8 outline-accent/50">
        {w.cases.map((c, i) => (
          <div
            key={i}
            className={`flex flex-wrap gap-x-6 gap-y-1.5 border-t border-line py-[18px] ${i === w.cases.length - 1 ? "border-b" : ""}`}
          >
            <span className="flex-[0_1_220px] text-[15px] text-muted">
              {c.company} · {c.readTime}
            </span>
            <span className="flex-[1_1_300px]">
              <span className="block text-[20px] font-bold">{c.title}</span>
              <span className="block text-muted">{c.result}</span>
            </span>
          </div>
        ))}
        <figure className="m-0 mt-10">
          <blockquote className="m-0 font-serif text-[26px] italic leading-snug">{w.quote.text}</blockquote>
          <figcaption className="mt-3 text-[15px] text-muted">{w.quote.attribution}</figcaption>
        </figure>
      </div>
    </Section>
  );
}

function About({ t }: { t: Dictionary }) {
  const a = t.about;
  return (
    <Section
      id="about"
      title={a.title}
      aside={
        <div
          role="img"
          aria-label={a.photoNote}
          className="mt-2 flex aspect-[4/5] max-w-[360px] items-end bg-paper-deep p-5"
        >
          <span className="display text-[64px] text-ink/15">JK</span>
        </div>
      }
    >
      {a.paragraphs.map((para, i) => (
        <p key={i} className="mb-4 text-[19px] leading-relaxed sm:text-[20px]">
          {para}
        </p>
      ))}
      <div className="mt-6">
        {a.team.map((member, i) => (
          <Row key={member.role} title={member.role} last={i === a.team.length - 1}>
            <p className="m-0">{member.body}</p>
          </Row>
        ))}
      </div>
      <p className="mt-6 text-[15px] text-muted">{a.location}</p>
    </Section>
  );
}

function Contact({ t }: { t: Dictionary }) {
  const c = t.contact;
  return (
    <section id="contact" aria-labelledby="contact-title" className="container-site pb-24 pt-[72px] sm:pt-24">
      <div className="border-t border-ink pt-6">
        <h2 id="contact-title" className="display max-w-[1000px] text-[clamp(44px,6.5vw,96px)]">
          {c.title}
        </h2>
        <div className="mt-10 flex flex-wrap gap-x-16 gap-y-10">
          <div className="min-w-0 flex-[1_1_380px] max-w-[520px]">
            <p className="m-0 text-[20px]">{c.body}</p>
            <p className="mt-6 text-[16px] text-muted">
              {c.orEmail}{" "}
              <a className="link-quiet font-semibold" href={`mailto:${EMAIL}`}>
                {EMAIL}
              </a>
            </p>
            <p className="mt-10 font-serif text-[21px] italic leading-relaxed">{c.ps}</p>
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
        <Example t={t} />
        <Problems t={t} />
        <Services t={t} />
        <Principles t={t} />
        {showDrafts && <Work t={t} />}
        <About t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} />
    </>
  );
}
