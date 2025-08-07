
"use server";

import { z } from "zod";

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
  // This is a placeholder email. In a real application, you would use a service like 
  // Resend, SendGrid, or Nodemailer to send an email here.
  const receivingEmail = "kunalsaini20090360@gmail.com";
  
  console.log("--- New Contact Form Submission (Simulated Email) ---");
  console.log("This is a prototype. No email is actually sent.");
  console.log(`Recipient: ${receivingEmail}`);
  console.log(`Full Name: ${fullName}`);
  console.log(`Email: ${email}`);
  console.log(`Phone: ${phone || 'Not provided'}`);
  console.log(`Message: ${message}`);
  console.log("-----------------------------------------------------");

  return {
    status: "success",
    message: "Thank you for your message! We will get back to you soon.",
  };
}
