
"use client";

import { cn } from "@/lib/utils";

type AnimatedTitleProps = {
  children: React.ReactNode;
  className?: string;
};

export default function AnimatedTitle({ children, className }: AnimatedTitleProps) {
  if (typeof children !== 'string') {
    return <h1 className={className}>{children}</h1>;
  }
  
  const words = children.split(" ");

  return (
    <h1 className={cn(className)}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block mr-[0.25em]">
          {word.split("").map((letter, letterIndex) => (
            <span
              key={letterIndex}
              className="inline-block overflow-hidden"
            >
              <span 
                className="inline-block animate-letter-reveal"
                style={{ animationDelay: `${(wordIndex * 0.2 + letterIndex * 0.05).toFixed(2)}s` }}
              >
                {letter === " " ? "\u00A0" : letter}
              </span>
            </span>
          ))}
        </span>
      ))}
    </h1>
  );
}
