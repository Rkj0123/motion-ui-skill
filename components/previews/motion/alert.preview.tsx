"use client";

import React from "react";
import { Alert as Alert } from "@/components/motion/alert";

export function AlertPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <Alert title="Changes saved" children="Your component settings are up to date." />
      </div>
    </div>
  );
}
