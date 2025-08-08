"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import StaticTitle from "./animated-title";

export default function HomeHero() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-primary"
      style={{ perspective: '1000px' }}
    >
      <Image
        src="/final-background.png"
        alt="Background"
        fill
        className="object-cover"
        style={{
          transform: `translateZ(${scrollPosition * -0.2}px) scale(1.2)`,
          transformStyle: "preserve-3d",
        }}
      />
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
      <div
        className="relative z-10 text-center text-white p-8 md:p-12"
        style={{
          transform: `translateZ(${scrollPosition * -0.5}px)`,
          transformStyle: "preserve-3d",
        }}
      >
        
          <StaticTitle as="h1" className="text-5xl md:text-7xl font-bold font-headline drop-shadow-lg">
            Exquisite Gifts, Expertly Crafted
          </StaticTitle>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">
            Discover bespoke gifting solutions for every occasion. At
            Printing Point, we turn moments into memories.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/products">Browse Products</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        
      </div>
    </section>
  );
}
