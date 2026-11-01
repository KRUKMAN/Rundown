import type { Dictionary } from "./types";

const en: Dictionary = {
  locale: "en",
  metadata: {
    title: "CRM, automation and AI consultant · Jakub Krukowski, The Rundown",
    description:
      "Independent operations consultant. I set up CRMs (HubSpot, Salesforce), automate repetitive work and train teams to use AI. For construction, service and software companies.",
    ogLocale: "en_US",
  },
  nav: {
    work: "What I do",
    how: "How I work",
    faq: "FAQ",
    about: "About",
    cta: "Write to me",
    skip: "Skip to content",
    home: "The Rundown, home",
  },
  hero: {
    titleStart: "I make businesses",
    titleAccent: "easier to run.",
    body: "Independent operations consultant. I organise how work moves through your company, set up the CRM, automate the repetitive parts and teach your team to use AI properly. Construction, cleaning, agencies, software: if your week goes on chasing updates and retyping data, that's fixable.",
    cta: "Write to me",
    emailPrefix: "or email",
    replyNote: "I reply within one working day.",
  },
  clients: {
    label: "Teams I've worked with",
    names: ["LiveChat", "Prezi", "KODO", "Callstack", "Infogram"],
  },
  example: {
    title: "One job, before and after",
    intro: "A renovation client changes the scope halfway through. Same story in software, cleaning or catering.",
    beforeLabel: "Before",
    before: [
      "Client calls the owner about the change",
      "Owner tells the foreman on WhatsApp",
      "Nobody tells purchasing",
      "Wrong materials arrive on Thursday",
      "Friday goes on fixing it by phone",
      "The invoice still shows the old scope",
    ],
    beforeNote: "Everyone did their job. The information lived in four places and one person's head.",
    afterLabel: "After",
    after: [
      "The change is recorded once, on the job",
      "Foreman, purchasing and invoicing see it the same minute",
      "The client gets the updated quote to approve",
    ],
    afterNote: "One place per job, a few rules on who records what, and a Monday summary for the owner. Nothing new to learn.",
  },
  problems: {
    title: "Problems I fix",
    intro: "In owners' words. You don't need to know what a CRM is. You need these to stop.",
    paths:
      "People call when the business grew faster than its systems, when the clean-up kept getting postponed, or when something has worked for years and could work much better.",
    pathsLink: "Any of those is reason enough to talk.",
    items: [
      {
        quote: "Projects go wrong without warning.",
        fix: "One list of every job with its stage, owner and blocker. Problems show up a week early.",
      },
      {
        quote: "Nobody knows who owns what.",
        fix: "Every recurring task gets one named owner, visible to everyone.",
      },
      {
        quote: "I can't tell what's actually done.",
        fix: "Status updates as the work moves. No Friday round of check-in calls.",
      },
      {
        quote: "We answer the same questions all day.",
        fix: "Order status, deadlines, call-back requests: answered automatically. People handle the exceptions.",
      },
      {
        quote: "Everyone talks about AI. What would it do here?",
        fix: "Usually: drafts quotes from call notes, sorts the inbox, writes the weekly summary. I show it on your own data first.",
      },
      {
        quote: "We pay for tools nobody uses.",
        fix: "Every subscription reviewed: keep it, cut it or connect it to the rest.",
      },
    ],
  },
  services: {
    title: "What I do",
    intro: "Three kinds of work. Most clients start with the first.",
    groups: [
      {
        title: "Organise",
        summary: "Processes, ownership, CRM",
        items: [
          {
            title: "Process and ownership mapping",
            body: "Who does what, in what order, in which tool. Each process written down on one page.",
          },
          {
            title: "CRM implementation",
            body: "HubSpot, Salesforce or Attio, set up around how you sell. Data migrated, pipeline defined, team trained.",
          },
          {
            title: "Tool stack and tech debt clean-up",
            body: "Every subscription and legacy system reviewed: keep, replace, connect or switch off.",
          },
        ],
      },
      {
        title: "Automate",
        summary: "Workflow automation and AI",
        items: [
          {
            title: "Workflow automation",
            body: "Handoffs, reminders, reports and data entry run on their own, built in n8n, Tray.ai or Zapier.",
          },
          {
            title: "AI for repeatable tasks",
            body: "Quote drafts from call notes, inbox triage, routine replies, weekly summaries. A person approves what matters.",
          },
          {
            title: "Internal tools",
            body: "Quote calculators, dashboards, simple apps for field crews. Built when off-the-shelf software doesn't fit.",
          },
        ],
      },
      {
        title: "Train and hire",
        summary: "Training and the ops function",
        items: [
          {
            title: "AI and productivity training",
            body: "Hands-on sessions on your team's real tasks, with Claude, Notion AI and the tools you already pay for.",
          },
          {
            title: "Hiring your first ops person",
            body: "Role description, interviews and onboarding.",
          },
          {
            title: "Building the ops function",
            body: "Clear ownership, documented processes and a few metrics, so it runs without me.",
          },
        ],
      },
    ],
  },
  principles: {
    title: "Things I won't sell you",
    intro: "Plus three things you can hold me to.",
    promisesTitle: "What you can hold me to",
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
        body: "I don't resell software or take a cut from vendors. A recommendation is about fit.",
      },
      {
        title: "You own everything",
        body: "Accounts, automations and documentation are in your company's name from day one.",
      },
      {
        title: "A plan before a price",
        body: "A short review of how work flows today, then a written plan. You decide what's worth doing.",
      },
    ],
  },
  work: {
    title: "Some of the work",
    intro: "What was broken, what changed, what happened next.",
    draftNote: "Draft: visible on preview deployments only. Fill in before it goes live.",
    cases: [
      { company: "[Company]", readTime: "2 min", title: "Refunds that pay themselves out", result: "[One line on the result]" },
      { company: "[Company]", readTime: "3 min", title: "A HubSpot setup sales opens every day", result: "[One line on the result]" },
      { company: "[Company]", readTime: "2 min", title: "AI for a whole team, with rules people kept", result: "[One line on the result]" },
    ],
    quote: {
      text: "[Two or three sentences from a client on what changed.]",
      attribution: "[Name], [Role] at [Company]",
    },
  },
  faq: {
    title: "Questions",
    intro: "What people usually ask before the first call.",
    items: [
      {
        q: "What does an operations consultant do?",
        a: "Looks at how work moves through your company (sales, delivery, support, invoicing) and fixes where it gets stuck: unclear ownership, data retyped by hand, tools that don't talk to each other. In practice: organising processes, setting up a CRM, automating repetitive steps and training the team.",
      },
      {
        q: "Do I have to replace my tools or change everything at once?",
        a: "No. Most of the gain comes from cleaning up and connecting what you already have, and changing the two or three things that cost the most. I recommend new software only when the old one can't do the job.",
      },
      {
        q: "Which CRM is best for a small business?",
        a: "It depends on how you sell. HubSpot suits most service and B2B companies that want marketing and sales in one place. Salesforce fits complex sales with many custom rules. Attio works for small, flexible teams. A spreadsheet is fine until several people need the same customer data at the same time.",
      },
      {
        q: "Can AI help a non-tech business, like a construction or cleaning company?",
        a: "Yes, in unglamorous places: drafting quotes from site-visit notes, answering routine customer questions, summarising the week for the owner, sorting email. It works best on tasks that repeat daily and follow clear rules.",
      },
      {
        q: "How does working together start?",
        a: "With a free 30-minute call. If it's a fit, I review how work flows today and send a written plan with priorities and costs. You decide what happens next.",
      },
      {
        q: "Do you work with companies outside Poland?",
        a: "Yes. I work remotely, in English and Polish.",
      },
    ],
  },
  about: {
    title: "About",
    photoNote: "Photo of Jakub",
    paragraphs: [
      "I'm Jakub Krukowski. I've spent most of my career in operations, mostly at software companies, working between sales, support, finance and the systems that connect them. A construction firm has the same problems: too much lives in people's heads and too much gets retyped.",
      "I work independently. You deal with me from start to finish. When a project needs more hands, I bring in designers, engineers and operations specialists I've worked with before.",
    ],
    team: [
      { role: "Designers", body: "Customer portals, forms, help centres and internal tools." },
      { role: "Engineers", body: "Integrations and custom code where off-the-shelf tools stop." },
      { role: "Operations specialists", body: "Support, finance and sales operations, including at large companies." },
    ],
    location: "Based in Poland. Working in English and Polish.",
  },
  contact: {
    title: "Write to me like you'd write to a colleague.",
    body: "A few lines about what's slowing you down is enough. I reply within one working day, and if I'm not the right person, I'll tell you who is.",
    labels: { name: "Name", email: "Email", company: "Company", message: "What's getting in the way?", optional: "optional" },
    placeholders: { message: "A few sentences is enough." },
    submit: "Send",
    sending: "Sending…",
    success: "Thanks. It's in my inbox and I'll reply within one working day.",
    error: "That didn't go through. Please email me directly at jake@rundown.digital.",
    orEmail: "Or email me directly:",
    ps: "P.S. Not sure your problem is the kind I solve? Write anyway. Most good projects start with an email that begins “this might be a silly question”.",
  },
  footer: {
    line: "The Rundown. Independent operations consulting by Jakub Krukowski.",
    rights: "©",
  },
  logoPicker: { label: "Logo", open: "Choose logo", close: "Close", allLogos: "See all logos" },
  schema: {
    jobTitle: "Independent operations consultant",
    serviceTypes: [
      "CRM implementation",
      "Business process automation",
      "AI implementation for small businesses",
      "AI and productivity training",
      "Tool stack and tech debt clean-up",
      "Operations hiring and team building",
    ],
    knowsAbout: ["HubSpot", "Salesforce", "Attio", "Notion", "n8n", "Tray.ai", "Zapier", "Claude", "Revenue operations", "Process mapping"],
  },
};

export default en;
