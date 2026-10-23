"use client";

import { MonthPickerCalendar } from "@/components/calendar/month-picker-calendar";

export function MonthPickerCalendarDemo() {
  return (
    <div className="flex items-center justify-center p-2 sm:p-6 min-w-0 max-w-full w-full">
      <MonthPickerCalendar className="min-w-0 max-w-full" />
    </div>
  );
}