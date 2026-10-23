"use client";

import { PaymentNotificationBanner } from "@/components/notifications/payment-notification-banner";

export function PaymentNotificationBannerDemo() {
  return (
    <div className="flex items-center justify-center p-2 sm:p-6 min-w-0 max-w-full w-full">
      <PaymentNotificationBanner className="min-w-0 max-w-full" />
    </div>
  );
}