"use client";

import { useEffect, useRef, useState, type RefObject } from "react";

export interface Dimensions {
  width: number;
  height: number;
}

/**
 * Measure DOM element dimensions using ResizeObserver without layout thrashing.
 */
export function useMeasure<T extends HTMLElement = HTMLElement>(): [
  RefObject<T | null>,
  Dimensions
] {
  const ref = useRef<T | null>(null);
  const [bounds, setBounds] = useState<Dimensions>({ width: 0, height: 0 });

  useEffect(() => {
    const element = ref.current;
    if (!element || typeof ResizeObserver === "undefined") return;

    const observer = new ResizeObserver(([entry]) => {
      if (entry && entry.contentRect) {
        const { width, height } = entry.contentRect;
        setBounds({
          width: Math.round(width),
          height: Math.round(height),
        });
      }
    });

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return [ref, bounds];
}
