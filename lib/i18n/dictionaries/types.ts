import type { Locale } from "../config";

export type Problem = { quote: string; fix: string };
export type ServiceItem = { title: string; body: string };
export type ServiceGroup = { title: string; summary: string; items: ServiceItem[] };
export type StruckItem = { struck: string; rest: string };
export type PromiseItem = { title: string; body: string };
export type CaseStudy = { company: string; readTime: string; title: string; result: string };
export type TeamRole = { role: string; body: string };
export type FaqItem = { q: string; a: string };

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
  };
  hero: {
    titleStart: string;
    titleAccent: string;
    body: string;
    cta: string;
    emailPrefix: string;
    replyNote: string;
  };
  clients: { label: string; names: string[] };
  example: {
    title: string;
    intro: string;
    beforeLabel: string;
    before: string[];
    beforeNote: string;
    afterLabel: string;
    after: string[];
    afterNote: string;
  };
  problems: { title: string; intro: string; paths: string; pathsLink: string; items: Problem[] };
  services: { title: string; intro: string; groups: ServiceGroup[] };
  principles: { title: string; intro: string; promisesTitle: string; wont: StruckItem[]; promises: PromiseItem[] };
  work: {
    title: string;
    intro: string;
    draftNote: string;
    cases: CaseStudy[];
    quote: { text: string; attribution: string };
  };
  faq: { title: string; intro: string; items: FaqItem[] };
  about: { title: string; photoNote: string; paragraphs: string[]; team: TeamRole[]; location: string };
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
  };
  footer: { line: string; rights: string };
  logoPicker: { label: string; open: string; close: string; allLogos: string };
  schema: { jobTitle: string; serviceTypes: string[]; knowsAbout: string[] };
};
