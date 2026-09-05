"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  type HTMLMotionProps,
} from "motion/react";
import React, { useRef } from "react";
import { SPRING_MOUSE, SPRING_PRESS } from "@/lib/ease";
import { useHaptic } from "@/lib/hooks/use-haptic";
import { cn } from "@/lib/utils";

export interface GlowButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  magnetic?: boolean;
  magneticDistance?: number;
  glowColor?: string;
  className?: string;
}

export function GlowButton({
  children,
  magnetic = true,
  magneticDistance = 0.25,
  glowColor = "from-primary via-purple-500 to-pink-500",
  className,
  onClick,
  ...props
}: GlowButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const triggerHaptic = useHaptic();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, SPRING_MOUSE);
  const springY = useSpring(mouseY, SPRING_MOUSE);

  const handleMouseMove = (e: React.PointerEvent<HTMLButtonElement>) => {
    if (!magnetic || shouldReduceMotion || !buttonRef.current) return;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    mouseX.set((e.clientX - centerX) * magneticDistance);
    mouseY.set((e.clientY - centerY) * magneticDistance);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    triggerHaptic("light");
    onClick?.(e);
  };

  return (
    <motion.button
      ref={buttonRef}
      style={magnetic && !shouldReduceMotion ? { x: springX, y: springY } : undefined}
      onPointerMove={handleMouseMove}
      onPointerLeave={handleMouseLeave}
      onClick={handleClick}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.96 }}
      transition={SPRING_PRESS}
      className={cn(
        "group relative inline-flex items-center justify-center rounded-xl p-[1px] font-medium text-sm transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className
      )}
      {...props}
    >
      {/* Animated Iridescent Glow Perimeter */}
      <span
        aria-hidden="true"
        className={cn(
          "absolute inset-0 rounded-xl bg-gradient-to-r opacity-70 blur-sm transition-opacity duration-300 group-hover:opacity-100",
          glowColor,
          !shouldReduceMotion && "animate-pulse"
        )}
      />

      {/* Outer Border Layer */}
      <span
        aria-hidden="true"
        className={cn(
          "absolute inset-0 rounded-xl bg-gradient-to-r transition-all duration-300",
          glowColor
        )}
      />

      {/* Button Body Surface */}
      <span className="relative flex items-center justify-center gap-2 rounded-[11px] bg-background/95 px-4 py-2.5 text-foreground backdrop-blur-md transition-colors group-hover:bg-background/80">
        {children}
      </span>
    </motion.button>
  );
}
