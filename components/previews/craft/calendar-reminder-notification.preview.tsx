"use client";

import { CalendarReminderNotificationBanner } from "@/components/notifications/calendar-reminder-notification-banner";

export function CalendarReminderNotificationBannerDemo() {
  return (
    <div className="flex items-center justify-center p-2 sm:p-6 min-w-0 max-w-full w-full">
      <CalendarReminderNotificationBanner className="min-w-0 max-w-full" />
    </div>
  );
}