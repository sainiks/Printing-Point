

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

const bestBuys = [
  {
    id: 1,
    productId: "GS-EXEC-01",
    title: "Executive Gift Set",
    description: "A high-end set for valued partners, featuring a crystal decanter and a set of premium glasses.",
    minimumOrder: 10,
    imageUrl: "/product_images/GS-EXEC-01.png",
    imageHint: "executive crystal gift",
  },
  {
    id: 2,
    productId: "PN-MNRCH-01",
    title: "The Monarch Pen",
    description: "A symbol of elegance and precision, crafted from solid brass with gold accents.",
    minimumOrder: 50,
    imageUrl: "/product_images/PN-MNRCH-01.png",
    imageHint: "luxury pen",
  },
  {
    id: 3,
    productId: "GB-GOURMET-01",
    title: "Gourmet Gift Basket",
    description: "A curated selection of fine foods and wines for the discerning palate.",
    minimumOrder: 25,
    imageUrl: "/product_images/GB-GOURMET-01.jpg",
    imageHint: "gourmet food wine",
  },
];

const newArrivals = [
  {
    id: 4,
    productId: "AC-CUFF-01",
    title: "Personalized Cufflinks",
    description: "Custom-engraved sterling silver cufflinks for a personal touch.",
    minimumOrder: 20,
    imageUrl: "/product_images/AC-CUFF-01.png",
    imageHint: "silver cufflinks",
  },
  {
    id: 5,
    productId: "SW-CONF-01",
    title: "Conference Swag Bag",
    description: "Equip attendees with memorable swag, including a branded tote bag and notebook.",
    minimumOrder: 100,
    imageUrl: "/product_images/SW-CONF-01.jpg",
    imageHint: "conference swag",
  },
    {
    id: 6,
    productId: "DC-CRYSTL-01",
    title: "Crystal Desk Clock",
    description: "An exquisite timepiece that adds a touch of class to any workspace.",
    minimumOrder: 15,
    imageUrl: "/product_images/DC-CRYSTL-01.png",
    imageHint: "desk clock",
  },
];

const onSale = [
  {
    id: 7,
    productId: "NB-LTHR-01",
    title: "Executive Leather Journal",
    description: "Premium full-grain leather journal for your thoughts and ideas. 20% off!",
    minimumOrder: 30,
    imageUrl: "/product_images/NB-LTHR-01.jpg",
    imageHint: "leather journal",
  },
    {
    id: 8,
    productId: "KT-WLNS-01",
    title: "Wellness & Self-Care Kit",
    description: "Promote well-being with a kit containing an essential oil diffuser and herbal teas. Limited time offer!",
    minimumOrder: 40,
    imageUrl: "/product_images/KT-WLNS-01.webp",
    imageHint: "wellness kit",
  },
  {
    id: 9,
    productId: "GB-HOLIDAY-01",
    title: "Holiday Gift Box",
    description: "A festive box filled with seasonal treats, a cozy blanket, and a scented candle. On sale now!",
    minimumOrder: 30,
    imageUrl: "/product_images/GB-HOLIDAY-01.jpg",
    imageHint: "holiday gift box",
  },
];

const collections = [
  {
    products: bestBuys,
    bgClass: "bg-transparent",
  },
  {
    products: newArrivals,
    bgClass: "bg-transparent",
  },
  {
    products: onSale,
    bgClass: "bg-transparent",
  },
];


export default function Home() {
  const newBackgroundColor = "#203354";

  return (
    <div className="dark">
      <HomeHero />

      <ParallaxSection backgroundGradient={newBackgroundColor}>
        <section className="py-24 md:py-32">
          <div className="container">
            <div className="text-center mb-12 p-8 rounded-lg bg-black/5 backdrop-blur-sm">
              <StaticTitle as="h2" className="text-3xl md:text-4xl font-bold font-headline text-primary-foreground">
                Trending Products
              </StaticTitle>
              <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
                Curated selections for every need, from special deals to our newest arrivals.
              </p>
            </div>
            <Carousel
              opts={{
                align: "center",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {collections.map((collection, index) => (
                  <CarouselItem key={index}>
                    <Card className={`${collection.bgClass} backdrop-blur-sm border-none shadow-none bg-transparent`}>
                      <CardContent className="p-4 sm:p-6">
                        <div className="flex flex-col sm:flex-row sm:flex-wrap md:flex-nowrap gap-4 md:gap-8 justify-center p-2 sm:p-0">
                          {collection.products.map((product) => (
                            <TiltEffect key={product.id} className="w-full sm:w-[calc(50%-0.5rem)] md:w-1/3 flex-shrink-0">
                              <ProductCard
                                productId={product.productId}
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

      <ParallaxSection backgroundGradient={newBackgroundColor}>
        <section className="bg-transparent py-24 md:py-32">
          <div className="container">
            <div className="space-y-4 text-center p-8 rounded-lg bg-black/5 backdrop-blur-sm max-w-3xl mx-auto">
              <StaticTitle as="h2" className="text-3xl md:text-4xl font-bold font-headline text-primary-foreground">
                About Printing Point
              </StaticTitle>
              <p className="text-lg text-primary-foreground/80">
                Founded on a passion for quality and an eye for detail, Printing Point has become a premier destination for bespoke gifting. We believe that a great gift tells a story, and we are here to help you tell yours. Our team is dedicated to sourcing unique, high-quality products and providing exceptional service to create unforgettable moments.
              </p>
              <p className="text-lg text-primary-foreground/80">
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
