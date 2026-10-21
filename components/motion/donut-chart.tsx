"use client";

import * as React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { SPRING_PANEL } from "@/lib/ease";

export interface DonutSegment {
  id: string;
  label: string;
  value: number;
  color: string;
}

export interface DonutChartProps {
  data?: DonutSegment[];
  size?: number;
  thickness?: number;
  centerLabel?: string;
  centerValue?: string;
  className?: string;
}

const DEFAULT_SEGMENTS: DonutSegment[] = [
  { id: "direct", label: "Direct", value: 45, color: "#6366f1" },
  { id: "organic", label: "Organic", value: 30, color: "#10b981" },
  { id: "referral", label: "Referral", value: 15, color: "#f59e0b" },
  { id: "social", label: "Social", value: 10, color: "#ec4899" },
];

export function DonutChart({
  data = DEFAULT_SEGMENTS,
  size = 180,
  thickness = 18,
  centerLabel = "Total",
  centerValue = "100%",
  className,
}: DonutChartProps) {
  const total = data.reduce((acc, curr) => acc + curr.value, 0) || 1;
  const radius = (size - thickness) / 2;
  const circumference = 2 * Math.PI * radius;

  let accumulatedPercent = 0;

  return (
    <div
      className={cn(
        "relative inline-flex flex-col items-center justify-center select-none",
        className
      )}
    >
      <div
        className="relative flex items-center justify-center"
        style={{ width: size, height: size }}
      >
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          className="overflow-visible -rotate-90"
        >
          {data.map((item) => {
            const percent = item.value / total;
            const strokeDasharray = `${circumference * percent} ${circumference * (1 - percent)}`;
            const strokeDashoffset = -circumference * accumulatedPercent;
            accumulatedPercent += percent;

            return (
              <motion.circle
                key={item.id}
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="none"
                stroke={item.color}
                strokeWidth={thickness}
                strokeDasharray={strokeDasharray}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={SPRING_PANEL}
                className="hover:opacity-80 transition-opacity cursor-pointer"
              />
            );
          })}
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
          <span className="text-xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 tabular-nums">
            {centerValue}
          </span>
          <span className="text-xs font-medium text-neutral-500 uppercase tracking-wider">
            {centerLabel}
          </span>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
        {data.map((item) => (
          <div key={item.id} className="flex items-center gap-1.5 text-xs text-neutral-600 dark:text-neutral-300">
            <span
              className="size-2 rounded-full shrink-0"
              style={{ backgroundColor: item.color }}
            />
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
