"use client";

import { useCallback } from "react";

export type HapticType =
  | "selection"
  | "light"
  | "medium"
  | "heavy"
  | "success"
  | "warning"
  | "error";

const HAPTIC_PATTERNS: Record<HapticType, number | number[]> = {
  selection: 10,
  light: 15,
  medium: 30,
  heavy: 50,
  success: [15, 60, 25],
  warning: [30, 80, 30],
  error: [40, 60, 40, 60, 40],
};

/**
 * Provides semantic haptic feedback using navigator.vibrate where available.
 * Degrades silently on desktop browsers or unsupported devices.
 */
export function useHaptic() {
  const trigger = useCallback((type: HapticType = "selection") => {
    if (typeof window === "undefined" || typeof navigator === "undefined") {
      return;
    }
    if (typeof navigator.vibrate === "function") {
      try {
        const pattern = HAPTIC_PATTERNS[type];
        navigator.vibrate(pattern);
      } catch {
        // Silently catch browsers blocking vibration
      }
    }
  }, []);

  return trigger;
}
