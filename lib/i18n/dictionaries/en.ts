import type { Dictionary } from "./types";

const en: Dictionary = {
  locale: "en",
  metadata: {
    title: "The Rundown | AI Automation Studio",
    description:
      "Operations-as-a-service and automation studio building calm, predictable GTM systems.",
    ogLocale: "en_US",
  },
  navigation: {
    services: "Services",
    demos: "Demos",
    contact: "Contact",
    cta: "Let's talk!",
    switcherLabel: "Language",
  },
  hero: {
    badge: "Operational Excellence",
    heading: "The Operations Studio That Makes Your GTM Feel",
    highlight: "Effortless.",
    description:
      "We blend workflow design, automation, and the right dose of AI to create calm, predictable, high-performance operations for your Sales, CX, and Support teams.",
    primaryCta: "Let's have a free chat",
  },
  systemPanel: {
    fileLabel: "system_v2.sh",
    typedLines: [
      "> System Check: THE RUNDOWN v2.0",
      "> Scanning Operational Stack...",
      "> Detecting Manual Tasks..........[ELIMINATED]",
      "> Simplifying Workflows...........[DONE]",
      "> Optimizing CRM Data Flows.......[ACTIVE]",
      "> Deploying AI Assistants.........[ONLINE]",
      "> STATUS: READY TO SCALE",
    ],
  },
  kitchen: {
    heading: "Your GTM Should Run Like a Michelin Kitchen",
    subheading: "The best kitchens don't win on adrenaline - they win on preparation.",
    leftTitle: "We create a back-of-house where:",
    bullets: [
      "Reps know exactly what to do next",
      "Leaders trust the data in front of them",
      "Tools support your people, not stress them",
    ],
    rightTitle: "The Result:",
    quote:
      '"Your team gets to show up, focus, and shine - because the systems behind them finally make sense."',
  },
  demos: {
    eyebrow: "Live Examples",
    heading: "Real Workflows. Real Impact. Real Predictability.",
    description: "Explore how we automate the chaos away.",
  },
  services: {
    heading: "What We Do (Without the Chaos)",
    description: "Explore the areas where we help your team run like a well-prepped kitchen.",
    cards: [
      {
        id: "gtm-ops",
        title: "GTM, Sales & CX Operations",
        description: "Fix the foundation so your revenue engine works the way it should.",
        items: [
          "Salesforce & CRM ownership",
          "Lead routing & territory logic",
          "Support stack (Zendesk/Intercom)",
          "QA and data hygiene",
          "Reporting & dashboards",
          "Clear GTM playbooks",
        ],
      },
      {
        id: "automation-studio",
        title: "Automations & Internal Tools Studio",
        description: "The scalable prep station for your entire team.",
        items: [
          "No-code / low-code automation (Tray/n8n)",
          "Custom internal tools",
          "AI agents for GTM teams",
          "Dashboards & health checks",
        ],
      },
      {
        id: "stack-implementation",
        title: "Stack Implementation",
        description: "Your first proper GTM stack, correctly assembled.",
        items: [
          "CRM setup and migration",
          "Support tools & ticketing",
          "Routing, workflows, triggers",
          "Website/landing integrations",
        ],
      },
      {
        id: "ops-as-a-service",
        title: "Ops-as-a-Service",
        description: "Your operations team, without hiring an operations team.",
        items: [
          "Fractional Head of Ops / RevOps",
          "Monthly subscription support",
          "Dedicated embedded specialist",
          "Tool ownership & roadmap",
        ],
      },
      {
        id: "training",
        title: "Training & Enablement",
        description: "Give your reps and leaders the clarity they've been missing.",
        items: [
          "AI skills for Sales & Support",
          "Salesforce Reporting Mastery",
          "Remote-work best practices",
          "GTM discipline & habits",
        ],
      },
    ],
  },
  removal: {
    heading: "We Don't Build More Chaos - We Remove It",
    description:
      "Your team should never feel like they're juggling tools, chasing data, or guessing the next step.",
    bullets: [
      "Pressure never becomes panic",
      "Workflows guide, not slow down",
      "AI supports humans, not replaces thinking",
      "Metrics actually mean something",
    ],
    footerNote: "Just like a hotel-grade kitchen: clean stations, clear roles, predictable performance.",
  },
  process: {
    heading: "Ready to turn chaos into clarity?",
    description:
      "Let's design a GTM engine that runs calmly, predictably, and efficiently - even during the rush.",
    cta: "Book an Intro",
  },
  contact: {
    eyebrow: "Contact",
    heading: "Tell us about your ops bottlenecks",
    description: "We respond within 1 business day with next steps.",
    labels: {
      name: "Name",
      email: "Email",
      company: "Company",
      message: "What do you need help with?",
    },
    placeholders: {
      name: "Your name",
      email: "you@company.com",
      company: "Company name",
      message: "Tell us about systems, workflows, or metrics you want fixed.",
    },
    cta: "Submit",
    sending: "Sending...",
    success: "Received. We'll be in touch.",
    error: "Something went wrong. Please email us directly.",
    successInline: "Received. We'll be in touch.",
    errorInline: "Something went wrong. Please email us directly.",
    ledBy: "Led by",
    person: "Jakub Krukowski",
    experience: "Sales & RevOps leadership across Tidio, Coloplast, LiveChat, Prezi.",
  },
  scope: {
    heading: "Led by",
    description: "Sales & RevOps leadership & consulting across LiveChat, Callstack, Prezi and others.",
  },
  closing: {
    heading: "Ready to run like a well-prepped kitchen?",
    description:
      "If you're tired of duct-taped tools, stressed reps, and dashboards you don't trust, let's redesign how your operations work - calmly, deliberately, and with room to scale.",
    cta: "Let's have a free chat",
  },
  footer: {
    toolsLabel: "Tools We Work With",
    copyright: "(c) 2025 The Rundown. Calm operations in a noisy world.",
  },
  stack: [
    "Salesforce",
    "HubSpot",
    "Zendesk",
    "Intercom",
    "LiveChat",
    "Tray.io",
    "n8n",
    "Zapier",
    "Outreach",
    "Apollo",
    "Clay",
  ],
  workflow: {
    copy: {
      panelTitle: "Automation Examples",
      activeWorkflow: "Active Workflow",
      simulate: "Simulate Workflow",
      replay: "Replay",
      processing: "Processing...",
      complete: "Complete",
      proven: "PROVEN",
    },
    useCases: [
      {
        id: "sales-crm",
        navTitle: "CRM Hygiene",
        title: "CRM Auto-Fill",
        description:
          "Clean data without slowing down your reps. We convert messy call notes into structured Salesforce intelligence - automatically and reliably.",
        roiLabel: "Efficiency Gain",
        roiValue: "15h+ saved / mo",
        steps: [
          { label: "Sales Call Recording", sub: "Capture conversation audio", theme: "red" },
          { label: "AI Transcription", sub: "Speaker-separated text", theme: "blue" },
          { label: "Extract Deal Insights", sub: "Budget, blockers, timeline", theme: "white" },
          { label: "Rep Review", sub: "Verify or edit key fields", theme: "orange" },
          { label: "Update Salesforce", sub: "Auto-log notes & fields", theme: "blue" },
        ],
        successMessage: "Intelligence Stored",
      },
      {
        id: "lead-flow",
        navTitle: "Inbound Leads",
        title: "Lead Workflow Automation",
        description:
          "Fast, consistent, territory-aware lead handling. Instant routing, enrichment, and outreach - no manual admin, no delays.",
        roiLabel: "Speed to Lead",
        roiValue: "4h -> 2min",
        steps: [
          { label: "New Website Lead", sub: "Captured instantly", theme: "green" },
          { label: "Enrich Lead Profile", sub: "Firmographics + intent", theme: "cyan" },
          { label: "Route to Sales Rep", sub: "By territory & rules", theme: "purple" },
          { label: "Draft Personal Email", sub: "AI-generated, human-reviewed", theme: "white" },
        ],
        successMessage: "Outreach Ready",
      },
      {
        id: "support-cx",
        navTitle: "CS Sentiment",
        title: "Support Sentiment Monitoring",
        description:
          "Catch at-risk accounts before churn becomes visible. We scan incoming tickets for frustration, urgency, and hidden churn signals.",
        roiLabel: "Churn Indicators",
        roiValue: "-24% Reduction",
        steps: [
          { label: "New Support Ticket", sub: "Ticket captured", theme: "white" },
          { label: "AI Sentiment Analysis", sub: "Detect negative trends", theme: "yellow" },
          { label: "Update Account Health", sub: "Log risk score", theme: "blue" },
          { label: "Alert Success Manager", sub: "Slack, email, or task", theme: "red" },
        ],
        successMessage: "Risk Flagged",
      },
      {
        id: "task-routing",
        navTitle: "Task Routing",
        title: "Support Flow Orchestration",
        description:
          "No more missed SLAs or tickets falling through cracks. Automatic categorization and routing ensures every request is owned immediately.",
        roiLabel: "SLA Breaches",
        roiValue: "0% Missed",
        steps: [
          { label: "New Ticket", sub: "Categorized by intent", theme: "white" },
          { label: "Priority Scoring", sub: "Urgency + history", theme: "orange" },
          { label: "Auto Routing", sub: "To specialist team", theme: "purple" },
          { label: "SLA Monitoring", sub: "Alerts before failure", theme: "red" },
          { label: "Close Loop", sub: "Tags & notes added", theme: "green" },
        ],
        successMessage: "Task Owned & Routed",
      },
      {
        id: "deal-desk",
        navTitle: "Deal Desk",
        title: "Deal Desk Automation",
        description:
          "Faster approvals. Cleaner quotes. Zero back-and-forth. We validate pricing and notify approvers automatically to unblock revenue.",
        roiLabel: "Approval Time",
        roiValue: "-80% Faster",
        steps: [
          { label: "Rep Request", sub: "Non-standard terms", theme: "white" },
          { label: "AI Validation", sub: "Check pricing alignment", theme: "blue" },
          { label: "Notify Approvers", sub: "Context sent to Slack", theme: "yellow" },
          { label: "Approval Flow", sub: "One-click button", theme: "green" },
          { label: "Update Contract", sub: "Autogenerate CPQ/PDF", theme: "purple" },
        ],
        successMessage: "Deal Unblocked",
      },
    ],
  },
};

export default en;
