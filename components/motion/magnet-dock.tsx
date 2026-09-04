"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
  type HTMLMotionProps,
} from "motion/react";
import React, { useRef } from "react";
import { SPRING_MOUSE } from "@/lib/ease";
import { cn } from "@/lib/utils";

export interface MagnetDockItem {
  id: string;
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
  badge?: string | number;
}

export interface MagnetDockProps extends HTMLMotionProps<"div"> {
  items: MagnetDockItem[];
  magnification?: number; // max scale size (default 64px)
  baseSize?: number; // default 40px
  distance?: number; // influence radius in pixels (default 140px)
  className?: string;
}

function DockIcon({
  item,
  mouseX,
  magnification = 64,
  baseSize = 42,
  distance = 140,
}: {
  item: MagnetDockItem;
  mouseX: any;
  magnification?: number;
  baseSize?: number;
  distance?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const distanceCalc = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(
    distanceCalc,
    [-distance, 0, distance],
    [baseSize, magnification, baseSize]
  );

  const width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 160,
    damping: 14,
  });

  return (
    <motion.div
      ref={ref}
      style={shouldReduceMotion ? { width: baseSize, height: baseSize } : { width, height: width }}
      onClick={item.onClick}
      className="relative flex items-center justify-center rounded-2xl bg-card border border-border shadow-md cursor-pointer hover:border-primary/50 transition-colors group aspect-square select-none"
    >
      <div className="flex items-center justify-center text-foreground pointer-events-none">
        {item.icon}
      </div>

      {/* Tooltip */}
      <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-foreground px-2 py-0.5 text-[10px] font-semibold text-background opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
        {item.label}
      </span>
    </motion.div>
  );
}

export function MagnetDock({
  items,
  magnification = 64,
  baseSize = 42,
  distance = 140,
  className,
  ...props
}: MagnetDockProps) {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "flex h-16 items-end gap-3 rounded-3xl border border-white/20 dark:border-white/10 bg-card/70 px-4 pb-2.5 shadow-2xl backdrop-blur-2xl ring-1 ring-black/5",
        className
      )}
      {...props}
    >
      {items.map((item) => (
        <DockIcon
          key={item.id}
          item={item}
          mouseX={mouseX}
          magnification={magnification}
          baseSize={baseSize}
          distance={distance}
        />
      ))}
    </motion.div>
  );
}
