
import ProductCard from "@/components/product-card";
import TiltEffect from "@/components/tilt-effect";
import type { Metadata } from 'next'
import StaticTitle from "@/components/animated-title";
 
export const metadata: Metadata = {
  title: 'Our Products - Printing Point',
  description: 'Browse our collection of exquisite gifting products.',
}

const products = [
  {
    id: 1,
    title: "The Monarch Pen",
    description: "A symbol of elegance and precision, crafted from solid brass with gold accents.",
    minimumOrder: 50,
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "luxury pen"
  },
  {
    id: 2,
    title: "Executive Leather Journal",
    description:
      "Premium full-grain leather journal for your thoughts and ideas.",
    minimumOrder: 50,
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "leather journal"
  },
  {
    id: 3,
    title: "Crystal Desk Clock",
    description:
      "An exquisite timepiece that adds a touch of class to any workspace.",
    minimumOrder: 50,
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "desk clock"
  },
  {
    id: 4,
    title: "Personalized Cufflinks",
    description:
      "Custom-engraved sterling silver cufflinks for a personal touch.",
    minimumOrder: 50,
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "silver cufflinks"
  },
  {
    id: 5,
    title: "Gourmet Gift Basket",
    description:
      "A curated selection of fine foods and wines for the discerning palate.",
    minimumOrder: 50,
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "gift basket"
  },
  {
    id: 6,
    title: "The Statesman Watch",
    description:
      "A timeless watch with a leather strap and a minimalist face.",
    minimumOrder: 20,
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "luxury watch"
  },
  {
    id: 7,
    title: "Silk Scarf Collection",
    description:
      "A collection of pure silk scarves with artistic, hand-painted designs.",
    minimumOrder: 30,
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "silk scarf"
  },
  {
    id: 8,
    title: "Tech Organizer Case",
    description:
      "A sleek and durable case to keep all your tech accessories in one place.",
    minimumOrder: 40,
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "tech organizer"
  },
  {
    id: 9,
    title: "Artisan Coffee Set",
    description:
      "A set of single-origin coffee beans and a French press for the coffee connoisseur.",
    minimumOrder: 25,
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "coffee set"
  },
];

export default function ProductsPage() {
  const newBackgroundColor = "#203354";
  return (
    <div style={{backgroundColor: newBackgroundColor}}>
      <div className="container py-16 md:py-24 text-center">
          <div className="p-8 rounded-lg bg-black/5 backdrop-blur-sm inline-block">
            <StaticTitle className="text-4xl md:text-5xl font-bold font-headline text-primary-foreground">
              Our Products
            </StaticTitle>
            <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Explore our curated collection of fine gifts, perfect for any occasion. Each item is selected for its quality and craftsmanship.
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
