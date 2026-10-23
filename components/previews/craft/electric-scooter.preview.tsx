"use client";

import { ElectricScooterWidget } from "@/components/widgets/electric-scooter-widget";

export function ElectricScooterWidgetDemo() {
  return (
    <div className="flex items-center justify-center p-2 sm:p-6 min-w-0 max-w-full w-full">
      <ElectricScooterWidget className="min-w-0 max-w-full" />
    </div>
  );
}