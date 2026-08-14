"use server";

import { Resend } from "resend";
import { z } from "zod";
import { AREAS_OF_INTEREST, CONTACT } from "@/lib/constants";

const enquirySchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name."),
  company: z.string().trim().optional(),
  email: z.email("Please enter a valid email address."),
  phone: z.string().trim().optional(),
  country: z.string().trim().min(2, "Please enter your country."),
  areaOfInterest: z.enum(AREAS_OF_INTEREST, {
    error: "Please select an area of interest.",
  }),
  message: z.string().trim().min(10, "Please provide a few more details (at least 10 characters)."),
  website: z.string().max(0).optional(),
});

export type EnquiryState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Partial<Record<keyof z.infer<typeof enquirySchema>, string>>;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

const GENERIC_SEND_ERROR: EnquiryState = {
  status: "error",
  message: "Sorry, something went wrong sending your enquiry. Please email us directly instead.",
};

export async function submitEnquiry(
  _prevState: EnquiryState,
  formData: FormData
): Promise<EnquiryState> {
  const raw = {
    fullName: formData.get("fullName")?.toString() ?? "",
    company: formData.get("company")?.toString() ?? "",
    email: formData.get("email")?.toString() ?? "",
    phone: formData.get("phone")?.toString() ?? "",
    country: formData.get("country")?.toString() ?? "",
    areaOfInterest: formData.get("areaOfInterest")?.toString() ?? "",
    message: formData.get("message")?.toString() ?? "",
    website: formData.get("website")?.toString() ?? "",
  };

  const parsed = enquirySchema.safeParse(raw);

  if (!parsed.success) {
    const fieldErrors: EnquiryState["fieldErrors"] = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as keyof z.infer<typeof enquirySchema>;
      if (!fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return {
      status: "error",
      message: "Please correct the highlighted fields and try again.",
      fieldErrors,
    };
  }

  // Honeypot field — bots fill hidden fields, real users leave it blank.
  if (parsed.data.website) {
    return { status: "success" };
  }

  const data = parsed.data;
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error(
      "RESEND_API_KEY is not set — enquiry was validated but not sent.",
      { ...data, website: undefined }
    );
    return GENERIC_SEND_ERROR;
  }

  const rows: [string, string][] = [
    ["Name", data.fullName],
    ["Company", data.company || "—"],
    ["Email", data.email],
    ["Phone", data.phone || "—"],
    ["Country", data.country],
    ["Area of Interest", data.areaOfInterest],
  ];

  const htmlRows = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:6px 12px 6px 0;color:#6b6a64;white-space:nowrap;">${escapeHtml(label)}</td><td style="padding:6px 0;color:#161615;">${escapeHtml(value)}</td></tr>`
    )
    .join("");

  try {
    const resend = new Resend(apiKey);
    const fromAddress = process.env.RESEND_FROM_EMAIL ?? "Essentially Yao <onboarding@resend.dev>";

    const { error } = await resend.emails.send({
      from: fromAddress,
      to: process.env.ENQUIRY_TO_EMAIL || CONTACT.email,
      replyTo: data.email,
      subject: `New enquiry: ${data.areaOfInterest} — ${data.fullName}`,
      html: `
        <div style="font-family:sans-serif;max-width:560px;margin:0 auto;">
          <h2 style="color:#161615;">New website enquiry</h2>
          <table cellpadding="0" cellspacing="0">${htmlRows}</table>
          <p style="margin-top:16px;color:#6b6a64;">Message</p>
          <p style="white-space:pre-wrap;color:#161615;">${escapeHtml(data.message)}</p>
        </div>
      `,
      text: [
        ...rows.map(([label, value]) => `${label}: ${value}`),
        "",
        "Message:",
        data.message,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend failed to send enquiry email:", error);
      return GENERIC_SEND_ERROR;
    }
  } catch (err) {
    console.error("Unexpected error sending enquiry email:", err);
    return GENERIC_SEND_ERROR;
  }

  return {
    status: "success",
    message: "Thanks. Your enquiry has been received and our team will be in touch shortly.",
  };
}
