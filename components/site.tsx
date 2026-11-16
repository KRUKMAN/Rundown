import { Fragment, type ReactNode } from "react";
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

/* ---------- The page ----------
   Layout and type for everything inside <main> live in app/rd.css (scoped to .rd); read the rules at the top of that file.
   The header and footer below are shared with the legal pages and use Tailwind utilities. */

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

/* ---------- Hero: the one drawing on the page ---------- */

// Six channels cross and merge into the red line. Coordinates are in a 560 × 560 box; the red line leaves at the right edge.
// Each channel starts at a small line icon (24-unit grid, drawn for this page); its name is in the dictionary for titles and the alt text.
const CHANNEL_ICONS: ReactNode[] = [
  // WhatsApp
  <Fragment key="whatsapp">
    <path d="M12 3.2a8.8 8.8 0 0 0-7.6 13.2L3.2 20.8l4.5-1.2A8.8 8.8 0 1 0 12 3.2z" />
    <path d="M9.2 8.2c-.3 2.9 3.6 6.8 6.5 6.6l.9-1.6-2.1-1-1 .9c-1-.4-2-1.5-2.4-2.4l.9-1-1-2.1z" />
  </Fragment>,
  // phone
  <path key="phone" d="M7 3.5h2.6l1.5 4.2-2 1.4a11 11 0 0 0 5.8 5.8l1.4-2 4.2 1.5V17a2.5 2.5 0 0 1-2.5 2.5A14.5 14.5 0 0 1 4.5 6 2.5 2.5 0 0 1 7 3.5z" />,
  // email
  <Fragment key="email">
    <rect x="3.2" y="5.5" width="17.6" height="13" rx="1.2" />
    <path d="M3.6 6.3 12 12.6l8.4-6.3" />
  </Fragment>,
  // spreadsheet
  <Fragment key="sheet">
    <rect x="4" y="3.5" width="16" height="17" rx="1" />
    <path d="M4 9h16M4 14.5h16M10 3.5v17" />
  </Fragment>,
  // a meeting
  <Fragment key="meeting">
    <circle cx="8" cy="8.5" r="2.8" />
    <circle cx="16.4" cy="8.5" r="2.8" />
    <path d="M2.8 19.5a5.2 5.2 0 0 1 10.4 0M13.6 14.6a5.2 5.2 0 0 1 7.6 4.9" />
  </Fragment>,
  // someone's head
  <Fragment key="head">
    <path d="M8.6 20.8v-3.6A7.2 7.2 0 1 1 18.7 9.9l1.7 3.4-1.9.6v2.3a1.6 1.6 0 0 1-1.6 1.6h-1.8v3" />
    <path d="M9.4 10.2h.01M12 10.2h.01M14.6 10.2h.01" strokeWidth={2.4} />
  </Fragment>,
];

const STRANDS = [
  "M76 120 C 240 120, 290 375, 330 375 S 440 290, 470 290",
  "M76 180 C 282 180, 332 318, 372 318 S 440 290, 470 290",
  "M76 240 C 220 240, 270 311, 310 311 S 440 290, 470 290",
  "M76 300 C 266 300, 316 276, 356 276 S 440 290, 470 290",
  "M76 360 C 232 360, 282 231, 322 231 S 440 290, 470 290",
  "M76 420 C 274 420, 324 235, 364 235 S 440 290, 470 290",
];

function Hero({ t }: { t: Dictionary }) {
  const h = t.hero;
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div>
          <h1 id="hero-title" className="display">
            {h.title}
          </h1>
          <p className="lede">{h.body}</p>
          <div className="cta">
            <a className="btn-primary" href="#contact">
              {h.cta}
            </a>
            <span>
              {h.emailPrefix}{" "}
              <a className="link-quiet font-semibold" href={`mailto:${EMAIL}`}>
                {EMAIL}
              </a>
            </span>
          </div>
          <p className="note">{h.replyNote}</p>
        </div>
        <svg className="tangle" viewBox="0 0 560 560" preserveAspectRatio="xMaxYMax meet" role="img" aria-label={h.figureAlt}>
          <g className="t">
            {STRANDS.map((d) => (
              <path key={d} d={d} pathLength={1} />
            ))}
          </g>
          <path className="r" vectorEffect="non-scaling-stroke" d="M470 290 H 556 V 560" />
          <g className="tl" aria-hidden="true">
            {h.channels.map((label, i) => (
              <g key={label} className="ic" transform={`translate(28 ${105 + 60 * i}) scale(1.25)`}>
                <title>{label}</title>
                {CHANNEL_ICONS[i]}
              </g>
            ))}
          </g>
        </svg>
      </section>
      {/* The red line turns down, crosses to the left and becomes the spine. */}
      <div className="hero-rule" aria-hidden="true">
        <svg viewBox="0 0 1124 110" preserveAspectRatio="none">
          <path d="M1120 0 V 70 H 0 V 110" vectorEffect="non-scaling-stroke" />
        </svg>
      </div>
    </>
  );
}

/* ---------- Sections: each one is a stop on the red line ---------- */

function Sec({
  id,
  title,
  intro,
  variant = "",
  children,
}: {
  id: string;
  title: ReactNode;
  intro?: string;
  variant?: "" | "dark" | "end";
  children: ReactNode;
}) {
  return (
    <section id={id} className={`s ${variant}`} aria-labelledby={`${id}-title`}>
      <span className="stop" aria-hidden="true" />
      <h2 id={`${id}-title`} className="display">
        {title}
      </h2>
      {intro && <p className="intro">{intro}</p>}
      <div className="body">{children}</div>
    </section>
  );
}

function Clients({ t }: { t: Dictionary }) {
  return (
    <section className="clients" aria-label={t.clients.label}>
      <p className="lab">{t.clients.label}</p>
      <ul>
        {clientLogos.map((c) => (
          <li key={c.name}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={c.src}
              alt={c.name}
              width={Math.round((c.w / c.h) * c.size)}
              height={c.size}
              style={{ height: c.size, marginTop: c.dy ?? 0 }}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

function Problems({ locale, t }: { locale: Locale; t: Dictionary }) {
  const [open, close] = locale === "pl" ? ["„", "”"] : ["“", "”"];
  return (
    <Sec id="problems" title={t.problems.title}>
      <ul className="said" role="list">
        {t.problems.items.map((item) => (
          <li key={item.quote}>
            <h3 className="big">
              {open}
              {item.quote}
              {close}
            </h3>
            <p>{item.fix}</p>
          </li>
        ))}
      </ul>
    </Sec>
  );
}

function Who({ t }: { t: Dictionary }) {
  return (
    <Sec id="who" title={t.who.title} intro={t.who.intro}>
      <div className="two">
        {t.who.kinds.map((kind) => (
          <div key={kind.title}>
            <h3 className="big">{kind.title}</h3>
            <p>{kind.body}</p>
          </div>
        ))}
      </div>
    </Sec>
  );
}

function Example({ t }: { t: Dictionary }) {
  const e = t.example;
  const title = e.title.map((line) => <span key={line}>{line} </span>);
  return (
    <Sec id="example" title={title}>
      {/* The same week told twice on one grid: six small lines against three large ones. */}
      <div className="story">
        <p className="lab a">{e.beforeLabel}</p>
        <ol className="quiet" role="list">
          {e.before.map((step, i) => (
            <li key={step}>
              <span className="lab" aria-hidden="true">
                {i + 1}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
        <p className="aside a">
          <span>{e.beforeNote}</span>
        </p>
        <p className="lab b">{e.afterLabel}</p>
        <ol className="loud" role="list">
          {e.after.map((step, i) => (
            <li key={step} className="big">
              <span className="lab" aria-hidden="true">
                {i + 1}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
        <p className="aside b">
          <span>{e.afterNote}</span>
        </p>
      </div>
    </Sec>
  );
}

function Services({ t }: { t: Dictionary }) {
  const s = t.services;
  return (
    <Sec id="what" title={s.title} intro={s.intro}>
      <ul className="areas" role="list">
        {s.groups.map((group) => (
          <li key={group.title}>
            <h3 className="display">{group.title}</h3>
            <ul role="list">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Sec>
  );
}

function Process({ t }: { t: Dictionary }) {
  const p = t.process;
  return (
    <Sec id="how" title={p.title}>
      <ol className="steps" role="list">
        {p.steps.map((step, i) => (
          <li key={step.title}>
            <span className="lab" aria-hidden="true">
              0{i + 1}
            </span>
            <h3>
              <span className="sr">{i + 1}. </span>
              {step.title}
            </h3>
            <p>{step.body}</p>
          </li>
        ))}
      </ol>
      <h3 className="sub">{p.engagementsTitle}</h3>
      <ul className="cols" role="list">
        {p.engagements.map((item) => (
          <li key={item.title}>
            <h4>{item.title}</h4>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
      <div className="ask">
        <p>{t.ctaBand.text}</p>
        <a className="btn-primary" href="#contact">
          {t.ctaBand.button}
        </a>
      </div>
    </Sec>
  );
}

function Principles({ t }: { t: Dictionary }) {
  const p = t.principles;
  return (
    <Sec id="principles" title={p.title} variant="dark">
      <ul className="wont" role="list">
        {p.wont.map((item) => (
          <li key={item.struck}>
            <s>{item.struck}</s>
            {/* A clause that opens with a comma stays attached to the struck words. */}
            {item.rest.startsWith(",") ? "" : " "}
            <span>{item.rest}</span>
          </li>
        ))}
      </ul>
      <p className="wrong">{p.wrong}</p>
      <div className="hold">
        <h3 className="big">{p.promisesTitle}</h3>
        <ul className="promises" role="list">
          {p.promises.map((promise) => (
            <li key={promise.title}>
              <h4>{promise.title}</h4>
              <p>{promise.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </Sec>
  );
}

function About({ t }: { t: Dictionary }) {
  const a = t.about;
  return (
    <Sec id="about" title={a.title}>
      <div className="halves about">
        <p>{a.paragraphs[0]}</p>
        <div>
          <p>{a.paragraphs[1]}</p>
          <p className="lab loc">{a.location}</p>
        </div>
      </div>
    </Sec>
  );
}

function Faq({ t }: { t: Dictionary }) {
  return (
    <Sec id="faq" title={t.faq.title}>
      {/* Answers stay in the HTML (and in the FAQPage JSON-LD); only the display is collapsed. */}
      <div className="faq">
        {t.faq.items.map((item) => (
          <details key={item.q}>
            <summary>
              <h3>{item.q}</h3>
              <span aria-hidden="true">+</span>
            </summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </Sec>
  );
}

function Contact({ locale, t }: { locale: Locale; t: Dictionary }) {
  const c = t.contact;
  return (
    <Sec id="contact" title={c.title} variant="end">
      <div className="contact">
        <div>
          <p className="lede">{c.body}</p>
          <p className="or">
            {c.orEmail}{" "}
            <a className="link-quiet font-semibold text-ink" href={`mailto:${EMAIL}`}>
              {EMAIL}
            </a>
          </p>
          <p className="ps">{c.ps}</p>
        </div>
        <div>
          <ContactForm copy={c} privacyHref={`/${locale}/privacy`} />
        </div>
      </div>
    </Sec>
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
  const { locale, t } = props;
  return (
    <>
      <SkipLink label={t.nav.skip} />
      <Header {...props} />
      <main id="main" className="rd" lang={locale}>
        <div className="container-site">
          <Hero t={t} />
          <div className="spine">
            <Clients t={t} />
            <Problems locale={locale} t={t} />
            <Who t={t} />
            <Example t={t} />
            <Services t={t} />
            <Process t={t} />
            <Principles t={t} />
            <About t={t} />
            <Faq t={t} />
            <Contact locale={locale} t={t} />
          </div>
        </div>
      </main>
      <Footer locale={locale} t={t} />
    </>
  );
}
