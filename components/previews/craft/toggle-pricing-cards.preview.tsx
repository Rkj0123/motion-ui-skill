"use client";

import { TogglePricingCards } from "@/components/pricing/toggle-pricing-cards";

export function TogglePricingCardsDemo() {
  return (
    <div className="flex items-center justify-center p-2 sm:p-6 min-w-0 max-w-full w-full">
      <TogglePricingCards className="min-w-0 max-w-full" />
    </div>
  );
}