"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { DEFAULT_LOGO, FINALISTS, LOGO_IDS, Logo, isLogoId, logoMeta, logoText } from "./logos";

const STORAGE_KEY = "rundown-logo";

type Props = {
  homeHref: string;
  homeLabel: string;
  showPicker: boolean;
  labels: { label: string; open: string; close: string; allLogos: string };
  allLogosHref: string;
};

function readInitial(): number {
  try {
    const fromUrl = new URLSearchParams(window.location.search).get("logo");
    if (isLogoId(fromUrl)) return Number(fromUrl);
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (isLogoId(stored)) return Number(stored);
  } catch {
    /* storage can be unavailable; fall back to default */
  }
  return DEFAULT_LOGO;
}

export default function HeaderLogo({ homeHref, homeLabel, showPicker, labels, allLogosHref }: Props) {
  const [logoId, setLogoId] = useState(DEFAULT_LOGO);
  const [open, setOpen] = useState(false);
  const [pickerVisible, setPickerVisible] = useState(showPicker);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Sync from URL/localStorage after hydration so the static HTML stays identical.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLogoId(readInitial());
    setMounted(true);
    if (new URLSearchParams(window.location.search).has("logo")) setPickerVisible(true);
  }, []);

  const choose = (id: number) => {
    setLogoId(id);
    try {
      window.localStorage.setItem(STORAGE_KEY, String(id));
      const url = new URL(window.location.href);
      url.searchParams.set("logo", String(id));
      window.history.replaceState(null, "", url);
    } catch {
      /* ignore */
    }
  };

  return (
    <>
      <a
        href={homeHref}
        aria-label={`${logoText(logoId)}, ${homeLabel}`}
        className="inline-flex min-h-11 min-w-0 items-center text-[22px] no-underline sm:text-[28px]"
      >
        <Logo id={logoId} size={null} />
      </a>

      {pickerVisible &&
        mounted &&
        // Portal to <body>: the sticky header uses backdrop-filter, which would otherwise trap position:fixed.
        createPortal(
        <div className="fixed bottom-4 left-4 z-50 font-sans text-[14px]">
          {open && (
            <div
              id="logo-picker-panel"
              className="mb-2 w-[300px] border border-ink bg-paper p-3 shadow-[0_8px_24px_rgba(17,17,17,0.15)]"
            >
              <p className="mb-2 text-[13px] text-muted">
                {labels.open} · <strong className="text-ink">{logoId}</strong> {logoMeta(logoId).name}
              </p>
              <div className="grid grid-cols-5 gap-1.5">
                {LOGO_IDS.map((id) => {
                  const active = id === logoId;
                  const finalist = FINALISTS.includes(id);
                  return (
                    <button
                      key={id}
                      type="button"
                      onClick={() => choose(id)}
                      aria-pressed={active}
                      title={logoMeta(id).name}
                      className={`h-11 border font-semibold ${
                        active ? "border-ink bg-ink text-white" : "border-line bg-paper hover:border-ink"
                      } ${finalist && !active ? "text-accent" : ""}`}
                    >
                      {id}
                    </button>
                  );
                })}
              </div>
              <p className="mt-2 text-[12px] text-muted">
                <span className="text-accent">Red</span> = finalists (15, 17, 19).{" "}
                <a className="link-quiet" href={allLogosHref}>
                  {labels.allLogos}
                </a>
              </p>
            </div>
          )}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="logo-picker-panel"
            className="min-h-11 border border-ink bg-ink px-4 font-semibold text-white"
          >
            {open ? labels.close : `${labels.label}: ${logoId}`}
          </button>
        </div>,
        document.body
      )}
    </>
  );
}
