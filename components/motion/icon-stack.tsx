"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type HTMLMotionProps,
} from "motion/react";
import React, { useState } from "react";
import { SPRING_BOUNCE, SPRING_GENTLE } from "@/lib/ease";
import { cn } from "@/lib/utils";

export interface IconStackItem {
  id: string | number;
  label: string;
  icon?: React.ReactNode;
  src?: string;
  href?: string;
  badge?: string | number;
}

export interface IconStackProps extends HTMLMotionProps<"div"> {
  items: IconStackItem[];
  maxVisible?: number;
  size?: "sm" | "md" | "lg";
  spreadOnHover?: boolean;
  overlap?: "tight" | "normal" | "relaxed";
  className?: string;
}

const SIZE_VARIANTS = {
  sm: "size-7 text-xs",
  md: "size-9 text-sm",
  lg: "size-11 text-base",
};

const OVERLAP_MARGINS = {
  tight: "-space-x-3 hover:space-x-1.5",
  normal: "-space-x-2 hover:space-x-2",
  relaxed: "-space-x-1 hover:space-x-2.5",
};

export function IconStack({
  items,
  maxVisible = 5,
  size = "md",
  spreadOnHover = true,
  overlap = "normal",
  className,
  ...props
}: IconStackProps) {
  const [hoveredId, setHoveredId] = useState<string | number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const visibleItems = items.slice(0, maxVisible);
  const excessCount = items.length - maxVisible;

  return (
    <motion.div
      className={cn(
        "flex items-center transition-all duration-300 py-1",
        spreadOnHover && OVERLAP_MARGINS[overlap],
        className
      )}
      {...props}
    >
      {visibleItems.map((item, index) => {
        const isHovered = hoveredId === item.id;
        const zIndex = isHovered ? 30 : visibleItems.length - index;

        return (
          <motion.div
            key={item.id}
            style={{ zIndex }}
            className="relative flex items-center justify-center focus-within:z-30"
            onMouseEnter={() => setHoveredId(item.id)}
            onMouseLeave={() => setHoveredId(null)}
            whileHover={
              shouldReduceMotion
                ? undefined
                : { y: -4, scale: 1.15, transition: SPRING_BOUNCE }
            }
          >
            <div
              className={cn(
                "relative flex items-center justify-center rounded-full border-2 border-background bg-muted font-medium text-foreground shadow-sm overflow-hidden select-none transition-shadow hover:shadow-md",
                SIZE_VARIANTS[size]
              )}
            >
              {item.src ? (
                <img
                  src={item.src}
                  alt={item.label}
                  className="size-full object-cover"
                />
              ) : item.icon ? (
                item.icon
              ) : (
                item.label.slice(0, 2).toUpperCase()
              )}

              {item.badge && (
                <span className="absolute bottom-0 right-0 size-2 rounded-full bg-emerald-500 ring-2 ring-background" />
              )}
            </div>

            {/* Hover Tooltip */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 6, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 4, scale: 0.92 }}
                  transition={SPRING_GENTLE}
                  className="pointer-events-none absolute -top-8 left-1/2 z-50 -translate-x-1/2 whitespace-nowrap rounded-md bg-foreground px-2 py-0.5 text-[10px] font-medium text-background shadow-lg"
                >
                  {item.label}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}

      {excessCount > 0 && (
        <div
          style={{ zIndex: 0 }}
          className={cn(
            "relative flex items-center justify-center rounded-full border-2 border-background bg-secondary text-secondary-foreground font-semibold text-xs shadow-sm select-none",
            SIZE_VARIANTS[size]
          )}
        >
          +{excessCount}
        </div>
      )}
    </motion.div>
  );
}
