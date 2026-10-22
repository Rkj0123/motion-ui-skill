"use client";

import React from "react";
import { LogoMarquee as LogoMarquee } from "@/components/blocks/logo-marquee";

export function LogoMarqueePreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <LogoMarquee />
      </div>
    </div>
  );
}
