import type { Locale } from "../config";

export type Problem = { quote: string; fix: string };
export type ServiceGroup = { title: string; items: string[] };
export type StruckItem = { struck: string; rest: string };
export type PromiseItem = { title: string; body: string };
export type FaqItem = { q: string; a: string };
export type TitledText = { title: string; body: string };

export type Dictionary = {
  locale: Locale;
  metadata: { title: string; description: string; ogLocale: string };
  nav: {
    work: string;
    how: string;
    faq: string;
    about: string;
    cta: string;
    skip: string;
    home: string;
    menu: string;
    close: string;
  };
  hero: {
    title: string;
    body: string;
    cta: string;
    emailPrefix: string;
    replyNote: string;
    /** Labels on the six grey lines of the hero drawing, top to bottom. */
    channels: string[];
    figureAlt: string;
  };
  clients: { label: string; names: string[] };
  problems: { title: string; items: Problem[] };
  who: { title: string; intro: string; kinds: TitledText[] };
  example: {
    /** Heading lines, each kept on its own line. */
    title: string[];
    beforeLabel: string;
    before: string[];
    beforeNote: string;
    afterLabel: string;
    after: string[];
    afterNote: string;
  };
  services: { title: string; intro: string; groups: ServiceGroup[] };
  process: { title: string; steps: TitledText[]; engagementsTitle: string; engagements: TitledText[] };
  ctaBand: { text: string; button: string };
  principles: { title: string; wont: StruckItem[]; wrong: string; promisesTitle: string; promises: PromiseItem[] };
  about: { title: string; paragraphs: string[]; location: string };
  faq: { title: string; items: FaqItem[] };
  contact: {
    title: string;
    body: string;
    labels: { name: string; email: string; company: string; message: string; optional: string };
    placeholders: { message: string };
    submit: string;
    sending: string;
    success: string;
    error: string;
    orEmail: string;
    ps: string;
    notice: string;
    noticeLink: string;
  };
  footer: { line: string; rights: string; privacy: string; terms: string; cookies: string; backHome: string };
  consent: { label: string; body: string; accept: string; reject: string; policy: string };
  logoPicker: { label: string; open: string; close: string; allLogos: string };
  schema: { jobTitle: string; serviceTypes: string[]; knowsAbout: string[] };
};
