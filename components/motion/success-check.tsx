"use client";

import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import { EASE_OUT, SPRING_BOUNCE, SPRING_PRESS } from "@/lib/ease";
import { useHaptic } from "@/lib/hooks/use-haptic";
import { cn } from "@/lib/utils";

export interface SuccessCheckProps extends Omit<HTMLMotionProps<"div">, "children"> {
  trigger?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
  showHalo?: boolean;
  autoReset?: boolean;
  resetDelay?: number;
  onComplete?: () => void;
  className?: string;
}

const SIZE_MAP = {
  sm: { box: "size-8", stroke: 2.5 },
  md: { box: "size-12", stroke: 2.5 },
  lg: { box: "size-16", stroke: 3 },
  xl: { box: "size-24", stroke: 3.5 },
};

export function SuccessCheck({
  trigger = true,
  size = "md",
  showHalo = true,
  autoReset = false,
  resetDelay = 3000,
  onComplete,
  className,
  ...props
}: SuccessCheckProps) {
  const [isPlaying, setIsPlaying] = useState(trigger);
  const shouldReduceMotion = useReducedMotion();
  const triggerHaptic = useHaptic();
  const replayTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const currentSize = SIZE_MAP[size];

  useEffect(() => () => {
    if (replayTimer.current) clearTimeout(replayTimer.current);
  }, []);

  useEffect(() => {
    if (trigger) {
      setIsPlaying(true);
      triggerHaptic("success");

      if (autoReset) {
        const timer = setTimeout(() => setIsPlaying(false), resetDelay);
        return () => clearTimeout(timer);
      }
    } else {
      setIsPlaying(false);
    }
  }, [trigger, autoReset, resetDelay, onComplete, triggerHaptic]);

  const handleManualReplay = () => {
    setIsPlaying(false);
    if (replayTimer.current) clearTimeout(replayTimer.current);
    replayTimer.current = setTimeout(() => {
      setIsPlaying(true);
      triggerHaptic("success");
    }, 50);
  };

  return (
    <motion.div
      role="button"
      tabIndex={0}
      aria-label="Action succeeded"
      onClick={handleManualReplay}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          handleManualReplay();
        }
      }}
      className={cn(
        "relative inline-flex items-center justify-center cursor-pointer select-none",
        currentSize.box,
        className
      )}
      {...props}
    >
      {/* Expanding Ripple Halo */}
      {showHalo && isPlaying && !shouldReduceMotion && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0.8 }}
          animate={{ scale: 1.8, opacity: 0 }}
          transition={{ duration: 0.8, ease: EASE_OUT }}
          className="absolute inset-0 rounded-full bg-emerald-500/30 dark:bg-emerald-400/20 pointer-events-none"
        />
      )}

      {/* Outer Circle Container */}
        <motion.div
        initial={shouldReduceMotion ? false : { scale: 0, rotate: -30 }}
        animate={shouldReduceMotion
          ? (isPlaying ? { opacity: 1 } : { opacity: 0 })
          : (isPlaying ? { scale: 1, rotate: 0 } : { scale: 0, opacity: 0 })}
        transition={shouldReduceMotion ? { duration: 0 } : SPRING_BOUNCE}
        onAnimationComplete={() => {
          if (isPlaying) onComplete?.();
        }}
        className="relative flex size-full items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/25 dark:shadow-emerald-500/10"
      >
        {/* SVG Drawing Checkmark */}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className="size-3/5"
          style={{ overflow: "visible" }}
        >
          <motion.path
            d="M5 13l4 4L19 7"
            strokeWidth={currentSize.stroke}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={shouldReduceMotion ? false : { pathLength: 0, opacity: 0 }}
            animate={
              isPlaying
                ? { pathLength: 1, opacity: 1 }
                : { pathLength: 0, opacity: 0 }
            }
            transition={{
              pathLength: { duration: shouldReduceMotion ? 0 : 0.35, delay: shouldReduceMotion ? 0 : 0.15, ease: EASE_OUT },
              opacity: { duration: 0.1 },
            }}
          />
        </svg>
      </motion.div>
    </motion.div>
  );
}
