"use server";

import { z } from "zod";
import { transporter } from "@/lib/mailer";

const enquirySchema = z.object({
  firstName: z.string().trim().min(1).max(100),
  lastName: z.string().trim().min(1).max(100),
  company: z.string().trim().max(200).optional(),
  emailAddress: z.string().trim().email().max(200),
  phoneNumber: z.string().trim().max(50).optional(),
  service: z.string().trim().max(200).optional(),
  project: z.string().trim().max(200).optional(),
  budget: z.string().trim().max(200).optional(),
  message: z.string().trim().min(1).max(5000),
});

type EnquiryPayload = z.infer<typeof enquirySchema>;

export async function sendEmail(payload: EnquiryPayload) {
  const parsed = enquirySchema.safeParse(payload);
  if (!parsed.success) {
    console.error("Invalid enquiry payload", parsed.error.flatten());
    return { success: false, error: "Invalid form data" };
  }

  const {
    firstName,
    lastName,
    company,
    emailAddress,
    phoneNumber,
    service,
    project,
    budget,
    message,
  } = parsed.data;

  const text = `New Project Enquiry

Name: ${firstName} ${lastName}
Company: ${company || "N/A"}
Email: ${emailAddress}
Phone: ${phoneNumber || "N/A"}
Service: ${service || "N/A"}
Project Stage: ${project || "N/A"}
Budget: ${budget || "N/A"}

Message:
${message}`;

  try {
    await transporter.sendMail({
      from: process.env.MAIL_FROM || "no-reply@one-block.org",
      to: process.env.ENQUIRY_RECIPIENT || "udohmuwem@gmail.com",
      replyTo: emailAddress,
      subject: `New enquiry from ${firstName} ${lastName}${company ? ` (${company})` : ""}`,
      text,
    });
    return { success: true };
  } catch (error) {
    console.error("Failed to send enquiry email", error);
    return { success: false, error: "Failed to send enquiry" };
  }
}
