"use client";

import React from "react";
import { Avatar as Avatar } from "@/components/motion/avatar";

export function AvatarPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <Avatar name="Alex Morgan" />
      </div>
    </div>
  );
}
