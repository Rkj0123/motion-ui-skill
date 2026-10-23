"use client";

import { BookingSlotCalendar } from "@/components/calendar/booking-slot-calendar";

export function BookingSlotCalendarDemo() {
  return (
    <div className="flex items-center justify-center p-2 sm:p-6 min-w-0 max-w-full w-full">
      <BookingSlotCalendar className="min-w-0 max-w-full" />
    </div>
  );
}