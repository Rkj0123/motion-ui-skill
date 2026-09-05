"use client";

import { useInView, useReducedMotion, type UseInViewOptions } from "motion/react";
import { useRef, type RefObject } from "react";

type InViewMargin = NonNullable<UseInViewOptions["margin"]>;

export interface UseInViewAnimationOptions {
  once?: boolean;
  amount?: "some" | "all" | number;
  margin?: InViewMargin;
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
