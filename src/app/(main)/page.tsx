

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import HomeHero from "@/components/home-hero";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselDots, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import ParallaxSection from "@/components/parallax-section";
import StaticTitle from "@/components/animated-title";
import TiltEffect from "@/components/tilt-effect";
import { allProducts, mainCategories } from "@/lib/all-products";
import CategoryCard from "@/components/category-card";

// Create collections for the carousel, taking the first 3 products from each category
const collections = mainCategories.map(category => {
  const productInCategory = allProducts.find(p => p.category === category.title);
  return {
      title: category.title,
      link: `/categories/${category.slug}`,
      imageUrl: productInCategory?.imageUrl || "https://placehold.co/600x400.png",
      imageHint: productInCategory?.imageHint || category.title.toLowerCase(),
      description: `Browse our collection of ${category.title}.`
  }
});

const collectionsInGroupsOfThree = collections.reduce((acc, curr, i) => {
  if (i % 3 === 0) {
    acc.push([]);
  }
  acc[acc.length - 1].push(curr);
  return acc;
}, [] as typeof collections[]);


export default function Home() {
  const newBackgroundColor = "hsl(var(--background))";

  return (
    <div className="dark">
      <HomeHero />

      <ParallaxSection backgroundGradient={newBackgroundColor}>
        <section className="py-24 md:py-32">
          <div className="container">
            <div className="text-center mb-12 p-8 rounded-lg bg-card/5 backdrop-blur-sm">
              <StaticTitle as="h2" className="text-3xl md:text-4xl font-bold font-headline text-foreground">
                Trending Categories
              </StaticTitle>
              <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
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
                {collectionsInGroupsOfThree.map((collectionGroup, index) => (
                  <CarouselItem key={index}>
                    <Card className={`bg-transparent backdrop-blur-sm border-none shadow-none`}>
                      <CardContent className="p-4 sm:p-6">
                        <div className="flex flex-col sm:flex-row sm:flex-wrap md:flex-nowrap gap-4 md:gap-8 justify-center p-2 sm:p-0">
                          {collectionGroup.map((category) => (
                            <TiltEffect key={category.title} className="w-full sm:w-[calc(50%-0.5rem)] md:w-1/3 flex-shrink-0">
                              <CategoryCard
                                title={category.title}
                                description={category.description}
                                imageUrl={category.imageUrl}
                                imageHint={category.imageHint}
                                link={category.link}
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
