"use client";

import React from "react";
import { CarSmokePageTransition as CarSmokePageTransition } from "@/components/craft/car-smoke-page-transition";

export function CarSmokePageTransitionPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <CarSmokePageTransition />
      </div>
    </div>
  );
}
