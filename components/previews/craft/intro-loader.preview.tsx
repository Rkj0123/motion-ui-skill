"use client";

import React from "react";
import { IntroLoader as IntroLoader } from "@/components/craft/intro-loader";

export function IntroLoaderPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <IntroLoader />
      </div>
    </div>
  );
}
