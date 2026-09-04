"use client";

import { GripVertical, GripHorizontal } from "lucide-react";
import { motion, useReducedMotion, type HTMLMotionProps } from "motion/react";
import React, { useState, useRef, useCallback } from "react";
import { useHaptic } from "@/lib/hooks/use-haptic";
import { cn } from "@/lib/utils";

export interface ResizablePanelGroupProps extends HTMLMotionProps<"div"> {
  direction?: "horizontal" | "vertical";
  defaultSize?: number; // percentage (0 - 100) for first panel
  minSize?: number; // percentage
  maxSize?: number; // percentage
  onResize?: (size: number) => void;
  panelA: React.ReactNode;
  panelB: React.ReactNode;
  className?: string;
}

export function ResizablePanelGroup({
  direction = "horizontal",
  defaultSize = 50,
  minSize = 20,
  maxSize = 80,
  onResize,
  panelA,
  panelB,
  className,
  ...props
}: ResizablePanelGroupProps) {
  const [size, setSize] = useState<number>(defaultSize);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerHaptic = useHaptic();

  const handlePointerDown = (e: React.PointerEvent) => {
    e.preventDefault();
    setIsDragging(true);
    triggerHaptic("light");
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      let newPercent: number;

      if (direction === "horizontal") {
        const offset = e.clientX - rect.left;
        newPercent = (offset / rect.width) * 100;
      } else {
        const offset = e.clientY - rect.top;
        newPercent = (offset / rect.height) * 100;
      }

      const clamped = Math.min(Math.max(newPercent, minSize), maxSize);
      setSize(clamped);
      onResize?.(clamped);
    },
    [isDragging, direction, minSize, maxSize, onResize]
  );

  const handlePointerUp = (e: React.PointerEvent) => {
    if (isDragging) {
      setIsDragging(false);
      triggerHaptic("selection");
      try {
        (e.target as HTMLElement).releasePointerCapture(e.pointerId);
      } catch {
        // pointer capture already lost
      }
    }
  };

  const isHorizontal = direction === "horizontal";

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      className={cn(
        "relative flex size-full overflow-hidden rounded-xl border border-border bg-card",
        isHorizontal ? "flex-row" : "flex-col",
        isDragging && (isHorizontal ? "select-none cursor-col-resize" : "select-none cursor-row-resize"),
        className
      )}
      {...props}
    >
      {/* Panel A */}
      <div
        style={{
          [isHorizontal ? "width" : "height"]: `${size}%`,
        }}
        className="overflow-auto min-w-0 min-h-0"
      >
        {panelA}
      </div>

      {/* Resize Handle */}
      <div
        role="separator"
        aria-valuenow={Math.round(size)}
        aria-valuemin={minSize}
        aria-valuemax={maxSize}
        tabIndex={0}
        onPointerDown={handlePointerDown}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
            const next = Math.max(size - 5, minSize);
            setSize(next);
            onResize?.(next);
          } else if (e.key === "ArrowRight" || e.key === "ArrowDown") {
            const next = Math.min(size + 5, maxSize);
            setSize(next);
            onResize?.(next);
          }
        }}
        className={cn(
          "relative flex items-center justify-center transition-colors bg-border hover:bg-primary/50 focus-visible:bg-primary focus-visible:outline-none",
          isHorizontal
            ? "w-1.5 cursor-col-resize hover:w-2"
            : "h-1.5 cursor-row-resize hover:h-2",
          isDragging && "bg-primary"
        )}
      >
        <div
          className={cn(
            "absolute z-10 flex items-center justify-center rounded-sm bg-card border border-border p-0.5 text-muted-foreground shadow-sm pointer-events-none",
            isDragging && "border-primary text-primary"
          )}
        >
          {isHorizontal ? (
            <GripVertical className="size-3" />
          ) : (
            <GripHorizontal className="size-3" />
          )}
        </div>
      </div>

      {/* Panel B */}
      <div
        style={{
          [isHorizontal ? "width" : "height"]: `${100 - size}%`,
        }}
        className="overflow-auto min-w-0 min-h-0 flex-1"
      >
        {panelB}
      </div>
    </div>
  );
}
