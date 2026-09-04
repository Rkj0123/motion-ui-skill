"use client";

import { useInView, useReducedMotion } from "motion/react";
import { useRef, type RefObject } from "react";

export interface UseInViewAnimationOptions {
  once?: boolean;
  amount?: "some" | "all" | number;
  margin?: string;
}

/**
 * Hook to trigger motion animations when an element scrolls into view.
 * Automatically respects reduced-motion preferences.
 */
export function useInViewAnimation<T extends HTMLElement = HTMLElement>(
  options: UseInViewAnimationOptions = {}
): {
  ref: RefObject<T | null>;
  isInView: boolean;
  shouldAnimate: boolean;
} {
  const { once = true, amount = 0.2, margin = "0px" } = options;
  const ref = useRef<T | null>(null);
  const isInView = useInView(ref, { once, amount, margin });
  const prefersReduced = useReducedMotion();

  return {
    ref,
    isInView,
    shouldAnimate: isInView && !prefersReduced,
  };
}
