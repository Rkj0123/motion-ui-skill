"use client";

import React from "react";
import { NotificationBell as NotificationBell } from "@/components/craft/notification-bell";

export function NotificationBellPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <NotificationBell />
      </div>
    </div>
  );
}
