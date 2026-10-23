"use client";

import { AppleNotificationBanner } from "@/components/notifications/apple-notification-banner";

export function AppleNotificationBannerDemo() {
  return (
    <div className="flex items-center justify-center p-2 sm:p-6 min-w-0 max-w-full w-full">
      <AppleNotificationBanner className="min-w-0 max-w-full" />
    </div>
  );
}