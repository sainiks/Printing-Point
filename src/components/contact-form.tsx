
"use client";

import { useEffect, useRef } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { useSearchParams } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { submitContactForm, type ContactFormState } from "@/lib/actions";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const initialState: ContactFormState = {
  status: null,
  message: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-lg py-6 font-body" disabled={pending}>
      {pending ? "Sending..." : "Send Message"}
    </Button>
  );
}

export default function ContactForm() {
  const searchParams = useSearchParams();
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const messageParam = searchParams.get("message");

  useEffect(() => {
    if (state.status === "success") {
      toast({
        title: "Message Sent!",
        description: state.message,
      });
      formRef.current?.reset();
    } else if (state.status === "error") {
      toast({
        title: "Error",
        description: state.message,
        variant: "destructive",
      });
    }
  }, [state, toast]);

  return (
    <form action={formAction} ref={formRef} className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <Label htmlFor="fullName" className="font-headline text-xl text-card-foreground">Name</Label>
          <Input id="fullName" name="fullName" required className="bg-white text-foreground placeholder:text-muted-foreground rounded-xl h-12" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="font-headline text-xl text-card-foreground">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            className="bg-white text-foreground placeholder:text-muted-foreground rounded-xl h-12"
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone" className="font-headline text-xl text-card-foreground">Phone Number (Optional)</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder="+91 12345 67890"
          className="bg-white text-foreground placeholder:text-muted-foreground rounded-xl h-12"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message" className="font-headline text-xl text-card-foreground">Your Message</Label>
        <Textarea
          id="message"
          name="message"
          required
          minLength={10}
          rows={6}
          key={messageParam} // Force re-render when product changes
          defaultValue={messageParam || ''}
          className="bg-white text-foreground placeholder:text-muted-foreground rounded-xl"
        />
      </div>
      
      <div>
        <SubmitButton />
      </div>
    </form>
  );
}
