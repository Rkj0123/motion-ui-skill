"use client";

import React from "react";
import { EvilEye as EvilEye } from "@/components/craft/evil-eye";

export function EvilEyePreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <EvilEye />
      </div>
    </div>
  );
}
