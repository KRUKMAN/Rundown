import type { Dictionary } from "./types";

const en: Dictionary = {
  locale: "en",
  metadata: {
    title: "The Rundown · Jakub Krukowski · Independent operations consulting",
    description:
      "I make businesses easier to run. CRMs, organised work, automation and practical AI for construction firms, service companies and software teams. Independent, so I'll also tell you when to buy nothing.",
    ogLocale: "en_US",
  },
  nav: {
    work: "What I do",
    how: "How I work",
    about: "About",
    cta: "Write to me",
    languageLabel: "Language",
    otherLanguage: "Polski",
    skip: "Skip to content",
    home: "The Rundown, home",
  },
  hero: {
    titleStart: "I make businesses",
    titleAccent: "easier to run.",
    body: "Construction firm, cleaning company, software house. If your week goes on chasing people for updates and copying the same details between spreadsheets, there's a calmer way to run it. I'm independent, so sometimes the answer is to buy nothing at all.",
    cta: "Write to me",
    emailPrefix: "or email",
    replyNote: "I reply within one working day.",
  },
  clients: {
    label: "Teams I've worked with",
    names: ["LiveChat", "Prezi", "KODO", "Callstack", "Infogram"],
  },
  example: {
    title: "What this looks like",
    intro:
      "A client changes their mind halfway through a job. Here's that week at a renovation company, before and after. Swap in a software release, a cleaning contract or a catering order. The shape is the same.",
    beforeLabel: "Before",
    before: [
      "Client calls the owner about the change",
      "Owner tells the foreman on WhatsApp",
      "Nobody tells the person ordering materials",
      "Wrong materials arrive on Thursday",
      "Friday is spent on the phone fixing it",
      "The invoice still shows the old scope",
    ],
    beforeNote:
      "Everyone did their job. The information just lived in four places and one person's head.",
    afterLabel: "After",
    after: [
      "The change is written down once, on the job",
      "Foreman, purchasing and invoicing see it the same minute",
      "The updated quote goes to the client for a yes",
    ],
    afterNote:
      "Nothing new to learn. One place where every job lives, and a few rules about who writes what down. The owner gets a short Monday summary instead of a Friday fire.",
  },
  problems: {
    title: "What I hear, and what changes",
    intro:
      "You don't need to know what a CRM, Notion or an AI agent is. You need the problem to stop. These are the ones I hear most, in owners' words, and what we'd actually set up.",
    paths:
      "People get here three ways: they grew faster than their setup, they always meant to fix it and never had a quiet month, or it has worked well enough since day one and it never occurred to them it could be different.",
    pathsLink: "Any of those is enough to talk.",
    items: [
      {
        quote: "Projects blow up out of nowhere.",
        answer:
          "They rarely do. The warning signs were there, just not in one place. We set up a single view of every job: stage, owner, what it's waiting on. You see trouble a week early instead of on the day.",
      },
      {
        quote: "Nobody knows who owns what.",
        answer:
          "Every recurring task that matters gets one name next to it, written down where everyone can see it. No reorganisation, just a list that stays up to date.",
      },
      {
        quote: "I can't tell what's actually done.",
        answer:
          "Status updates itself as the work moves, so there's no Friday round of “where are we on this?”. You stop asking because you can already see it.",
      },
      {
        quote: "Everything feels like a fire.",
        answer:
          "Most fires are the same few questions on repeat: where's my order, when is it due, did anyone call them back. Those get answered automatically. Your people keep the ones that need a person.",
      },
      {
        quote: "Everyone says AI. I don't know what it would do here.",
        answer:
          "Usually: read the call notes and draft the quote, sort the inbox, answer routine questions, write the Monday summary. I'll show you on your own work, then you decide.",
      },
      {
        quote: "We've always done it this way.",
        answer:
          "That's fine. We keep what works and change the two or three things costing you the most. Then we stop.",
      },
    ],
  },
  services: {
    title: "What I do",
    intro: "Most projects move through these three in order. Some clients only need the first.",
    groups: [
      {
        title: "Sort out how work runs",
        tools: "HubSpot, Salesforce, Attio, Notion",
        items: [
          {
            title: "Organise the work",
            body: "Projects, jobs and requests in one place, each with an owner, a status and a next step. Everyone can see what's happening without asking.",
          },
          {
            title: "A CRM people actually use",
            body: "Every customer, quote and conversation in one system your team opens without being reminded. I've implemented HubSpot from scratch and run Salesforce for teams that outgrew their first setup.",
          },
          {
            title: "Clean up the tool stack",
            body: "Old systems nobody dares touch, three tools doing the same job, a spreadsheet holding everything together. We decide what stays, what goes and what gets connected.",
          },
        ],
      },
      {
        title: "Take repeat work off people",
        tools: "n8n, Tray.ai, Zapier, Claude, Notion AI",
        items: [
          {
            title: "Automations",
            body: "Handoffs, reminders, reports and data entry that happen on their own. When a job is signed, the right people hear about it and the right documents already exist.",
          },
          {
            title: "AI where it earns its place",
            body: "Assistants that draft quotes from call notes, sort the inbox, answer routine questions or write the weekly summary. A person still checks anything that matters.",
          },
          {
            title: "Small tools for your team",
            body: "When off-the-shelf software doesn't fit: a quote calculator, an internal dashboard, a simple app for the crew on site. Built so your team gets more done without more people.",
          },
        ],
      },
      {
        title: "Make it stick",
        tools: "Workshops, playbooks, hiring",
        items: [
          {
            title: "Training: working smarter, with AI",
            body: "Practical sessions on your own work: how to get real use out of Claude, Notion AI and the tools you already pay for, and where not to bother. People leave with a few things they'll use on Monday.",
          },
          {
            title: "Hiring and growing operations",
            body: "Writing the role, interviewing and onboarding your first operations person. Then helping the function grow up: clear ownership, written-down processes, a few numbers worth watching.",
          },
        ],
      },
    ],
  },
  principles: {
    title: "Things I won't sell you",
    intro: "And three things you can hold me to.",
    wont: [
      { struck: "A new system", rest: "when the one you have mostly needs cleaning up." },
      { struck: "An AI agent", rest: "for a job a simple rule would handle." },
      { struck: "A strategy deck", rest: "nobody opens after the meeting." },
      { struck: "Twelve tools", rest: "where four would do." },
      { struck: "A retainer", rest: "that keeps running after it stops being useful." },
    ],
    promises: [
      {
        title: "No commissions",
        body: "I don't resell software or take a cut from vendors, so a recommendation is about fit and nothing else.",
      },
      {
        title: "You own everything",
        body: "Accounts, automations and documentation sit in your name from day one.",
      },
      {
        title: "A plan before a price",
        body: "We start with a short audit and a written plan. Then you decide what's worth doing.",
      },
    ],
  },
  work: {
    title: "Some of the work",
    intro: "Short write-ups. What was broken, what I changed, what happened next.",
    draftNote: "Draft: visible on preview deployments only. Fill in before it goes live.",
    cases: [
      { company: "[Company]", readTime: "2 min", title: "Refunds that pay themselves out", result: "[One line on the result]" },
      { company: "[Company]", readTime: "3 min", title: "A HubSpot setup sales actually opens", result: "[One line on the result]" },
      { company: "[Company]", readTime: "2 min", title: "AI for a whole team, with rules people kept", result: "[One line on the result]" },
    ],
    quote: {
      text: "[Two or three sentences from a client on what changed.]",
      attribution: "[Name], [Role] at [Company]",
    },
  },
  about: {
    title: "About",
    photoNote: "Photo of Jakub",
    paragraphs: [
      "I'm Jakub Krukowski. I've spent most of my career in operations, largely at software companies, in the space between sales, support, finance and the tools that connect them. The problems turn out to be the same whether you ship code or clean offices: too much lives in people's heads, and too much gets copied by hand.",
      "I work independently, so the advice is about your business and nothing else. You deal with me from start to finish. When a job needs more hands, I bring in people I've worked with and rate highly:",
    ],
    teamIntro: "",
    team: [
      { role: "Designers", body: "Customer-facing flows, help centres and internal tools people don't hate using." },
      { role: "Engineers", body: "Integrations and custom builds where no-code runs out." },
      { role: "Operations specialists", body: "Support, finance and revenue operations, run at scale." },
    ],
    location: "Based in Poland. Working in English and Polish.",
  },
  contact: {
    title: "Write to me like you'd write to a colleague.",
    body: "A few lines about what's getting in the way is plenty. I reply within one working day. If I'm not the right person, I'll say so and point you to someone who is.",
    labels: { name: "Name", email: "Email", company: "Company", message: "What's getting in the way?", optional: "optional" },
    placeholders: { message: "A few sentences is enough." },
    submit: "Send",
    sending: "Sending…",
    success: "Thanks. It's in my inbox and I'll reply within one working day.",
    error: "That didn't go through. Please email me directly at jake@rundown.digital.",
    orEmail: "Or email me directly:",
    ps: "P.S. If you're not sure whether your problem is the kind I solve, write anyway. Most good projects start with an email that begins “this might be a silly question”.",
  },
  footer: {
    line: "The Rundown. Independent operations consulting by Jakub Krukowski.",
    rights: "©",
  },
  logoPicker: { label: "Logo", open: "Choose logo", close: "Close", allLogos: "See all logos" },
};

export default en;
