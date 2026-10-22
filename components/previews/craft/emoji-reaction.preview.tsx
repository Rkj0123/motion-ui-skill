"use client";

import React from "react";
import { EmojiReaction as EmojiReaction } from "@/components/craft/emoji-reaction";

export function EmojiReactionPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <EmojiReaction />
      </div>
    </div>
  );
}
