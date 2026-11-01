# The Rundown · rundown.digital

Single-page bilingual site (EN/PL) for The Rundown, Jakub Krukowski's independent operations consultancy.

## Commands
- `npm run dev` · dev server
- `npm run build` · production build
- `npm run lint` · ESLint
- `npm run typecheck` (also `npm test`) · TypeScript

## Where things live
- Copy: `lib/i18n/dictionaries/en.ts` and `pl.ts` (same shape, typed by `types.ts`). Edit text here, not in components.
- Page: `components/site.tsx` (all sections, server-rendered). Every section uses the same `Section` skeleton: heading left, content right.
- Logos: `components/logos.tsx` has all 20 explored directions, numbered as on the design canvas. `DEFAULT_LOGO` sets the one in the header.
- Contact form: `components/contact-form.tsx` posts to `app/api/contact/route.ts`, which forwards to HubSpot Forms (`HUBSPOT_PORTAL_ID`, `HUBSPOT_FORM_GUID`). Includes a honeypot.
- SEO/AEO: per-locale metadata in the dictionaries; JSON-LD (ProfessionalService, Person, FAQPage) built from the same copy in `lib/structured-data.ts`; `app/robots.ts`, `app/sitemap.ts` and `public/llms.txt` (a plain summary for AI crawlers, update it when services change).
- Fonts: self-hosted, subset to Latin + Polish in `app/fonts/` (Archivo variable, Newsreader italic, JetBrains Mono).

## Privacy, cookies and legal pages
- `lib/business.ts`: legal name, address, NIP, retention period. **Fill in before going live**; the privacy policy (`/[locale]/privacy`) and terms (`/[locale]/terms`) read from it. Texts live in `lib/legal/content.ts` (EN + PL). They are templates matched to the actual setup, not legal advice.
- `components/consent.tsx`: cookie banner. HubSpot tracking loads only after Accept; Reject and Accept are equally prominent; "Cookie settings" in the footer reopens it; withdrawing consent clears HubSpot cookies. Vercel Web Analytics is cookieless and always on.
- If you add any tool that sets cookies or tracks visitors, gate it behind `choice === "granted"` in `consent.tsx` and add it to the cookie table in `lib/legal/content.ts`.

## Accessibility
Checked with axe-core (WCAG 2.2 AA + best practice) on every page at 390px and 1440px: no violations. Keep: visible focus, 44px targets, logo link names that include the visible logo text, text contrast ≥ 4.5:1.

## Drafts and the logo picker
Placeholder content (case studies, client quote) and the floating logo picker render only when `VERCEL_ENV !== "production"`, i.e. locally and on preview deployments. See `lib/env.ts`. On production they are hidden; `?logo=N` still works for a quick check, and `/en/logos` shows all options (noindex).

## Design rules (keep the page calm)
- One section shape: heading and intro across the top, full-width content grid below.
- One list style: rule on top, label left, text right.
- One accent (`--color-accent`, deep red), used as ink only: the headline phrase, strikethroughs, one result line.
- Condensed caps for H1/H2 and wordmarks only. Serif italic only for the quote and the P.S.
