

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ProductCard from "@/components/product-card";
import HomeHero from "@/components/home-hero";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import ParallaxSection from "@/components/parallax-section";

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
  return (
    <>
      <HomeHero />

      <ParallaxSection backgroundImage="https://placehold.co/1920x1080.png" backgroundHint="gifting background">
        <section className="bg-secondary/50 py-16 md:py-24">
          <div className="container grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold font-headline text-white">
                Our Philosophy of Gifting
              </h2>
              <p className="text-lg text-gray-200">
                At PrintingPoint Luxe, we believe a gift is more than an item—it's a gesture, a story, and a connection. Our mission is to provide impeccably crafted gifts that convey prestige and thoughtfulness. We source the finest materials and partner with skilled artisans to ensure every product we offer is a masterpiece of quality and elegance.
              </p>
              <p className="text-lg text-gray-200">
                From corporate milestones to personal celebrations, we are dedicated to making your moments memorable.
              </p>
              <Button asChild size="lg" className="mt-4">
                <Link href="/corporate-gifting">Discover Corporate Solutions</Link>
              </Button>
            </div>
            <div className="relative aspect-square">
                <Image
                  src="https://placehold.co/600x600.png"
                  alt="Craftspeople at work"
                  data-ai-hint="artisans workshop"
                  fill
                  className="object-cover rounded-lg shadow-xl"
                />
            </div>
          </div>
        </section>
      </ParallaxSection>
      
      <ParallaxSection backgroundImage="https://placehold.co/1920x1080.png" backgroundHint="product collection">
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-headline text-white">
                Explore Our Collections
              </h2>
              <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
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
                    <Card className={`${collection.bgClass}`}>
                      <CardContent className="p-8 md:p-12">
                        <h3 className="text-3xl font-bold font-headline text-primary mb-8 text-center">{collection.title}</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                          {collection.products.map((product) => (
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
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>
        </section>
      </ParallaxSection>

      <ParallaxSection backgroundImage="https://placehold.co/1920x1080.png" backgroundHint="company team">
        <section className="bg-secondary/50 py-16 md:py-24">
          <div className="container grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square">
              <Image
                src="https://placehold.co/600x600.png"
                alt="Team of designers collaborating"
                data-ai-hint="designers team meeting"
                fill
                className="object-cover rounded-lg shadow-xl"
              />
            </div>
            <div className="space-y-4 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold font-headline text-white">
                About PrintingPoint Luxe
              </h2>
              <p className="text-lg text-gray-200">
                Founded on a passion for quality and an eye for detail, PrintingPoint Luxe has become a premier destination for bespoke gifting. We believe that a great gift tells a story, and we are here to help you tell yours. Our team is dedicated to sourcing unique, high-quality products and providing exceptional service to create unforgettable moments.
              </p>
              <p className="text-lg text-gray-200">
                We are more than just a store; we are your partners in celebration, appreciation, and connection.
              </p>
              <Button asChild size="lg" className="mt-4">
                <Link href="/contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </section>
      </ParallaxSection>
    </>
  );
}
