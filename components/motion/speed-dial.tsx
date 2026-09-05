"use client";

import { Plus } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type HTMLMotionProps,
} from "motion/react";
import React, { useState } from "react";
import { SPRING_BOUNCE, SPRING_PRESS } from "@/lib/ease";
import { useHaptic } from "@/lib/hooks/use-haptic";
import { cn } from "@/lib/utils";

export interface SpeedDialAction {
  id: string;
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  color?: string;
}

export interface SpeedDialProps extends HTMLMotionProps<"div"> {
  actions: SpeedDialAction[];
  direction?: "up" | "down" | "left" | "right";
  icon?: React.ReactNode;
  className?: string;
}

export function SpeedDial({
  actions,
  direction = "up",
  icon,
  className,
  ...props
}: SpeedDialProps) {
  const [isOpen, setIsOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const triggerHaptic = useHaptic();

  const toggle = () => {
    triggerHaptic(isOpen ? "light" : "medium");
    setIsOpen(!isOpen);
  };

  const getOffsetStyle = (index: number) => {
    const spacing = 52;
    const distance = (index + 1) * spacing;
    switch (direction) {
      case "up":
        return { y: -distance, x: 0 };
      case "down":
        return { y: distance, x: 0 };
      case "left":
        return { x: -distance, y: 0 };
      case "right":
        return { x: distance, y: 0 };
    }
  };

  return (
    <motion.div className={cn("relative inline-flex items-center justify-center", className)} {...props}>
      {/* Actions Stack */}
      <AnimatePresence>
        {isOpen && (
          <>
            {actions.map((action, index) => {
              const offset = getOffsetStyle(index);
              return (
                <motion.div
                  key={action.id}
                  initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.4, x: 0, y: 0 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    x: offset.x,
                    y: offset.y,
                    transition: {
                      delay: index * 0.04,
                      ...SPRING_BOUNCE,
                    },
                  }}
                  exit={
                    shouldReduceMotion
                      ? { opacity: 0 }
                      : {
                          opacity: 0,
                          scale: 0.5,
                          x: 0,
                          y: 0,
                          transition: { duration: 0.15, delay: (actions.length - 1 - index) * 0.02 },
                        }
                  }
                  className="absolute z-40 flex items-center gap-2 pointer-events-auto"
                >
                  <motion.button
                    type="button"
                    onClick={() => {
                      triggerHaptic("selection");
                      action.onClick();
                      setIsOpen(false);
                    }}
                    whileTap={shouldReduceMotion ? undefined : { scale: 0.9 }}
                    transition={SPRING_PRESS}
                    aria-label={action.label}
                    className={cn(
                      "size-10 rounded-full border border-border bg-card text-foreground shadow-lg flex items-center justify-center hover:bg-muted/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                      action.color
                    )}
                  >
                    {action.icon}
                  </motion.button>
                  {direction === "up" || direction === "down" ? (
                    <span className="rounded-md bg-foreground/90 px-2 py-0.5 text-[11px] font-medium text-background shadow-md whitespace-nowrap pointer-events-none">
                      {action.label}
                    </span>
                  ) : null}
                </motion.div>
              );
            })}
          </>
        )}
      </AnimatePresence>

      {/* Main Trigger FAB */}
      <motion.button
        type="button"
        onClick={toggle}
        whileTap={shouldReduceMotion ? undefined : { scale: 0.92 }}
        transition={SPRING_PRESS}
        aria-expanded={isOpen}
        aria-label="Toggle speed dial"
        className="relative z-50 size-[3.25rem] rounded-full bg-primary text-primary-foreground shadow-xl flex items-center justify-center hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        <motion.div
          animate={shouldReduceMotion ? { rotate: 0 } : { rotate: isOpen ? 45 : 0 }}
          transition={shouldReduceMotion ? { duration: 0 } : SPRING_BOUNCE}
        >
          {icon || <Plus className="size-6" />}
        </motion.div>
      </motion.button>
    </motion.div>
  );
}
