import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const recipient = "nexgentitleco@gmail.com";

type ContactPayload = {
  name?: string;
  email?: string;
  service?: string;
  message?: string;
};

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid form submission." }, { status: 400 });
  }

  const name = clean(payload.name);
  const email = clean(payload.email);
  const service = clean(payload.service);
  const message = clean(payload.message);
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeService = escapeHtml(service || "Not specified");
  const safeMessage = escapeHtml(message || "No message provided.").replace(
    /\n/g,
    "<br />"
  );

  if (!name || !email) {
    return NextResponse.json(
      { error: "Please provide your name and email." },
      { status: 400 }
    );
  }

  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    return NextResponse.json(
      { error: "Email is not configured yet. Please add SMTP settings." },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: recipient,
      replyTo: email,
      subject: `New title request from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Service Needed: ${service || "Not specified"}`,
        "",
        "Message:",
        message || "No message provided.",
      ].join("\n"),
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111">
          <h2>New title request</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Service Needed:</strong> ${safeService}</p>
          <p><strong>Message:</strong></p>
          <p>${safeMessage}</p>
        </div>
      `,
    });
  } catch {
    return NextResponse.json(
      { error: "Email could not be sent. Please check SMTP settings." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
