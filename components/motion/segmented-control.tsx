"use client";

import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
} from "motion/react";
import React, { useId, useState, type ReactNode } from "react";
import { SPRING_LAYOUT, SPRING_PRESS } from "@/lib/ease";
import { useHaptic } from "@/lib/hooks/use-haptic";
import { cn } from "@/lib/utils";

export interface SegmentedItem {
  value: string;
  label: string;
  icon?: ReactNode;
  disabled?: boolean;
}

export interface SegmentedControlProps
  extends Omit<HTMLMotionProps<"div">, "onChange" | "defaultValue"> {
  items: SegmentedItem[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  className?: string;
}

const SIZE_STYLES = {
  sm: "h-7 text-xs px-2.5",
  md: "h-9 text-sm px-3.5",
  lg: "h-11 text-base px-5",
};

export function SegmentedControl({
  items,
  value: controlledValue,
  defaultValue,
  onChange,
  size = "md",
  fullWidth = false,
  className,
  ...props
}: SegmentedControlProps) {
  const [internalValue, setInternalValue] = useState(
    defaultValue || (items.length > 0 ? items[0].value : "")
  );
  const layoutId = useId();
  const shouldReduceMotion = useReducedMotion();
  const triggerHaptic = useHaptic();

  const isControlled = controlledValue !== undefined;
  const activeValue = isControlled ? controlledValue : internalValue;

  const handleSelect = (val: string) => {
    if (val === activeValue) return;
    if (!isControlled) setInternalValue(val);
    onChange?.(val);
    triggerHaptic("selection");
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    let nextIndex = -1;
    if (e.key === "ArrowRight") {
      nextIndex = (index + 1) % items.length;
    } else if (e.key === "ArrowLeft") {
      nextIndex = (index - 1 + items.length) % items.length;
    }
    if (nextIndex !== -1 && !items[nextIndex].disabled) {
      e.preventDefault();
      handleSelect(items[nextIndex].value);
    }
  };

  return (
    <div
      role="tablist"
      aria-label="Segmented options"
      className={cn(
        "inline-flex items-center rounded-xl bg-muted/70 p-1 border border-border/60 shadow-inner",
        fullWidth && "w-full flex",
        className
      )}
      {...props}
    >
      {items.map((item, idx) => {
        const isSelected = item.value === activeValue;

        return (
          <motion.button
            key={item.value}
            role="tab"
            aria-selected={isSelected}
            tabIndex={isSelected ? 0 : -1}
            disabled={item.disabled}
            onClick={() => handleSelect(item.value)}
            onKeyDown={(e) => handleKeyDown(e, idx)}
            whileTap={shouldReduceMotion || item.disabled ? undefined : { scale: 0.96 }}
            transition={SPRING_PRESS}
            className={cn(
              "relative z-10 flex items-center justify-center gap-2 rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring select-none",
              SIZE_STYLES[size],
              fullWidth && "flex-1",
              isSelected ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground",
              item.disabled && "opacity-40 cursor-not-allowed"
            )}
          >
            {/* Active Pill Gliding Indicator */}
            {isSelected && (
              <motion.div
                layoutId={`segmented-active-${layoutId}`}
                transition={shouldReduceMotion ? { duration: 0 } : SPRING_LAYOUT}
                className="absolute inset-0 z-[-1] rounded-lg bg-background shadow-sm border border-border/80"
              />
            )}

            {item.icon && <span className="size-4 shrink-0">{item.icon}</span>}
            <span>{item.label}</span>
          </motion.button>
        );
      })}
    </div>
  );
}
