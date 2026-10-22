"use client";

import React from "react";
import { MacOSFolderCards as MacOsFolderCards } from "@/components/motion/mac-os-folder-cards";

export function MacOsFolderCardsPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <MacOsFolderCards />
      </div>
    </div>
  );
}
