"use client";

import { useCallback, useEffect, useState } from "react";
import Script from "next/script";
import type { Dictionary } from "@/lib/i18n/dictionaries/types";

/**
 * Cookie consent, built to EDPB guidance and art. 399 of the Polish Electronic Communications Law:
 * - nothing non-essential runs before a choice is made,
 * - Accept and Reject are equally prominent, on the first layer,
 * - the choice can be changed any time (footer "Cookie settings" dispatches OPEN_EVENT),
 * - consent expires after 12 months.
 * Vercel Web Analytics is cookieless and runs regardless (see the privacy policy).
 */

const KEY = "rundown-consent";
const VERSION = 1;
const MAX_AGE_MS = 365 * 24 * 60 * 60 * 1000;
export const OPEN_EVENT = "rundown:open-consent";

type Choice = "granted" | "denied";
const HUBSPOT_COOKIES = ["__hstc", "hubspotutk", "__hssc", "__hssrc"];

function readChoice(): Choice | null {
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as { v: number; value: Choice; ts: number };
    if (parsed.v !== VERSION || Date.now() - parsed.ts > MAX_AGE_MS) return null;
    return parsed.value === "granted" || parsed.value === "denied" ? parsed.value : null;
  } catch {
    return null;
  }
}

function clearHubSpotCookies() {
  const host = window.location.hostname;
  const domains = ["", host, `.${host}`, `.${host.split(".").slice(-2).join(".")}`];
  for (const name of HUBSPOT_COOKIES) {
    for (const domain of domains) {
      document.cookie = `${name}=; Max-Age=0; path=/${domain ? `; domain=${domain}` : ""}`;
    }
  }
}

type Props = { copy: Dictionary["consent"]; privacyHref: string };

export default function ConsentManager({ copy, privacyHref }: Props) {
  const [choice, setChoice] = useState<Choice | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const stored = readChoice();
    // Read the stored choice after hydration; the server never knows it.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setChoice(stored);
    if (!stored) setOpen(true);
    const reopen = () => setOpen(true);
    window.addEventListener(OPEN_EVENT, reopen);
    return () => window.removeEventListener(OPEN_EVENT, reopen);
  }, []);

  const decide = useCallback(
    (value: Choice) => {
      const wasGranted = choice === "granted";
      try {
        window.localStorage.setItem(KEY, JSON.stringify({ v: VERSION, value, ts: Date.now() }));
      } catch {
        /* storage unavailable: the choice holds for this page view only */
      }
      setChoice(value);
      setOpen(false);
      if (value === "denied" && wasGranted) {
        // HubSpot is already running on this page: remove its cookies and reload without it.
        clearHubSpotCookies();
        window.location.reload();
      }
    },
    [choice]
  );

  const portalId = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID ?? "147393350";

  return (
    <>
      {choice === "granted" && (
        <Script
          id="hs-script-loader"
          async
          defer
          src={`https://js-eu1.hs-scripts.com/${portalId}.js`}
          strategy="afterInteractive"
        />
      )}

      {open && (
        <section
          aria-label={copy.label}
          className="fixed inset-x-3 bottom-3 z-[60] border border-ink bg-paper p-5 shadow-[0_10px_30px_rgba(17,17,17,0.18)] sm:inset-x-auto sm:bottom-5 sm:right-5 sm:w-[420px]"
        >
          <h2 className="m-0 text-[17px] font-bold">{copy.label}</h2>
          <p className="mb-0 mt-2 text-[15px] leading-relaxed">{copy.body}</p>
          <p className="mb-0 mt-2 text-[14px]">
            <a className="link-quiet" href={privacyHref}>
              {copy.policy}
            </a>
          </p>
          {/* Equal weight on purpose: same size, same style, same layer. */}
          <div className="mt-4 grid grid-cols-2 gap-3">
            <button type="button" onClick={() => decide("denied")} className="btn-consent">
              {copy.reject}
            </button>
            <button type="button" onClick={() => decide("granted")} className="btn-consent">
              {copy.accept}
            </button>
          </div>
        </section>
      )}
    </>
  );
}

export function CookieSettingsButton({ label, className }: { label: string; className?: string }) {
  return (
    <button type="button" className={className} onClick={() => window.dispatchEvent(new Event(OPEN_EVENT))}>
      {label}
    </button>
  );
}
