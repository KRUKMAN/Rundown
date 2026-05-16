import type { Dictionary } from "./types";

const en: Dictionary = {
  locale: "en",
  metadata: {
    title: "The Rundown | CRM, Automation & Operational Excellence",
    description:
      "We set up CRMs, automate the repetitive work, and help sales and ops teams stop running on spreadsheets, scattered tools, and things that keep falling through the cracks.",
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
    heading: "CRM, Automation, and Proper Ops —",
    highlight: "Done Right.",
    description:
      "We set up CRMs, automate the repetitive work, and help teams figure out how their operations should actually run. Most of our clients had never had a dedicated ops person before — they just had spreadsheets and a growing sense that something wasn't working.",
    primaryCta: "Let's have a free chat",
  },
  systemPanel: {
    fileLabel: "crm_setup_v2.sh",
    typedLines: [
      "> System Check: THE RUNDOWN v2.0",
      "> Scanning CRM Configuration.......[FOUND GAPS]",
      "> Detecting Manual Handoffs........[ELIMINATED]",
      "> Configuring HubSpot Pipelines....[DONE]",
      "> Syncing CRM to Support Stack.....[ACTIVE]",
      "> Deploying AI Automations.........[ONLINE]",
      "> STATUS: READY TO OPERATE",
    ],
  },
  kitchen: {
    heading: "Your Business Should Run Like a Michelin Kitchen",
    subheading: "The best kitchens don't win on adrenaline - they win on preparation.",
    leftTitle: "We build the back-of-house where:",
    bullets: [
      "Everyone knows what they're supposed to be doing without being chased",
      "Leaders can trust the numbers they're looking at",
      "New people get up to speed in days, not months",
    ],
    rightTitle: "The Result:",
    quote:
      '"Your team gets to focus on selling, supporting, and delivering — because the coordination and admin sort themselves out."',
  },
  demos: {
    eyebrow: "Live Examples",
    heading: "Actual Workflows, Not Slide-Deck Promises.",
    description: "Here's what it looks like when we build it.",
  },
  services: {
    heading: "What We Do",
    description: "Four areas. We do each one properly and make sure they work together.",
    cards: [
      {
        id: "crm-implementation",
        title: "CRM Implementation",
        description: "We pick the right CRM for your team, set it up properly, and make sure people actually use it — not just open it once and go back to their spreadsheet.",
        items: [
          "CRM selection based on how your team actually works",
          "Full setup, configuration & migration",
          "Custom objects, pipelines & deal stages",
          "Automations & AI workflows built in",
          "Data hygiene & deduplication",
          "Connected to the rest of your tools",
        ],
      },
      {
        id: "support-stack",
        title: "Support & Chat Stack",
        description: "Live chat and support tools that handle customers properly — without relying on someone to manually check an inbox or Slack.",
        items: [
          "Chat widget & bot implementation",
          "Ticket routing & escalation logic",
          "AI-powered triage & first response",
          "SLA monitoring & alerting",
          "CRM sync for full customer context",
        ],
      },
      {
        id: "gtm-stack",
        title: "GTM Stack Management",
        description: "Too many tools, none of them talking to each other? We audit what you have, cut what you don't need, and make the rest work together.",
        items: [
          "Audit of what you have and what's missing",
          "Tool selection for your team and budget",
          "Getting the tools to talk to each other",
          "Vendor evaluation & onboarding",
          "Ongoing check-ins to catch issues before they break things",
        ],
      },
      {
        id: "ops-consulting",
        title: "Operational Excellence Consulting",
        description: "Growing fast without proper ops usually catches up with you. We've seen it enough times to know where it breaks — and how to stay ahead of it.",
        items: [
          "Sales and ops playbook design",
          "Fractional RevOps / Head of Ops",
          "Spotting problems before they get expensive",
          "Process documentation & training",
          "Reporting that leadership trusts",
        ],
      },
    ],
  },
  removal: {
    heading: "We've Seen What Goes Wrong — So You Don't Have To",
    description:
      "Most operational problems at growing companies are completely predictable. Spreadsheets that get too big to trust. CRMs nobody uses. Tools that create more work than they save. We've fixed all of it before.",
    bullets: [
      "A CRM your team actually opens",
      "No more \"who has the latest version of that sheet?\"",
      "No more copying data from one tool into another by hand",
      "Processes that survive when someone is on holiday",
    ],
    footerNote: "Just like a hotel-grade kitchen: clean stations, clear roles, predictable performance.",
  },
  process: {
    heading: "Ready to stop running your business on spreadsheets?",
    description:
      "Let's start with what you have, figure out what's missing, and build something your team will actually use.",
    cta: "Book an Intro",
  },
  contact: {
    eyebrow: "Contact",
    heading: "Tell us where your operations are breaking down",
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
      message: "Tell us about your current CRM, tools, or ops challenges.",
    },
    cta: "Submit",
    sending: "Sending...",
    success: "Received. We'll be in touch.",
    error: "Something went wrong. Please email us directly.",
    successInline: "Received. We'll be in touch.",
    errorInline: "Something went wrong. Please email us directly.",
    ledBy: "Led by",
    person: "Jakub Krukowski",
    experience: "CRM & RevOps implementation across Tidio, Coloplast, LiveChat, Prezi.",
  },
  scope: {
    heading: "Led by",
    description: "CRM & RevOps implementation across LiveChat, Callstack, Prezi and others.",
  },
  closing: {
    heading: "If your team is outgrowing how you currently work — let's talk.",
    description:
      "If any of this sounds familiar — the spreadsheets, the CRM nobody uses, the tools that don't connect — it's probably worth a conversation. We start with what you have and figure out what actually needs to change.",
    cta: "Let's have a free chat",
  },
  footer: {
    toolsLabel: "Tools We Work With",
    copyright: "(c) 2025 The Rundown. Your ops, done properly.",
  },
  stack: [
    "HubSpot",
    "Attio",
    "Salesforce",
    "OpenMercato",
    "Tidio",
    "Intercom",
    "LiveChat",
    "n8n",
    "Zapier",
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
          "Clean data without slowing down your reps. We convert messy call notes into structured CRM intelligence - automatically and reliably.",
        roiLabel: "Efficiency Gain",
        roiValue: "15h+ saved / mo",
        steps: [
          { label: "Sales Call Recording", sub: "Capture conversation audio", theme: "red" },
          { label: "AI Transcription", sub: "Speaker-separated text", theme: "blue" },
          { label: "Extract Deal Insights", sub: "Budget, blockers, timeline", theme: "white" },
          { label: "Rep Review", sub: "Verify or edit key fields", theme: "orange" },
          { label: "Update CRM", sub: "Auto-log notes & fields", theme: "blue" },
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
        id: "support-handoff",
        navTitle: "Chat Handoff",
        title: "Support Chat Escalation",
        description:
          "Turn your chat widget into a full support engine. Bot handles FAQs, escalates live to an agent, and logs everything back to your CRM — automatically.",
        roiLabel: "Bot Resolution Rate",
        roiValue: "70%+ self-served",
        steps: [
          { label: "Visitor Starts Chat", sub: "Tidio / LiveChat widget", theme: "green" },
          { label: "Bot Handles FAQ", sub: "Instant AI response", theme: "cyan" },
          { label: "Escalate to Agent", sub: "Context passed seamlessly", theme: "orange" },
          { label: "Create Support Ticket", sub: "Auto-logged in Intercom", theme: "purple" },
          { label: "Sync to CRM", sub: "Full interaction history", theme: "blue" },
        ],
        successMessage: "Case Resolved & Logged",
      },
      {
        id: "crm-onboarding",
        navTitle: "Deal → Onboard",
        title: "CRM Onboarding Trigger",
        description:
          "The moment a deal closes, your CRM kicks off onboarding — no manual handoffs, no missed tasks, no frustrated new customers waiting to hear from you.",
        roiLabel: "Manual Handoff Steps",
        roiValue: "0 — fully automated",
        steps: [
          { label: "Deal Closed in CRM", sub: "Stage change triggers flow", theme: "green" },
          { label: "Create Onboarding Tasks", sub: "Checklist auto-generated", theme: "white" },
          { label: "Assign CSM", sub: "Routed by segment & region", theme: "purple" },
          { label: "Send Welcome Sequence", sub: "Personalized email + Slack", theme: "yellow" },
          { label: "Sync to Support Stack", sub: "Account live in Intercom", theme: "blue" },
        ],
        successMessage: "Customer Onboarding Live",
      },
      {
        id: "stack-health",
        navTitle: "Stack Health",
        title: "CRM Health Monitor",
        description:
          "Stale deals, missing fields, and duplicate contacts are silent killers. We run automated data quality checks and alert your ops team before small problems become expensive ones.",
        roiLabel: "Data Quality Score",
        roiValue: "+40% improvement",
        steps: [
          { label: "Scheduled CRM Scan", sub: "Weekly automated check", theme: "white" },
          { label: "Detect Issues", sub: "Stale deals, missing fields", theme: "red" },
          { label: "Flag Duplicates", sub: "Auto-merge candidates", theme: "orange" },
          { label: "Alert Ops Team", sub: "Slack summary + task list", theme: "yellow" },
          { label: "Health Report", sub: "Sent to leadership", theme: "green" },
        ],
        successMessage: "CRM Data Clean",
      },
    ],
  },
};

export default en;
