"use client";

import React from "react";
import { CommentThread as CommentThread } from "@/components/agents/comment-thread";

export function CommentThreadPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <CommentThread
          currentUser={{ id: "you", name: "You" }}
          defaultComments={[{ id: "welcome", author: { id: "alex", name: "Alex" }, body: "Try replying to this comment.", createdAt: "Just now" }]}
        />
      </div>
    </div>
  );
}
