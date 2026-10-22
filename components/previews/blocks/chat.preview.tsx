"use client";

import React from "react";
import { Chat as Chat } from "@/components/blocks/chat";

export function ChatPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <Chat />
      </div>
    </div>
  );
}
