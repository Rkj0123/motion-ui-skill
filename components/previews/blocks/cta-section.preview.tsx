"use client";

import React from "react";
import { CtaSection as CtaSection } from "@/components/blocks/cta-section";

export function CtaSectionPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <CtaSection />
      </div>
    </div>
  );
}
