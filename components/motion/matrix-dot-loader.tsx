"use client";

import * as React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export interface MatrixDotLoaderProps {
  rows?: number;
  cols?: number;
  size?: number;
  gap?: number;
  color?: string;
  className?: string;
}

export function MatrixDotLoader({
  rows = 4,
  cols = 4,
  size = 6,
  gap = 6,
  className,
}: MatrixDotLoaderProps) {
  const dots = [];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const delay = (r + c) * 0.08;
      dots.push({ r, c, delay });
    }
  }

  return (
    <div
      className={cn("inline-flex flex-col items-center justify-center p-4", className)}
      role="status"
      aria-label="Loading"
    >
      <div
        className="grid"
        style={{
          gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
          gap: `${gap}px`,
        }}
      >
        {dots.map((dot, idx) => (
          <motion.div
            key={idx}
            animate={{
              scale: [0.6, 1.25, 0.6],
              opacity: [0.25, 1, 0.25],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              delay: dot.delay,
              ease: "easeInOut",
            }}
            style={{
              width: `${size}px`,
              height: `${size}px`,
            }}
            className="rounded-full bg-neutral-900 dark:bg-neutral-100"
          />
        ))}
      </div>
    </div>
  );
}
