import { NextResponse } from "next/server";
import { Resend } from "resend";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as { email?: string };
    const email = (body.email || "").trim().toLowerCase();

    if (!email || !isValidEmail(email)) {
      return NextResponse.json({ error: "Email invalide" }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.RESEND_FROM_EMAIL;
    const adminEmail = process.env.RESEND_ADMIN_EMAIL;
    const audienceId = process.env.RESEND_AUDIENCE_ID;

    if (!apiKey || !from || !adminEmail) {
      return NextResponse.json(
        { error: "Configuration email manquante (RESEND_API_KEY / RESEND_FROM_EMAIL / RESEND_ADMIN_EMAIL)" },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    if (audienceId) {
      await resend.contacts.create({
        audienceId,
        email,
      });
    }

    await resend.emails.send({
      from,
      to: adminEmail,
      subject: "Nouvelle inscription Newsletter",
      text: `Nouvelle inscription à la newsletter: ${email}`,
    });

    await resend.emails.send({
      from,
      to: email,
      subject: "Inscription Newsletter confirmée",
      text: "Merci pour votre inscription à la newsletter de l’Hôtel Ave Maria. Nous vous enverrons nos nouveautés de temps en temps.",
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
