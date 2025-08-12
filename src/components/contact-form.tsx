
"use client";

import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
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
    <Button type="submit" className="w-full bg-[#FDF5EF] text-primary hover:bg-[#FDF5EF]/90 text-lg py-6" disabled={pending}>
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
    <form action={formAction} ref={formRef} className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <Label htmlFor="fullName" className="font-headline text-xl text-primary-foreground">Name</Label>
          <Input id="fullName" name="fullName" required className="bg-white text-primary placeholder:text-primary/70 rounded-xl h-12" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="font-headline text-xl text-primary-foreground">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            className="bg-white text-primary placeholder:text-primary/70 rounded-xl h-12"
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message" className="font-headline text-xl text-primary-foreground">Your Message</Label>
        <Textarea
          id="message"
          name="message"
          required
          minLength={10}
          rows={6}
          defaultValue={messageParam || ''}
          className="bg-white text-primary placeholder:text-primary/70 rounded-xl"
        />
      </div>
       <div className="space-y-2 !mt-4 hidden">
            <Label htmlFor="phone">Phone Number (Optional)</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+1 (555) 123-4567"
              className="bg-primary-foreground text-primary placeholder:text-primary/70"
            />
        </div>
      <div>
        <SubmitButton />
      </div>
    </form>
  );
}
