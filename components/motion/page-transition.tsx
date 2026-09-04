"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type HTMLMotionProps,
} from "motion/react";
import React from "react";
import { EASE_EMPHASIZED, EASE_OUT, SPRING_PANEL } from "@/lib/ease";
import { cn } from "@/lib/utils";

export type TransitionMode = "fade" | "slide" | "scale" | "push" | "flip";

export interface PageTransitionProps extends HTMLMotionProps<"div"> {
  transitionKey: string | number;
  mode?: TransitionMode;
  direction?: 1 | -1; // 1 for forward, -1 for back
  children: React.ReactNode;
  className?: string;
}

const VARIANTS = {
  fade: {
    initial: { opacity: 0, scale: 0.98 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.24, ease: EASE_OUT } },
    exit: { opacity: 0, scale: 0.99, transition: { duration: 0.16, ease: EASE_EMPHASIZED } },
  },
  slide: (dir: number) => ({
    initial: { opacity: 0, x: dir * 30 },
    animate: { opacity: 1, x: 0, transition: SPRING_PANEL },
    exit: { opacity: 0, x: dir * -30, transition: { duration: 0.18, ease: EASE_EMPHASIZED } },
  }),
  scale: {
    initial: { opacity: 0, scale: 0.92, filter: "blur(4px)" },
    animate: { opacity: 1, scale: 1, filter: "blur(0px)", transition: SPRING_PANEL },
    exit: { opacity: 0, scale: 1.04, filter: "blur(4px)", transition: { duration: 0.18 } },
  },
  push: (dir: number) => ({
    initial: { x: dir * 100 + "%" },
    animate: { x: "0%", transition: SPRING_PANEL },
    exit: { x: dir * -30 + "%", opacity: 0.7, transition: { duration: 0.22 } },
  }),
  flip: {
    initial: { opacity: 0, rotateX: -15, transformPerspective: 1000 },
    animate: { opacity: 1, rotateX: 0, transition: SPRING_PANEL },
    exit: { opacity: 0, rotateX: 15, transition: { duration: 0.18 } },
  },
};

export function PageTransition({
  transitionKey,
  mode = "fade",
  direction = 1,
  children,
  className,
  ...props
}: PageTransitionProps) {
  const shouldReduceMotion = useReducedMotion();

  const getVariant = () => {
    if (shouldReduceMotion) {
      return {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 0.15 } },
        exit: { opacity: 0, transition: { duration: 0.1 } },
      };
    }

    if (mode === "slide" || mode === "push") {
      return VARIANTS[mode](direction);
    }
    return VARIANTS[mode];
  };

  const variant = getVariant();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={transitionKey}
        initial={variant.initial}
        animate={variant.animate}
        exit={variant.exit}
        className={cn("w-full min-h-full", className)}
        {...props}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
