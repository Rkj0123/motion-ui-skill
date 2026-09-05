"use client";

import { ChevronDown } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type HTMLMotionProps,
} from "motion/react";
import React, { useId, useState, type ReactNode } from "react";
import { EASE_OUT, SPRING_LAYOUT, SPRING_PRESS } from "@/lib/ease";
import { cn } from "@/lib/utils";

export interface CollapsibleProps extends Omit<HTMLMotionProps<"div">, "children" | "title"> {
  title: ReactNode;
  children: ReactNode;
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
  disabled?: boolean;
  className?: string;
}

export function Collapsible({
  title,
  children,
  defaultOpen = false,
  open: controlledOpen,
  onOpenChange,
  disabled = false,
  className,
  ...props
}: CollapsibleProps) {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const contentId = useId();
  const shouldReduceMotion = useReducedMotion();

  const isControlled = controlledOpen !== undefined;
  const isOpen = isControlled ? controlledOpen : internalOpen;

  const toggle = () => {
    if (disabled) return;
    const next = !isOpen;
    if (!isControlled) setInternalOpen(next);
    onOpenChange?.(next);
  };

  return (
    <motion.div
      className={cn(
        "rounded-2xl border border-border bg-card overflow-hidden transition-colors",
        disabled && "opacity-50",
        className
      )}
      {...props}
    >
      {/* Header Trigger */}
      <motion.button
        type="button"
        disabled={disabled}
        onClick={toggle}
        whileTap={shouldReduceMotion || disabled ? undefined : { scale: 0.99 }}
        transition={SPRING_PRESS}
        aria-expanded={isOpen}
        aria-controls={contentId}
        className="flex w-full items-center justify-between p-4 text-left font-medium text-foreground hover:bg-muted/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset"
      >
        <div className="flex-1 text-sm tracking-tight">{title}</div>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={shouldReduceMotion ? { duration: 0 } : SPRING_LAYOUT}
          className="ml-2 text-muted-foreground"
        >
          <ChevronDown className="size-4" />
        </motion.span>
      </motion.button>

      {/* Expandable Content Panel */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={contentId}
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: 1,
              height: "auto",
              transition: shouldReduceMotion
                ? { duration: 0 }
                : { height: SPRING_LAYOUT, opacity: { duration: 0.2, ease: EASE_OUT } },
            }}
            exit={{
              opacity: 0,
              height: 0,
              transition: shouldReduceMotion
                ? { duration: 0 }
                : { height: { duration: 0.2 }, opacity: { duration: 0.15 } },
            }}
            className="overflow-hidden"
          >
            <div className="border-t border-border/60 p-4 pt-3 text-xs text-muted-foreground leading-relaxed">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
