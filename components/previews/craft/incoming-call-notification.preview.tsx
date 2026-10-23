"use client";

import { IncomingCallNotificationBanner } from "@/components/notifications/incoming-call-notification-banner";

export function IncomingCallNotificationBannerDemo() {
  return (
    <div className="flex items-center justify-center p-2 sm:p-6 min-w-0 max-w-full w-full">
      <IncomingCallNotificationBanner className="min-w-0 max-w-full" />
    </div>
  );
}