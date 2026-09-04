"use client";

import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
} from "motion/react";
import React, { useState } from "react";
import { SPRING_PRESS } from "@/lib/ease";
import { useHaptic, type HapticType } from "@/lib/hooks/use-haptic";
import { cn } from "@/lib/utils";

export interface HapticPressableProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  haptic?: HapticType;
  pressScale?: number;
  showRipple?: boolean;
  disabled?: boolean;
  className?: string;
}

export function HapticPressable({
  children,
  haptic = "selection",
  pressScale = 0.96,
  showRipple = true,
  disabled = false,
  className,
  onClick,
  onPointerDown,
  ...props
}: HapticPressableProps) {
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const shouldReduceMotion = useReducedMotion();
  const triggerHaptic = useHaptic();

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (disabled) return;
    triggerHaptic(haptic);

    if (showRipple && !shouldReduceMotion) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const id = Date.now();
      setRipples((prev) => [...prev, { id, x, y }]);
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== id));
      }, 600);
    }

    onPointerDown?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (disabled) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      triggerHaptic(haptic);
      // @ts-ignore
      onClick?.(e as any);
    }
  };

  return (
    <motion.div
      role="button"
      tabIndex={disabled ? -1 : 0}
      disabled={disabled}
      onPointerDown={handlePointerDown}
      onKeyDown={handleKeyDown}
      onClick={disabled ? undefined : onClick}
      whileTap={shouldReduceMotion || disabled ? undefined : { scale: pressScale }}
      transition={SPRING_PRESS}
      className={cn(
        "relative overflow-hidden cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
      {...props}
    >
      {/* Ripple Animation Effects */}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground/10 animate-[ping_0.6s_ease-out_forwards]"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: 120,
            height: 120,
          }}
        />
      ))}

      {children}
    </motion.div>
  );
}
