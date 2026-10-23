"use client";

import { ThreadsPostCard } from "@/components/socials/threads-post-card";

export function ThreadsPostCardDemo() {
  return (
    <div className="flex items-center justify-center p-2 sm:p-6 min-w-0 max-w-full w-full">
      <ThreadsPostCard className="min-w-0 max-w-full" />
    </div>
  );
}