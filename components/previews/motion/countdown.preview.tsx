"use client";

import React from "react";
import { Countdown as Countdown } from "@/components/motion/countdown";

export function CountdownPreview() {
  const [target] = React.useState(() => Date.now() + 24 * 60 * 60 * 1000);
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <Countdown target={target} />
      </div>
    </div>
  );
}
