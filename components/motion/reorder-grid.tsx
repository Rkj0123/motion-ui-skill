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

export interface ReorderGridProps extends Omit<HTMLMotionProps<"div">, "onChange"> {
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

  const gridColsClass = {
    1: "grid-cols-1",
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 md:grid-cols-4",
  }[columns];

  return (
    <Reorder.Group
      axis="y"
      values={items}
      onReorder={handleReorder}
      className={cn("grid gap-3 w-full", gridColsClass, className)}
      {...props}
    >
      {items.map((item) => (
        <Reorder.Item
          key={item.id}
          value={item}
          whileDrag={{
            scale: 1.04,
            boxShadow: "0 12px 24px -10px rgba(0,0,0,0.2)",
            zIndex: 50,
          }}
          transition={SPRING_PRESS}
          className="relative flex items-center justify-between rounded-xl border border-border bg-card p-3.5 shadow-xs cursor-grab active:cursor-grabbing hover:border-primary/40 transition-colors select-none"
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
