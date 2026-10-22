"use client";

import React from "react";
import { SiteHeader as SiteHeader } from "@/components/blocks/site-header";

export function SiteHeaderPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <SiteHeader />
      </div>
    </div>
  );
}
