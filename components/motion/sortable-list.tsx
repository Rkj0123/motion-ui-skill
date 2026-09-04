"use client";

import { GripVertical } from "lucide-react";
import {
  Reorder,
  useReducedMotion,
} from "motion/react";
import React, { useState, type ReactNode } from "react";
import { SPRING_LAYOUT } from "@/lib/ease";
import { useHaptic } from "@/lib/hooks/use-haptic";
import { cn } from "@/lib/utils";

export interface SortableListItem {
  id: string;
  content: ReactNode;
}

export interface SortableListProps {
  items: SortableListItem[];
  onChange?: (items: SortableListItem[]) => void;
  showHandle?: boolean;
  className?: string;
}

export function SortableList({
  items: initialItems,
  onChange,
  showHandle = true,
  className,
}: SortableListProps) {
  const [items, setItems] = useState<SortableListItem[]>(initialItems);
  const [activeId, setActiveId] = useState<string | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const triggerHaptic = useHaptic();

  const handleReorder = (newItems: SortableListItem[]) => {
    setItems(newItems);
    onChange?.(newItems);
    triggerHaptic("selection");
  };

  return (
    <Reorder.Group
      axis="y"
      values={items}
      onReorder={handleReorder}
      className={cn("flex flex-col gap-2 p-1 select-none", className)}
    >
      {items.map((item) => {
        const isDragging = activeId === item.id;

        return (
          <Reorder.Item
            key={item.id}
            value={item}
            onDragStart={() => {
              setActiveId(item.id);
              triggerHaptic("medium");
            }}
            onDragEnd={() => setActiveId(null)}
            transition={shouldReduceMotion ? { duration: 0 } : SPRING_LAYOUT}
            className={cn(
              "relative flex items-center gap-2 rounded-xl border border-border bg-card p-3 shadow-sm transition-shadow",
              isDragging && "z-20 shadow-xl border-primary/50 bg-card/95 scale-[1.02]"
            )}
          >
            {showHandle && (
              <div
                aria-label="Drag handle"
                className="cursor-grab active:cursor-grabbing text-muted-foreground/60 hover:text-foreground p-0.5"
              >
                <GripVertical className="size-4" />
              </div>
            )}
            <div className="flex-1 text-xs text-foreground font-medium">
              {item.content}
            </div>
          </Reorder.Item>
        );
      })}
    </Reorder.Group>
  );
}
