"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type HTMLMotionProps,
} from "motion/react";
import React, { useState } from "react";
import { SPRING_BOUNCE, SPRING_LAYOUT } from "@/lib/ease";
import { cn } from "@/lib/utils";

export interface AvatarItem {
  id: string;
  name: string;
  src?: string;
  fallback?: string;
  status?: "online" | "offline" | "busy";
}

export interface AvatarGroupProps extends Omit<HTMLMotionProps<"div">, "children"> {
  avatars: AvatarItem[];
  max?: number;
  size?: "sm" | "md" | "lg";
  spreadDistance?: number;
  className?: string;
}

const SIZE_CONFIGS = {
  sm: { size: "size-8", text: "text-xs", overlap: "-space-x-2", status: "size-2" },
  md: { size: "size-10", text: "text-sm", overlap: "-space-x-3", status: "size-2.5" },
  lg: { size: "size-12", text: "text-base", overlap: "-space-x-4", status: "size-3" },
};

const STATUS_COLORS = {
  online: "bg-emerald-500",
  offline: "bg-slate-400",
  busy: "bg-rose-500",
};

export function AvatarGroup({
  avatars,
  max = 5,
  size = "md",
  spreadDistance = 22,
  className,
  ...props
}: AvatarGroupProps) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const config = SIZE_CONFIGS[size];
  const visibleAvatars = avatars.slice(0, max);
  const excessCount = avatars.length - max;

  return (
    <motion.div
      role="group"
      aria-label="User avatar group"
      className={cn("inline-flex items-center isolate py-2 px-3", className)}
      onPointerLeave={() => setHoveredIdx(null)}
      {...props}
    >
      {visibleAvatars.map((avatar, idx) => {
        const isHovered = hoveredIdx === idx;

        // Calculate magnetic spread offset for neighbors
        let xOffset = 0;
        if (hoveredIdx !== null && !shouldReduceMotion) {
          const diff = idx - hoveredIdx;
          if (diff !== 0) {
            // Distance-based falloff: closer neighbors spread more
            const dir = Math.sign(diff);
            xOffset = dir * (spreadDistance / (1 + (Math.abs(diff) - 1) * 0.5));
          }
        }

        return (
          <motion.div
            key={avatar.id}
            onPointerEnter={() => setHoveredIdx(idx)}
            animate={{
              x: xOffset,
              scale: isHovered && !shouldReduceMotion ? 1.2 : 1,
              zIndex: isHovered ? 40 : 10 + idx,
            }}
            transition={SPRING_BOUNCE}
            className={cn(
              "relative cursor-pointer select-none rounded-full ring-2 ring-background focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring",
              config.size,
              idx > 0 && "-ml-3"
            )}
            tabIndex={0}
            aria-label={avatar.name}
          >
            {/* Avatar Image or Fallback */}
            <div className="relative flex size-full items-center justify-center overflow-hidden rounded-full bg-muted font-medium text-foreground">
              {avatar.src ? (
                <img
                  src={avatar.src}
                  alt={avatar.name}
                  className="size-full object-cover"
                />
              ) : (
                <span className={config.text}>
                  {avatar.fallback || avatar.name.slice(0, 2).toUpperCase()}
                </span>
              )}
            </div>

            {/* Status Dot */}
            {avatar.status && (
              <span
                className={cn(
                  "absolute bottom-0 right-0 rounded-full ring-2 ring-background",
                  config.status,
                  STATUS_COLORS[avatar.status]
                )}
              />
            )}

            {/* Tooltip on Hover */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, y: 6, scale: 0.9 }}
                  animate={{ opacity: 1, y: -4, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.1 } }}
                  transition={SPRING_LAYOUT}
                  className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 whitespace-nowrap rounded-lg bg-popover px-2.5 py-1 text-xs font-medium text-popover-foreground shadow-md border border-border pointer-events-none"
                >
                  {avatar.name}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}

      {/* Overflow Badge */}
      {excessCount > 0 && (
        <div
          className={cn(
            "relative -ml-3 flex items-center justify-center rounded-full bg-muted font-semibold text-muted-foreground ring-2 ring-background tabular-nums",
            config.size,
            config.text
          )}
        >
          +{excessCount}
        </div>
      )}
    </motion.div>
  );
}
