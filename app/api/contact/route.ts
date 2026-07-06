import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, org, email, interest, message } = await req.json();

  const { error } = await resend.emails.send({
    from: "Samaritan <onboarding@resend.dev>",
    to: "jasonholt2002@gmail.com",
    replyTo: email,
    subject: `Audit Request — ${name} (${org})`,
    html: `
      <div style="font-family:monospace;background:#090c12;color:#dce8f5;padding:32px;border-radius:4px;">
        <h2 style="color:#ff6a13;margin:0 0 24px;letter-spacing:.1em;">NEW AUDIT REQUEST</h2>
        <table style="border-collapse:collapse;width:100%;">
          <tr><td style="color:#7a94b0;padding:6px 0;width:160px;">Name</td><td style="padding:6px 0;">${name}</td></tr>
          <tr><td style="color:#7a94b0;padding:6px 0;">Company / Mine Operator</td><td style="padding:6px 0;">${org}</td></tr>
          <tr><td style="color:#7a94b0;padding:6px 0;">Email</td><td style="padding:6px 0;"><a href="mailto:${email}" style="color:#ff6a13;">${email}</a></td></tr>
          <tr><td style="color:#7a94b0;padding:6px 0;">Primary Mineral</td><td style="padding:6px 0;">${interest}</td></tr>
          <tr><td style="color:#7a94b0;padding:6px 0;vertical-align:top;">Notes</td><td style="padding:6px 0;">${message || "—"}</td></tr>
        </table>
      </div>
    `,
  });

  if (error) {
    console.error("Resend error:", JSON.stringify(error));
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
