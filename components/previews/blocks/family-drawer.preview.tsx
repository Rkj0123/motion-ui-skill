"use client";

import React from "react";
import FamilyDrawer from "@/components/blocks/family-drawer";

export function FamilyDrawerPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <FamilyDrawer />
      </div>
    </div>
  );
}
