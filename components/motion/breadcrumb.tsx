"use client";

import { ChevronRight, MoreHorizontal } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type HTMLMotionProps,
} from "motion/react";
import React, { useState } from "react";
import { SPRING_PRESS } from "@/lib/ease";
import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
  id: string;
  label: string;
  href?: string;
  onClick?: () => void;
}

export interface BreadcrumbProps extends HTMLMotionProps<"nav"> {
  items: BreadcrumbItem[];
  maxItems?: number;
  separator?: React.ReactNode;
  className?: string;
}

export function Breadcrumb({
  items,
  maxItems = 4,
  separator = <ChevronRight className="size-3.5 text-muted-foreground/60" />,
  className,
  ...props
}: BreadcrumbProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  let displayedItems: BreadcrumbItem[];
  let collapsedMiddle: BreadcrumbItem[] = [];

  if (!isExpanded && items.length > maxItems) {
    // Keep first 1 and last 2 items
    displayedItems = [items[0], ...items.slice(-2)];
    collapsedMiddle = items.slice(1, -2);
  } else {
    displayedItems = items;
  }

  return (
    <nav
      aria-label="Breadcrumb"
      className={cn("flex items-center text-xs font-medium", className)}
      {...props}
    >
      <ol className="flex flex-wrap items-center gap-1.5">
        {displayedItems.map((item, idx) => {
          const isLast = idx === displayedItems.length - 1;
          const isEllipsis = !isExpanded && collapsedMiddle.length > 0 && idx === 1;

          return (
            <React.Fragment key={item.id}>
              {/* Ellipsis Expander */}
              {isEllipsis && (
                <>
                  <li className="flex items-center">
                    <motion.button
                      type="button"
                      whileTap={shouldReduceMotion ? undefined : { scale: 0.9 }}
                      transition={SPRING_PRESS}
                      onClick={() => setIsExpanded(true)}
                      aria-label="Show collapsed breadcrumb steps"
                      className="flex size-6 items-center justify-center rounded-md text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                    >
                      <MoreHorizontal className="size-3.5" />
                    </motion.button>
                  </li>
                  <li aria-hidden="true" className="select-none">
                    {separator}
                  </li>
                </>
              )}

              {/* Breadcrumb Node */}
              <li className="flex items-center">
                {isLast ? (
                  <span
                    aria-current="page"
                    className="font-semibold text-foreground tracking-tight"
                  >
                    {item.label}
                  </span>
                ) : item.href ? (
                  <a
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors underline-offset-4 hover:underline"
                  >
                    {item.label}
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={item.onClick}
                    className="text-muted-foreground hover:text-foreground transition-colors underline-offset-4 hover:underline"
                  >
                    {item.label}
                  </button>
                )}
              </li>

              {/* Separator */}
              {!isLast && (
                <li aria-hidden="true" className="select-none">
                  {separator}
                </li>
              )}
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
