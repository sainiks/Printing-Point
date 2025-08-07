
import ProductCard from "@/components/product-card";
import TiltEffect from "@/components/tilt-effect";
import type { Metadata } from 'next'
 
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
];

export default function ProductsPage() {
  return (
    <div className="bg-secondary/50 scroll-animation">
      <div className="container py-16 md:py-24">
        <div className="text-center mb-12 p-8 rounded-lg bg-black/5 backdrop-blur-sm">
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">Our Products</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our curated collection of fine gifts, perfect for any occasion. Each item is selected for its quality and craftsmanship.
          </p>
        </div>
        <TiltEffect>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
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
        </TiltEffect>
      </div>
    </div>
  );
}
