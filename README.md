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
- Fonts: self-hosted, subset to Latin + Polish in `app/fonts/` (Archivo variable, Newsreader italic, JetBrains Mono).

## Drafts and the logo picker
Placeholder content (case studies, client quote) and the floating logo picker render only when `VERCEL_ENV !== "production"`, i.e. locally and on preview deployments. See `lib/env.ts`. On production they are hidden; `?logo=N` still works for a quick check, and `/en/logos` shows all options (noindex).

## Design rules (keep the page calm)
- One grid: 360px heading column, content column.
- One list style: rule on top, label left, text right.
- One accent (`--color-accent`, deep red), used as ink only: the headline phrase, strikethroughs, one result line.
- Condensed caps for H1/H2 and wordmarks only. Serif italic only for the quote and the P.S.
