"use client";

import { useEffect, useId, useRef, useState } from "react";

type Props = {
  links: { href: string; label: string }[];
  cta: { href: string; label: string };
  labels: { menu: string };
};

/** Navigation for screens below lg. The panel drops down under the sticky header. */
export default function MobileMenu({ links, cta, labels }: Props) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    const onResize = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex min-h-11 cursor-pointer items-center gap-2 border border-ink bg-transparent px-3 text-[15px] font-semibold text-ink"
      >
        <svg aria-hidden="true" width="16" height="12" viewBox="0 0 16 12" className="flex-none">
          {open ? (
            <path d="M2 1l12 10M14 1L2 11" stroke="currentColor" strokeWidth="2" fill="none" />
          ) : (
            <path d="M0 1h16M0 6h16M0 11h16" stroke="currentColor" strokeWidth="2" fill="none" />
          )}
        </svg>
        <span>{labels.menu}</span>
      </button>
      <div
        id={panelId}
        hidden={!open}
        className="absolute inset-x-0 top-full border-b border-ink bg-paper shadow-[0_12px_24px_rgba(17,17,17,0.10)]"
      >
        <ul className="container-site m-0 list-none py-2">
          {links.map((link) => (
            <li key={link.href} className="border-b border-line last:border-b-0">
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex min-h-12 items-center text-[19px] font-semibold text-ink no-underline"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pb-3 pt-3">
            <a href={cta.href} onClick={() => setOpen(false)} className="btn-primary w-full justify-center">
              {cta.label}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
