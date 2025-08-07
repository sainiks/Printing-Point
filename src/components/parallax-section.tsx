
"use client";

import { useState, useEffect, useRef } from "react";

export default function ParallaxSection({
  children,
}: {
  children: React.ReactNode;
}) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const { top } = sectionRef.current.getBoundingClientRect();
        // We calculate a position relative to the viewport height
        // This makes the effect work correctly for each section
        const relativePosition = top / window.innerHeight;
        setScrollPosition(relativePosition);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Initial call
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Adjusting the multiplier for a more subtle but noticeable effect
  const translateY = scrollPosition * 100;

  return (
    <div
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ perspective: "1000px" }}
    >
      <div
        style={{
          transform: `translateY(${translateY}px) translateZ(${Math.abs(
            translateY * 2
          )}px) scale(${1 - Math.abs(scrollPosition) * 0.2})`,
          transformStyle: "preserve-3d",
          transition: "transform 0.5s ease-out",
        }}
      >
        {children}
      </div>
    </div>
  );
}
