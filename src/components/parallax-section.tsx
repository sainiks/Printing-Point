
"use client";

import Image from "next/image";
import { useState, useEffect, useRef, Children, isValidElement } from "react";

export default function ParallaxSection({
  children,
  backgroundImage,
  backgroundHint,
}: {
  children: React.ReactNode;
  backgroundImage: string;
  backgroundHint: string;
}) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
        setScrollPosition(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  const sectionTop = sectionRef.current?.offsetTop ?? 0;
  const relativeScroll = scrollPosition - sectionTop;

  return (
    <div
      ref={sectionRef}
      className="relative w-full min-h-[50vh] flex items-center justify-center overflow-hidden"
      style={{ perspective: "1000px" }}
    >
        <div
            className="absolute inset-0"
            style={{
            transform: `translateZ(${relativeScroll * -0.7}px) scale(${1 + Math.abs(relativeScroll * 0.0005)})`,
            transformStyle: "preserve-3d",
            }}
        >
            <Image
                src={backgroundImage}
                alt={backgroundHint}
                data-ai-hint={backgroundHint}
                fill
                className="object-cover"
            />
             <div className="absolute inset-0 bg-black/30"></div>
        </div>

      <div
        className="relative z-10 w-full"
        style={{
          transform: `translateZ(${relativeScroll * -0.3}px)`,
          transformStyle: "preserve-3d",
        }}
      >
        {children}
      </div>
    </div>
  );
}
