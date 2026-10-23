"use client";

import { DeployNotificationBanner } from "@/components/notifications/deploy-notification-banner";

export function DeployNotificationBannerDemo() {
  return (
    <div className="flex items-center justify-center p-2 sm:p-6 min-w-0 max-w-full w-full">
      <DeployNotificationBanner className="min-w-0 max-w-full" />
    </div>
  );
}