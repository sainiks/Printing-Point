
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import AnimatedTitle from "./animated-title";

const ParallaxLayer = ({
  src,
  alt,
  hint,
  className,
  transform,
  priority = false,
}: {
  src: string;
  alt: string;
  hint: string;
  className: string;
  transform: string;
  priority?: boolean;
}) => (
  <div
    className={`absolute inset-0 transition-transform duration-500 ease-out ${className}`}
    style={{ transform, transformStyle: "preserve-3d" }}
  >
    <Image
      src={src}
      alt={alt}
      data-ai-hint={hint}
      fill
      className="object-cover"
      priority={priority}
    />
  </div>
);

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
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
      style={{ perspective: "1000px" }}
    >
      <div
        className="absolute inset-0"
        style={{
          transform: `translateZ(${scrollPosition * -1.5}px) scale(${
            1 + scrollPosition * 0.001
          })`,
          transformStyle: "preserve-3d",
        }}
      >
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="Abstract background"
          data-ai-hint="abstract luxury background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div
        className="relative z-10 text-center text-white"
        style={{
          transform: `translateZ(${scrollPosition * -0.5}px)`,
          transformStyle: "preserve-3d",
        }}
      >
        <div className="bg-black/20 backdrop-blur-sm rounded-xl p-8 md:p-12 border border-white/20 shadow-lg">
          <AnimatedTitle as="h1" className="text-5xl md:text-7xl font-bold font-headline drop-shadow-lg">
            Exquisite Gifts, Expertly Crafted
          </AnimatedTitle>
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
      </div>
    </section>
  );
}
