/**
 * Draft content (placeholder case studies, the logo picker) is visible locally and on
 * Vercel preview deployments, and hidden on production.
 */
export const showDrafts = process.env.VERCEL_ENV !== "production";
