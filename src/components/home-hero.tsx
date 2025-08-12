
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
      className="relative w-full h-screen flex items-center justify-start overflow-hidden bg-primary"
      style={{ perspective: '1000px' }}
    >
      <Image
        src="/hero_background.png"
        alt="Background"
        data-ai-hint="abstract background"
        fill
        className="object-cover"
        style={{
          transform: `translateZ(${scrollPosition * -0.2}px) scale(1.2)`,
          transformStyle: "preserve-3d",
        }}
      />
      <div className="absolute inset-0 bg-black/20 backdrop-blur-md" />
      <div
        className="relative z-10 text-left text-white p-8 md:p-12 lg:p-24 max-w-3xl"
        style={{
          transform: `translateZ(${scrollPosition * -0.5}px)`,
          transformStyle: "preserve-3d",
        }}
      >
        
          <StaticTitle as="h1" className="text-5xl md:text-[76px] font-bold font-headline drop-shadow-lg uppercase whitespace-nowrap mb-[2px]">
            Printing Point
          </StaticTitle>
          <p className="mt-4 text-lg md:text-xl max-w-2xl drop-shadow-md">
            Your Solution To Corporate Gifting
          </p>
           <p className="mt-4 text-base md:text-lg max-w-3xl drop-shadow-md">
            Move beyond the standard. Our premium corporate gifting solutions, including extensive customization options, are designed to help you make a statement. Whether you're celebrating milestones or showing appreciation, create a powerful connection with every gift you send.
          </p>
          <div className="mt-8 flex items-center justify-start gap-4">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
            >
              <Link href="/contact">Get a Custom Quote</Link>
            </Button>
          </div>
        
      </div>
    </section>
  );
}
