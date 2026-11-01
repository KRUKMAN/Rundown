import type { CSSProperties, ReactNode } from "react";

/**
 * Every logo direction explored during the redesign, numbered as on the design canvas.
 * All dimensions are in em: set font-size on the wrapper to scale a logo.
 * At font-size 28px each wordmark is roughly header height.
 */

const INK = "var(--color-ink)";
const PAPER = "var(--color-paper)";
const RED = "var(--color-accent)";

const disp = (stretch = 68, weight = 800): CSSProperties => ({
  fontFamily: "var(--font-sans)",
  fontStretch: `${stretch}%`,
  fontWeight: weight,
  textTransform: "uppercase",
  lineHeight: 1,
  letterSpacing: "-0.01em",
  whiteSpace: "nowrap",
});

const mono = (weight = 500): CSSProperties => ({
  fontFamily: "var(--font-mono)",
  fontWeight: weight,
  lineHeight: 1,
  whiteSpace: "nowrap",
});

const row: CSSProperties = { display: "inline-flex", alignItems: "center" };

export type LogoTone = "ink" | "paper";

type LogoProps = { tone?: LogoTone };

function ListMark({ fg }: { fg: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 64 64" style={{ width: "1.05em", height: "1.05em", flex: "none" }}>
      <rect x="6" y="10" width="52" height="11" fill={fg} />
      <rect x="6" y="27" width="36" height="11" fill={fg} />
      <rect x="6" y="44" width="21" height="11" fill={RED} />
    </svg>
  );
}

function RArrowMark({ fg }: { fg: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 72 80" style={{ width: "1em", height: "1.12em", flex: "none" }}>
      <path d="M8 4h30c14 0 22 8 22 20s-8 20-22 20H22v8H8z M22 16v16h16c5 0 8-3 8-8s-3-8-8-8z" fill={fg} fillRule="evenodd" />
      <path d="M38 44h10v20h8L43 78 30 64h8z" fill={RED} />
    </svg>
  );
}

const logos: Record<number, { name: string; note: string; text?: string; render: (fg: string, bg: string) => ReactNode }> = {
  1: {
    text: "The Rundown",
    name: "The list",
    note: "A rundown is a short list. Three bars, the last one red.",
    render: (fg) => (
      <span style={{ ...row, gap: "0.32em" }}>
        <ListMark fg={fg} />
        <span style={{ ...disp(), color: fg }}>The Rundown</span>
      </span>
    ),
  },
  2: {
    text: "Rundown.digital",
    name: "The domain",
    note: "The URL is the logo. The dot is the only colour.",
    render: (fg) => (
      <span style={{ ...disp(), color: fg }}>
        Rundown<span style={{ color: RED }}>.</span>
        <span style={{ fontWeight: 500, fontStretch: "80%" }}>digital</span>
      </span>
    ),
  },
  3: {
    text: "The Rundown",
    name: "The R that runs down",
    note: "An R whose leg drops into an arrow.",
    render: (fg) => (
      <span style={{ ...row, gap: "0.3em" }}>
        <RArrowMark fg={fg} />
        <span style={{ ...disp(), color: fg }}>The Rundown</span>
      </span>
    ),
  },
  4: {
    text: "The Rundown",
    name: "The stacked block",
    note: "Two lines with a red rule. Reads like a stamp.",
    render: (fg) => (
      <span style={{ display: "inline-flex", flexDirection: "column", color: fg, ...disp(62), lineHeight: 0.86 }}>
        <span style={{ fontSize: "0.56em" }}>The</span>
        <span style={{ borderBottom: `0.09em solid ${RED}`, paddingBottom: "0.04em" }}>Rundown</span>
      </span>
    ),
  },
  5: {
    text: "Rundown .digital",
    name: "Stacked domain",
    note: "RUNDOWN over .digital. The red dot is the mark.",
    render: (fg) => (
      <span style={{ display: "inline-flex", flexDirection: "column", color: fg, ...disp(62), lineHeight: 0.86 }}>
        <span>Rundown</span>
        <span style={{ fontSize: "0.47em", fontWeight: 500, fontStretch: "80%", letterSpacing: "0.04em" }}>
          <span style={{ color: RED, fontWeight: 800 }}>.</span>digital
        </span>
      </span>
    ),
  },
  6: {
    text: "Rundown",
    name: "Staggered baseline",
    note: "Each letter a step lower. The word runs down.",
    render: (fg) => (
      <span style={{ ...row, alignItems: "flex-start", ...disp(), color: fg, paddingBottom: "0.55em" }}>
        {"RUNDOWN".split("").map((ch, i) => (
          <span key={i} style={{ marginTop: `${i * 0.09}em`, color: i === 6 ? RED : undefined }}>
            {ch}
          </span>
        ))}
      </span>
    ),
  },
  7: {
    text: "Rundown.",
    name: "Two weights",
    note: "RUN heavy, DOWN light. Says run first.",
    render: (fg) => (
      <span style={{ ...disp(), color: fg, fontSize: "1.15em" }}>
        Run<span style={{ fontWeight: 400 }}>down</span>
        <span style={{ color: RED }}>.</span>
      </span>
    ),
  },
  8: {
    text: "The Rundown.",
    name: "Knockout stamp",
    note: "Reversed out of a block. Carries its own background.",
    render: (fg, bg) => (
      <span style={{ ...disp(62), background: fg, color: bg, padding: "0.22em 0.36em 0.16em", letterSpacing: "0.01em" }}>
        The Rundown<span style={{ color: RED }}>.</span>
      </span>
    ),
  },
  9: {
    text: "Rundown",
    name: "The rule through",
    note: "A red line through the waist, like a ticked-off item.",
    render: (fg) => (
      <span style={{ ...disp(), color: fg, position: "relative", display: "inline-block" }}>
        Rundown
        <span aria-hidden="true" style={{ position: "absolute", left: "-0.15em", right: "-0.15em", top: "50%", height: "0.07em", background: RED }} />
      </span>
    ),
  },
  10: {
    text: "01 the_rundown",
    name: "Tabular",
    note: "Row one of a well-kept list, in mono.",
    render: (fg) => (
      <span style={{ ...mono(700), color: fg, letterSpacing: "-0.03em", fontSize: "0.85em" }}>
        <span style={{ color: RED, fontWeight: 500 }}>01</span>&nbsp;the_rundown
      </span>
    ),
  },
  11: {
    text: "Rundown",
    name: "Tight, touching",
    note: "Letters close enough to touch. The O cut to a red slot.",
    render: (fg) => (
      <span style={{ ...disp(62), color: fg, letterSpacing: "-0.07em", fontSize: "1.2em" }}>
        Rund
        <span style={{ position: "relative", display: "inline-block" }}>
          O
          <span aria-hidden="true" style={{ position: "absolute", left: "36%", top: "28%", width: "0.11em", height: "44%", background: RED }} />
        </span>
        wn
      </span>
    ),
  },
  12: {
    text: "Rundown",
    name: "Vertical",
    note: "Set top to bottom for edges and spines. Horizontal version shown here.",
    render: (fg) => (
      <span style={{ ...row, gap: "0.3em" }}>
        <span aria-hidden="true" style={{ width: "0.14em", height: "1em", background: RED }} />
        <span style={{ ...disp(62), color: fg, letterSpacing: "0.02em" }}>Rundown</span>
      </span>
    ),
  },
  13: {
    text: "Rundown .digital",
    name: "Stacked, in a block",
    note: "The stacked domain reversed out of a block.",
    render: (fg, bg) => (
      <span style={{ display: "inline-flex", flexDirection: "column", background: fg, color: bg, padding: "0.2em 0.3em 0.16em", ...disp(62), lineHeight: 0.86 }}>
        <span>Rundown</span>
        <span style={{ fontSize: "0.47em", fontWeight: 500, fontStretch: "80%", letterSpacing: "0.04em" }}>
          <span style={{ color: RED, fontWeight: 800 }}>.</span>digital
        </span>
      </span>
    ),
  },
  14: {
    text: "The Rundown > rundown.digital",
    name: "Block plus mono tag",
    note: "The stamp says the name, a mono line gives the address.",
    render: (fg, bg) => (
      <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "flex-start", gap: "0.12em" }}>
        <span style={{ ...disp(62), background: fg, color: bg, padding: "0.2em 0.34em 0.14em", letterSpacing: "0.01em" }}>The Rundown</span>
        <span style={{ ...mono(500), color: fg, fontSize: "0.34em" }}>
          <span style={{ color: RED }}>&gt;</span> rundown.digital
        </span>
      </span>
    ),
  },
  15: {
    text: "01 The Rundown",
    name: "Line number",
    note: "A red mono 01 beside the name.",
    render: (fg) => (
      <span style={{ ...row, alignItems: "baseline", gap: "0.24em" }}>
        <span style={{ ...mono(500), color: RED, fontSize: "0.4em" }}>01</span>
        <span style={{ ...disp(), color: fg }}>The Rundown</span>
      </span>
    ),
  },
  16: {
    text: "01 Rundown 02 .digital",
    name: "Two numbered rows",
    note: "The logo as a two-item rundown.",
    render: (fg) => (
      <span style={{ display: "inline-grid", gridTemplateColumns: "auto auto", columnGap: "0.25em", alignItems: "baseline", color: fg }}>
        <span style={{ ...mono(500), color: RED, fontSize: "0.24em" }}>01</span>
        <span style={{ ...disp(62), lineHeight: 0.9 }}>Rundown</span>
        <span style={{ ...mono(500), color: RED, fontSize: "0.24em" }}>02</span>
        <span style={{ ...mono(500), fontSize: "0.34em", paddingTop: "0.15em" }}>.digital</span>
      </span>
    ),
  },
  17: {
    text: "Rundown .digital",
    name: "Domain tag",
    note: "The name stays open; .digital sits in a small red tag.",
    render: (fg) => (
      <span style={{ ...row, alignItems: "flex-end", gap: "0.14em" }}>
        <span style={{ ...disp(), color: fg, lineHeight: 0.9 }}>Rundown</span>
        <span
          style={{
            ...disp(80, 700),
            background: RED,
            color: "#f6f4ee",
            fontSize: "0.38em",
            letterSpacing: "0.05em",
            padding: "0.24em 0.32em 0.16em",
            marginBottom: "0.1em",
          }}
        >
          .digital
        </span>
      </span>
    ),
  },
  18: {
    text: "Run Down. The Rundown",
    name: "Square badge",
    note: "RUN over DOWN in a square. Logo and favicon are one object.",
    render: (fg, bg) => (
      <span style={{ ...row, gap: "0.3em" }}>
        <span
          style={{
            width: "1.3em",
            height: "1.3em",
            background: fg,
            color: bg,
            padding: "0.12em 0.1em",
            boxSizing: "border-box",
            display: "inline-flex",
            flexDirection: "column",
            justifyContent: "space-between",
            ...disp(62),
            fontSize: "1em",
            lineHeight: 0.8,
          }}
        >
          <span style={{ fontSize: "0.52em" }}>Run</span>
          <span style={{ fontSize: "0.52em" }}>
            Down<span style={{ color: RED }}>.</span>
          </span>
        </span>
        <span style={{ ...disp(), color: fg, fontSize: "0.86em" }}>The Rundown</span>
      </span>
    ),
  },
  19: {
    text: "rundown .digital",
    name: "Mono stacked",
    note: "Lowercase mono, rundown over .digital.",
    render: (fg) => (
      <span style={{ display: "inline-flex", flexDirection: "column", color: fg, letterSpacing: "-0.02em" }}>
        <span style={{ ...mono(700), fontSize: "0.92em" }}>rundown</span>
        <span style={{ ...mono(400), fontSize: "0.38em", paddingTop: "0.12em" }}>
          <span style={{ color: RED, fontWeight: 700 }}>.</span>digital
        </span>
      </span>
    ),
  },
  20: {
    text: "The Rundown",
    name: "Block with a status line",
    note: "The stamp carries a second mono line that can change per use.",
    render: (fg, bg) => (
      <span style={{ display: "inline-flex", flexDirection: "column", background: fg, color: bg, padding: "0.2em 0.3em 0.18em", gap: "0.12em" }}>
        <span style={{ ...disp(62), letterSpacing: "0.01em", lineHeight: 0.9 }}>The Rundown</span>
        <span style={{ ...mono(500), fontSize: "0.2em", letterSpacing: "0.08em", opacity: 0.75, borderTop: "1px solid currentColor", paddingTop: "0.5em" }}>
          <span style={{ color: RED, opacity: 1 }}>&#9632;</span> OPERATIONS · RUNDOWN.DIGITAL
        </span>
      </span>
    ),
  },
};

export const LOGO_IDS = Object.keys(logos).map(Number);
export const DEFAULT_LOGO = 17;
export const FINALISTS = [15, 17, 19];

export function logoMeta(id: number) {
  return logos[id] ?? logos[DEFAULT_LOGO];
}

export function isLogoId(value: unknown): value is number {
  const n = Number(value);
  return Number.isInteger(n) && n in logos;
}

/** The words a logo visibly shows, for accessible names (WCAG 2.5.3 Label in Name). */
export function logoText(id: number) {
  return logoMeta(id).text ?? "The Rundown";
}

export function Logo({ id, tone = "ink", size = 28 }: LogoProps & { id: number; size?: number | null }) {
  const meta = logoMeta(id);
  const fg = tone === "ink" ? INK : PAPER;
  const bg = tone === "ink" ? PAPER : INK;
  return (
    <span style={{ fontSize: size ?? undefined, display: "inline-flex", lineHeight: 1 }} aria-hidden="true">
      {meta.render(fg, bg)}
    </span>
  );
}
