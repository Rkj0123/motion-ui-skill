"use client";

import React from "react";
import Toast from "@/components/motion/toast";

export function ToastPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <Toast />
      </div>
    </div>
  );
}
