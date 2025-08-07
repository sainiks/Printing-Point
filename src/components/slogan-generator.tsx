"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { generateSlogan } from "@/ai/flows/generate-slogan";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Wand2 } from "lucide-react";

const sloganSchema = z.object({
  productCategory: z.string().min(3, "Category is required."),
  userBrowsingHistory: z.string().min(10, "History is required."),
});

type SloganFormValues = z.infer<typeof sloganSchema>;

export default function SloganGenerator() {
  const [slogan, setSlogan] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<SloganFormValues>({
    resolver: zodResolver(sloganSchema),
    defaultValues: {
      productCategory: "Luxury Pens",
      userBrowsingHistory:
        "User has been looking at premium corporate gifts, leather goods, and personalized stationery.",
    },
  });

  async function onSubmit(data: SloganFormValues) {
    setIsLoading(true);
    setSlogan("");
    try {
      const result = await generateSlogan(data);
      setSlogan(result.slogan);
    } catch (error) {
      console.error("Error generating slogan:", error);
      setSlogan("Failed to generate a slogan. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card className="max-w-2xl mx-auto shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 font-headline">
          <Wand2 className="h-6 w-6" style={{color: "hsl(var(--accent))"}}/>
          AI Slogan Generator
        </CardTitle>
        <CardDescription>
          Generate a catchy slogan based on product details. Let our AI power
          your marketing!
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="productCategory"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product Category</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Luxury Pens" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="userBrowsingHistory"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>User Browsing History</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe user's recent activity..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="flex flex-col items-start gap-4">
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Generating..." : "Generate Slogan"}
            </Button>
            {(isLoading || slogan) && (
              <div className="w-full p-4 border rounded-md bg-secondary">
                <p className="font-semibold text-primary">
                  Generated Slogan:
                </p>
                {isLoading ? (
                  <div className="animate-pulse h-6 bg-muted rounded-md mt-2 w-3/4"></div>
                ) : (
                  <p className="text-lg font-medium text-primary mt-1">
                    "{slogan}"
                  </p>
                )}
              </div>
            )}
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
