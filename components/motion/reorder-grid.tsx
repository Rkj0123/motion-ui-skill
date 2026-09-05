"use client";

import { GripVertical } from "lucide-react";
import {
  Reorder,
  motion,
  useReducedMotion,
  type HTMLMotionProps,
} from "motion/react";
import React, { useState } from "react";
import { SPRING_PRESS } from "@/lib/ease";
import { useHaptic } from "@/lib/hooks/use-haptic";
import { cn } from "@/lib/utils";

export interface ReorderItem {
  id: string;
  title: string;
  subtitle?: string;
  badge?: string;
  icon?: React.ReactNode;
}

export interface ReorderGridProps extends Omit<HTMLMotionProps<"ul">, "onChange"> {
  items: ReorderItem[];
  onChange?: (newItems: ReorderItem[]) => void;
  columns?: 1 | 2 | 3 | 4;
  className?: string;
}

export function ReorderGrid({
  items: initialItems,
  onChange,
  columns = 2,
  className,
  ...props
}: ReorderGridProps) {
  const [items, setItems] = useState<ReorderItem[]>(initialItems);
  const shouldReduceMotion = useReducedMotion();
  const triggerHaptic = useHaptic();

  const handleReorder = (newOrder: ReorderItem[]) => {
    setItems(newOrder);
    triggerHaptic("selection");
    onChange?.(newOrder);
  };

  const moveByKeyboard = (index: number, offset: number) => {
    const nextIndex = index + offset;
    if (nextIndex < 0 || nextIndex >= items.length) return;
    const next = [...items];
    [next[index], next[nextIndex]] = [next[nextIndex], next[index]];
    handleReorder(next);
  };

  const gridColsClass = {
    1: "grid-cols-1",
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 md:grid-cols-4",
  }[columns];

  return (
    <Reorder.Group<ReorderItem[]>
      {...props}
      axis="xy"
      values={items}
      onReorder={handleReorder}
      className={cn("grid gap-3 w-full", gridColsClass, className)}
    >
      {items.map((item, index) => (
        <Reorder.Item
          key={item.id}
          value={item}
          tabIndex={0}
          onKeyDown={(event) => {
            const offset = event.key === "ArrowRight" || event.key === "ArrowDown"
              ? 1
              : event.key === "ArrowLeft" || event.key === "ArrowUp"
              ? -1
              : 0;
            if (!offset) return;
            event.preventDefault();
            moveByKeyboard(index, offset);
          }}
          whileDrag={shouldReduceMotion ? undefined : {
            scale: 1.04,
            boxShadow: "0 12px 24px -10px rgba(0,0,0,0.2)",
            zIndex: 50,
          }}
          transition={SPRING_PRESS}
          className="relative flex items-center justify-between rounded-xl border border-border bg-card p-3.5 shadow-[0_1px_2px_0_rgb(0_0_0_/_0.05)] cursor-grab active:cursor-grabbing hover:border-primary/40 transition-colors select-none"
        >
          <div className="flex items-center gap-3 min-w-0">
            <div className="text-muted-foreground/60 hover:text-muted-foreground p-0.5">
              <GripVertical className="size-4" />
            </div>
            {item.icon && (
              <div className="size-8 rounded-lg bg-muted flex items-center justify-center text-foreground shrink-0">
                {item.icon}
              </div>
            )}
            <div className="min-w-0">
              <div className="text-xs font-semibold text-foreground truncate">
                {item.title}
              </div>
              {item.subtitle && (
                <div className="text-[11px] text-muted-foreground truncate">
                  {item.subtitle}
                </div>
              )}
            </div>
          </div>

          {item.badge && (
            <span className="rounded-full bg-secondary px-2 py-0.5 text-[10px] font-semibold text-secondary-foreground shrink-0">
              {item.badge}
            </span>
          )}
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
}
