"use client";

import { DailyMotivationCard } from "@/components/text/daily-motivation-card";

export function DailyMotivationCardDemo() {
  return (
    <div className="flex items-center justify-center p-2 sm:p-6 min-w-0 max-w-full w-full">
      <DailyMotivationCard className="min-w-0 max-w-full" />
    </div>
  );
}