import ProductCard from "@/components/product-card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporate Gifting - PrintingPoint Luxe",
  description: "Bespoke corporate gifting solutions for your business.",
};

const corporateGifts = [
  {
    id: 1,
    title: "Employee Onboarding Kit",
    description:
      "Welcome new hires with a custom-branded kit, including a journal, pen, and a thermal flask.",
    minimumOrder: 50,
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "onboarding kit office",
  },
  {
    id: 2,
    title: "Client Appreciation Basket",
    description:
      "A curated selection of gourmet snacks, premium coffee, and a personalized thank you card.",
    minimumOrder: 50,
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "client gift basket",
  },
  {
    id: 3,
    title: "Conference Swag Bag",
    description:
      "Equip attendees with memorable swag, including a branded tote bag, notebook, and tech accessories.",
    minimumOrder: 50,
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "conference swag",
  },
  {
    id: 4,
    title: "Executive Gift Set",
    description:
      "A high-end set for valued partners, featuring a crystal decanter and a set of premium glasses.",
    minimumOrder: 50,
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "executive crystal gift",
  },
  {
    id: 5,
    title: "Holiday Gift Box",
    description:
      "A festive box filled with seasonal treats, a cozy blanket, and a scented candle. Perfect for year-end.",
    minimumOrder: 50,
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "holiday gift box",
  },
  {
    id: 6,
    title: "Wellness & Self-Care Kit",
    description:
      "Promote well-being with a kit containing an essential oil diffuser, a stress ball, and herbal teas.",
    minimumOrder: 50,
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "wellness kit relaxation",
  },
];

export default function CorporateGiftingPage() {
  return (
    <div className="bg-secondary/50 scroll-animation">
      <div className="container py-16 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">
            Corporate Gifting Solutions
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Elevate your brand with our bespoke corporate gifts. We specialize
            in creating memorable experiences that reflect your company's
            prestige and values.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {corporateGifts.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              description={product.description}
              imageUrl={product.imageUrl}
              minimumOrder={product.minimumOrder}
              imageHint={product.imageHint}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
