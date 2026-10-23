"use client";

import React from "react";
import { Chat as Chat } from "@/components/blocks/chat";

export function ChatPreview() {
  const [messages, setMessages] = React.useState<import("@/components/blocks/chat").ChatMessageItem[]>([{ id: "welcome", role: "assistant", content: "What would you like to build?" }]);
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <Chat
          messages={messages}
          onSendMessage={content => setMessages(current => [...current, { id: String(current.length), role: "user", content }])}
        />
      </div>
    </div>
  );
}
