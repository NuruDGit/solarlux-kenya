import "server-only";

import { getPayload } from "payload";

import config from "@payload-config";
import type { ContactLeadFormData, QuoteFormData } from "@/lib/form-schemas";

const resendEndpoint = "https://api.resend.com/emails";
const defaultFromEmail = "Solarlux Website <onboarding@resend.dev>";

async function resolvePayload() {
  return getPayload({ config });
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function formatLabel(value: string) {
  return value
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function renderRows(rows: Array<[string, string | string[] | undefined]>) {
  return rows
    .filter(([, value]) => (Array.isArray(value) ? value.length > 0 : Boolean(value)))
    .map(([label, value]) => {
      const formattedValue = Array.isArray(value)
        ? value.map(formatLabel).join(", ")
        : value ?? "";

      return `
        <tr>
          <td style="padding:12px 16px;border-bottom:1px solid #e5e5e5;color:#737373;font-size:14px;width:180px;">${escapeHtml(label)}</td>
          <td style="padding:12px 16px;border-bottom:1px solid #e5e5e5;color:#171717;font-size:14px;font-weight:600;">${escapeHtml(formattedValue)}</td>
        </tr>
      `;
    })
    .join("");
}

function renderEmailTemplate({
  intro,
  rows,
  title,
}: {
  intro: string;
  rows: Array<[string, string | string[] | undefined]>;
  title: string;
}) {
  return `
    <div style="margin:0;padding:0;background:#f5f5f5;font-family:Arial,sans-serif;color:#171717;">
      <div style="max-width:680px;margin:0 auto;padding:32px 16px;">
        <div style="background:#0f2f58;border-radius:18px 18px 0 0;padding:28px 32px;">
          <p style="margin:0;color:#fdb813;font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;">Solarlux Kenya Website</p>
          <h1 style="margin:10px 0 0;color:#ffffff;font-size:28px;line-height:1.2;">${escapeHtml(title)}</h1>
        </div>
        <div style="background:#ffffff;border-radius:0 0 18px 18px;border:1px solid #e5e5e5;border-top:0;overflow:hidden;">
          <p style="margin:0;padding:24px 32px 8px;color:#404040;font-size:16px;line-height:1.6;">${escapeHtml(intro)}</p>
          <table style="width:100%;border-collapse:collapse;margin-top:8px;">
            <tbody>${renderRows(rows)}</tbody>
          </table>
          <p style="margin:0;padding:20px 32px 28px;color:#737373;font-size:13px;line-height:1.6;">
            This notification was generated automatically from solarluxkenya.co.ke. The submission is also saved in Payload CMS.
          </p>
        </div>
      </div>
    </div>
  `;
}

async function sendSubmissionNotification({
  html,
  replyTo,
  subject,
}: {
  html: string;
  replyTo: string;
  subject: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL_TO;

  if (!apiKey || !to) {
    console.warn("Skipping form notification email: RESEND_API_KEY or CONTACT_EMAIL_TO is not configured.");
    return;
  }

  const response = await fetch(resendEndpoint, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.RESEND_FROM_EMAIL || defaultFromEmail,
      html,
      reply_to: replyTo,
      subject,
      to: [to],
    }),
  });

  if (!response.ok) {
    const body = await response.text().catch(() => "");
    throw new Error(`Resend notification failed with ${response.status}: ${body}`);
  }
}

async function notifySafely(args: Parameters<typeof sendSubmissionNotification>[0]) {
  try {
    await sendSubmissionNotification(args);
  } catch (error) {
    console.error(error);
  }
}

export async function submitQuoteRequest(data: QuoteFormData) {
  const payload = await resolvePayload();

  const request = await payload.create({
    collection: "quote-requests",
    data: {
      email: data.email,
      fullName: data.name,
      interests: data.interest,
      location: data.location,
      message: data.message,
      phone: data.phone,
      source: "website-quote-page",
    },
  });

  await notifySafely({
    html: renderEmailTemplate({
      intro: "A new quote request was submitted through the website.",
      rows: [
        ["Name", data.name],
        ["Phone", data.phone],
        ["Email", data.email],
        ["Location", data.location],
        ["Interests", data.interest],
        ["Message", data.message],
      ],
      title: "New Quote Request",
    }),
    replyTo: data.email,
    subject: `New quote request from ${data.name}`,
  });

  return request;
}

export async function submitContactLead(data: ContactLeadFormData) {
  const payload = await resolvePayload();

  const submission = await payload.create({
    collection: "contact-submissions",
    data: {
      email: data.email,
      fullName: data.name,
      message: data.message,
      phone: data.phone,
      subject: "Homepage CTA consultation request",
    },
  });

  await notifySafely({
    html: renderEmailTemplate({
      intro: "A new consultation request was submitted through the homepage CTA form.",
      rows: [
        ["Name", data.name],
        ["Phone", data.phone],
        ["Email", data.email],
        ["Message", data.message],
      ],
      title: "New Contact Form Submission",
    }),
    replyTo: data.email,
    subject: `New contact form submission from ${data.name}`,
  });

  return submission;
}
