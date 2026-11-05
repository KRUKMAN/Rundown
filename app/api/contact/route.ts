import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const clip = (value: unknown, max: number) => (typeof value === "string" ? value.trim().slice(0, max) : "");

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ success: false, error: "Invalid request" }, { status: 400 });
  }

  // Honeypot: real people never fill this in. Pretend it worked.
  if (clip(body.website, 200)) return NextResponse.json({ success: true });

  const email = clip(body.email, 254);
  const firstname = clip(body.firstname, 120);
  const company = clip(body.company, 200);
  const message = clip(body.message, 5000);

  if (!EMAIL_RE.test(email) || !message) {
    return NextResponse.json({ success: false, error: "Email and message are required" }, { status: 400 });
  }

  const PORTAL_ID = process.env.HUBSPOT_PORTAL_ID;
  const FORM_GUID = process.env.HUBSPOT_FORM_GUID;
  if (!PORTAL_ID || !FORM_GUID) {
    return NextResponse.json({ success: false, error: "HubSpot configuration missing" }, { status: 500 });
  }

  try {
    const response = await fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/${PORTAL_ID}/${FORM_GUID}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fields: [
            { name: "email", value: email },
            { name: "firstname", value: firstname },
            { name: "company", value: company },
            { name: "message", value: message },
          ],
          context: {
            hutk: clip(body.hutk, 200) || undefined,
            pageUri: clip(body.pageUri, 500),
            pageName: clip(body.pageName, 200),
          },
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error((errorData as { message?: string }).message || `HubSpot error ${response.status}`);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[contact] submission failed", error);
    return NextResponse.json({ success: false, error: "Submission failed" }, { status: 502 });
  }
}
