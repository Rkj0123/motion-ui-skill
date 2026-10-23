"use client";

import { MinimalAgendaWidget } from "@/components/widgets/minimal-agenda-widget";

export function MinimalAgendaWidgetDemo() {
  return (
    <div className="flex items-center justify-center p-2 sm:p-6 min-w-0 max-w-full w-full">
      <MinimalAgendaWidget className="min-w-0 max-w-full" />
    </div>
  );
}