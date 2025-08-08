
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
    <Button type="submit" className="w-full" style={{ backgroundColor: 'hsl(221, 45%, 23%)', color: 'hsl(48, 33%, 94%)' }} disabled={pending}>
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
      className="shadow-lg backdrop-blur-sm border-none"
      style={{ 
        backgroundColor: 'hsl(48, 33%, 94%)', // Warm Cream
        color: 'hsl(221, 45%, 23%)' // Deep Blue
      }}
    >
      <form action={formAction} ref={formRef}>
        <CardContent className="p-6 space-y-6">
          <div className="space-y-2">
            <Label htmlFor="fullName" style={{color: 'hsl(221, 45%, 23%)'}}>Full Name</Label>
            <Input id="fullName" name="fullName" placeholder="John Doe" required style={{backgroundColor: 'hsl(48, 33%, 94%)', color: 'hsl(221, 45%, 23%)', borderColor: 'hsl(221, 45%, 40%)'}} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" style={{color: 'hsl(221, 45%, 23%)'}}>Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="john@example.com"
              required
              style={{backgroundColor: 'hsl(48, 33%, 94%)', color: 'hsl(221, 45%, 23%)', borderColor: 'hsl(221, 45%, 40%)'}}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone" style={{color: 'hsl(221, 45%, 23%)'}}>Phone Number (Optional)</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+1 (555) 123-4567"
              style={{backgroundColor: 'hsl(48, 33%, 94%)', color: 'hsl(221, 45%, 23%)', borderColor: 'hsl(221, 45%, 40%)'}}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message" style={{color: 'hsl(221, 45%, 23%)'}}>Your Query</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Please describe your requirements..."
              required
              minLength={10}
              rows={5}
              defaultValue={messageParam || ''}
              style={{backgroundColor: 'hsl(48, 33%, 94%)', color: 'hsl(221, 45%, 23%)', borderColor: 'hsl(221, 45%, 40%)'}}
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
