"use client";

import { DiscordChatCard } from "@/components/socials/discord-chat-card";

export function DiscordChatCardDemo() {
  return (
    <div className="flex items-center justify-center p-2 sm:p-6 min-w-0 max-w-full w-full">
      <DiscordChatCard className="min-w-0 max-w-full" />
    </div>
  );
}