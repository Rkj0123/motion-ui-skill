"use client";

import React from "react";
import { AirportMatrixClock as AirportMatrixClock } from "@/components/craft/airport-matrix-clock";

export function AirportMatrixClockPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <AirportMatrixClock />
      </div>
    </div>
  );
}
