import type { Dictionary } from "./types";

const en: Dictionary = {
  locale: "en",
  metadata: {
    title: "Operations and CRM consultant: HubSpot, automation, AI · The Rundown",
    description:
      "I’m Jakub Krukowski, an independent operations and CRM consultant for companies of 5 to 500 people. HubSpot and Salesforce setup, automation and AI training. The first call is free.",
    ogLocale: "en_US",
  },
  nav: {
    work: "What I do",
    how: "How I work",
    faq: "FAQ",
    about: "About",
    cta: "Send me a message",
    skip: "Skip to content",
    home: "home page",
    menu: "Menu",
    close: "Close menu",
  },
  hero: {
    title: "I make businesses easier to run.",
    body: "I’m an independent operations and CRM consultant for companies of 5 to 500 people. I usually come in after a fast year or a hard one, when the tools have piled up and it’s no longer clear who does what. I set up the CRM, automate the repetitive work and teach your team to use it, AI included.",
    cta: "Send me a message",
    emailPrefix: "or email",
    replyNote: "I usually reply within one working day. The first call is free.",
    channels: ["WhatsApp", "phone", "email", "spreadsheet", "meeting", "someone’s head"],
    figureAlt: "Six lines labelled WhatsApp, phone, email, spreadsheet, meeting and someone’s head run from the left, cross and merge into one red line, which turns down and continues as the line running down this page.",
  },
  clients: {
    label: "Teams I’ve worked with",
    names: ["LiveChat", "Prezi", "KODO", "Callstack", "Infogram"],
  },
  problems: {
    title: "Which one is yours?",
    items: [
      { quote: "I find out something’s wrong when it’s too late.", fix: "One list of everything in progress, with who’s on it and what’s stuck." },
      { quote: "Nobody knows who owns what.", fix: "Every recurring task has a name next to it, and everyone can see whose." },
      { quote: "I can’t trust the pipeline numbers.", fix: "Each deal stage means one thing, and a few simple rules keep deals up to date." },
      { quote: "We bought HubSpot. Nobody uses it.", fix: "I sit with the people who were meant to use it and find out why they don’t. Often it’s a form full of fields nobody needs." },
      { quote: "Leads wait days for a reply.", fix: "Each new enquiry goes straight to the right person, with what they need to reply." },
      {
        quote: "Everyone talks about AI. What would it do here?",
        fix: "I pick one task your team does every day and show what AI could do with it. Before you buy anything.",
      },
    ],
  },
  who: {
    title: "Usually it’s one of you.",
    intro: "Any industry. 5 to 500 people.",
    kinds: [
      {
        title: "You run the company.",
        body: "Requests get lost between email, WhatsApp and someone’s spreadsheet. You think a CRM would help and have no time to work out which one, or how. That’s my job. One condition: someone on your side looks after it once I’m done.",
      },
      {
        title: "You’re in charge of ops or RevOps.",
        body: "Your backlog is longer than your week, or there’s a project you’d like a second pair of eyes on. Give me either. I work with your team, in your tools.",
      },
      {
        title: "You run a team of specialists.",
        body: "Good people losing hours on things a simple rule or tool could do. I show them where AI actually helps in their own work, and automate the bits that repeat.",
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
      "Friday is spent fixing it over the phone",
      "The invoice still shows the old scope",
    ],
    beforeNote: "Everyone does their job. The information lives in four places and one person’s head.",
    afterLabel: "what I’d set up instead",
    after: [
      "The change goes into the job record once",
      "Site lead, purchasing and invoicing see it the same minute",
      "The client gets the updated quote to approve",
    ],
    afterNote: "That takes a few rules on who records what and a weekly summary for the owner. The site lead and purchasing agree the rules before I build anything.",
  },
  services: {
    title: "Here’s what I do.",
    intro: "Most projects touch two or three of these areas.",
    groups: [
      {
        title: "Organise",
        items: [
          "Work out who does what, and write it down",
          "Set up or clean up your CRM",
          "Cut the tools you pay for and don’t use",
        ],
      },
      {
        title: "Sales and RevOps",
        items: ["Get new leads answered fast", "Pipeline reports sales and finance agree on", "Take CRM admin off your plate"],
      },
      {
        title: "Automate",
        items: ["Stop copying data between tools", "AI on the tasks your team repeats every day", "A small internal tool when nothing off the shelf fits"],
      },
      {
        title: "People",
        items: [
          "AI training on your team’s real tasks",
          "Help the team actually switch to the new way of working",
          "Hire your first ops person, or build the team",
        ],
      },
    ],
  },
  process: {
    title: "What happens after you write.",
    steps: [
      { title: "Free call", body: "30 minutes. You tell me what’s slowing you down. I say whether I’d take it on." },
      { title: "Review", body: "I talk to the people doing the work and look at your tools, data and handoffs." },
      { title: "Written plan", body: "Priorities, costs and what to leave alone. You decide what happens next." },
      { title: "Build with your team", body: "I set things up, move the data over and build the automations, with the people who’ll use them every day." },
      { title: "Handover and training", body: "Everything written down, and someone on your side who knows how it works. I can stay on if you want." },
    ],
    engagementsTitle: "Start small if you like.",
    engagements: [
      { title: "Review and plan", body: "The first three steps and nothing more. The plan is yours, with or without me." },
      { title: "Fixed-scope project", body: "One defined piece of work, say a CRM implementation. Scope and price agreed before I start." },
      { title: "Ongoing monthly help", body: "A set amount of my time each month. I can be your part-time head of ops or RevOps, or just work through the backlog." },
      { title: "Workshops", body: "Hands-on sessions where your team tries AI on its own work." },
    ],
  },
  ctaBand: { text: "Can’t tell which of these you need? That’s normal. Write a few lines and I’ll suggest where to start.", button: "Tell me what’s going on" },
  principles: {
    title: "Things I won’t sell you.",
    wont: [
      { struck: "A new system", rest: "when the one you have mostly needs cleaning up." },
      { struck: "An AI agent", rest: "for a job a simple rule would handle." },
      { struck: "A strategy deck", rest: "nobody opens after the meeting." },
      { struck: "Twelve tools", rest: "where four would do." },
      { struck: "A dashboard", rest: "you’ll check twice and forget." },
    ],
    wrong: "I’m also the wrong person if you need a full-time development team, or a new system live by next week.",
    promisesTitle: "What you can hold me to.",
    promises: [
      {
        title: "No commissions",
        body: "I don’t resell software or take a cut from vendors, so I’ve no reason to push any of them.",
      },
      {
        title: "Your accounts, not mine",
        body: "Everything I build lives in your company’s accounts. If we stop working together, you keep all of it.",
      },
    ],
  },
  about: {
    title: "I’m Jakub Krukowski.",
    paragraphs: [
      "My career has been in operations, mostly at software companies, between sales, support, finance and the systems that connect them. What breaks is usually the same: too much lives in a few people’s heads, and too much gets typed in twice.",
      "I work on my own. You deal with me from start to finish. When a project needs more hands, I bring in designers, engineers and operations specialists I’ve worked with before.",
    ],
    location: "Based in Europe. Working in English and Polish.",
  },
  faq: {
    title: "Questions I get a lot.",
    items: [
      {
        q: "What does an operations consultant do?",
        a: "I follow how a piece of work gets from the first email to the invoice and fix the places where it stalls. Sometimes that takes a CRM or an automation. Sometimes it’s just a name next to a task.",
      },
      {
        q: "Which CRM should a growing company use?",
        a: "HubSpot suits most service and B2B companies that want marketing and sales in one place. Salesforce makes sense for complex sales with lots of custom rules, if you have someone to run it. Attio works well for small, flexible teams. The right choice depends on how you sell and who will maintain it.",
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
        a: "I only use tools your company has approved. Usually that’s a business plan of Claude or ChatGPT, or the AI already built into HubSpot or Notion, on terms that don’t allow training on your data. We read the current terms together before we start. The AI only sees the data a task needs, confidential data stays out unless you decide otherwise, and a person checks anything that matters.",
      },
      {
        q: "What happens after the handover?",
        a: "Your team runs it. Everything is written down and lives in your accounts. If you want me around after that, we can agree monthly help.",
      },
    ],
  },
  contact: {
    title: "Write like you’d write to a colleague.",
    body: "Your own words are fine, no need to prepare anything. If I’m not the right person, I’ll say so, and point you to someone better if I know one.",
    labels: { name: "Name", email: "Email", company: "Company", message: "What’s going on?", optional: "optional" },
    placeholders: { message: "A few sentences is enough." },
    submit: "Send",
    sending: "Sending…",
    success: "Thanks, it’s arrived. I’ll get back to you as soon as I can.",
    error: "That didn’t go through. Please email me directly at jake@rundown.digital.",
    orEmail: "Or email me directly:",
    ps: "P.S. Not sure your problem is the kind I solve? Write anyway. Plenty of good projects start with an email that begins “this might be a silly question”.",
    notice: "I use your details to reply and, if you ask, to prepare a proposal.",
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
