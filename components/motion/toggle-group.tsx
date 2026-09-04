"use client";

import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
} from "motion/react";
import React, { useState, type ReactNode } from "react";
import { SPRING_PRESS } from "@/lib/ease";
import { useHaptic } from "@/lib/hooks/use-haptic";
import { cn } from "@/lib/utils";

export interface ToggleItem {
  value: string;
  label?: string;
  icon?: ReactNode;
  ariaLabel?: string;
  disabled?: boolean;
}

export interface ToggleGroupProps
  extends Omit<HTMLMotionProps<"div">, "onChange" | "defaultValue"> {
  items: ToggleItem[];
  type?: "single" | "multiple";
  value?: string | string[];
  defaultValue?: string | string[];
  onChange?: (val: any) => void;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "outline";
  className?: string;
}

const SIZE_STYLES = {
  sm: "size-8 text-xs",
  md: "size-9 text-sm",
  lg: "size-10 text-base",
};

export function ToggleGroup({
  items,
  type = "single",
  value: controlledValue,
  defaultValue,
  onChange,
  size = "md",
  variant = "default",
  className,
  ...props
}: ToggleGroupProps) {
  const [internalSingle, setInternalSingle] = useState<string>(
    typeof defaultValue === "string" ? defaultValue : ""
  );
  const [internalMulti, setInternalMulti] = useState<string[]>(
    Array.isArray(defaultValue) ? defaultValue : []
  );
  const shouldReduceMotion = useReducedMotion();
  const triggerHaptic = useHaptic();

  const isControlled = controlledValue !== undefined;

  const isSelected = (val: string) => {
    if (type === "single") {
      return isControlled ? controlledValue === val : internalSingle === val;
    }
    const current = isControlled
      ? (controlledValue as string[]) || []
      : internalMulti;
    return current.includes(val);
  };

  const handleToggle = (val: string) => {
    triggerHaptic("selection");
    if (type === "single") {
      const next = isSelected(val) ? "" : val;
      if (!isControlled) setInternalSingle(next);
      onChange?.(next);
    } else {
      const current = isControlled
        ? (controlledValue as string[]) || []
        : internalMulti;
      const next = current.includes(val)
        ? current.filter((v) => v !== val)
        : [...current, val];
      if (!isControlled) setInternalMulti(next);
      onChange?.(next);
    }
  };

  return (
    <div
      role="group"
      className={cn(
        "inline-flex items-center gap-1 rounded-xl p-1",
        variant === "outline" ? "border border-border bg-background" : "bg-muted/60",
        className
      )}
      {...props}
    >
      {items.map((item) => {
        const selected = isSelected(item.value);

        return (
          <motion.button
            key={item.value}
            type="button"
            aria-pressed={selected}
            disabled={item.disabled}
            onClick={() => handleToggle(item.value)}
            whileTap={shouldReduceMotion || item.disabled ? undefined : { scale: 0.92 }}
            transition={SPRING_PRESS}
            aria-label={item.ariaLabel || item.label}
            className={cn(
              "relative flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring select-none",
              SIZE_STYLES[size],
              selected
                ? "bg-background text-foreground shadow-sm border border-border/80"
                : "text-muted-foreground hover:bg-muted/50 hover:text-foreground",
              item.disabled && "opacity-40 cursor-not-allowed"
            )}
          >
            {item.icon && <span className="size-4">{item.icon}</span>}
            {item.label && <span className="px-1">{item.label}</span>}
          </motion.button>
        );
      })}
    </div>
  );
}
