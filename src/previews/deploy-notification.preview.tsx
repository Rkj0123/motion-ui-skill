"use client";

import { DeployNotificationBanner } from "@/components/notifications/deploy-notification-banner";

export function DeployNotificationBannerDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <DeployNotificationBanner />
    </div>
  );
}