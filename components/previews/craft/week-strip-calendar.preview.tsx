"use client";

import { WeekStripCalendar } from "@/components/calendar/week-strip-calendar";

export function WeekStripCalendarDemo() {
  return (
    <div className="flex items-center justify-center p-2 sm:p-6 min-w-0 max-w-full w-full">
      <WeekStripCalendar className="min-w-0 max-w-full" />
    </div>
  );
}