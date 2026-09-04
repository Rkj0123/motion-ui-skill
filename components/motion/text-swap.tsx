"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type HTMLMotionProps,
} from "motion/react";
import React from "react";
import { SPRING_SWAP } from "@/lib/ease";
import { cn } from "@/lib/utils";

export interface TextSwapProps extends HTMLMotionProps<"span"> {
  text: string | number;
  direction?: "up" | "down";
  className?: string;
}

export function TextSwap({
  text,
  direction = "up",
  className,
  ...props
}: TextSwapProps) {
  const shouldReduceMotion = useReducedMotion();

  const yOffset = direction === "up" ? 20 : -20;

  return (
    <span
      className={cn("relative inline-flex overflow-hidden align-baseline", className)}
      {...props}
    >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={String(text)}
          initial={
            shouldReduceMotion
              ? { opacity: 0 }
              : { opacity: 0, y: yOffset, filter: "blur(2px)" }
          }
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={
            shouldReduceMotion
              ? { opacity: 0 }
              : { opacity: 0, y: -yOffset, filter: "blur(2px)" }
          }
          transition={SPRING_SWAP}
          className="inline-block"
        >
          {text}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
