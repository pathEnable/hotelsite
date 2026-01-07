import { NextResponse } from "next/server";
import { Resend } from "resend";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as { name?: string; email?: string; message?: string };
    const name = (body.name || "").trim();
    const email = (body.email || "").trim().toLowerCase();
    const message = (body.message || "").trim();

    if (!name) {
      return NextResponse.json({ error: "Nom requis" }, { status: 400 });
    }

    if (!email || !isValidEmail(email)) {
      return NextResponse.json({ error: "Email invalide" }, { status: 400 });
    }

    if (!message) {
      return NextResponse.json({ error: "Message requis" }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.RESEND_FROM_EMAIL;
    const adminEmail = process.env.RESEND_ADMIN_EMAIL;

    if (!apiKey || !from || !adminEmail) {
      return NextResponse.json(
        { error: "Configuration email manquante (RESEND_API_KEY / RESEND_FROM_EMAIL / RESEND_ADMIN_EMAIL)" },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    await resend.emails.send({
      from,
      to: adminEmail,
      subject: `Nouveau message (Site) — ${name}`,
      text: `Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    await resend.emails.send({
      from,
      to: email,
      subject: "Message reçu — Hôtel Ave Maria",
      text: "Merci pour votre message. Nous vous répondrons dès que possible.",
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
