
import StaticTitle from "@/components/animated-title";
import ContactForm from "@/components/contact-form";
import TiltEffect from "@/components/tilt-effect";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Contact Us - Printing Point',
  description: 'Get in touch with us for your gifting needs.',
}

export default function ContactPage() {
  const newBackgroundColor = "#203354";
  return (
    <div style={{backgroundColor: newBackgroundColor}} className="py-16 md:py-24">
       <div className="container text-center">
          <div className="max-w-2xl mx-auto p-8 rounded-lg bg-black/5 backdrop-blur-sm">
            <StaticTitle className="text-4xl md:text-5xl font-bold font-headline text-primary-foreground">
              Contact Us
            </StaticTitle>
            <p className="mt-4 text-lg text-primary-foreground/80">
              Have a question or a bulk order inquiry? Fill out the form below, and our team will get back to you shortly.
            </p>
          </div>
      </div>
      <div className="container pt-12 md:pt-16">
        <TiltEffect className="max-w-2xl mx-auto">
            <ContactForm />
        </TiltEffect>
      </div>
    </div>
  );
}
