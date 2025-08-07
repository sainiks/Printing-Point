import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporate Gifting - PrintingPoint Luxe",
  description: "Bespoke corporate gifting solutions for your business.",
};

export default function CorporateGiftingPage() {
  return (
    <div className="bg-secondary/50">
      <div className="container py-12 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">
              Elevate Your Brand with Bespoke Corporate Gifts
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              At PrintingPoint Luxe, we specialize in creating memorable gifting
              experiences that reflect your company's prestige and values. From
              onboarding kits for new hires to exclusive gifts for your most
              valued clients, we provide end-to-end service with a touch of
              luxury.
            </p>
            <ul className="mt-6 space-y-2 list-disc list-inside text-muted-foreground">
              <li>Custom branding and packaging options.</li>
              <li>Bulk order discounts and wholesale rates.</li>
              <li>Dedicated account manager for your orders.</li>
              <li>Worldwide shipping and fulfillment.</li>
            </ul>
            <Button asChild size="lg" className="mt-8">
              <Link href="/contact">Start Your Inquiry</Link>
            </Button>
          </div>
          <div className="relative aspect-square rounded-lg overflow-hidden shadow-xl order-1 md:order-2">
            <Image
              src="https://placehold.co/600x600.png"
              alt="Corporate Gifting"
              data-ai-hint="corporate gifts meeting"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
