
"use client";

import { useState, useEffect, useRef } from "react";

export default function ParallaxSection({
  children,
  backgroundGradient,
}: {
  children: React.ReactNode;
  backgroundGradient: string;
}) {
  const [translateY, setTranslateY] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;
      const scrollPosition = window.pageYOffset;

      const scrollProgress =
        (scrollPosition + viewportHeight - sectionTop) /
        (viewportHeight + sectionHeight);

      if (scrollProgress >= 0 && scrollProgress <= 1) {
        const newTranslateY = (scrollProgress - 0.5) * -150;
        setTranslateY(newTranslateY);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{ background: backgroundGradient }}
    >
      <div
        style={{
          transform: `translate3d(0, ${translateY}px, 0)`,
          willChange: "transform",
        }}
      >
        {children}
      </div>
    </div>
  );
}
