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
    title: "I make businesses easier to run.",
    body: "Operations, CRM and AI help for teams of 5 to 500. Usually after fast growth or a rough stretch left behind too many tools, unclear ownership and processes that live in a few people’s heads. I sort out how work moves, set up the CRM, automate the repetitive parts and train your team to use it.",
    cta: "Write to me",
    emailPrefix: "or email",
    replyNote: "I usually reply within one working day. The first call is free.",
    channels: ["WhatsApp", "phone", "email", "spreadsheet", "a meeting", "someone’s head"],
    figureAlt: "Six lines labelled WhatsApp, phone, email, spreadsheet, a meeting and someone’s head run from the left, cross and merge into one red line, which turns down and continues as the line running down this page.",
  },
  clients: {
    label: "Teams I’ve worked with",
    names: ["LiveChat", "Prezi", "KODO", "Callstack", "Infogram"],
  },
  problems: {
    title: "Which one is yours?",
    items: [
      { quote: "Projects go wrong without warning.", fix: "One list of every job: stage, owner, blocker." },
      { quote: "Nobody knows who owns what.", fix: "Every recurring task gets one named owner, visible to everyone." },
      { quote: "I can’t trust the pipeline numbers.", fix: "One definition for each deal stage, and a few rules for keeping it current." },
      { quote: "We bought HubSpot. Nobody uses it.", fix: "I sit with the people who use it and cut the fields nobody fills in." },
      { quote: "Leads wait days for a reply.", fix: "Routing rules send each lead to the right person, with the context attached." },
      {
        quote: "Everyone talks about AI. What would it do here?",
        fix: "I pick one task your team does every day and show what AI could do with it. Before you buy anything.",
      },
    ],
  },
  who: {
    title: "I work with three kinds of people.",
    intro: "Any industry. 5 to 500 people.",
    kinds: [
      {
        title: "You run the company.",
        body: "Work keeps getting lost between people and tools. You think a CRM would help and have no time to work out which one, or how. That’s my job. One condition: somebody on your side owns the result.",
      },
      {
        title: "You run ops or RevOps.",
        body: "More backlog than hours, or a project that needs an outside eye. Hand me the project, or a slice of the backlog. I work alongside your team.",
      },
      {
        title: "You run a team of specialists.",
        body: "Good people, losing hours to work a rule or a tool could do. I train them to work smarter, with AI where it helps, and automate the parts that repeat.",
      },
    ],
  },
  example: {
    title: ["The client changes the scope.", "Then what?"],
    beforeLabel: "the usual week at a renovation company",
    before: [
      "The client calls their usual contact about the change",
      "The contact tells the site lead on WhatsApp",
      "Nobody tells purchasing",
      "Wrong materials arrive on Thursday",
      "Friday goes on fixing it by phone",
      "The invoice still shows the old scope",
    ],
    beforeNote: "Everyone does their job. The information lives in four places and one person’s head.",
    afterLabel: "what I’d set up instead",
    after: [
      "The change is recorded once, on the job",
      "Site lead, purchasing and invoicing see it the same minute",
      "The client gets the updated quote to approve",
    ],
    afterNote: "That takes a few rules on who records what and a weekly summary for management. The site lead and purchasing agree the rules before I build anything.",
  },
  services: {
    title: "Here’s what I do.",
    intro: "Most projects need two or three of these.",
    groups: [
      {
        title: "Organise",
        items: [
          "Process and ownership mapping",
          "CRM implementation and clean-up",
          "Tool stack and tech debt clean-up",
        ],
      },
      {
        title: "Sales and RevOps",
        items: ["Lead routing and follow-up", "Pipeline and reporting", "CRM admin and backlog"],
      },
      {
        title: "Automate",
        items: ["Workflow automation", "AI for repeatable tasks", "Internal tools"],
      },
      {
        title: "People",
        items: [
          "AI and productivity training",
          "Adoption and change",
          "Hiring and building the ops function",
        ],
      },
    ],
  },
  process: {
    title: "It starts with a free call.",
    steps: [
      { title: "Free call", body: "30 minutes. You tell me what’s slowing you down. I say whether I’d take it on." },
      { title: "Review", body: "I talk to the people doing the work and look at your tools, data and handoffs." },
      { title: "Written plan", body: "Priorities, costs and what to leave alone. You decide what happens next." },
      { title: "Build with your team", body: "Setup, migration and automation, done alongside the people who’ll use them." },
      { title: "Handover and training", body: "Documentation, training and an owner on your side. I can stay on if you want." },
    ],
    engagementsTitle: "Four ways to hire me.",
    engagements: [
      { title: "Review and plan", body: "The first three steps and nothing more. The plan is yours, with me or without." },
      { title: "Fixed-scope project", body: "One defined piece of work, say a CRM implementation. Scope and price agreed before I start." },
      { title: "Ongoing monthly help", body: "A set amount of my time each month, as your fractional ops or RevOps lead or on the backlog." },
      { title: "Workshops", body: "Hands-on AI and productivity training, built around your team’s own tasks." },
    ],
  },
  ctaBand: { text: "Not sure which of these you need? That’s what the free first call is for.", button: "Tell me what’s in the way" },
  principles: {
    title: "Things I won’t sell you",
    wont: [
      { struck: "A new system", rest: "when the one you have mostly needs cleaning up." },
      { struck: "An AI agent", rest: "for a job a simple rule would handle." },
      { struck: "A strategy deck", rest: "nobody opens after the meeting." },
      { struck: "Twelve tools", rest: "where four would do." },
      { struck: "A dashboard", rest: "nobody looks at." },
    ],
    wrong: "I’m also the wrong person if you need a full-time development team, or a new system live by next week.",
    promisesTitle: "What you can hold me to",
    promises: [
      {
        title: "No commissions",
        body: "I don’t resell software or take a cut from vendors, so I’ve no reason to push any of them.",
      },
      {
        title: "Your accounts, not mine",
        body: "Accounts, automations and documentation are set up in your company’s name.",
      },
    ],
  },
  about: {
    title: "I’m Jakub Krukowski.",
    paragraphs: [
      "I’ve spent most of my career in operations, mostly at software companies, working between sales, support, finance and the systems that connect them. Every industry has the same two problems. Too much lives in people’s heads and too much gets retyped.",
      "I work on my own. You deal with me from start to finish. When a project needs more hands, I bring in designers, engineers and operations specialists I’ve worked with before.",
    ],
    location: "Based in Europe. Working in English and Polish.",
  },
  faq: {
    title: "What people ask before the first call.",
    items: [
      {
        q: "What does an operations consultant do?",
        a: "An operations consultant looks at how work moves through your company (sales, delivery, support, invoicing) and fixes where it gets stuck: unclear ownership, data retyped by hand, tools that don’t talk to each other. In practice that means organising processes, setting up a CRM, automating repetitive steps and training the team.",
      },
      {
        q: "Which CRM should a growing company use?",
        a: "HubSpot suits most service and B2B companies that want marketing and sales in one place. Salesforce fits complex sales with many custom rules and someone to administer it. Attio works well for small, flexible teams. The right choice depends on how you sell and who will maintain it.",
      },
      {
        q: "Can AI help a company that isn’t in tech?",
        a: "Yes. The best candidates are tasks that repeat every day and follow clear rules, and every company has them: routine customer questions, notes that become documents, incoming requests that need sorting.",
      },
      {
        q: "Can you work with our in-house team or RevOps lead?",
        a: "Yes. I can work alongside an internal ops, sales or RevOps person, on a defined project or by taking items off their backlog.",
      },
      {
        q: "What happens to our data when AI is involved?",
        a: "Only tools your company approves, usually business plans of Claude or ChatGPT or the AI built into HubSpot or Notion, on plans whose terms exclude training on your data. We check the current terms together before starting. They get only the data a task needs, confidential data stays out unless you decide otherwise, and a person checks anything that matters.",
      },
      {
        q: "What happens after the handover?",
        a: "Your team runs it. The setup is documented, sits in your company’s accounts and has an owner on your side. Ongoing monthly help can be agreed if you want it.",
      },
    ],
  },
  contact: {
    title: "Write to me like you’d write to a colleague.",
    body: "A few lines about what’s slowing you down is enough. I usually reply within one working day. If I’m not the right person, I’ll say so, and suggest someone if I know a better fit.",
    labels: { name: "Name", email: "Email", company: "Company", message: "What’s getting in the way?", optional: "optional" },
    placeholders: { message: "A few sentences is enough." },
    submit: "Send",
    sending: "Sending…",
    success: "Thanks, it’s arrived. I’ll get back to you as soon as I can.",
    error: "That didn’t go through. Please email me directly at jake@rundown.digital.",
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
