"use client";

import React from "react";
import { SmoothScroll as SmoothScroll } from "@/components/craft/smooth-scroll";

export function SmoothScrollPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <SmoothScroll children={<div className="space-y-24"><h2>Scroll through the preview</h2><p>Motion follows your scroll.</p><p>You reached the end.</p></div>} />
      </div>
    </div>
  );
}
