"use client";

import React from "react";
import { TorqueDial as TorqueDial } from "@/components/craft/torque-dial";

export function TorqueDialPreview() {
  const [value, setValue] = React.useState(50);
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <TorqueDial value={value} onChange={setValue} />
      </div>
    </div>
  );
}
