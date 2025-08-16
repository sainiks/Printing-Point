
"use client";

import { useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import StaticTitle from "@/components/animated-title";
import { allProducts, mainCategories } from "@/lib/all-products";
import ProductCard from "@/components/product-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const trendingProducts = allProducts.slice(0, 9);

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 1.1]);
  const heroOpacity = useTransform(scrollYProgress, [0.7, 0.9], [1, 0]);

  // Section 1: Trending Products
  const contentTranslateY1 = useTransform(scrollYProgress, [0.1, 0.4], ["100vh", "0vh"]);
  const contentOpacity1 = useTransform(scrollYProgress, [0.1, 0.25], [0, 1]);

  // Section 2: About Us
  const contentTranslateY2 = useTransform(scrollYProgress, [0.5, 0.8], ["100vh", "0vh"]);
  const contentOpacity2 = useTransform(scrollYProgress, [0.5, 0.65], [0, 1]);


  return (
    <div ref={containerRef} className="relative h-[300vh] bg-background">
      <div className="sticky top-0 h-screen overflow-hidden" style={{ perspective: '1000px' }}>
        {/* Hero Section */}
        <motion.div
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="absolute inset-0"
        >
          <Image
            src="/hero_background.png"
            alt="Background"
            data-ai-hint="abstract background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>

        <div className="relative z-10 h-full flex items-center justify-start">
          <div className="max-w-3xl p-8 md:p-12 lg:p-24">
            <StaticTitle as="h1" className="text-5xl md:text-[76px] font-bold text-white font-headline drop-shadow-md uppercase whitespace-nowrap mb-[2px]">
              Printing Point
            </StaticTitle>
            <p className="mt-4 text-xl md:text-2xl max-w-2xl text-white drop-shadow-sm">
              Your Solution To Corporate Gifting
            </p>
            <p className="mt-4 text-lg md:text-xl max-w-3xl text-white drop-shadow-sm mb-[2px]">
              Move beyond the standard. Our premium corporate gifting solutions, including extensive customization options, are designed to help you make a statement. Whether you're celebrating milestones or showing appreciation, create a powerful connection with every gift you send.
            </p>
            <div className="mt-8 flex items-center justify-start gap-4">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-primary hover:bg-[#FDF5EF]/90"
                style={{backgroundColor: '#FDF5E5'}}
              >
                <Link href="/contact">Get a Custom Quote</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scrolling Content 1: Trending Products */}
        <motion.div
          style={{ 
            translateY: contentTranslateY1, 
            opacity: contentOpacity1,
            transformStyle: 'preserve-3d',
          }}
          className="absolute inset-0 z-20 bg-background"
        >
          <div className="h-full overflow-y-auto">
            <section className="py-16 md:py-24">
              <div className="container">
                <div className="text-center p-8 rounded-lg">
                  <StaticTitle as="h2" className="text-5xl md:text-6xl font-bold font-headline text-foreground">
                    Trending Products
                  </StaticTitle>
                  <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
                    Explore our most popular and recently added items, perfect for any occasion.
                  </p>
                </div>
                <div className="mt-12">
                   <Carousel
                    opts={{
                      align: "start",
                      loop: true,
                    }}
                    plugins={[
                      Autoplay({
                        delay: 2000,
                        stopOnInteraction: false,
                        stopOnMouseEnter: false,
                      }),
                    ]}
                    className="w-full"
                  >
                    <CarouselContent>
                      {trendingProducts.map((product, index) => {
                         const categoryInfo = mainCategories.find(c => c.title === product.category);
                        return (
                          <CarouselItem key={`${product.id}-${index}`} className="basis-full md:basis-1/2 lg:basis-1/3">
                            <div className="p-1 h-full">
                                <ProductCard
                                  productId={product.productId}
                                  title={product.title}
                                  description={product.description}
                                  imageUrl={product.imageUrl}
                                  minimumOrder={product.minimumOrder}
                                  imageHint={product.imageHint}
                                  categorySlug={categoryInfo?.slug || ''}
                                />
                            </div>
                          </CarouselItem>
                        )
                      })}
                    </CarouselContent>
                    <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 z-10" />
                    <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 z-10" />
                  </Carousel>
                </div>
              </div>
            </section>
          </div>
        </motion.div>

        {/* Scrolling Content 2: About Us */}
        <motion.div
          style={{ 
            translateY: contentTranslateY2, 
            opacity: contentOpacity2,
            transformStyle: 'preserve-3d',
          }}
          className="absolute inset-0 z-30 bg-background"
        >
          <div className="h-full overflow-y-auto flex items-center justify-center">
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
          </div>
        </motion.div>
      </div>
    </div>
  );
}
