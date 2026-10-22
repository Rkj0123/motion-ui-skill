"use client";

import React from "react";
import { ActivityFeed as ActivityFeed } from "@/components/blocks/activity-feed";

export function ActivityFeedPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <ActivityFeed />
      </div>
    </div>
  );
}
