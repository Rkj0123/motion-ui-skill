"use client";

import { ToastNotificationBanner } from "@/components/notifications/toast-notification-banner";

export function ToastNotificationBannerDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <ToastNotificationBanner />
    </div>
  );
}