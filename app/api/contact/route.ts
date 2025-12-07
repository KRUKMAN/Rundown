import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { email, firstname, company, message, hutk, pageUri, pageName } = body;

  const PORTAL_ID = process.env.HUBSPOT_PORTAL_ID;
  const FORM_GUID = process.env.HUBSPOT_FORM_GUID;

  if (!PORTAL_ID || !FORM_GUID) {
    return NextResponse.json(
      { error: "HubSpot configuration missing" },
      { status: 500 }
    );
  }

  try {
    const response = await fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/${PORTAL_ID}/${FORM_GUID}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fields: [
            { name: "email", value: email },
            { name: "firstname", value: firstname },
            { name: "company", value: company },
            { name: "message", value: message },
          ],
          context: {
            hutk,
            pageUri,
            pageName,
          },
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "HubSpot Error");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: String(error) },
      { status: 500 }
    );
  }
}
