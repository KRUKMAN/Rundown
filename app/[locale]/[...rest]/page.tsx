import { notFound } from "next/navigation";

// Any unknown path under /en or /pl renders the styled not-found page inside the site layout.
export default function CatchAll() {
  notFound();
}
