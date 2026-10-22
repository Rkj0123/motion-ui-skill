"use client";

import React from "react";
import { TorqueDial as TorqueDial } from "@/components/craft/torque-dial";

export function TorqueDialPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <TorqueDial />
      </div>
    </div>
  );
}
