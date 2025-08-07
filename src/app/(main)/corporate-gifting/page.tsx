
import ProductCard from "@/components/product-card";
import TiltEffect from "@/components/tilt-effect";
import type { Metadata } from "next";
import StaticTitle from "@/components/animated-title";

export const metadata: Metadata = {
  title: "Corporate Gifting - Printing Point",
  description: "Bespoke corporate gifting solutions for your business.",
};

const allCorporateGiftingProducts = [
  // Onboarding & Welcome Kits
  { id: 1, title: "Employee Onboarding Kit", description: "Welcome new hires with a custom-branded kit, including a journal, pen, and a thermal flask.", minimumOrder: 50, imageUrl: "https://placehold.co/600x400.png", imageHint: "onboarding kit office", category: "Onboarding & Welcome Kits" },
  { id: 2, title: "Eco-Friendly Welcome Kit", description: "A sustainable choice with a bamboo notebook, a reusable coffee cup, and a seeded paper thank you card.", minimumOrder: 50, imageUrl: "https://placehold.co/600x400.png", imageHint: "eco friendly gifts", category: "Onboarding & Welcome Kits" },
  { id: 3, title: "Tech Lovers Welcome Kit", description: "Impress new joiners with a kit containing a power bank, wireless earbuds, and a branded phone stand.", minimumOrder: 50, imageUrl: "https://placehold.co/600x400.png", imageHint: "tech swag gadgets", category: "Onboarding & Welcome Kits" },
  // Client & Partner Gifting
  { id: 4, title: "Client Appreciation Basket", description: "A curated selection of gourmet snacks, premium coffee, and a personalized thank you card.", minimumOrder: 25, imageUrl: "https://placehold.co/600x400.png", imageHint: "client gift basket", category: "Client & Partner Gifting" },
  { id: 5, title: "Executive Gift Set", description: "A high-end set for valued partners, featuring a crystal decanter and a set of premium glasses.", minimumOrder: 15, imageUrl: "https://placehold.co/600x400.png", imageHint: "executive crystal gift", category: "Client & Partner Gifting" },
  { id: 6, title: "Luxury Leather Portfolio", description: "A premium leather portfolio for executives, perfect for meetings and presentations.", minimumOrder: 25, imageUrl: "https://placehold.co/600x400.png", imageHint: "leather portfolio business", category: "Client & Partner Gifting" },
  // Event & Conference Solutions
  { id: 7, title: "Conference Swag Bag", description: "Equip attendees with memorable swag, including a branded tote bag, notebook, and tech accessories.", minimumOrder: 100, imageUrl: "https://placehold.co/600x400.png", imageHint: "conference swag", category: "Event & Conference Solutions" },
  { id: 8, title: "Holiday Gift Box", description: "A festive box filled with seasonal treats, a cozy blanket, and a scented candle. Perfect for year-end events.", minimumOrder: 50, imageUrl: "https://placehold.co/600x400.png", imageHint: "holiday gift box", category: "Event & Conference Solutions" },
  { id: 9, title: "Wellness & Self-Care Kit", description: "Promote well-being with a kit containing an essential oil diffuser, a stress ball, and herbal teas for event attendees.", minimumOrder: 75, imageUrl: "https://placehold.co/600x400.png", imageHint: "wellness kit relaxation", category: "Event & Conference Solutions" },
];


export default function CorporateGiftingPage({ searchParams }: { searchParams?: { category?: string } }) {
  const category = searchParams?.category;
  const products = category 
    ? allCorporateGiftingProducts.filter(p => p.category === category)
    : allCorporateGiftingProducts;

  const pageTitle = category || "Corporate Gifting Solutions";
  const pageDescription = category
    ? `Bespoke ${category.toLowerCase()} for your business.`
    : "Elevate your brand with our bespoke corporate gifts. We specialize in creating memorable experiences that reflect your company's prestige and values.";

  const newBackgroundColor = "#203354";
  return (
    <div style={{backgroundColor: newBackgroundColor}}>
      <div className="container py-16 md:py-24 text-center">
          <div className="p-8 rounded-lg bg-black/5 backdrop-blur-sm inline-block">
            <StaticTitle className="text-4xl md:text-5xl font-bold font-headline text-primary-foreground">
              {pageTitle}
            </StaticTitle>
            <p className="mt-4 text-lg text-primary-foreground/80 max-w-3xl mx-auto">
              {pageDescription}
            </p>
          </div>
      </div>
      <div className="container py-16 md:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <TiltEffect key={product.id}>
              <ProductCard
                title={product.title}
                description={product.description}
                imageUrl={product.imageUrl}
                minimumOrder={product.minimumOrder}
                imageHint={product.imageHint}
              />
            </TiltEffect>
          ))}
        </div>
      </div>
    </div>
  );
}
