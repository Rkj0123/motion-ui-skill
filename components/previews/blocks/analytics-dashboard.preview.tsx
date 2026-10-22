"use client";

import React from "react";
import { AnalyticsDashboard as AnalyticsDashboard } from "@/components/blocks/analytics-dashboard";

export function AnalyticsDashboardPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <AnalyticsDashboard />
      </div>
    </div>
  );
}
