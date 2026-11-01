import type { Dictionary } from "./types";

const en: Dictionary = {
  locale: "en",
  metadata: {
    title: "Operations, CRM and AI consultant for growing teams · The Rundown",
    description:
      "Independent operations and RevOps consultant for teams of 5 to 500: CRM implementation (HubSpot, Salesforce), process clean-up, automation and AI training.",
    ogLocale: "en_US",
  },
  nav: {
    work: "What I do",
    how: "How I work",
    faq: "FAQ",
    about: "About",
    cta: "Write to me",
    skip: "Skip to content",
    home: "home page",
    menu: "Menu",
    close: "Close menu",
  },
  hero: {
    titleStart: "I make businesses",
    titleAccent: "easier to run.",
    body: "Operations, CRM and AI help for teams of 5 to 500. Usually after fast growth or a rough stretch left behind too many tools, unclear ownership and processes that live in a few people's heads. I sort out how work moves, set up the CRM, automate the repetitive parts and stay until your team uses it.",
    cta: "Write to me",
    emailPrefix: "or email",
    replyNote: "I reply within one working day. The first call is free.",
  },
  clients: {
    label: "Teams I've worked with",
    names: ["LiveChat", "Prezi", "KODO", "Callstack", "Infogram"],
  },
  example: {
    title: "One change, before and after",
    intro: "A client changes the scope halfway through a project. Here's that week at a renovation company.",
    beforeLabel: "Before",
    before: [
      "The client calls their usual contact about the change",
      "The contact tells the site lead on WhatsApp",
      "Nobody tells purchasing",
      "Wrong materials arrive on Thursday",
      "Friday goes on fixing it by phone",
      "The invoice still shows the old scope",
    ],
    beforeNote: "Everyone did their job. The information lived in four places and one person's head.",
    afterLabel: "After",
    after: [
      "The change is recorded once, on the job",
      "Site lead, purchasing and invoicing see it the same minute",
      "The client gets the updated quote to approve",
    ],
    afterNote:
      "One place per job, a few rules on who records what, and a weekly summary for management. The team helped set the rules, so they follow them.",
    elsewhereTitle: "The same pattern in other industries",
    elsewhere: [
      {
        industry: "Software and SaaS",
        text: "A deal changes in the CRM. Onboarding, billing and support see the new terms without a handover meeting.",
      },
      {
        industry: "Agencies and professional services",
        text: "A client adds scope. The estimate, the capacity plan and the invoice update together.",
      },
      {
        industry: "E-commerce and retail",
        text: "A refund request is checked against the policy and paid. Support only sees the exceptions.",
      },
      {
        industry: "Manufacturing and distribution",
        text: "An order changes. Production planning and the customer's delivery date update in one step.",
      },
    ],
  },
  problems: {
    title: "Problems I fix",
    intro: "In the words of people who run teams. You don't need to know what a CRM is to recognise these.",
    paths:
      "People get in touch when the business grew faster than its systems, when the clean-up kept getting postponed, or when something has worked for years and could work much better.",
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
        quote: "I can't trust the pipeline numbers.",
        fix: "One definition for each deal stage, clear rules for updating it, and a report sales and finance both accept.",
      },
      {
        quote: "We bought HubSpot. Nobody uses it.",
        fix: "I sit with the people doing the work, cut the fields nobody needs and train until it becomes routine.",
      },
      {
        quote: "Leads wait days for a reply.",
        fix: "Routing rules send each lead to the right person within minutes, with the context attached.",
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
      {
        quote: "Our RevOps backlog keeps growing.",
        fix: "Extra senior hands for the clean-up, integrations and reports that never reach the top of the list.",
      },
    ],
  },
  services: {
    title: "What I do",
    intro: "Four areas. Most projects combine two or three of them.",
    groups: [
      {
        title: "Organise",
        summary: "Processes, ownership, tools",
        items: [
          {
            title: "Process and ownership mapping",
            body: "Who does what, in what order, in which tool. Each process written down on one page.",
          },
          {
            title: "CRM implementation and clean-up",
            body: "HubSpot, Salesforce or Attio, set up or rebuilt around how you sell and deliver. Data migrated, duplicates gone, pipeline defined.",
          },
          {
            title: "Tool stack and tech debt clean-up",
            body: "Every subscription and legacy system reviewed: keep, replace, connect or switch off.",
          },
        ],
      },
      {
        title: "Sales and RevOps",
        summary: "For sales, marketing and RevOps teams",
        items: [
          {
            title: "Lead routing and follow-up",
            body: "Rules that get every lead to the right person fast, with a clean handoff between marketing and sales.",
          },
          {
            title: "Pipeline and reporting",
            body: "Deal stages with clear entry and exit rules, and forecasts and dashboards that sales and finance agree on.",
          },
          {
            title: "CRM admin and backlog",
            body: "Senior help with the integrations, data fixes and reports your team hasn't had time for.",
          },
        ],
      },
      {
        title: "Automate",
        summary: "Workflow automation, AI, internal tools",
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
            body: "Quote calculators, dashboards, simple apps for field teams. Built when off-the-shelf software doesn't fit.",
          },
        ],
      },
      {
        title: "People",
        summary: "Training, adoption, the ops function",
        items: [
          {
            title: "AI and productivity training",
            body: "Hands-on sessions on your team's real tasks, with Claude, Notion AI and the tools you already pay for.",
          },
          {
            title: "Adoption and change",
            body: "The people who'll use the new setup help design it. Then short training on real work until it becomes routine.",
          },
          {
            title: "Hiring and building the ops function",
            body: "The role, interviews and onboarding for your first ops hire, then clear ownership, documented processes and a few metrics.",
          },
        ],
      },
    ],
  },
  process: {
    title: "How I work",
    intro: "Five steps. You can stop after any of them.",
    steps: [
      { title: "Free 30-minute call", body: "You describe what's slowing you down. I tell you honestly whether I can help." },
      { title: "Review", body: "I talk to the people doing the work and look at your tools, data and handoffs." },
      { title: "Written plan", body: "Priorities, costs and what to leave alone. You decide what happens next." },
      { title: "Build with your team", body: "Setup, migration and automation, done alongside the people who'll use them." },
      { title: "Handover and training", body: "Documentation, training and an owner on your side. Support afterwards if you want it." },
    ],
    engagementsTitle: "Ways to work together",
    engagements: [
      { title: "Review and plan", body: "A short review of how work flows today and a written plan with priorities and costs." },
      { title: "Fixed-scope project", body: "A defined piece of work, like a CRM implementation or an automation build, with an agreed scope and price." },
      { title: "Ongoing monthly help", body: "A set amount of time each month, as a fractional ops or RevOps lead or to work through your backlog." },
      { title: "Workshops", body: "Hands-on AI and productivity training for a team, built around their own tasks." },
    ],
  },
  fit: {
    title: "Who I work with",
    goodLabel: "A good fit",
    good: [
      "Teams of 5 to 500 people, in any industry",
      "Growing faster than your systems, or cleaning up after a rough stretch",
      "Someone on your side who will own the result",
      "Ops, sales and RevOps teams that want an outside view or senior hands",
    ],
    badLabel: "Probably not a fit",
    bad: [
      "You need a full-time development team",
      "You want a strategy deck without changing how work runs",
      "You're looking for the cheapest software licences",
    ],
  },
  ctaBand: {
    text: "Not sure which of these you need? That's what the free first call is for.",
    button: "Write to me",
  },
  principles: {
    title: "Things I won't sell you",
    intro: "",
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
        a: "An operations consultant looks at how work moves through your company (sales, delivery, support, invoicing) and fixes where it gets stuck: unclear ownership, data retyped by hand, tools that don't talk to each other. In practice that means organising processes, setting up a CRM, automating repetitive steps and training the team.",
      },
      {
        q: "Do I have to replace my tools or change everything at once?",
        a: "No. Most of the gain comes from cleaning up and connecting what you already have, and changing the two or three things that cost the most. I recommend new software only when the old one can't do the job.",
      },
      {
        q: "Which CRM should a growing company use?",
        a: "HubSpot suits most service and B2B companies that want marketing and sales in one place. Salesforce fits complex sales with many custom rules and someone to administer it. Attio works well for small, flexible teams. The right choice depends on how you sell and who will maintain it.",
      },
      {
        q: "Can AI help a company that isn't in tech?",
        a: "Yes, mostly in unglamorous places: drafting quotes from notes, answering routine customer questions, summarising the week for management, sorting email. It works best on tasks that repeat daily and follow clear rules.",
      },
      {
        q: "Can you work with our in-house team or RevOps lead?",
        a: "Yes. I can work alongside an internal ops, sales or RevOps person, on a defined project or as extra senior hands on their backlog.",
      },
      {
        q: "What happens to our data when AI is involved?",
        a: "AI tools only see the data a task needs, and only in tools your company has approved. Sensitive data stays out unless you decide otherwise, and a person checks anything that matters.",
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
      "I'm Jakub Krukowski. I've spent most of my career in operations, mostly at software companies, working between sales, support, finance and the systems that connect them. The same problems show up in every industry: too much lives in people's heads and too much gets retyped.",
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
    notice: "I use your details to reply and, if you ask, to prepare an offer.",
    noticeLink: "Privacy policy",
  },
  footer: {
    line: "The Rundown. Independent operations consulting by Jakub Krukowski.",
    rights: "©",
    privacy: "Privacy policy",
    terms: "Terms of use",
    cookies: "Cookie settings",
    backHome: "Back to the home page",
  },
  consent: {
    label: "Cookie settings",
    body: "Page statistics on this site work without cookies. With your OK, HubSpot also sets cookies so I can see which pages you visited if you get in touch. Nothing else.",
    accept: "Accept",
    reject: "Reject",
    policy: "Details in the privacy policy",
  },
  logoPicker: { label: "Logo", open: "Choose logo", close: "Close", allLogos: "See all logos" },
  schema: {
    jobTitle: "Independent operations and RevOps consultant",
    serviceTypes: [
      "CRM implementation and clean-up",
      "Revenue operations (RevOps) consulting",
      "Business process automation",
      "AI implementation for growing companies",
      "AI and productivity training",
      "Tool stack and tech debt clean-up",
      "Operations hiring and team building",
    ],
    knowsAbout: ["HubSpot", "Salesforce", "Attio", "Notion", "n8n", "Tray.ai", "Zapier", "Claude", "Revenue operations", "Process mapping", "Change management"],
  },
};

export default en;
