"use client";

import React from "react";
import { Faq as Faq } from "@/components/blocks/faq";

export function FaqPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <Faq />
      </div>
    </div>
  );
}
