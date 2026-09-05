"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";
import React, { useEffect, useId, useRef, useState, type ReactNode } from "react";
import { SPRING_FLOAT } from "@/lib/ease";
import { cn } from "@/lib/utils";

export interface HoverCardProps {
  children: ReactNode;
  content: ReactNode;
  openDelay?: number;
  closeDelay?: number;
  side?: "top" | "bottom" | "left" | "right";
  align?: "start" | "center" | "end";
  className?: string;
}

export function HoverCard({
  children,
  content,
  openDelay = 200,
  closeDelay = 250,
  side = "bottom",
  align = "center",
  className,
}: HoverCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const openTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const tooltipId = useId();

  useEffect(() => () => {
    if (openTimer.current) clearTimeout(openTimer.current);
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  const handleMouseEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    if (openTimer.current) clearTimeout(openTimer.current);
    openTimer.current = setTimeout(() => setIsOpen(true), openDelay);
  };

  const handleMouseLeave = () => {
    if (openTimer.current) clearTimeout(openTimer.current);
    closeTimer.current = setTimeout(() => setIsOpen(false), closeDelay);
  };

  const handleFocus = () => setIsOpen(true);
  const handleBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
      setIsOpen(false);
    }
  };

  // Positioning classes
  const sideClasses = {
    top: "bottom-full mb-2",
    bottom: "top-full mt-2",
    left: "right-full mr-2 top-1/2 -translate-y-1/2",
    right: "left-full ml-2 top-1/2 -translate-y-1/2",
  };

  const alignClasses = {
    start: "left-0",
    center: side === "left" || side === "right" ? "" : "left-1/2 -translate-x-1/2",
    end: "right-0",
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      {/* Trigger */}
      <div
        tabIndex={0}
        aria-describedby={isOpen ? tooltipId : undefined}
        className="inline-block cursor-pointer focus:outline-none"
      >
        {children}
      </div>

      {/* Floating Card Popover */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={tooltipId}
            role="tooltip"
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: side === "bottom" ? -4 : 4 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96, transition: { duration: 0.12 } }}
            transition={SPRING_FLOAT}
            className={cn(
              "absolute z-50 w-72 rounded-2xl border border-border bg-popover p-4 text-popover-foreground shadow-xl backdrop-blur-md focus:outline-none",
              sideClasses[side],
              alignClasses[align],
              className
            )}
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
