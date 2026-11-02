/**
 * Client logos for the "Teams I've worked with" strip.
 * Files live in /public/clients, one colour (ink #111111), cropped tight to the mark.
 * `w`/`h` are the file's intrinsic size (its viewBox); `size` is the rendered height in px,
 * tuned per logo so they look equally heavy (a boxed logo like Infogram's needs more height
 * than a plain wordmark).
 *
 * Sources and treatment (keep when adding logos):
 * - LiveChat, Callstack: the official black files from their brand kits, only recoloured to the site ink.
 * - Prezi: official vector artwork from the 2021 press kit, flattened to one colour (the kit has no mono version).
 * - Infogram, KODO: traced from the logos supplied by the owner, one colour.
 * Shapes, proportions and spacing are never altered; each logo is shown at its own natural ratio,
 * unlinked and with alt text.
 */
export type ClientLogo = { name: string; src?: string; w?: number; h?: number; size?: number };

export const clientLogos: ClientLogo[] = [
  { name: "LiveChat", src: "/clients/livechat.svg", w: 357, h: 80, size: 26 },
  { name: "Prezi", src: "/clients/prezi.svg", w: 985, h: 360, size: 30 },
  { name: "KODO", src: "/clients/kodo.svg", w: 1200, h: 1200, size: 48 },
  { name: "Callstack", src: "/clients/callstack.svg", w: 869, h: 173, size: 24 },
  { name: "Infogram", src: "/clients/infogram.svg", w: 1256, h: 458, size: 40 },
];


