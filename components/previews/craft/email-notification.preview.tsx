"use client";

import { EmailNotificationBanner } from "@/components/notifications/email-notification-banner";

export function EmailNotificationBannerDemo() {
  return (
    <div className="flex items-center justify-center p-2 sm:p-6 min-w-0 max-w-full w-full">
      <EmailNotificationBanner className="min-w-0 max-w-full" />
    </div>
  );
}