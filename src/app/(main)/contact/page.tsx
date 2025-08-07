
import AnimatedTitle from "@/components/animated-title";
import ContactForm from "@/components/contact-form";
import TiltEffect from "@/components/tilt-effect";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Contact Us - Printing Point',
  description: 'Get in touch with us for your gifting needs.',
}

export default function ContactPage() {
  const soulfulGradient = "linear-gradient(to right, #e0e7ff, #c7d2fe)";
  return (
    <div className="bg-secondary/50">
       <div className="container py-12 md:py-24 text-center" style={{background: soulfulGradient}}>
          <div className="max-w-2xl mx-auto p-8 rounded-lg bg-black/5 backdrop-blur-sm">
            <AnimatedTitle className="text-4xl md:text-5xl font-bold font-headline text-primary">
              Contact Us
            </AnimatedTitle>
            <p className="mt-4 text-lg text-muted-foreground scroll-animation">
              Have a question or a bulk order inquiry? Fill out the form below, and our team will get back to you shortly.
            </p>
          </div>
      </div>
      <div className="container py-12 md:py-16 scroll-animation">
        <TiltEffect className="max-w-2xl mx-auto">
            <ContactForm />
        </TiltEffect>
      </div>
    </div>
  );
}
