

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ProductCard from "@/components/product-card";
import HomeHero from "@/components/home-hero";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselDots, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import ParallaxSection from "@/components/parallax-section";
import StaticTitle from "@/components/animated-title";
import TiltEffect from "@/components/tilt-effect";
import ParallaxImage from "@/components/parallax-image";

const bestBuys = [
  {
    id: 1,
    title: "Executive Gift Set",
    description: "A high-end set for valued partners, featuring a crystal decanter and a set of premium glasses.",
    minimumOrder: 10,
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "executive crystal gift",
  },
  {
    id: 2,
    title: "The Monarch Pen",
    description: "A symbol of elegance and precision, crafted from solid brass with gold accents.",
    minimumOrder: 50,
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "luxury pen",
  },
  {
    id: 3,
    title: "Gourmet Gift Basket",
    description: "A curated selection of fine foods and wines for the discerning palate.",
    minimumOrder: 25,
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "gourmet food wine",
  },
];

const newArrivals = [
  {
    id: 4,
    title: "Personalized Cufflinks",
    description: "Custom-engraved sterling silver cufflinks for a personal touch.",
    minimumOrder: 20,
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "silver cufflinks",
  },
  {
    id: 5,
    title: "Conference Swag Bag",
    description: "Equip attendees with memorable swag, including a branded tote bag and notebook.",
    minimumOrder: 100,
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "conference swag",
  },
    {
    id: 6,
    title: "Crystal Desk Clock",
    description: "An exquisite timepiece that adds a touch of class to any workspace.",
    minimumOrder: 15,
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "desk clock",
  },
];

const onSale = [
  {
    id: 7,
    title: "Executive Leather Journal",
    description: "Premium full-grain leather journal for your thoughts and ideas. 20% off!",
    minimumOrder: 30,
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "leather journal",
  },
    {
    id: 8,
    title: "Wellness & Self-Care Kit",
    description: "Promote well-being with a kit containing an essential oil diffuser and herbal teas. Limited time offer!",
    minimumOrder: 40,
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "wellness kit",
  },
  {
    id: 9,
    title: "Holiday Gift Box",
    description: "A festive box filled with seasonal treats, a cozy blanket, and a scented candle. On sale now!",
    minimumOrder: 30,
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "holiday gift box",
  },
];

const collections = [
  {
    title: "Best Buy Deals",
    products: bestBuys,
    bgClass: "bg-gradient-to-br from-blue-100 to-blue-200",
  },
  {
    title: "New Products",
    products: newArrivals,
    bgClass: "bg-gradient-to-br from-purple-100 to-purple-200",
  },
  {
    title: "On Sale",
    products: onSale,
    bgClass: "bg-gradient-to-br from-yellow-100 to-yellow-200",
  },
];


export default function Home() {
  const soulfulGradient = "linear-gradient(to right, #e0e7ff, #c7d2fe)";

  return (
    <div>
      <HomeHero />

      <ParallaxSection backgroundGradient={soulfulGradient}>
        <section className="py-24 md:py-32">
          <div className="container">
            <div className="text-center mb-12 p-8 rounded-lg bg-black/5 backdrop-blur-sm">
              <StaticTitle as="h2" className="text-3xl md:text-4xl font-bold font-headline text-primary">
                Explore Our Collections
              </StaticTitle>
              <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
                Curated selections for every need, from special deals to our newest arrivals.
              </p>
            </div>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {collections.map((collection, index) => (
                  <CarouselItem key={index}>
                    <Card className={`${collection.bgClass} bg-opacity-20 backdrop-blur-sm border-white/20`}>
                      <CardContent className="p-4 sm:p-6">
                        <StaticTitle as="h3" className="text-2xl md:text-3xl font-bold font-headline text-primary mb-6 text-center">{collection.title}</StaticTitle>
                        <div className="flex flex-col sm:flex-row sm:flex-wrap md:flex-nowrap gap-4 md:gap-8 justify-center p-2 sm:p-0">
                          {collection.products.map((product) => (
                            <TiltEffect key={product.id} className="w-full sm:w-[calc(50%-0.5rem)] md:w-1/3 flex-shrink-0">
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
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex items-center justify-center gap-4 mt-8">
                <CarouselPrevious className="static -translate-y-0 w-12 h-12" />
                <CarouselDots />
                <CarouselNext className="static -translate-y-0 w-12 h-12" />
              </div>
            </Carousel>
          </div>
        </section>
      </ParallaxSection>

      <ParallaxSection backgroundGradient={soulfulGradient}>
        <section className="bg-transparent py-24 md:py-32">
          <div className="container">
            <div className="space-y-4 text-center p-8 rounded-lg bg-black/5 backdrop-blur-sm max-w-3xl mx-auto">
              <StaticTitle as="h2" className="text-3xl md:text-4xl font-bold font-headline text-primary">
                About Printing Point
              </StaticTitle>
              <p className="text-lg text-foreground/80">
                Founded on a passion for quality and an eye for detail, Printing Point has become a premier destination for bespoke gifting. We believe that a great gift tells a story, and we are here to help you tell yours. Our team is dedicated to sourcing unique, high-quality products and providing exceptional service to create unforgettable moments.
              </p>
              <p className="text-lg text-foreground/80">
                We are more than just a store; we are your partners in celebration, appreciation, and connection.
              </p>
              <Button asChild size="lg" className="mt-4">
                <Link href="/contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </section>
      </ParallaxSection>
    </div>
  );
}
