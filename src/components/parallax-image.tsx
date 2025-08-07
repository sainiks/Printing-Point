
"use client";

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

type ParallaxImageProps = {
  src: string;
  alt: string;
  className?: string;
  'data-ai-hint'?: string;
};

const ParallaxImage = ({ src, alt, className, 'data-ai-hint': dataAiHint }: ParallaxImageProps) => {
  const [translateY, setTranslateY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        
        // Check if the element is in the viewport
        if (rect.top < viewportHeight && rect.bottom > 0) {
          // Calculate the parallax effect
          const scrollPercent = (rect.top / viewportHeight);
          const newTranslateY = scrollPercent * -100; // Adjust multiplier for more/less effect
          setTranslateY(newTranslateY);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative aspect-square overflow-hidden rounded-lg shadow-xl">
      <Image
        ref={imageRef}
        src={src}
        alt={alt}
        data-ai-hint={dataAiHint}
        fill
        className={className}
        style={{
          transform: `translate3d(0, ${translateY}px, 0)`,
          willChange: 'transform',
          transition: 'transform 0.1s ease-out',
        }}
      />
    </div>
  );
};

export default ParallaxImage;
