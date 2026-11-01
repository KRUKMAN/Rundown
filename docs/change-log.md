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
