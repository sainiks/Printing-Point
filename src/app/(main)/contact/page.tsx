
import ContactForm from "@/components/contact-form";
import TiltEffect from "@/components/tilt-effect";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Contact Us - Printing Point',
  description: 'Get in touch with us for your gifting needs.',
}

export default function ContactPage() {
  return (
    <div className="bg-secondary/50">
      <div className="container py-12 md:py-16 scroll-animation">
        <div className="max-w-2xl mx-auto text-center p-8 rounded-lg bg-black/5 backdrop-blur-sm">
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">Contact Us</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Have a question or a bulk order inquiry? Fill out the form below, and our team will get back to you shortly.
          </p>
        </div>
        <TiltEffect className="max-w-2xl mx-auto mt-12">
            <ContactForm />
        </TiltEffect>
      </div>
    </div>
  );
}
