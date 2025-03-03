"use server";
import { emailTemplate } from "@/lib/templates";
import { sendMail } from "@/lib/utils/sendMail";
import { ContactForm } from "@/types";

export const SendMessage = async (emails: string[], data: ContactForm) => {
  await sendMail({
    to: emails.join(","),
    subject: `${data.name} Message from Contact Form`,
    html: emailTemplate(data),
  });
};
