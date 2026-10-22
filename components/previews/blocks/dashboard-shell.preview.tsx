"use client";

import React from "react";
import { DashboardShell as DashboardShell } from "@/components/blocks/dashboard-shell";

export function DashboardShellPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <DashboardShell />
      </div>
    </div>
  );
}
