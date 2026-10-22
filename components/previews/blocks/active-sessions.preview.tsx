"use client";

import React from "react";
import { ActiveSessions as ActiveSessions } from "@/components/blocks/active-sessions";

export function ActiveSessionsPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <ActiveSessions />
      </div>
    </div>
  );
}
