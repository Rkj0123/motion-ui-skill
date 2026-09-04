"use client";

import {
  AlertCircle,
  Check,
  ChevronDown,
  Clock,
  Loader2,
  type LucideIcon,
} from "lucide-react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type HTMLMotionProps,
} from "motion/react";
import React, { useState, type ReactNode } from "react";
import { EASE_OUT, SPRING_BOUNCE, SPRING_LAYOUT, SPRING_PRESS } from "@/lib/ease";
import { cn } from "@/lib/utils";

export type TimelineItemStatus = "completed" | "current" | "upcoming" | "failed";

export interface TimelineItem {
  id: string;
  title: string;
  description?: string;
  timestamp?: string;
  status: TimelineItemStatus;
  icon?: LucideIcon | ReactNode;
  tags?: string[];
  content?: ReactNode;
}

export interface TimelineProps extends Omit<HTMLMotionProps<"div">, "children"> {
  items: TimelineItem[];
  orientation?: "vertical" | "horizontal";
  collapsible?: boolean;
  className?: string;
}

const STATUS_ICONS: Record<TimelineItemStatus, ReactNode> = {
  completed: <Check className="size-3.5 stroke-[2.5]" />,
  current: <Loader2 className="size-3.5 animate-spin" />,
  upcoming: <Clock className="size-3.5" />,
  failed: <AlertCircle className="size-3.5" />,
};

const STATUS_VARIANTS: Record<
  TimelineItemStatus,
  { circle: string; line: string; badge: string }
> = {
  completed: {
    circle: "bg-emerald-500 text-white border-emerald-500 shadow-sm shadow-emerald-500/20",
    line: "bg-emerald-500",
    badge: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
  },
  current: {
    circle: "bg-primary text-primary-foreground border-primary ring-4 ring-primary/20",
    line: "bg-gradient-to-b from-primary to-border",
    badge: "bg-primary/10 text-primary border-primary/20",
  },
  upcoming: {
    circle: "bg-muted text-muted-foreground border-border",
    line: "bg-border",
    badge: "bg-muted text-muted-foreground border-border",
  },
  failed: {
    circle: "bg-destructive text-destructive-foreground border-destructive shadow-sm shadow-destructive/20",
    line: "bg-destructive/60",
    badge: "bg-destructive/10 text-destructive border-destructive/20",
  },
};

export function Timeline({
  items,
  orientation = "vertical",
  collapsible = true,
  className,
  ...props
}: TimelineProps) {
  const [expandedIds, setExpandedIds] = useState<Set<string>>(
    () => new Set(items.filter((i) => i.status === "current").map((i) => i.id))
  );
  const shouldReduceMotion = useReducedMotion();

  const toggleExpand = (id: string) => {
    if (!collapsible) return;
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div
      role="list"
      aria-label="Process timeline"
      className={cn(
        "relative w-full",
        orientation === "vertical" ? "space-y-6" : "flex items-start gap-4 overflow-x-auto pb-4",
        className
      )}
      {...props}
    >
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        const isExpanded = expandedIds.has(item.id);
        const variant = STATUS_VARIANTS[item.status];

        return (
          <div
            key={item.id}
            role="listitem"
            className={cn(
              "relative flex",
              orientation === "vertical" ? "gap-4" : "flex-col items-center min-w-[200px]"
            )}
          >
            {/* Connecting Track Line */}
            {!isLast && orientation === "vertical" && (
              <div
                aria-hidden="true"
                className={cn(
                  "absolute left-4 top-8 -bottom-6 w-0.5 -translate-x-1/2 transition-colors",
                  variant.line
                )}
              />
            )}

            {/* Status Node Circle */}
            <motion.button
              type="button"
              onClick={() => toggleExpand(item.id)}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.92 }}
              transition={SPRING_PRESS}
              aria-expanded={isExpanded}
              aria-label={`${item.title} - ${item.status}`}
              className={cn(
                "relative z-10 flex size-8 shrink-0 items-center justify-center rounded-full border text-xs font-semibold transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                variant.circle
              )}
            >
              {React.isValidElement(item.icon) ? (
                item.icon
              ) : item.icon ? (
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                React.createElement(item.icon as any, { className: "size-4" })
              ) : (
                STATUS_ICONS[item.status]
              )}
            </motion.button>

            {/* Content Area */}
            <div className="min-w-0 flex-1 pt-0.5">
              <div
                onClick={() => toggleExpand(item.id)}
                className={cn(
                  "flex items-baseline justify-between gap-2",
                  collapsible && "cursor-pointer select-none"
                )}
              >
                <div className="flex flex-wrap items-center gap-2">
                  <h4 className="text-sm font-medium text-foreground tracking-tight">
                    {item.title}
                  </h4>
                  {item.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border/60 bg-muted/50 px-2 py-0.5 text-[10px] text-muted-foreground font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  {item.timestamp && (
                    <time className="text-xs text-muted-foreground tabular-nums font-normal">
                      {item.timestamp}
                    </time>
                  )}
                  {collapsible && (item.description || item.content) && (
                    <motion.span
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={shouldReduceMotion ? { duration: 0 } : SPRING_LAYOUT}
                      className="text-muted-foreground"
                    >
                      <ChevronDown className="size-4" />
                    </motion.span>
                  )}
                </div>
              </div>

              {/* Collapsible Details */}
              <AnimatePresence initial={false}>
                {isExpanded && (item.description || item.content) && (
                  <motion.div
                    key="content"
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
                    <div className="pt-2 text-xs text-muted-foreground leading-relaxed">
                      {item.description && <p>{item.description}</p>}
                      {item.content && <div className="mt-3">{item.content}</div>}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        );
      })}
    </div>
  );
}
