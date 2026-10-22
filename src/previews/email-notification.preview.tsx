"use client";

import { EmailNotificationBanner } from "@/components/notifications/email-notification-banner";

export function EmailNotificationBannerDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <EmailNotificationBanner />
    </div>
  );
}