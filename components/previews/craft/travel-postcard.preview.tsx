"use client";

import { TravelPostcardCard } from "@/components/travel/travel-postcard-card";

export function TravelPostcardCardDemo() {
  return (
    <div className="flex items-center justify-center p-2 sm:p-6 min-w-0 max-w-full w-full">
      <TravelPostcardCard className="min-w-0 max-w-full" />
    </div>
  );
}