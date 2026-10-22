"use client";

import { PaymentNotificationBanner } from "@/components/notifications/payment-notification-banner";

export function PaymentNotificationBannerDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <PaymentNotificationBanner />
    </div>
  );
}