"use server";

import { z } from "zod";
import { AREAS_OF_INTEREST } from "@/lib/constants";

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

  // TODO: wire up to an email / CRM provider (e.g. Resend, HubSpot) once configured.
  console.log("New enquiry received:", {
    ...parsed.data,
    website: undefined,
    receivedAt: new Date().toISOString(),
  });

  return {
    status: "success",
    message: "Thanks. Your enquiry has been received and our team will be in touch shortly.",
  };
}
