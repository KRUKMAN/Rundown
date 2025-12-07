import type { Locale } from "../config";

export type ThemeColor =
  | "green"
  | "red"
  | "blue"
  | "white"
  | "orange"
  | "purple"
  | "yellow"
  | "cyan";

export type WorkflowStep = {
  label: string;
  sub: string;
  theme: ThemeColor;
};

export type WorkflowUseCase = {
  id: string;
  navTitle: string;
  title: string;
  description: string;
  roiLabel: string;
  roiValue: string;
  steps: WorkflowStep[];
  successMessage: string;
};

export type WorkflowCopy = {
  panelTitle: string;
  activeWorkflow: string;
  simulate: string;
  replay: string;
  processing: string;
  complete: string;
  proven: string;
};

export type ServiceCard = {
  id: string;
  title: string;
  description: string;
  items: string[];
};

export type Dictionary = {
  locale: Locale;
  metadata: {
    title: string;
    description: string;
    ogLocale: string;
  };
  navigation: {
    services: string;
    demos: string;
    contact: string;
    cta: string;
    switcherLabel: string;
  };
  hero: {
    badge: string;
    heading: string;
    highlight: string;
    description: string;
    primaryCta: string;
  };
  systemPanel: {
    fileLabel: string;
    typedLines: string[];
  };
  kitchen: {
    heading: string;
    subheading: string;
    leftTitle: string;
    bullets: string[];
    rightTitle: string;
    quote: string;
  };
  demos: {
    eyebrow: string;
    heading: string;
    description: string;
  };
  services: {
    heading: string;
    description: string;
    cards: ServiceCard[];
  };
  removal: {
    heading: string;
    description: string;
    bullets: string[];
    footerNote: string;
  };
  process: {
    heading: string;
    description: string;
    cta: string;
  };
  contact: {
    eyebrow: string;
    heading: string;
    description: string;
    labels: {
      name: string;
      email: string;
      company: string;
      message: string;
    };
    placeholders: {
      name: string;
      email: string;
      company: string;
      message: string;
    };
    cta: string;
    sending: string;
    success: string;
    error: string;
    successInline: string;
    errorInline: string;
    ledBy: string;
    person: string;
    experience: string;
  };
  scope: {
    heading: string;
    description: string;
  };
  closing: {
    heading: string;
    description: string;
    cta: string;
  };
  footer: {
    toolsLabel: string;
    copyright: string;
  };
  stack: string[];
  workflow: {
    copy: WorkflowCopy;
    useCases: WorkflowUseCase[];
  };
};
