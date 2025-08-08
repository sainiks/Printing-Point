"use client";

import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
import { useSearchParams } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { submitContactForm, type ContactFormState } from "@/lib/actions";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
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
    <Button type="submit" className="w-full bg-primary/80 text-primary-foreground hover:bg-primary" disabled={pending}>
      {pending ? "Sending..." : "Send Message"}
    </Button>
  );
}

export default function ContactForm() {
  const searchParams = useSearchParams();
  const [state, formAction] = useActionState(submitContactForm, initialState);
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
       // We might want to clear the textarea specifically if the form reset doesn't
       const textarea = formRef.current?.querySelector('textarea');
       if(textarea) textarea.value = '';

    } else if (state.status === "error") {
      toast({
        title: "Error",
        description: state.message,
        variant: "destructive",
      });
    }
  }, [state, toast]);

  return (
    <Card 
      className="shadow-lg backdrop-blur-sm border"
      style={{ 
        backgroundColor: 'hsl(var(--contact-card-bg) / 0.8)',
        borderColor: 'hsl(var(--contact-card-bg) / 0.5)',
        color: 'hsl(var(--contact-card-fg))'
      }}
    >
      <form action={formAction} ref={formRef}>
        <CardContent className="p-6 space-y-6">
          <div className="space-y-2">
            <Label htmlFor="fullName" style={{color: 'hsl(var(--contact-card-fg))'}}>Full Name</Label>
            <Input id="fullName" name="fullName" placeholder="John Doe" required style={{backgroundColor: 'hsl(var(--contact-card-bg))', color: 'hsl(var(--primary))', borderColor: 'hsl(var(--contact-card-fg) / 0.2)'}} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" style={{color: 'hsl(var(--contact-card-fg))'}}>Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="john@example.com"
              required
              style={{backgroundColor: 'hsl(var(--contact-card-bg))', color: 'hsl(var(--primary))', borderColor: 'hsl(var(--contact-card-fg) / 0.2)'}}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone" style={{color: 'hsl(var(--contact-card-fg))'}}>Phone Number (Optional)</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+1 (555) 123-4567"
              style={{backgroundColor: 'hsl(var(--contact-card-bg))', color: 'hsl(var(--primary))', borderColor: 'hsl(var(--contact-card-fg) / 0.2)'}}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message" style={{color: 'hsl(var(--contact-card-fg))'}}>Your Query</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Please describe your requirements..."
              required
              minLength={10}
              rows={5}
              defaultValue={messageParam || ''}
              style={{backgroundColor: 'hsl(var(--contact-card-bg))', color: 'hsl(var(--primary))', borderColor: 'hsl(var(--contact-card-fg) / 0.2)'}}
            />
          </div>
        </CardContent>
        <CardFooter className="p-6 pt-0">
          <SubmitButton />
        </CardFooter>
      </form>
    </Card>
  );
}
