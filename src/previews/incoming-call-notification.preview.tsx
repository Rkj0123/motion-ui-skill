"use client";

import { IncomingCallNotificationBanner } from "@/components/notifications/incoming-call-notification-banner";

export function IncomingCallNotificationBannerDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <IncomingCallNotificationBanner />
    </div>
  );
}