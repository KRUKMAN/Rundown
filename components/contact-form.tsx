"use client";

import { useState, type FormEvent } from "react";
import Cookies from "js-cookie";
import type { Dictionary } from "@/lib/i18n/dictionaries/types";

type Status = "idle" | "sending" | "success" | "error";

const field =
  "w-full border border-ink/25 bg-white/60 px-4 text-[17px] text-ink outline-none transition-colors placeholder:text-muted/70 focus:border-ink focus-visible:outline-2 focus-visible:outline-accent";

export default function ContactForm({ copy }: { copy: Dictionary["contact"] }) {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstname: data.get("name"),
          email: data.get("email"),
          company: data.get("company"),
          message: data.get("message"),
          website: data.get("website"),
          hutk: Cookies.get("hubspotutk"),
          pageUri: window.location.href,
          pageName: document.title,
        }),
      });
      if (!response.ok) throw new Error(String(response.status));
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p role="status" className="border-t border-ink pt-5 text-[20px] leading-snug">
        {copy.success}
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5" noValidate={false}>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-[15px] font-semibold">
          {copy.labels.name}
          <input name="name" type="text" autoComplete="name" required className={`${field} h-[52px]`} />
        </label>
        <label className="flex flex-col gap-2 text-[15px] font-semibold">
          {copy.labels.email}
          <input name="email" type="email" autoComplete="email" required className={`${field} h-[52px]`} />
        </label>
      </div>
      <label className="flex flex-col gap-2 text-[15px] font-semibold">
        <span>
          {copy.labels.company} <span className="font-normal text-muted">({copy.labels.optional})</span>
        </span>
        <input name="company" type="text" autoComplete="organization" className={`${field} h-[52px]`} />
      </label>
      <label className="flex flex-col gap-2 text-[15px] font-semibold">
        {copy.labels.message}
        <textarea
          name="message"
          rows={5}
          required
          placeholder={copy.placeholders.message}
          className={`${field} resize-y py-3 leading-normal`}
        />
      </label>
      {/* Honeypot: hidden from people, tempting for bots. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label>
          Website
          <input name="website" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
        <button type="submit" className="btn-primary cursor-pointer disabled:opacity-60" disabled={status === "sending"}>
          {status === "sending" ? copy.sending : copy.submit}
        </button>
        <p aria-live="polite" className="text-[15px] text-accent-ink">
          {status === "error" ? copy.error : ""}
        </p>
      </div>
    </form>
  );
}
