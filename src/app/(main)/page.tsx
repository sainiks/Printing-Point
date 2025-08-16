
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import StaticTitle from "@/components/animated-title";
import { allProducts, mainCategories } from "@/lib/all-products";
import ProductCard from "@/components/product-card";
import { cn } from "@/lib/utils";

const trendingProducts = allProducts.slice(0, 3);

function HeroSection() {
    return (
        <section className="relative h-screen flex items-center justify-start">
            <div className="absolute inset-0">
                <Image
                    src="/hero_background.png"
                    alt="Background"
                    data-ai-hint="abstract background"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
            </div>

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
                            style={{ backgroundColor: '#FDF5E5' }}
                        >
                            <Link href="/contact">Get a Custom Quote</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}

function TrendingProductsSection() {
    return (
        <section className="bg-background py-16 md:py-24">
            <div className="container text-center">
                <StaticTitle as="h2" className="text-5xl md:text-6xl font-bold font-headline text-foreground">
                    Trending Products
                </StaticTitle>
                <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
                    Explore our most popular and recently added items, perfect for any occasion.
                </p>
            </div>
            <div className="container mt-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {trendingProducts.map((product) => {
                        const categoryInfo = mainCategories.find(c => c.title === product.category);
                        return (
                            <ProductCard
                                key={product.id}
                                productId={product.productId}
                                title={product.title}
                                description={product.description}
                                imageUrl={product.imageUrl}
                                minimumOrder={product.minimumOrder}
                                imageHint={product.imageHint}
                                categorySlug={categoryInfo?.slug || ''}
                            />
                        )
                    })}
                </div>
            </div>
        </section>
    );
}

function AboutSection() {
    return (
        <section className="bg-secondary/10 py-16 md:py-24">
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
    );
}

const SectionWrapper = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className={cn(className)}
    >
        {children}
    </motion.div>
)

export default function Home() {
    return (
        <main className="bg-background">
            <HeroSection />
            <SectionWrapper>
                <TrendingProductsSection />
            </SectionWrapper>
             <SectionWrapper>
                <AboutSection />
            </SectionWrapper>
        </main>
    );
}
