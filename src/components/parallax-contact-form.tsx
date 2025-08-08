
"use client";

import { useState, useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

const ParallaxContactForm = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  const [translateY, setTranslateY] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const scrollY = window.scrollY;
        const offsetTop = ref.current.offsetTop;
        const screenHeight = window.innerHeight;

        if (scrollY + screenHeight > offsetTop) {
          const scrollPercent = (scrollY + screenHeight - offsetTop) / screenHeight;
          const newTranslateY = (scrollPercent - 0.5) * -80;
          setTranslateY(newTranslateY);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={ref}
      className={cn("transition-transform duration-300 ease-out", className)}
      style={{
        transform: `translateY(${translateY}px)`,
      }}
    >
      {children}
    </div>
  );
};

export default ParallaxContactForm;
