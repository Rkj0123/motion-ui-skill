"use client";

import {
  motion,
  useReducedMotion,
  useSpring,
  useTransform,
  type HTMLMotionProps,
} from "motion/react";
import React, { useEffect, type ReactNode } from "react";
import { SPRING_GLIDE } from "@/lib/ease";
import { cn } from "@/lib/utils";

export interface ProgressRingProps extends Omit<HTMLMotionProps<"div">, "children"> {
  value: number; // 0 to 100
  size?: "sm" | "md" | "lg" | "xl";
  strokeWidth?: number;
  showValue?: boolean;
  status?: "default" | "success" | "warning" | "destructive";
  children?: ReactNode;
  className?: string;
}

const SIZE_MAP = {
  sm: { px: 44, stroke: 4, text: "text-[11px]" },
  md: { px: 64, stroke: 5, text: "text-xs" },
  lg: { px: 88, stroke: 6, text: "text-sm font-semibold" },
  xl: { px: 120, stroke: 8, text: "text-lg font-bold" },
};

const STATUS_COLORS = {
  default: "text-primary",
  success: "text-emerald-500",
  warning: "text-amber-500",
  destructive: "text-destructive",
};

export function ProgressRing({
  value,
  size = "md",
  strokeWidth,
  showValue = true,
  status = "default",
  children,
  className,
  ...props
}: ProgressRingProps) {
  const shouldReduceMotion = useReducedMotion();
  const config = SIZE_MAP[size];
  const stroke = strokeWidth || config.stroke;
  const radius = (config.px - stroke) / 2;
  const circumference = 2 * Math.PI * radius;

  const clamped = Math.min(100, Math.max(0, value));
  const springValue = useSpring(0, SPRING_GLIDE);

  useEffect(() => {
    springValue.set(clamped);
  }, [clamped, springValue]);

  const strokeDashoffset = useTransform(springValue, (val) =>
    circumference - (val / 100) * circumference
  );

  return (
    <motion.div
      role="progressbar"
      aria-valuenow={clamped}
      aria-valuemin={0}
      aria-valuemax={100}
      className={cn("relative inline-flex items-center justify-center select-none", className)}
      style={{ width: config.px, height: config.px }}
      {...props}
    >
      <svg
        className="size-full -rotate-90"
        viewBox={`0 0 ${config.px} ${config.px}`}
      >
        {/* Background Track */}
        <circle
          cx={config.px / 2}
          cy={config.px / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={stroke}
          className="text-muted/40"
        />

        {/* Foreground Animated Progress Arc */}
        <motion.circle
          cx={config.px / 2}
          cy={config.px / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          style={shouldReduceMotion ? { strokeDashoffset: circumference - (clamped / 100) * circumference } : { strokeDashoffset }}
          className={cn("transition-colors", STATUS_COLORS[status])}
        />
      </svg>

      {/* Center Label or Slot */}
      <div className={cn("absolute inset-0 flex items-center justify-center tabular-nums text-foreground", config.text)}>
        {children ? (
          children
        ) : showValue ? (
          <span>{Math.round(clamped)}%</span>
        ) : null}
      </div>
    </motion.div>
  );
}
