
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY, currentTarget } = event;
      if (currentTarget instanceof HTMLElement) {
        const { left, top, width, height } =
          currentTarget.getBoundingClientRect();
        const x = (clientX - left) / width - 0.5;
        const y = (clientY - top) / height - 0.5;
        setMousePosition({ x, y });
      }
    };

    const heroElement = document.getElementById("home-hero");
    heroElement?.addEventListener("mousemove", handleMouseMove);

    return () => {
      heroElement?.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const getTransform = (factor: number, invert = false) => {
    const inv = invert ? -1 : 1;
    return `translate3d(${mousePosition.x * factor * inv}px, ${
      mousePosition.y * factor * inv
    }px, 0) rotateX(${mousePosition.y * -10 * inv}deg) rotateY(${
      mousePosition.x * 10 * inv
    }deg)`;
  };

  return (
    <section
      id="home-hero"
      className="relative w-full h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden"
      style={{ perspective: "1000px" }}
    >
      <ParallaxLayer
        src="https://placehold.co/1920x1080.png"
        alt="Torn paper background layer"
        hint="torn paper texture"
        className="opacity-50"
        transform={getTransform(20)}
        priority
      />
       <ParallaxLayer
        src="https://placehold.co/1920x1080.png"
        alt="Torn paper mid-ground layer"
        hint="ripped paper edge"
        className="opacity-60"
        transform={getTransform(50)}
      />
      <div
        className="absolute inset-0 bg-black/50"
        style={{ transformStyle: "preserve-3d" }}
      />
       <ParallaxLayer
        src="https://placehold.co/1920x1080.png"
        alt="Torn paper foreground layer"
        hint="paper texture"
        className="opacity-40"
        transform={getTransform(80, true)}
      />
      
      <div className="relative z-10 text-center text-white p-4" style={{ transformStyle: "preserve-3d", transform: getTransform(30) }}>
        <h1 className="text-5xl md:text-7xl font-bold font-headline drop-shadow-lg">
          Exquisite Gifts, Expertly Crafted
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">
          Discover bespoke gifting solutions for every occasion. At
          PrintingPoint Luxe, we turn moments into memories.
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
