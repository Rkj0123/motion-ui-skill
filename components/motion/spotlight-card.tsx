"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  type HTMLMotionProps,
} from "motion/react";
import React, { useRef } from "react";
import { SPRING_MOUSE } from "@/lib/ease";
import { cn } from "@/lib/utils";

export interface SpotlightCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  spotlightColor?: string;
  spotlightSize?: number;
  showBorderBeam?: boolean;
  borderBeamDuration?: number;
  className?: string;
}

export function SpotlightCard({
  children,
  spotlightColor = "rgba(120, 119, 198, 0.15)",
  spotlightSize = 350,
  showBorderBeam = true,
  borderBeamDuration = 8,
  className,
  ...props
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, SPRING_MOUSE);
  const springY = useSpring(mouseY, SPRING_MOUSE);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || !cardRef.current) return;
    const { left, top } = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  const background = useMotionTemplate`radial-gradient(${spotlightSize}px circle at ${springX}px ${springY}px, ${spotlightColor}, transparent 80%)`;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      whileHover={shouldReduceMotion ? undefined : { y: -2 }}
      transition={{ duration: 0.2 }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-lg dark:hover:shadow-primary/5",
        className
      )}
      {...props}
    >
      {/* Dynamic Cursor Spotlight Layer */}
      {!shouldReduceMotion && (
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background }}
        />
      )}

      {/* Animated Border Beam Highlight */}
      {showBorderBeam && !shouldReduceMotion && (
        <div className="pointer-events-none absolute inset-0 rounded-2xl overflow-hidden">
          <div
            className="absolute -inset-[100%] animate-none opacity-0 group-hover:animate-[spin_8s_linear_infinite] group-hover:opacity-40 transition-opacity duration-500"
            style={{
              background:
                "conic-gradient(from 0deg, transparent 0 340deg, var(--primary) 360deg)",
              animationDuration: `${borderBeamDuration}s`,
            }}
          />
        </div>
      )}

      {/* Content Container */}
      <div className="relative z-10 size-full">{children}</div>
    </motion.div>
  );
}
