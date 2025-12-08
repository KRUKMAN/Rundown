"use client";

import { useEffect, useMemo, useState, type FormEvent, type ReactNode } from "react";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  AppWindow,
  ArrowRight,
  Bell,
  Bot,
  Box,
  Calculator,
  Check,
  CheckCircle2,
  CheckSquare,
  ChevronRight,
  Clock,
  Cpu,
  Database,
  FileAudio,
  FileSignature,
  FileText,
  GitMerge,
  LayoutTemplate,
  ListFilter,
  Mail,
  MessageSquare,
  Mic,
  ShieldAlert,
  Terminal,
  UserPlus,
  Users,
  Zap,
} from "lucide-react";
import Link from "next/link";
import Cookies from "js-cookie";
import WorkflowEngine, { type UseCase } from "./components/workflow-engine";
import LanguageSwitcher from "./components/language-switcher";
import { RundownDigitalLogo } from "./components/rundown-logo";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

type AIAutomationClientProps = {
  locale: Locale;
  dictionary: Dictionary;
};

const serviceIconMap: Record<string, ReactNode> = {
  "gtm-ops": <Zap className="text-green-400" />,
  "automation-studio": <Box className="text-emerald-400" />,
  "stack-implementation": <Cpu className="text-teal-400" />,
  "ops-as-a-service": <Users className="text-blue-400" />,
  training: <LayoutTemplate className="text-purple-400" />,
};

const defaultServiceIcon = <Zap className="text-green-400" />;

const useCaseIconMap: Record<
  string,
  { steps: ReactNode[]; successIcon?: ReactNode }
> = {
  "sales-crm": {
    steps: [
      <Mic size={14} />,
      <FileAudio size={14} />,
      <Bot size={14} />,
      <AppWindow size={14} />,
      <Database size={14} />,
    ],
    successIcon: <CheckCircle2 size={14} />,
  },
  "lead-flow": {
    steps: [
      <UserPlus size={14} />,
      <Database size={14} />,
      <GitMerge size={14} />,
      <Mail size={14} />,
    ],
    successIcon: <Zap size={14} />,
  },
  "support-cx": {
    steps: [
      <MessageSquare size={14} />,
      <AlertTriangle size={14} />,
      <Database size={14} />,
      <Bell size={14} />,
    ],
    successIcon: <ShieldAlert size={14} />,
  },
  "task-routing": {
    steps: [
      <MessageSquare size={14} />,
      <ListFilter size={14} />,
      <GitMerge size={14} />,
      <Clock size={14} />,
      <CheckCircle2 size={14} />,
    ],
    successIcon: <CheckCircle2 size={14} />,
  },
  "deal-desk": {
    steps: [
      <FileText size={14} />,
      <Calculator size={14} />,
      <Bell size={14} />,
      <CheckSquare size={14} />,
      <FileSignature size={14} />,
    ],
    successIcon: <Zap size={14} />,
  },
};

function withServiceIcons(cards: Dictionary["services"]["cards"]) {
  return cards.map((card) => ({
    ...card,
    icon: serviceIconMap[card.id] ?? defaultServiceIcon,
  }));
}

function buildUseCases(useCases: Dictionary["workflow"]["useCases"]): UseCase[] {
  return useCases.map((useCase) => {
    const iconSet = useCaseIconMap[useCase.id];
    const steps = useCase.steps.map((step, index) => ({
      ...step,
      icon: iconSet?.steps[index] ?? <CheckCircle2 size={14} />,
    }));

    return {
      ...useCase,
      steps,
      successMessage: {
        icon: iconSet?.successIcon ?? <CheckCircle2 size={14} />,
        text: useCase.successMessage,
      },
    };
  });
}

export default function AIAutomationClient({ locale, dictionary }: AIAutomationClientProps) {
  const {
    navigation,
    hero,
    systemPanel,
    kitchen,
    demos,
    services,
    removal,
    process,
    contact,
    scope,
    closing,
    footer,
    stack,
    workflow,
  } = dictionary;

  const [typedText, setTypedText] = useState("");
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const fullText = useMemo(() => systemPanel.typedLines.join("\n"), [systemPanel.typedLines]);
  const serviceCards = useMemo(() => withServiceIcons(services.cards), [services.cards]);
  const localizedUseCases = useMemo(() => buildUseCases(workflow.useCases), [workflow.useCases]);

  useEffect(() => {
    setTypedText("");
    let i = 0;
    const typing = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typing);
      }
    }, 30);
    return () => clearInterval(typing);
  }, [fullText]);

  const currentYear = new Date().getFullYear();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormStatus("loading");

    const formData = new FormData(event.currentTarget);

    try {
      const payload = {
        firstname: formData.get("firstname"),
        email: formData.get("email"),
        company: formData.get("company"),
        message: formData.get("message"),
        hutk: Cookies.get("hubspotutk"),
        pageUri: window.location.href,
        pageName: document.title,
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Submission failed");

      setFormStatus("success");
      (event.target as HTMLFormElement).reset();
    } catch (e) {
      console.error(e);
      setFormStatus("error");
    }
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-green-500/30 font-sans">
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="https://rundown.digital" aria-label="The Rundown" className="flex items-center">
            <RundownDigitalLogo className="scale-75 sm:scale-90 md:scale-100" />
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
            <Link href="#services" className="hover:text-white transition-colors">
              {navigation.services}
            </Link>
            <Link href="#demos" className="hover:text-white transition-colors">
              {navigation.demos}
            </Link>
            <Link href="#contact" className="hover:text-white transition-colors">
              {navigation.contact}
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <LanguageSwitcher currentLocale={locale} label={navigation.switcherLabel} />
            <a
              href="#contact"
              className="px-5 py-2.5 bg-white text-black text-sm font-bold rounded hover:bg-green-400 transition-colors"
            >
              {navigation.cta}
            </a>
          </div>
        </div>
      </header>

      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-green-900/20 border border-green-500/20 text-green-400 text-xs font-mono uppercase tracking-wider">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              {hero.badge}
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1]">
              {hero.heading}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
                {hero.highlight}
              </span>
            </h1>

            <p className="text-lg text-neutral-400 max-w-xl leading-relaxed">{hero.description}</p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="#contact"
                className="px-8 py-4 bg-green-600 hover:bg-green-500 text-black font-bold rounded-lg transition-all flex items-center justify-center gap-2 group"
              >
                {hero.primaryCta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="rounded-xl bg-[#0A0A0A] border border-white/10 p-1 shadow-2xl relative"
          >
            <div className="bg-black/50 rounded-lg border border-white/5 p-4 h-[320px] relative overflow-hidden">
              <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                </div>
                <div className="text-[10px] text-white/20 font-mono">{systemPanel.fileLabel}</div>
              </div>
              <div className="font-mono text-sm leading-relaxed text-green-400/90 whitespace-pre-wrap">
                {typedText}
                <span className="animate-pulse inline-block w-2.5 h-5 bg-green-500/50 align-bottom ml-1" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/5 to-transparent pointer-events-none animate-scan" />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 bg-neutral-900/20 border-y border-white/5">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">{kitchen.heading}</h2>
          <p className="text-neutral-400 leading-relaxed text-lg">{kitchen.subheading}</p>
          <div className="grid md:grid-cols-2 gap-8 text-left max-w-3xl mx-auto mt-8 bg-[#0a0a0a] p-8 rounded-2xl border border-white/5">
            <div className="space-y-4">
              <p className="text-white font-medium">{kitchen.leftTitle}</p>
              <ul className="space-y-3 text-sm text-neutral-400">
                {kitchen.bullets.map((item) => (
                  <li key={item} className="flex gap-2">
                    <Check className="w-4 h-4 text-green-500" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <p className="text-white font-medium">{kitchen.rightTitle}</p>
              <p className="text-sm text-neutral-400 italic">{kitchen.quote}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="demos" className="py-24 px-6 bg-[#050505]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-xs uppercase tracking-widest text-green-500 font-bold mb-2">{demos.eyebrow}</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{demos.heading}</h2>
            <p className="text-neutral-400">{demos.description}</p>
          </div>
          <WorkflowEngine copy={workflow.copy} useCases={localizedUseCases} />
        </div>
      </section>

      <section id="services" className="py-24 px-6 bg-[#080808] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-3xl font-bold mb-4">{services.heading}</h2>
              <p className="text-neutral-400 max-w-xl">{services.description}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCards.map((item) => (
              <div
                key={item.id}
                className="group relative p-6 rounded-2xl bg-neutral-900/50 border border-white/5 hover:border-green-500/30 transition-all hover:bg-neutral-900 overflow-hidden flex flex-col"
              >
                <div className="mb-6 p-3 bg-black rounded-lg w-fit border border-white/10 group-hover:border-green-500/20 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-xs text-neutral-500 mb-4 h-8">{item.description}</p>
                <div className="w-full h-[1px] bg-white/5 mb-4" />
                <ul className="space-y-2 mt-auto">
                  {item.items.map((sub) => (
                    <li key={sub} className="text-neutral-400 text-xs flex items-start gap-2">
                      <ChevronRight className="w-3 h-3 text-neutral-600 mt-0.5 shrink-0" />
                      {sub}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">{removal.heading}</h2>
          <p className="text-neutral-400 text-lg leading-relaxed mb-12 max-w-2xl mx-auto">{removal.description}</p>

          <div className="grid sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
            {removal.bullets.map((bullet) => (
              <div key={bullet} className="p-4 bg-white/5 rounded-lg border border-white/5 flex items-center gap-3">
                <CheckCircle2 className="text-green-500 shrink-0" size={20} />
                <span className="text-sm font-medium">{bullet}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 text-sm text-neutral-500 font-mono border-t border-white/10 pt-8 inline-block px-8">
            {removal.footerNote}
          </div>
        </div>
      </section>

      <section id="process" className="py-24 px-6 text-center bg-gradient-to-b from-[#050505] to-[#0a0a0a] border-t border-white/5">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">{process.heading}</h2>
        <p className="text-neutral-400 max-w-xl mx-auto mb-10 text-lg">{process.description}</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#contact"
            className="px-10 py-5 bg-white text-black text-lg font-bold rounded hover:bg-neutral-200 transition-colors shadow-[0_0_40px_rgba(255,255,255,0.1)]"
          >
            {process.cta}
          </a>
        </div>
      </section>

      <section id="contact" className="py-24 px-6 bg-[#050505]">
        <div className="max-w-4xl mx-auto rounded-2xl border border-white/10 bg-black/40 p-8 md:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-green-500 mb-2">{contact.eyebrow}</p>
              <h3 className="text-3xl font-bold">{contact.heading}</h3>
              <p className="text-neutral-400 mt-2">{contact.description}</p>
            </div>
            <div className="flex items-center gap-3 text-sm text-neutral-400">
              <div className="h-10 w-10 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center font-bold text-white">
                JK
              </div>
              <div>
                <p className="text-white font-medium">
                  {contact.ledBy}{" "}
                  <a href="#contact" className="underline decoration-dotted underline-offset-4 hover:text-green-400">
                    {contact.person}
                  </a>
                </p>
                <p className="text-xs text-neutral-500">{contact.experience}</p>
              </div>
            </div>
          </div>

          <form className="grid md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-[0.18em] text-white/60">{contact.labels.name}</label>
              <input
                required
                name="firstname"
                type="text"
                className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-3 text-sm text-white placeholder:text-white/30 focus:border-green-500 focus:outline-none"
                placeholder={contact.placeholders.name}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-[0.18em] text-white/60">{contact.labels.email}</label>
              <input
                required
                name="email"
                type="email"
                className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-3 text-sm text-white placeholder:text-white/30 focus:border-green-500 focus:outline-none"
                placeholder={contact.placeholders.email}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-[0.18em] text-white/60">{contact.labels.company}</label>
              <input
                name="company"
                type="text"
                className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-3 text-sm text-white placeholder:text-white/30 focus:border-green-500 focus:outline-none"
                placeholder={contact.placeholders.company}
              />
            </div>
            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-xs uppercase tracking-[0.18em] text-white/60">{contact.labels.message}</label>
              <textarea
                required
                name="message"
                rows={4}
                className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-3 text-sm text-white placeholder:text-white/30 focus:border-green-500 focus:outline-none"
                placeholder={contact.placeholders.message}
              />
            </div>
            <div className="md:col-span-2 flex items-center justify-between gap-4">
              {formStatus === "success" && (
                <p className="text-green-400 text-sm font-bold flex items-center gap-2">
                  <CheckCircle2 size={16} /> {contact.successInline}
                </p>
              )}
              {formStatus === "error" && <p className="text-red-400 text-sm">{contact.errorInline}</p>}
              <button
                type="submit"
                disabled={formStatus === "loading" || formStatus === "success"}
                className="px-8 py-3 bg-green-600 hover:bg-green-500 disabled:opacity-50 disabled:cursor-not-allowed text-black font-bold rounded-lg transition-all flex items-center gap-2 ml-auto"
              >
                {formStatus === "loading" ? contact.sending : contact.cta}
                {formStatus !== "loading" && <ArrowRight className="w-4 h-4" />}
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="py-16 px-6 bg-neutral-900/20 border-y border-white/5" id="scope">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center font-bold text-white">
              JK
            </div>
            <div>
              <p className="text-sm text-white font-medium">
                {scope.heading}{" "}
                <a href="#contact" className="underline decoration-dotted underline-offset-4 hover:text-green-400">
                  {contact.person}
                </a>
              </p>
              <p className="text-xs text-neutral-500 mt-0.5">{scope.description}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">{closing.heading}</h2>
        <p className="text-neutral-400 max-w-xl mx-auto mb-8">{closing.description}</p>
        <a
          href="#contact"
          className="px-10 py-5 bg-white text-black text-lg font-bold rounded hover:bg-neutral-200 transition-colors shadow-[0_0_40px_rgba(255,255,255,0.1)]"
        >
          {closing.cta}
        </a>
      </section>

      <footer className="border-t border-white/10 py-12 bg-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-600 mb-6">{footer.toolsLabel}</p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-neutral-500 font-mono">
            {stack.map((tech) => (
              <span key={tech} className="hover:text-green-400 transition-colors cursor-default">
                {tech}
              </span>
            ))}
          </div>
          <div className="mt-12 text-xs text-neutral-800">{footer.copyright}</div>
        </div>
      </footer>
    </main>
  );
}
