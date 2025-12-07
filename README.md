# Rundown – AI Automation Site

Single-page Next.js site for The Rundown (AI Automation/Ops studio). The root route renders the AI automation experience; no other routes are present.

## Commands
- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run start` — run built app
- `npm run lint` — ESLint
- `npm run typecheck` — TypeScript checks

## Project notes
- Tech: Next.js 16 (App Router), React 19, Tailwind CSS v4, framer-motion, lucide-react.
- Entry: `app/page.tsx` uses `app/ai-automation/ai-automation-client.tsx`; workflow visualizer lives in `app/ai-automation/components/workflow-engine.tsx`.
- Contact form currently prevents default submit; wire it to your backend or form service before launch.

## Docs
- Overview: `docs/overview.md`
- Change log: `docs/change-log.md`
