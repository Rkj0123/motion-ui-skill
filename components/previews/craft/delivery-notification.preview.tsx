"use client";

import { DeliveryNotificationBanner } from "@/components/notifications/delivery-notification-banner";

export function DeliveryNotificationBannerDemo() {
  return (
    <div className="flex items-center justify-center p-2 sm:p-6 min-w-0 max-w-full w-full">
      <DeliveryNotificationBanner className="min-w-0 max-w-full" />
    </div>
  );
}