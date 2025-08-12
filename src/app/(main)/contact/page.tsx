
import type { Metadata } from 'next';
import ContactForm from '@/components/contact-form';
import ContactInfo from '@/components/contact-info';

export const metadata: Metadata = {
  title: 'Contact Us - Printing Point',
  description: 'Get in touch with us for your gifting needs.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen py-16 md:py-24 bg-background font-body">
      <div className="container">
        <div className="bg-card shadow-2xl rounded-lg overflow-hidden border-4 border-primary">
          <div className="flex flex-col md:flex-row">
            {/* Left side: Contact Info */}
            <div className="md:w-1/3 bg-background p-8 md:p-12 text-primary rounded-l-lg">
              <ContactInfo />
            </div>

            {/* Right side: Form */}
            <div className="md:w-2/3 p-8 md:p-12 bg-primary text-primary-foreground">
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
