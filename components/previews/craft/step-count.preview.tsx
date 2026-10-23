"use client";

import { StepCountWidget } from "@/components/widgets/step-count-widget";

export function StepCountWidgetDemo() {
  return (
    <div className="flex items-center justify-center p-2 sm:p-6 min-w-0 max-w-full w-full">
      <StepCountWidget className="min-w-0 max-w-full" />
    </div>
  );
}