"use client";

import * as React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export interface OrganicShimmerProps {
  children?: React.ReactNode;
  duration?: number;
  className?: string;
}

export function OrganicShimmer({
  children,
  duration = 2.4,
  className,
}: OrganicShimmerProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-border",
        "bg-card text-card-foreground p-6 shadow-sm",
        className
      )}
    >
      <motion.div
        aria-hidden="true"
        initial={{ x: "-100%" }}
        animate={{ x: "200%" }}
        transition={{
          repeat: Infinity,
          duration,
          ease: "easeInOut",
          repeatDelay: 1.2,
        }}
        className="pointer-events-none absolute inset-0 -top-full -bottom-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-foreground/10 to-transparent blur-md"
      />
      <div className="relative z-10">
        {children || (
          <div className="space-y-3">
            <div className="h-4 w-1/3 rounded-md bg-muted" />
            <div className="h-3 w-3/4 rounded-md bg-muted/60" />
            <div className="h-3 w-1/2 rounded-md bg-muted/60" />
          </div>
        )}
      </div>
    </div>
  );
}
