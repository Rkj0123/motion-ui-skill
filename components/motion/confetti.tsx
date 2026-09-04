"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";
import React, { useEffect, useState } from "react";
import { useHaptic } from "@/lib/hooks/use-haptic";
import { cn } from "@/lib/utils";

export interface ConfettiParticle {
  id: number;
  x: number;
  y: number;
  rotate: number;
  color: string;
  size: number;
  duration: number;
}

export interface ConfettiProps {
  trigger?: boolean;
  particleCount?: number;
  colors?: string[];
  duration?: number;
  onComplete?: () => void;
  className?: string;
}

const DEFAULT_COLORS = [
  "#3b82f6",
  "#10b981",
  "#f59e0b",
  "#ec4899",
  "#8b5cf6",
  "#06b6d4",
];

export function Confetti({
  trigger = false,
  particleCount = 40,
  colors = DEFAULT_COLORS,
  duration = 2.5,
  onComplete,
  className,
}: ConfettiProps) {
  const [particles, setParticles] = useState<ConfettiParticle[]>([]);
  const shouldReduceMotion = useReducedMotion();
  const triggerHaptic = useHaptic();

  useEffect(() => {
    if (!trigger || shouldReduceMotion) {
      setParticles([]);
      return;
    }

    triggerHaptic("success");

    const newParticles: ConfettiParticle[] = Array.from({ length: particleCount }).map((_, i) => {
      const angle = (Math.PI * 2 * i) / particleCount + (Math.random() - 0.5);
      const velocity = 80 + Math.random() * 180;
      return {
        id: i,
        x: Math.cos(angle) * velocity,
        y: Math.sin(angle) * velocity - 60, // Slight upward arc
        rotate: (Math.random() - 0.5) * 720,
        color: colors[i % colors.length],
        size: 6 + Math.random() * 6,
        duration: duration * (0.7 + Math.random() * 0.6),
      };
    });

    setParticles(newParticles);

    const timer = setTimeout(() => {
      setParticles([]);
      onComplete?.();
    }, duration * 1000);

    return () => clearTimeout(timer);
  }, [trigger, particleCount, colors, duration, shouldReduceMotion, onComplete, triggerHaptic]);

  if (shouldReduceMotion || particles.length === 0) return null;

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none fixed inset-0 z-50 flex items-center justify-center overflow-hidden",
        className
      )}
    >
      <AnimatePresence>
        {particles.map((p) => (
          <motion.span
            key={p.id}
            initial={{ x: 0, y: 0, scale: 0, rotate: 0, opacity: 1 }}
            animate={{
              x: p.x,
              y: p.y + 150, // Gravity pull downwards
              scale: [0, 1.2, 0.8],
              rotate: p.rotate,
              opacity: [1, 1, 0],
            }}
            transition={{
              duration: p.duration,
              ease: [0.25, 1, 0.5, 1],
            }}
            style={{
              backgroundColor: p.color,
              width: p.size,
              height: p.size * (Math.random() > 0.5 ? 1 : 1.6),
              borderRadius: Math.random() > 0.4 ? "2px" : "9999px",
            }}
            className="absolute"
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
