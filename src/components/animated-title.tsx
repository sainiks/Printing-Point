
"use client";

import { cn } from "@/lib/utils";
import React from "react";

type AnimatedTitleProps = {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
};

export default function AnimatedTitle({ children, className, as: Tag = 'h1' }: AnimatedTitleProps) {
  if (typeof children !== 'string') {
    return <Tag className={className}>{children}</Tag>;
  }
  
  const words = children.split(" ");

  return (
    <Tag className={cn(className)}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block mr-[0.25em]">
          {word.split("").map((letter, letterIndex) => (
            <span
              key={letterIndex}
              className="inline-block overflow-hidden"
            >
              <span 
                className="inline-block animate-letter-reveal"
                style={{ animationDelay: `${(wordIndex * 0.1 + letterIndex * 0.03).toFixed(2)}s` }}
              >
                {letter === " " ? "\u00A0" : letter}
              </span>
            </span>
          ))}
        </span>
      ))}
    </Tag>
  );
}
