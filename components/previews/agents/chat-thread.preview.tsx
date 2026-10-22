"use client";

import React from "react";
import { ChatThread as ChatThread } from "@/components/agents/chat-thread";

export function ChatThreadPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <ChatThread />
      </div>
    </div>
  );
}
