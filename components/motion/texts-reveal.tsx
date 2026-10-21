"use client";

import * as React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { EASE_OUT } from "@/lib/ease";

export interface TextsRevealProps
  extends React.HTMLAttributes<HTMLDivElement> {
  text?: string;
  stagger?: number;
  className?: string;
}

export function TextsReveal({
  text = "Crafting high fidelity motion systems and intelligent AI agent surfaces.",
  stagger = 0.04,
  className,
  ...props
}: TextsRevealProps) {
  const words = text.split(" ");

  return (
    <div
      className={cn(
        "flex flex-wrap gap-x-2 gap-y-1 text-2xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100",
        className
      )}
      {...props}
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden pb-1">
          <motion.span
            initial={{ y: "100%", opacity: 0, filter: "blur(4px)" }}
            animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
            transition={{
              duration: 0.5,
              delay: i * stagger,
              ease: EASE_OUT,
            }}
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </div>
  );
}
