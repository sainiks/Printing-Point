
"use server";

import { z } from "zod";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactFormSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().min(10, "Please enter a valid phone number.").optional().or(z.literal('')),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export type ContactFormState = {
  message: string;
  status: "success" | "error";
} | {
    message: null;
    status: null;
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = contactFormSchema.safeParse({
    fullName: formData.get("fullName"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    const errorMessages = validatedFields.error.issues.map(i => i.message).join(', ');
    return {
      status: "error",
      message: `Please correct the errors: ${errorMessages}`,
    };
  }

  const { fullName, email, phone, message } = validatedFields.data;
  const receivingEmail = "kunalsaini20090360@gmail.com";
  
  try {
    const { data, error } = await resend.emails.send({
      from: 'Printing Point <onboarding@resend.dev>',
      to: receivingEmail,
      subject: 'New Contact Form Submission',
      html: `
        <p>You have a new submission from your website's contact form.</p>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });

    if (error) {
      console.error("Resend error:", error);
      return {
        status: "error",
        message: "Sorry, we couldn't send your message. Please try again later.",
      };
    }
    
    return {
      status: "success",
      message: "Thank you for your message! We will get back to you soon.",
    };

  } catch (exception) {
    console.error("Email sending exception:", exception);
    return {
      status: "error",
      message: "An unexpected error occurred. Please try again later.",
    };
  }
}
