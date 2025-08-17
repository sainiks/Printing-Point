
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
import { motion } from "framer-motion";

function HeroSection() {
    return (
        <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
            <motion.div 
              className="absolute inset-0"
              initial={{ scale: 1.1, opacity: 0.8 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
                <Image
                    src="/hero_background.png"
                    alt="Background"
                    data-ai-hint="abstract background"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
            </motion.div>
            <div className="relative z-10 flex flex-col items-center p-4">
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
                    variant="default"
                    className="bg-primary/90 text-primary-foreground hover:bg-primary"
                >
                    <Link href="/contact">Get a Custom Quote</Link>
                </Button>
            </div>
        </section>
    );
}


function TrendingProductsSection() {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: false })
    );

    const trendingProducts = allProducts.slice(0, 9);

    return (
        <section className="bg-background py-16 md:py-24">
            <div className="container text-center">
                <StaticTitle as="h2" className="text-4xl md:text-5xl font-bold font-headline text-foreground">
                    Trending Products
                </StaticTitle>
                <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
                    Explore our most popular and recently added items, perfect for any occasion.
                </p>
            </div>
            <div className="container mt-12 w-full">
                <Carousel
                    plugins={[plugin.current]}
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full"
                >
                    <CarouselContent>
                        {trendingProducts.map((product) => {
                            const categoryInfo = mainCategories.find(c => c.title === product.category);
                            return (
                                <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3">
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
                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-4">
                        <CarouselPrevious />
                        <CarouselNext />
                    </div>
                </Carousel>
            </div>
        </section>
    );
}

function AboutSection() {
    return (
        <section className="bg-secondary/20 py-16 md:py-24">
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

export default function Home() {
    return (
        <main>
            <HeroSection />
            <TrendingProductsSection />
            <AboutSection />
        </main>
    );
}
