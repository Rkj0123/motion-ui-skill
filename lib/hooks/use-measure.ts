"use client";

import { useCallback, useEffect, useState, type RefCallback } from "react";

export interface Dimensions {
  width: number;
  height: number;
}

/**
 * Measure DOM element dimensions using ResizeObserver without layout thrashing.
 */
export function useMeasure<T extends HTMLElement = HTMLElement>(): [
  RefCallback<T>,
  Dimensions
] {
  const [element, setElement] = useState<T | null>(null);
  const [bounds, setBounds] = useState<Dimensions>({ width: 0, height: 0 });
  const ref = useCallback<RefCallback<T>>((next) => setElement(next), []);

  useEffect(() => {
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
  }, [element]);

  return [ref, bounds];
}
