"use client";

import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
} from "motion/react";
import React from "react";
import { SPRING_BOUNCE } from "@/lib/ease";
import { cn } from "@/lib/utils";

export interface SplitTextProps extends HTMLMotionProps<"span"> {
  text: string;
  by?: "words" | "chars";
  delay?: number;
  staggerDuration?: number;
  mode?: "fade-up" | "pop" | "wave";
  className?: string;
}

export function SplitText({
  text,
  by = "chars",
  delay = 0,
  staggerDuration = 0.03,
  mode = "fade-up",
  className,
  ...props
}: SplitTextProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <motion.span className={className} {...props}>{text}</motion.span>;
  }

  const words = text.split(" ");

  const getVariants = () => {
    switch (mode) {
      case "pop":
        return {
          hidden: { opacity: 0, scale: 0.5 },
          visible: { opacity: 1, scale: 1 },
        };
      case "wave":
        return {
          hidden: { opacity: 0, y: 12 },
          visible: { opacity: 1, y: 0 },
        };
      case "fade-up":
      default:
        return {
          hidden: { opacity: 0, y: 8 },
          visible: { opacity: 1, y: 0 },
        };
    }
  };

  const variants = getVariants();

  let globalIndex = 0;

  return (
    <motion.span
      className={cn("inline-flex flex-wrap items-baseline select-none", className)}
      {...props}
    >
      {words.map((word, wordIdx) => {
        const chars = Array.from(word);

        return (
          <span key={wordIdx} className="inline-flex whitespace-nowrap">
            {by === "words" ? (
              <motion.span
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={{
                  ...SPRING_BOUNCE,
                  delay: delay + wordIdx * (staggerDuration * 3),
                }}
                className="inline-block"
              >
                {word}
              </motion.span>
            ) : (
              chars.map((char, charIdx) => {
                const currentIndex = globalIndex++;
                return (
                  <motion.span
                    key={charIdx}
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    transition={{
                      ...SPRING_BOUNCE,
                      delay: delay + currentIndex * staggerDuration,
                    }}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                );
              })
            )}
            {/* Space between words */}
            {wordIdx < words.length - 1 && (
              <span className="inline-block">&nbsp;</span>
            )}
          </span>
        );
      })}
    </motion.span>
  );
}
