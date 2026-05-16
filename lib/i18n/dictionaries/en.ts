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
    heading: "We help growing teams sort out their",
    highlight: "CRM and operations.",
    description:
      "We pick the right CRM, set it up properly, automate the repetitive work, and put the processes in place that should have been there from the start. Most of our clients have never had a dedicated ops person before — they had spreadsheets, a few tools, and a growing sense that something wasn't quite working.",
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
          "AI triage and first response",
          "SLA monitoring & alerting",
          "CRM sync so agents see the full history",
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
    footerNote: "A Michelin kitchen doesn't improvise under pressure. It's prepared. That's what we build.",
  },
  process: {
    heading: "Ready to stop running your business on spreadsheets?",
    description:
      "Tell us what you have and where it's breaking. We'll tell you what's worth fixing first.",
    cta: "Book an Intro",
  },
  contact: {
    eyebrow: "Contact",
    heading: "Tell us where your operations are breaking down",
    description: "We usually reply within a day.",
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
          "Your reps take a call. The CRM fills itself in — notes, deal fields, next steps — from the recording. Nobody has to type anything up afterwards.",
        roiLabel: "Time saved",
        roiValue: "15h+ per rep / mo",
        steps: [
          { label: "Sales Call Recording", sub: "Captured automatically", theme: "red" },
          { label: "AI Transcription", sub: "Who said what, separated", theme: "blue" },
          { label: "Pull Out Key Info", sub: "Budget, blockers, next steps", theme: "white" },
          { label: "Rep Quick Review", sub: "Edit anything that's off", theme: "orange" },
          { label: "Update CRM", sub: "Notes and fields logged", theme: "blue" },
        ],
        successMessage: "CRM Updated",
      },
      {
        id: "lead-flow",
        navTitle: "Inbound Leads",
        title: "Lead Workflow Automation",
        description:
          "A new lead comes in, gets enriched with company data, ends up in front of the right rep, and a draft email is ready for them to send. Two minutes instead of four hours.",
        roiLabel: "Speed to lead",
        roiValue: "4h → 2min",
        steps: [
          { label: "New Website Lead", sub: "Form submitted", theme: "green" },
          { label: "Enrich Profile", sub: "Company size, industry, signal", theme: "cyan" },
          { label: "Route to Right Rep", sub: "By territory or account", theme: "purple" },
          { label: "Draft First Email", sub: "AI writes it, rep reviews", theme: "white" },
        ],
        successMessage: "Ready to Send",
      },
      {
        id: "support-handoff",
        navTitle: "Chat Handoff",
        title: "Support Chat Escalation",
        description:
          "The bot answers the easy questions. When someone needs a real person, the handoff happens automatically — and the full conversation lands in Intercom and your CRM, so the agent isn't asking the customer to repeat themselves.",
        roiLabel: "Handled by bot",
        roiValue: "~70% of chats",
        steps: [
          { label: "Visitor Starts Chat", sub: "Tidio or LiveChat widget", theme: "green" },
          { label: "Bot Handles FAQ", sub: "Pricing, hours, basic help", theme: "cyan" },
          { label: "Hand Off to Agent", sub: "With full conversation history", theme: "orange" },
          { label: "Create Ticket", sub: "Logged in Intercom", theme: "purple" },
          { label: "Sync to CRM", sub: "Linked to the account", theme: "blue" },
        ],
        successMessage: "Logged and Resolved",
      },
      {
        id: "crm-onboarding",
        navTitle: "Deal → Onboard",
        title: "CRM Onboarding Trigger",
        description:
          "When a deal is marked closed, the CRM creates the onboarding tasks, assigns a CSM, sends the welcome email, and sets up the account in your support tool. Nobody has to remember to do any of it.",
        roiLabel: "Manual handoffs",
        roiValue: "None",
        steps: [
          { label: "Deal Marked Closed", sub: "Stage change in the CRM", theme: "green" },
          { label: "Onboarding Tasks Created", sub: "Standard checklist", theme: "white" },
          { label: "CSM Assigned", sub: "Based on the account", theme: "purple" },
          { label: "Welcome Email Sent", sub: "Plus a Slack ping internally", theme: "yellow" },
          { label: "Account Set Up in Support Tool", sub: "Ready in Intercom", theme: "blue" },
        ],
        successMessage: "Onboarding Started",
      },
      {
        id: "stack-health",
        navTitle: "Stack Health",
        title: "CRM Health Monitor",
        description:
          "Left alone, your CRM quietly fills up with stale deals, missing fields, and duplicate contacts. This runs a check every week and tells your ops team what needs fixing before anyone has to ask.",
        roiLabel: "Data hygiene",
        roiValue: "Weekly, automatic",
        steps: [
          { label: "Weekly CRM Scan", sub: "Runs automatically", theme: "white" },
          { label: "Find What's Off", sub: "Stale deals, missing fields", theme: "red" },
          { label: "Flag Duplicates", sub: "Suggests merges", theme: "orange" },
          { label: "Send to Ops", sub: "Slack summary with task list", theme: "yellow" },
          { label: "Report to Leadership", sub: "Trends over time", theme: "green" },
        ],
        successMessage: "CRM Clean",
      },
    ],
  },
};

export default en;
