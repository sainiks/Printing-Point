
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
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
import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

const trendingProducts = allProducts.slice(0, 6);

function HeroSection() {
    return (
        <section className="relative h-full flex items-center justify-center text-center text-white">
             <div className="relative z-10 flex flex-col items-center">
                <StaticTitle as="h1" className="text-5xl md:text-[76px] font-bold font-headline drop-shadow-md uppercase whitespace-nowrap mb-[2px]">
                    Printing Point
                </StaticTitle>
                <p className="mt-4 text-xl md:text-2xl max-w-2xl drop-shadow-sm">
                    Your Solution To Corporate Gifting
                </p>
                <p className="mt-6 text-lg md:text-xl max-w-3xl drop-shadow-sm mb-8 leading-relaxed">
                    Move beyond the standard. Our premium corporate gifting solutions, including extensive customization options, are designed to help you make a statement. Whether you're celebrating milestones or showing appreciation, create a powerful connection with every gift you send.
                </p>
                <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="bg-primary/80 border-primary-foreground/50 text-primary-foreground hover:bg-primary"
                >
                    <Link href="/contact">Get a Custom Quote</Link>
                </Button>
            </div>
        </section>
    );
}

function TrendingProductsSection() {
    return (
        <section className="h-full flex flex-col items-center justify-center text-white">
            <div className="container text-center">
                <StaticTitle as="h2" className="text-5xl md:text-6xl font-bold font-headline text-foreground">
                    Trending Products
                </StaticTitle>
                <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
                    Explore our most popular and recently added items, perfect for any occasion.
                </p>
            </div>
            <div className="container mt-12 w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {trendingProducts.map((product) => {
                      const categoryInfo = mainCategories.find(c => c.title === product.category);
                      return (
                          <div key={product.id} className="p-1 h-full">
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
                      )
                  })}
                </div>
            </div>
        </section>
    );
}

function AboutSection() {
    return (
        <section className="h-full flex items-center justify-center text-white">
            <div className="container">
                <div className="space-y-4 text-center p-8 rounded-lg max-w-3xl mx-auto">
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
    );
}

const sections = [
  { component: HeroSection },
  { component: TrendingProductsSection },
  { component: AboutSection },
];

export default function Home() {
  const targetRef = React.useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const cards = sections.map((_, i) => {
    const scale = useTransform(scrollYProgress, [i / sections.length, (i + 1) / sections.length], [1, 0.85]);
    const opacity = useTransform(scrollYProgress, [i / sections.length, (i + 1) / sections.length], [1, 0]);
    return { scale, opacity };
  });

  return (
    <main ref={targetRef} className="relative bg-background" style={{ height: `${sections.length * 100}vh` }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        {sections.map(({ component: Component }, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 flex items-center justify-center"
            style={{ scale: cards[i].scale, opacity: cards[i].opacity, zIndex: sections.length - i }}
          >
            <div className="w-full h-full p-8 md:p-12 lg:p-16">
               <div className="w-full h-full rounded-2xl bg-card/80 backdrop-blur-md border border-white/10 p-8 shadow-2xl">
                 <Component />
               </div>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
