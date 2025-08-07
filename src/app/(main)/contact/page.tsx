
import ContactForm from "@/components/contact-form";
import TiltEffect from "@/components/tilt-effect";
import type { Metadata } from 'next'
import ParallaxSection from "@/components/parallax-section";
 
export const metadata: Metadata = {
  title: 'Contact Us - Printing Point',
  description: 'Get in touch with us for your gifting needs.',
}

export default function ContactPage() {
  const soulfulGradient = "linear-gradient(to right, #e0e7ff, #c7d2fe)";
  return (
    <div className="bg-secondary/50">
       <ParallaxSection backgroundGradient={soulfulGradient}>
        <div className="container py-12 md:py-16 scroll-animation">
            <div className="max-w-2xl mx-auto text-center p-8 rounded-lg bg-black/5 backdrop-blur-sm">
              <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">Contact Us</h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Have a question or a bulk order inquiry? Fill out the form below, and our team will get back to you shortly.
              </p>
            </div>
        </div>
      </ParallaxSection>
      <div className="container py-12 md:py-16 scroll-animation">
        <TiltEffect className="max-w-2xl mx-auto">
            <ContactForm />
        </TiltEffect>
      </div>
    </div>
  );
}
