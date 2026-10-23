"use client";

import { DateRangePickerCard } from "@/components/calendar/date-range-picker-card";

export function DateRangePickerCardDemo() {
  return (
    <div className="flex items-center justify-center p-2 sm:p-6 min-w-0 max-w-full w-full">
      <DateRangePickerCard className="min-w-0 max-w-full" />
    </div>
  );
}