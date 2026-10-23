"use client";

import { FlightBoardingCard } from "@/components/travel/flight-boarding-card";

export function FlightBoardingCardDemo() {
  return (
    <div className="flex items-center justify-center p-2 sm:p-6 min-w-0 max-w-full w-full">
      <FlightBoardingCard className="min-w-0 max-w-full" />
    </div>
  );
}