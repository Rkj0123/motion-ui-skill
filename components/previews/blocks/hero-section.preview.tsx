"use client";

import React from "react";
import { HeroSection as HeroSection } from "@/components/blocks/hero-section";

export function HeroSectionPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <HeroSection />
      </div>
    </div>
  );
}
