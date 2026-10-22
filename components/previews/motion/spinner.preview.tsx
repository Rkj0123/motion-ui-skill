"use client";

import React from "react";
import Spinner from "@/components/motion/spinner";

export function SpinnerPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <Spinner />
      </div>
    </div>
  );
}
