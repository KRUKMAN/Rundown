# Rundown Codebase Overview

## Stack
- Next.js 16 (App Router), React 19, TypeScript 5
- Styling: Tailwind CSS v4 (class-only, no separate config)
- Motion/UI: framer-motion, lucide-react icons
- Build commands: `npm run dev`, `npm run build`, `npm run start`, `npm run lint`, `npm run typecheck`

## App structure
- `app/page.tsx` — entrypoint that renders the AI Automation experience (`AIAutomationClient`).
- `app/layout.tsx` — global metadata, font setup (Geist), global styles import.
- `app/globals.css` — shared global styles; Tailwind utilities available globally.

## AI Automation page (`app/ai-automation/ai-automation-client.tsx`)
- Fully client-rendered page with sections: sticky header/nav, hero with animated terminal text, demos (`WorkflowEngine`), services grid, proof/benefits sections, process CTA, contact form, scope highlight, final CTA, footer.
- Local constants (`services`, `stack`, typed hero message) live at top of file; adjust here to change copy or lists.
- Contact form currently prevents default submit (`handleSubmit`) and awaits wiring to a backend or external form service.
- Footer year computed once per render via `currentYear`.

## Workflow engine (`app/ai-automation/components/workflow-engine.tsx`)
- Reusable visualization component showing sequential steps for a selected use case.
- `DEFAULT_USE_CASES` defines the scenarios, ROI labels, and pipeline steps (icons, labels, theme colors).
- Animation state: `pipelineStep` advances through steps; `useCaseIndex` selects the active use case; `hasRun` gates auto-start.
- User actions: select use case pills or run/replay the animation; buttons disable while a run is in progress.
- Styling leverages Tailwind utility classes plus framer-motion for layout/entry transitions.

## Notes for future work
- Wire the contact form submit to a real endpoint (API route, third-party form service, or server action).
- If additional pages return, reintroduce route-aware navigation and shared components as needed.
- Keep copy ASCII-only unless there is a specific need for Unicode glyphs; current content uses ASCII-safe punctuation.
