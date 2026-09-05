"use client";

import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
} from "motion/react";
import React from "react";
import { SPRING_PRESS } from "@/lib/ease";
import { getStylePreset, type StylePreset } from "@/lib/styles";
import { cn } from "@/lib/utils";

export interface MetricCardProps extends HTMLMotionProps<"div"> {
  title: string;
  value: string | number;
  change?: string;
  isPositive?: boolean;
  timeframe?: string;
  sparklineData?: number[];
  stylePreset?: StylePreset;
  className?: string;
}

export function MetricCard({
  title,
  value,
  change,
  isPositive = true,
  timeframe = "vs last month",
  sparklineData = [12, 18, 15, 24, 22, 35, 42, 38, 55],
  stylePreset = "origin",
  className,
  ...props
}: MetricCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const tokens = getStylePreset(stylePreset);

  // Generate SVG path from sparklineData
  const data = sparklineData.length > 0 ? sparklineData : [0];
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const width = 120;
  const height = 40;

  const points = data.map((val, idx) => {
    const x = data.length === 1 ? width / 2 : (idx / (data.length - 1)) * width;
    const y = height - ((val - min) / range) * (height - 8) - 4;
    return `${x},${y}`;
  });
  const pathD = `M ${points.join(" L ")}`;

  return (
    <motion.div
      whileHover={shouldReduceMotion ? undefined : { y: -2 }}
      transition={tokens.spring || SPRING_PRESS}
      className={cn(tokens.card, "flex flex-col justify-between", className)}
      {...props}
    >
      {/* Header */}
      <div className="flex items-center justify-between pb-2">
        <span className="text-xs font-medium text-muted-foreground">{title}</span>
        {change && (
          <div
            className={cn(
              "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-semibold",
              isPositive
                ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                : "bg-rose-500/10 text-rose-600 dark:text-rose-400"
            )}
          >
            {isPositive ? (
              <ArrowUpRight className="size-3" />
            ) : (
              <ArrowDownRight className="size-3" />
            )}
            <span>{change}</span>
          </div>
        )}
      </div>

      {/* Main Metric Value & Sparkline */}
      <div className="flex items-end justify-between gap-4 pt-1">
        <div>
          <div className="text-2xl font-bold tracking-tight text-foreground font-mono">
            {value}
          </div>
          {timeframe && (
            <div className="text-[11px] text-muted-foreground mt-0.5">{timeframe}</div>
          )}
        </div>

        {/* Animated SVG Sparkline */}
        <div className="h-10 w-28 overflow-visible">
          <svg
            viewBox={`0 0 ${width} ${height}`}
            className="size-full overflow-visible"
          >
            <motion.path
              d={pathD}
              fill="none"
              stroke={isPositive ? "#10b981" : "#f43f5e"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={shouldReduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
            />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}
