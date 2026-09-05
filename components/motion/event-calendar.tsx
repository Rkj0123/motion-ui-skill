"use client";

import {
  ChevronLeft,
  ChevronRight,
  Clock,
  MapPin,
  Plus,
} from "lucide-react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type HTMLMotionProps,
} from "motion/react";
import React, { useState } from "react";
import { EASE_OUT, SPRING_LAYOUT, SPRING_PRESS } from "@/lib/ease";
import { useHaptic } from "@/lib/hooks/use-haptic";
import { cn } from "@/lib/utils";

export interface CalendarEvent {
  id: string;
  title: string;
  date: string; // YYYY-MM-DD
  time?: string;
  color?: "blue" | "emerald" | "amber" | "purple" | "rose";
}

export interface EventCalendarProps extends Omit<HTMLMotionProps<"div">, "children"> {
  events: CalendarEvent[];
  initialDate?: Date;
  onEventClick?: (event: CalendarEvent) => void;
  onDateClick?: (date: Date) => void;
  className?: string;
}

const COLOR_CLASSES = {
  blue: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20 hover:bg-blue-500/20",
  emerald: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20 hover:bg-emerald-500/20",
  amber: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20 hover:bg-amber-500/20",
  purple: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20 hover:bg-purple-500/20",
  rose: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20 hover:bg-rose-500/20",
};

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const DAYS_OF_WEEK = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export function EventCalendar({
  events,
  initialDate = new Date(),
  onEventClick,
  onDateClick,
  className,
  ...props
}: EventCalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(initialDate.getMonth());
  const [currentYear, setCurrentYear] = useState(initialDate.getFullYear());
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const shouldReduceMotion = useReducedMotion();
  const triggerHaptic = useHaptic();

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfWeek = new Date(currentYear, currentMonth, 1).getDay();

  const prevMonth = () => {
    setDirection("prev");
    triggerHaptic("selection");
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const nextMonth = () => {
    setDirection("next");
    triggerHaptic("selection");
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const padZero = (n: number) => (n < 10 ? `0${n}` : `${n}`);

  return (
    <motion.div
      className={cn(
        "flex w-full flex-col rounded-2xl border border-border bg-card p-4 shadow-sm",
        className
      )}
      {...props}
    >
      {/* Calendar Navigation Header */}
      <div className="flex items-center justify-between pb-4">
        <h3 className="text-base font-semibold text-foreground tracking-tight">
          {MONTH_NAMES[currentMonth]} {currentYear}
        </h3>

        <div className="flex items-center gap-1.5">
          <motion.button
            type="button"
            onClick={prevMonth}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.9 }}
            transition={SPRING_PRESS}
            aria-label="Previous month"
            className="flex size-8 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
          >
            <ChevronLeft className="size-4" />
          </motion.button>
          <motion.button
            type="button"
            onClick={nextMonth}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.9 }}
            transition={SPRING_PRESS}
            aria-label="Next month"
            className="flex size-8 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
          >
            <ChevronRight className="size-4" />
          </motion.button>
        </div>
      </div>

      {/* Weekday Labels Header */}
      <div className="grid grid-cols-7 gap-1 pb-2 text-center text-[11px] font-semibold text-muted-foreground">
        {DAYS_OF_WEEK.map((d) => (
          <div key={d} className="py-1">
            {d}
          </div>
        ))}
      </div>

      {/* Days Grid Container */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={`${currentYear}-${currentMonth}`}
          initial={
            shouldReduceMotion
              ? { opacity: 0 }
              : { opacity: 0, x: direction === "next" ? 16 : -16 }
          }
          animate={{ opacity: 1, x: 0 }}
          exit={
            shouldReduceMotion
              ? { opacity: 0 }
              : { opacity: 0, x: direction === "next" ? -16 : 16, transition: { duration: 0.15 } }
          }
          transition={{ duration: 0.2, ease: EASE_OUT }}
          className="grid grid-cols-7 gap-1"
        >
          {/* Empty prefix slots */}
          {Array.from({ length: firstDayOfWeek }).map((_, i) => (
            <div key={`empty-${i}`} className="min-h-20 rounded-xl bg-muted/10 p-1.5" />
          ))}

          {/* Month Day Cells */}
          {Array.from({ length: daysInMonth }).map((_, i) => {
            const dayNum = i + 1;
            const dateString = `${currentYear}-${padZero(currentMonth + 1)}-${padZero(dayNum)}`;
            const dayEvents = events.filter((e) => e.date === dateString);

            return (
              <div
                key={dateString}
                role="group"
                aria-label={`${MONTH_NAMES[currentMonth]} ${dayNum}, ${currentYear}`}
                className="group relative flex min-h-20 flex-col rounded-xl border border-border/50 bg-background/50 p-1.5 transition-colors hover:border-border hover:bg-background"
              >
                <button
                  type="button"
                  onClick={() => onDateClick?.(new Date(currentYear, currentMonth, dayNum))}
                  aria-label={`Select ${MONTH_NAMES[currentMonth]} ${dayNum}, ${currentYear}`}
                  className="flex w-full items-center justify-between rounded-md text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <span className="text-xs font-medium text-foreground tabular-nums">
                    {dayNum}
                  </span>
                  {dayEvents.length > 0 && (
                    <span className="size-1.5 rounded-full bg-primary" />
                  )}
                </button>

                {/* Event Chips */}
                <div className="mt-1 flex flex-col gap-1 overflow-hidden">
                  {dayEvents.slice(0, 2).map((ev) => (
                    <motion.button
                      key={ev.id}
                      type="button"
                      aria-label={`${ev.title}${ev.time ? ` at ${ev.time}` : ""}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        onEventClick?.(ev);
                      }}
                      whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
                      className={cn(
                        "w-full text-left truncate rounded-md border px-1.5 py-0.5 text-[10px] font-medium leading-tight transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                        COLOR_CLASSES[ev.color || "blue"]
                      )}
                    >
                      {ev.time && <span className="font-semibold mr-1">{ev.time}</span>}
                      <span>{ev.title}</span>
                    </motion.button>
                  ))}
                  {dayEvents.length > 2 && (
                    <span className="text-[9px] font-semibold text-muted-foreground pl-1">
                      +{dayEvents.length - 2} more
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
