import type { Metadata } from "next";
import AIAutomationClient from "./ai-automation/ai-automation-client";

export const metadata: Metadata = {
  title: "The Rundown | AI Automation Studio",
  description:
    "Operations-as-a-service and automation studio building calm, predictable GTM systems.",
};

export default function Home() {
  return <AIAutomationClient />;
}
