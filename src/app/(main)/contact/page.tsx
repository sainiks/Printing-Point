
import type { Metadata } from 'next';
import ContactForm from '@/components/contact-form';
import ContactInfo from '@/components/contact-info';

export const metadata: Metadata = {
  title: 'Contact Us - Printing Point',
  description: 'Get in touch with us for your gifting needs.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4 sm:p-6 md:p-8">
      <div className="container max-w-6xl">
        <div className="bg-card shadow-2xl rounded-lg overflow-hidden border-4 border-primary">
          <div className="flex flex-col md:flex-row">
            {/* Left side: Contact Info */}
            <div className="md:w-1/3 bg-primary p-8 md:p-12 text-primary-foreground rounded-l-lg">
              <ContactInfo />
            </div>

            {/* Right side: Form */}
            <div className="md:w-2/3 p-8 md:p-12 bg-card text-card-foreground">
              <h2 className="font-headline text-3xl md:text-4xl text-center md:text-left mb-8">
                Fill The Form
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
