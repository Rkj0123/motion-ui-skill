"use client";

import React from "react";
import { NotificationCenter as NotificationCenter } from "@/components/blocks/notification-center";

export function NotificationCenterPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <NotificationCenter notifications={[{ id: "ready", title: "Your preview is ready", description: "Review the latest component changes.", time: "Just now", tone: "success" }]} />
      </div>
    </div>
  );
}
