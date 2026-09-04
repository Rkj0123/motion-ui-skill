"use client";

import { X } from "lucide-react";
import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
} from "motion/react";
import React, { type ReactNode } from "react";
import { SPRING_BOUNCE, SPRING_PRESS } from "@/lib/ease";
import { useHaptic } from "@/lib/hooks/use-haptic";
import { cn } from "@/lib/utils";

export interface ChipProps extends Omit<HTMLMotionProps<"div">, "children"> {
  label: ReactNode;
  icon?: ReactNode;
  badge?: string | number;
  selected?: boolean;
  onSelect?: () => void;
  onDismiss?: () => void;
  variant?: "default" | "outline" | "secondary";
  size?: "sm" | "md";
  disabled?: boolean;
  className?: string;
}

export function Chip({
  label,
  icon,
  badge,
  selected = false,
  onSelect,
  onDismiss,
  variant = "default",
  size = "md",
  disabled = false,
  className,
  ...props
}: ChipProps) {
  const shouldReduceMotion = useReducedMotion();
  const triggerHaptic = useHaptic();

  const handleSelect = () => {
    if (disabled || !onSelect) return;
    triggerHaptic("selection");
    onSelect();
  };

  const handleDismiss = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (disabled || !onDismiss) return;
    triggerHaptic("light");
    onDismiss();
  };

  return (
    <motion.div
      layout
      initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.8, transition: { duration: 0.15 } }}
      whileTap={shouldReduceMotion || disabled || !onSelect ? undefined : { scale: 0.95 }}
      transition={SPRING_BOUNCE}
      onClick={handleSelect}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border font-medium transition-colors select-none",
        size === "sm" ? "h-6 px-2.5 text-[11px]" : "h-7.5 px-3 text-xs",
        onSelect && !disabled && "cursor-pointer",
        selected
          ? "border-primary bg-primary text-primary-foreground shadow-sm shadow-primary/20"
          : variant === "outline"
          ? "border-border bg-background text-foreground hover:bg-muted"
          : "border-transparent bg-muted text-muted-foreground hover:text-foreground",
        disabled && "opacity-40 cursor-not-allowed",
        className
      )}
      {...props}
    >
      {icon && <span className="size-3.5 shrink-0">{icon}</span>}
      <span>{label}</span>

      {badge !== undefined && (
        <span
          className={cn(
            "rounded-full px-1.5 py-0.2 text-[10px] font-semibold tabular-nums",
            selected
              ? "bg-primary-foreground/20 text-primary-foreground"
              : "bg-background text-muted-foreground border border-border"
          )}
        >
          {badge}
        </span>
      )}

      {onDismiss && !disabled && (
        <motion.button
          type="button"
          onClick={handleDismiss}
          whileTap={shouldReduceMotion ? undefined : { scale: 0.8 }}
          aria-label={`Remove ${label}`}
          className={cn(
            "-mr-1 ml-0.5 flex size-4 items-center justify-center rounded-full hover:bg-black/10 dark:hover:bg-white/20 transition-colors focus:outline-none",
            selected ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
          )}
        >
          <X className="size-3" />
        </motion.button>
      )}
    </motion.div>
  );
}
