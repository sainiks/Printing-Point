
import StaticTitle from "@/components/animated-title";
import ContactForm from "@/components/contact-form";
import ParallaxContactForm from "@/components/parallax-contact-form";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Contact Us - Printing Point',
  description: 'Get in touch with us for your gifting needs.',
}

export default function ContactPage() {
  const newBackgroundColor = "hsl(var(--background))";
  return (
    <div style={{backgroundColor: newBackgroundColor}} className="min-h-screen py-16 md:py-24">
       <div className="container text-center">
          <div className="max-w-2xl mx-auto p-8 rounded-lg bg-card/5 backdrop-blur-sm shadow-lg">
            <StaticTitle className="text-4xl md:text-5xl font-bold font-headline text-foreground">
              Contact Us
            </StaticTitle>
            <p className="mt-4 text-lg text-foreground/80">
              Have a question or a bulk order inquiry? Fill out the form below, and our team will get back to you shortly.
            </p>
          </div>
      </div>
      <div className="container pt-4">
        <div className="max-w-xl mx-auto">
            <ParallaxContactForm>
                <ContactForm />
            </ParallaxContactForm>
        </div>
      </div>
    </div>
  );
}
