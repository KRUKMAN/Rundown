# Change Log

## 2025-07-12
- Made AI Automation page the sole experience and updated global metadata to match The Rundown.
- Removed legacy personas/routes, shared card selector components, testing setup, and unused dependencies.
- Cleaned copy artifacts, tightened CTA/link targets, added form submit handler placeholder.
- Added documentation (`docs/overview.md`) and this change log to guide future contributors and AI agents.

## 2026-11-01 · Redesign
- Replaced the dark terminal-style page with the new design (direction F): warm paper, ink, one red accent, condensed Archivo headings.
- Rewrote all copy in English and Polish for non-technical business owners; Polish reviewed separately for natural phrasing.
- New "What I do" structure: three stages (sort out how work runs, take repeat work off people, make it stick).
- Added all 20 logo explorations with a preview-only picker and `/[locale]/logos` gallery; default logo 17.
- Contact API: input validation, length limits, honeypot. Kept HubSpot Forms integration and tracking.
- Self-hosted subset fonts; removed framer-motion and lucide-react; removed starter assets.
- Added `npm test` (runs typecheck) so the CI workflow's test step passes.

## 2026-11-01 · Copy and layout pass
- Sections now use the full width: heading row on top, content in grids (problems 3x2, services in three columns, principles beside promises, FAQ in two columns).
- Copy rewritten to be shorter and keyword-led: service titles are the terms people search ("CRM implementation", "Workflow automation", "AI and productivity training").
- New FAQ section; JSON-LD for the business, person and FAQ; robots.txt; llms.txt.
- Polish reviewed again: Polish label is "konsultant ds. procesów i automatyzacji" (owners don't search "konsultant operacyjny"); metadata leads with "Wdrożenie CRM i automatyzacja procesów".

## 2026-11-01 · Polish, accessibility and privacy
- Layout system: one spacing scale, reading measure capped at ~64 characters, stacked section headings with balanced wrapping, sticky header with scroll padding (WCAG 2.4.11), darker secondary text.
- Cookie consent banner (EDPB / art. 399 PKE): HubSpot tracking only after Accept, equal Accept/Reject, reopen from footer, consent expires after 12 months.
- Privacy policy and terms of use in EN and PL, generated from `lib/business.ts`; privacy note under the contact form; footer legal links.
- axe-core audit clean on all pages; fixed logo link accessible name (2.5.3), placeholder contrast, 8px overflow on Polish mobile header.

## 2026-11-01 · Positioning and structure from the adversarial review
- Repositioned for teams of 5 to 500 in any industry, by situation (fast growth, rough stretch, tech debt) instead of trades; removed owner-only framing.
- Before/after example now sits on the page's one tinted band, followed by the same pattern in four other industries.
- Problems rewritten "in the words of people who run teams", including pipeline trust, HubSpot adoption, lead response and RevOps backlog.
- Services regrouped into four areas in a 2x2 grid: Organise, Sales and RevOps, Automate, People (adds adoption and change).
- New sections: How I work (five steps plus four ways to work together, no prices), Who I work with (good fit / not a fit), a call-to-action band after What I do and after the FAQ.
- "How I work" in the nav now points to the process section; principles moved to `#principles`.
- Smaller H2s; mobile menu below 1024px; compact cookie bar on phones; FAQ rewritten for real questions (which CRM, AI outside tech, working with an in-house RevOps lead, data and AI).

## 2026-11-01 · Second review: shorter, less repetition
- Problems cut to six that don't repeat a service; dropped the duplicate "paths" paragraph.
- Removed the second CTA band, the "A plan before a price" promise and the "How does working together start?" FAQ, which all repeated the process section.
- FAQ is six collapsible questions (answers stay in the HTML and JSON-LD); added "What happens after the handover?" and named the AI tools in the data answer.
- Services in four columns from 1280px; process and engagements in two columns until 1280px.
- Industries row at body size, with a real "change" example for e-commerce.
- Photo placeholder hidden until a real photo exists (`PHOTO_SRC` in `components/site.tsx`).
- Section spacing 56/80px. Page height at 1440px down from ~8,850px to ~7,500px; on phones from ~15,400px to ~13,000px.
- No promises about contract terms: removed "agreed month by month", the "No lock-in" promise and "you can stop after any step"; softened "problems show up a week early".

## 2026-11-01 · Overpromise pass (third review)
- Reply time is "usually within one working day"; success message no longer promises a time; "I'll tell you who is" softened to suggesting someone if I know a better fit.
- Hero: "train your team to use it" instead of "stay until your team uses it".
- "Your accounts, not mine" replaces "You own everything… from day one"; struck "retainer" line replaced by "A dashboard nobody looks at".
- Problem fixes describe what is set up, not guaranteed outcomes; "Leads wait days for a reply" back in place of "same questions".
- Renovation example framed as typical ("how that week often goes"), present tense.
- AI data answer: plans whose terms exclude training, checked together before starting. Ongoing support "can be arranged/agreed".
- Layout: services headings 30px at 4 columns (no wrap or overflow in PL), CTA band without bottom rule, tighter mobile hero so the CTA clears the cookie bar at 390×844.

## 2026-11-02 · Client logos
- "Teams I've worked with" shows logos for LiveChat, Prezi, Callstack and Infogram (`lib/clients.ts`, files in `public/clients`); KODO shows its name as text until a logo file is added.
- Sources: official black files from the LiveChat and Callstack brand kits, Prezi press-kit vector flattened to one colour, Infogram traced from the supplied logo. Shapes and proportions untouched; logos unlinked, with alt text and a trademark note under the strip.
