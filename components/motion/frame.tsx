"use client";

import { Laptop, Smartphone, Tablet, ExternalLink } from "lucide-react";
import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
} from "motion/react";
import React, { useState } from "react";
import { SPRING_LAYOUT } from "@/lib/ease";
import { useHaptic } from "@/lib/hooks/use-haptic";
import { cn } from "@/lib/utils";

export type FrameViewport = "desktop" | "tablet" | "mobile";

export interface FrameProps extends HTMLMotionProps<"div"> {
  url?: string;
  defaultViewport?: FrameViewport;
  children: React.ReactNode;
  className?: string;
}

const VIEWPORT_WIDTHS = {
  desktop: "w-full max-w-4xl",
  tablet: "w-full max-w-xl",
  mobile: "w-full max-w-sm",
};

export function Frame({
  url = "https://acme.inc",
  defaultViewport = "desktop",
  children,
  className,
  ...props
}: FrameProps) {
  const [viewport, setViewport] = useState<FrameViewport>(defaultViewport);
  const shouldReduceMotion = useReducedMotion();
  const triggerHaptic = useHaptic();

  const selectViewport = (vp: FrameViewport) => {
    triggerHaptic("selection");
    setViewport(vp);
  };

  return (
    <motion.div className={cn("flex flex-col items-center w-full py-4", className)} {...props}>
      {/* Top Device Switcher Controls */}
      <div className="flex items-center gap-1.5 p-1 rounded-xl border border-border bg-card/80 backdrop-blur-md mb-4 shadow-sm">
        <button
          type="button"
          onClick={() => selectViewport("desktop")}
          className={cn(
            "flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors",
            viewport === "desktop" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
          )}
        >
          <Laptop className="size-3.5" />
          <span>Desktop</span>
        </button>
        <button
          type="button"
          onClick={() => selectViewport("tablet")}
          className={cn(
            "flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors",
            viewport === "tablet" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
          )}
        >
          <Tablet className="size-3.5" />
          <span>Tablet</span>
        </button>
        <button
          type="button"
          onClick={() => selectViewport("mobile")}
          className={cn(
            "flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors",
            viewport === "mobile" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
          )}
        >
          <Smartphone className="size-3.5" />
          <span>Mobile</span>
        </button>
      </div>

      {/* Frame Container */}
      <motion.div
        layout
        transition={shouldReduceMotion ? undefined : SPRING_LAYOUT}
        className={cn(
          "overflow-hidden rounded-2xl border border-border bg-card shadow-2xl transition-all",
          VIEWPORT_WIDTHS[viewport]
        )}
      >
        {/* Browser Chrome Header */}
        <div className="flex items-center justify-between border-b border-border bg-muted/40 px-4 py-2.5">
          <div className="flex items-center gap-1.5">
            <span className="size-2.5 rounded-full bg-rose-500/80" />
            <span className="size-2.5 rounded-full bg-amber-500/80" />
            <span className="size-2.5 rounded-full bg-emerald-500/80" />
          </div>

          <div className="flex items-center gap-1.5 rounded-lg border border-border bg-card px-3 py-1 text-[11px] font-mono text-muted-foreground">
            <span className="truncate max-w-[200px]">{url}</span>
            <ExternalLink className="size-2.5" />
          </div>

          <div className="w-8" />
        </div>

        {/* Content Area */}
        <div className="min-h-[320px] max-h-[600px] overflow-auto bg-background p-4">
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
}
