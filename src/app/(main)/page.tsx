
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import HomeHero from "@/components/home-hero";
import { Carousel, CarouselContent, CarouselItem, CarouselDots, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import ParallaxSection from "@/components/parallax-section";
import StaticTitle from "@/components/animated-title";
import TiltEffect from "@/components/tilt-effect";
import { allProducts, mainCategories } from "@/lib/all-products";
import ProductCard from "@/components/product-card";

// Create collections for the carousel, taking a selection of products
const trendingProducts = allProducts.slice(0, 9);

const productsInGroupsOfThree = trendingProducts.reduce((acc, curr, i) => {
  if (i % 3 === 0) {
    acc.push([]);
  }
  acc[acc.length - 1].push(curr);
  return acc;
}, [] as typeof trendingProducts[]);


export default function Home() {
  const newBackgroundColor = "hsl(var(--background))";

  return (
    <div className="dark">
      <HomeHero />

      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center p-8 rounded-lg bg-card/5 backdrop-blur-sm">
            <StaticTitle as="h2" className="text-5xl md:text-6xl font-bold font-headline text-foreground">
              Trending Products
            </StaticTitle>
            <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
              Explore our most popular and recently added items, perfect for any occasion.
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
              {productsInGroupsOfThree.map((productGroup, index) => (
                <CarouselItem key={index}>
                    <div className="p-4">
                      <div className="flex flex-col sm:flex-row sm:flex-wrap md:flex-nowrap gap-8 justify-center">
                        {productGroup.map((product) => {
                          const categoryInfo = mainCategories.find(c => c.title === product.category);
                          return (
                            <TiltEffect key={product.id} className="w-full sm:w-[calc(50%-1.5rem)] md:w-1/3 flex-shrink-0">
                              <ProductCard
                                productId={product.productId}
                                title={product.title}
                                description={product.description}
                                imageUrl={product.imageUrl}
                                minimumOrder={product.minimumOrder}
                                imageHint={product.imageHint}
                                categorySlug={categoryInfo?.slug || ''}
                              />
                            </TiltEffect>
                          )
                        })}
                      </div>
                    </div>
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

      <ParallaxSection backgroundGradient={newBackgroundColor}>
        <section className="bg-transparent py-24 md:py-32">
          <div className="container">
            <div className="space-y-4 text-center p-8 rounded-lg bg-card/5 backdrop-blur-sm max-w-3xl mx-auto">
              <StaticTitle as="h2" className="text-3xl md:text-4xl font-bold font-headline text-foreground">
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
