"use client";

import React from "react";
import Footer from "@/components/blocks/footer";

export function FooterPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <Footer />
      </div>
    </div>
  );
}
