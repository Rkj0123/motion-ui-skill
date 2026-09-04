"use client";

import {
  motion,
  useAnimationControls,
  useReducedMotion,
  type HTMLMotionProps,
} from "motion/react";
import React, { useEffect } from "react";
import { useHaptic } from "@/lib/hooks/use-haptic";
import { cn } from "@/lib/utils";

export interface ErrorShakeProps extends HTMLMotionProps<"div"> {
  error?: boolean;
  onShakeEnd?: () => void;
  intensity?: "mild" | "medium" | "strong";
  children: React.ReactNode;
  className?: string;
}

const SHAKE_OFFSETS = {
  mild: [0, -6, 6, -4, 4, -2, 2, 0],
  medium: [0, -12, 12, -8, 8, -4, 4, 0],
  strong: [0, -18, 18, -12, 12, -6, 6, 0],
};

export function ErrorShake({
  error = false,
  onShakeEnd,
  intensity = "medium",
  children,
  className,
  ...props
}: ErrorShakeProps) {
  const controls = useAnimationControls();
  const shouldReduceMotion = useReducedMotion();
  const triggerHaptic = useHaptic();

  useEffect(() => {
    if (error) {
      triggerHaptic("error");
      if (!shouldReduceMotion) {
        controls
          .start({
            x: SHAKE_OFFSETS[intensity],
            transition: { duration: 0.45, ease: "easeInOut" },
          })
          .then(() => {
            onShakeEnd?.();
          });
      } else {
        onShakeEnd?.();
      }
    }
  }, [error, controls, intensity, shouldReduceMotion, triggerHaptic, onShakeEnd]);

  return (
    <motion.div
      animate={controls}
      className={cn("w-full transition-colors", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
