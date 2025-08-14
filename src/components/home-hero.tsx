
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import StaticTitle from "./animated-title";
import { cn } from "@/lib/utils";

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
    <>
      <svg width="0" height="0">
        <defs>
          <clipPath id="wavy-clip" clipPathUnits="objectBoundingBox">
            <path d="M0,0 H1 V0.8 C0.95,0.9,0.85,0.95,0.7,0.9 C0.55,0.85,0.45,0.8,0.3,0.85 C0.15,0.9,0.05,0.95,0,0.9 V0 Z" />
          </clipPath>
        </defs>
      </svg>
      <section
        className="relative w-full h-screen flex items-center justify-start overflow-hidden bg-primary"
        style={{ perspective: '1000px' }}
      >
        <div
          className="absolute inset-0"
          style={{ clipPath: 'url(#wavy-clip)' }}
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
        </div>

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
            <p className="mt-4 text-xl md:text-2xl max-w-2xl drop-shadow-md">
              Your Solution To Corporate Gifting
            </p>
             <p className="mt-4 text-lg md:text-xl max-w-3xl drop-shadow-md" style={{ marginBottom: '2px' }}>
              Move beyond the standard. Our premium corporate gifting solutions, including extensive customization options, are designed to help you make a statement. Whether you're celebrating milestones or showing appreciation, create a powerful connection with every gift you send.
            </p>
            <div className="mt-8 flex items-center justify-start gap-4">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-black"
              >
                <Link href="/contact">Get a Custom Quote</Link>
              </Button>
            </div>
          
        </div>
      </section>
    </>
  );
}
