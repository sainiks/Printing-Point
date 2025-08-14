
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-headline text-3xl md:text-4xl text-primary mb-4">
          Contact Information
        </h2>
        <p className="text-foreground/80 font-body">
          Whether you have a question, need support or want to share your feedback, our team is here to assist you every step of the way.
        </p>
      </div>

      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 flex-shrink-0 rounded-full border-2 border-primary flex items-center justify-center">
            <Phone className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="font-semibold text-foreground font-body">+91 9810472144</p>
            <p className="font-semibold text-foreground font-body">+91 7217717114</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 flex-shrink-0 rounded-full border-2 border-primary flex items-center justify-center">
            <Mail className="w-5 h-5 text-primary" />
          </div>
          <p className="font-semibold text-foreground font-body">printingpoint76@yahoo.com</p>
        </div>
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 flex-shrink-0 rounded-full border-2 border-primary flex items-center justify-center">
            <MapPin className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="font-semibold text-foreground font-body">
              8/89, Mall Road, Tilak Nagar, <br />
              New Delhi- 110018
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
