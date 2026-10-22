"use client";

import React from "react";
import { CommentThread as CommentThread } from "@/components/agents/comment-thread";

export function CommentThreadPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <CommentThread />
      </div>
    </div>
  );
}
