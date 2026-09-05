"use client";

import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export interface SegmentedProgressProps extends Omit<HTMLMotionProps<"div">, "onChange"> {
  segmentsCount: number;
  activeIndex?: number;
  durationPerSegment?: number; // in seconds
  autoAdvance?: boolean;
  onSegmentComplete?: (index: number) => void;
  onAllComplete?: () => void;
  onSegmentClick?: (index: number) => void;
  className?: string;
}

export function SegmentedProgress({
  segmentsCount,
  activeIndex: controlledIndex,
  durationPerSegment = 5,
  autoAdvance = true,
  onSegmentComplete,
  onAllComplete,
  onSegmentClick,
  className,
  ...props
}: SegmentedProgressProps) {
  const [internalIndex, setInternalIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const isControlled = controlledIndex !== undefined;
  const currentIndex = isControlled ? controlledIndex : internalIndex;

  useEffect(() => {
    if (!autoAdvance || isPaused || currentIndex >= segmentsCount) return;

    const timer = setTimeout(() => {
      onSegmentComplete?.(currentIndex);
      if (currentIndex + 1 < segmentsCount) {
        if (!isControlled) setInternalIndex((prev) => prev + 1);
      } else {
        onAllComplete?.();
      }
    }, durationPerSegment * 1000);

    return () => clearTimeout(timer);
  }, [
    autoAdvance,
    isPaused,
    currentIndex,
    segmentsCount,
    durationPerSegment,
    isControlled,
    onSegmentComplete,
    onAllComplete,
  ]);

  return (
    <motion.div
      role="progressbar"
      aria-valuenow={currentIndex + 1}
      aria-valuemin={1}
      aria-valuemax={segmentsCount}
      onPointerDown={() => setIsPaused(true)}
      onPointerUp={() => setIsPaused(false)}
      onPointerLeave={() => setIsPaused(false)}
      className={cn("flex w-full items-center gap-1.5 py-2", className)}
      {...props}
    >
      {Array.from({ length: segmentsCount }).map((_, idx) => {
        const isCompleted = idx < currentIndex;
        const isCurrent = idx === currentIndex;

        return (
          <div
            key={idx}
            role={onSegmentClick ? "button" : undefined}
            tabIndex={onSegmentClick ? 0 : undefined}
            aria-label={onSegmentClick ? `Go to segment ${idx + 1}` : undefined}
            onClick={() => onSegmentClick?.(idx)}
            onKeyDown={(event) => {
              if (onSegmentClick && (event.key === "Enter" || event.key === " ")) {
                event.preventDefault();
                onSegmentClick(idx);
              }
            }}
            className={cn(
              "relative h-1 flex-1 overflow-hidden rounded-full bg-muted/60 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              onSegmentClick && "cursor-pointer hover:h-1.5"
            )}
          >
            {isCompleted && (
              <div className="size-full rounded-full bg-primary" />
            )}

            {isCurrent && (
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: isPaused ? undefined : "100%" }}
                transition={
                  shouldReduceMotion
                    ? { duration: 0 }
                    : {
                        duration: durationPerSegment,
                        ease: "linear",
                      }
                }
                className="h-full rounded-full bg-primary"
              />
            )}
          </div>
        );
      })}
    </motion.div>
  );
}
