"use client";

import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type HTMLMotionProps,
} from "motion/react";
import React, { useState } from "react";
import { SPRING_PANEL, SPRING_PRESS } from "@/lib/ease";
import { useDismiss } from "@/lib/hooks/use-dismiss";
import { useHaptic } from "@/lib/hooks/use-haptic";
import { cn } from "@/lib/utils";

export interface DateRange {
  from?: Date;
  to?: Date;
}

export interface DateRangePickerProps extends Omit<HTMLMotionProps<"div">, "onChange"> {
  value?: DateRange;
  onChange?: (range: DateRange) => void;
  className?: string;
}

const PRESETS = [
  { label: "Today", days: 0 },
  { label: "Last 7 Days", days: 7 },
  { label: "Last 30 Days", days: 30 },
  { label: "Last 90 Days", days: 90 },
];

export function DateRangePicker({
  value,
  onChange,
  className,
  ...props
}: DateRangePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [range, setRange] = useState<DateRange>(value || {});
  const [viewDate, setViewDate] = useState<Date>(new Date());
  const shouldReduceMotion = useReducedMotion();
  const triggerHaptic = useHaptic();

  const popoverRef = useDismiss<HTMLDivElement>({
    isOpen,
    onDismiss: () => setIsOpen(false),
  });

  const formatDate = (d?: Date) =>
    d ? d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : "";

  const applyPreset = (days: number) => {
    const to = new Date();
    const from = new Date();
    from.setDate(to.getDate() - days);
    const newRange = { from, to };
    setRange(newRange);
    onChange?.(newRange);
    triggerHaptic("selection");
    setIsOpen(false);
  };

  const handleDayClick = (day: number) => {
    const clicked = new Date(viewDate.getFullYear(), viewDate.getMonth(), day);
    triggerHaptic("selection");

    if (!range.from || (range.from && range.to)) {
      setRange({ from: clicked, to: undefined });
    } else if (range.from && !range.to) {
      if (clicked < range.from) {
        setRange({ from: clicked, to: range.from });
        onChange?.({ from: clicked, to: range.from });
      } else {
        setRange({ from: range.from, to: clicked });
        onChange?.({ from: range.from, to: clicked });
      }
      setIsOpen(false);
    }
  };

  const currentMonthDays = new Date(
    viewDate.getFullYear(),
    viewDate.getMonth() + 1,
    0
  ).getDate();
  const firstDayOfWeek = new Date(
    viewDate.getFullYear(),
    viewDate.getMonth(),
    1
  ).getDay();

  return (
    <div className={cn("relative inline-block", className)} {...props}>
      {/* Trigger Button */}
      <motion.button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
        transition={SPRING_PRESS}
        className="flex items-center gap-2 rounded-xl border border-border bg-card px-3.5 py-2 text-xs font-medium text-foreground shadow-sm hover:bg-muted/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <CalendarIcon className="size-4 text-muted-foreground" />
        <span>
          {range.from ? (
            range.to ? (
              `${formatDate(range.from)} - ${formatDate(range.to)}`
            ) : (
              `${formatDate(range.from)} - Select end`
            )
          ) : (
            "Pick a date range"
          )}
        </span>
      </motion.button>

      {/* Popover Calendar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={popoverRef}
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: 4 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95, transition: { duration: 0.12 } }}
            transition={SPRING_PANEL}
            className="absolute left-0 top-full z-50 mt-2 flex flex-col sm:flex-row gap-3 rounded-2xl border border-border bg-card p-4 shadow-xl backdrop-blur-md"
          >
            {/* Presets Column */}
            <div className="flex flex-col gap-1 border-b sm:border-b-0 sm:border-r border-border/70 pb-3 sm:pb-0 sm:pr-3 min-w-28">
              <span className="text-[11px] font-semibold text-muted-foreground mb-1">
                Presets
              </span>
              {PRESETS.map((preset) => (
                <button
                  key={preset.label}
                  type="button"
                  onClick={() => applyPreset(preset.days)}
                  className="rounded-lg px-2 py-1.5 text-left text-xs font-medium text-foreground hover:bg-muted/70 transition-colors"
                >
                  {preset.label}
                </button>
              ))}
            </div>

            {/* Calendar Grid View */}
            <div className="flex flex-col w-64">
              <div className="flex items-center justify-between pb-2">
                <span className="text-xs font-semibold text-foreground">
                  {viewDate.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                </span>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1))}
                    className="p-1 text-muted-foreground hover:text-foreground rounded"
                  >
                    <ChevronLeft className="size-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1))}
                    className="p-1 text-muted-foreground hover:text-foreground rounded"
                  >
                    <ChevronRight className="size-3.5" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-medium text-muted-foreground py-1">
                {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
                  <div key={d}>{d}</div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-1 text-xs">
                {Array.from({ length: firstDayOfWeek }).map((_, i) => (
                  <div key={`empty-${i}`} />
                ))}
                {Array.from({ length: currentMonthDays }).map((_, i) => {
                  const day = i + 1;
                  const date = new Date(viewDate.getFullYear(), viewDate.getMonth(), day);
                  const isStart = range.from && date.toDateString() === range.from.toDateString();
                  const isEnd = range.to && date.toDateString() === range.to.toDateString();
                  const isInRange = range.from && range.to && date > range.from && date < range.to;

                  return (
                    <button
                      key={day}
                      type="button"
                      onClick={() => handleDayClick(day)}
                      className={cn(
                        "size-8 rounded-lg text-xs font-medium transition-colors flex items-center justify-center",
                        isStart || isEnd
                          ? "bg-primary text-primary-foreground font-semibold"
                          : isInRange
                          ? "bg-primary/15 text-primary rounded-none"
                          : "hover:bg-muted text-foreground"
                      )}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
