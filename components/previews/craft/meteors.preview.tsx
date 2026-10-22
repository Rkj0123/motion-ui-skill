"use client";

import React from "react";
import { Meteors as Meteors } from "@/components/craft/meteors";

export function MeteorsPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <Meteors />
      </div>
    </div>
  );
}
