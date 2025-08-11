

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
import { allProducts } from "@/lib/all-products";

// Group products by category
const productsByCategory: Record<string, typeof allProducts> = allProducts.reduce((acc, product) => {
  if (product.category) {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
  }
  return acc;
}, {} as Record<string, typeof allProducts>);

// Create collections for the carousel, taking the first 3 products from each category
const collections = Object.values(productsByCategory).map(products => ({
  products: products.slice(0, 3),
  bgClass: "bg-transparent",
}));

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
                Curated selections from all our categories, from special deals to our newest arrivals.
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
