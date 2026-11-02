/**
 * Client logos for the "Teams I've worked with" strip.
 * Files live in /public/clients, one colour (ink #111111), cropped tight to the mark.
 * `w`/`h` are the file's intrinsic size (its viewBox); `size` is the rendered height in px,
 * tuned per logo so they look equally heavy (a boxed logo like Infogram's needs more height
 * than a plain wordmark). The strip switches from text to logos only once every client has
 * a file, so the page never shows a mix of the two.
 */
export type ClientLogo = { name: string; src?: string; w?: number; h?: number; size?: number };

export const clientLogos: ClientLogo[] = [
  { name: "LiveChat" },
  { name: "Prezi" },
  { name: "KODO" },
  { name: "Callstack" },
  { name: "Infogram", src: "/clients/infogram.svg", w: 1256, h: 458, size: 34 },
];

export const allLogosReady = clientLogos.every((c) => c.src);
