"use client";

import * as React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export interface ProGradientTextProps
  extends React.HTMLAttributes<HTMLHeadingElement> {
  children?: React.ReactNode;
  colors?: string[];
  duration?: number;
  className?: string;
}

export function ProGradientText({
  children = "Engineered for Velocity",
  colors = ["#ff5941", "#d34699", "#8b5cf6", "#3b82f6", "#10b981", "#ff5941"],
  duration = 6,
  className,
  ...props
}: ProGradientTextProps) {
  const gradientString = `linear-gradient(90deg, ${colors.join(", ")})`;

  return (
    <motion.h2
      className={cn(
        "font-bold text-3xl md:text-5xl tracking-tight bg-clip-text text-transparent bg-[length:300%_auto]",
        className
      )}
      style={{
        backgroundImage: gradientString,
      }}
      animate={{
        backgroundPosition: ["0% center", "100% center"],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
      }}
      {...props}
    >
      {children}
    </motion.h2>
  );
}
