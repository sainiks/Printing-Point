
"use client";

import { useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

const TiltEffect = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;
    const rotateX = 20 * (y / height - 0.5);
    const rotateY = -20 * (x / width - 0.5);
    setRotate({ x: rotateX, y: rotateY });
  };

  const onMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div
      ref={ref}
      className={cn("transition-transform duration-300 ease-out", className)}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
      }}
    >
      {children}
    </div>
  );
};

export default TiltEffect;
