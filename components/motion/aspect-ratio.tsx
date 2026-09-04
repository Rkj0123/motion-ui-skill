"use client";

import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
} from "motion/react";
import React, { useState, type ReactNode } from "react";
import { EASE_OUT } from "@/lib/ease";
import { cn } from "@/lib/utils";

export interface AspectRatioProps extends HTMLMotionProps<"div"> {
  ratio?: number; // e.g. 16/9, 4/3, 1
  children: ReactNode;
  showSkeleton?: boolean;
  className?: string;
}

export function AspectRatio({
  ratio = 16 / 9,
  children,
  showSkeleton = true,
  className,
  ...props
}: AspectRatioProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      style={{ position: "relative", width: "100%", paddingBottom: `${(1 / ratio) * 100}%` }}
      className={cn("overflow-hidden rounded-2xl bg-muted/40", className)}
      {...props}
    >
      {/* Skeleton Shimmer Underlay */}
      {showSkeleton && !isLoaded && (
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-muted/60 animate-pulse"
        />
      )}

      {/* Content Container */}
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, scale: 1.02 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35, ease: EASE_OUT }}
        onAnimationComplete={() => setIsLoaded(true)}
        className="absolute inset-0 size-full"
      >
        {children}
      </motion.div>
    </div>
  );
}
