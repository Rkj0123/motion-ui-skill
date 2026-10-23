"use client";

import { ChatBubbleNotificationBanner } from "@/components/notifications/chat-bubble-notification-banner";

export function ChatBubbleNotificationBannerDemo() {
  return (
    <div className="flex items-center justify-center p-2 sm:p-6 min-w-0 max-w-full w-full">
      <ChatBubbleNotificationBanner className="min-w-0 max-w-full" />
    </div>
  );
}