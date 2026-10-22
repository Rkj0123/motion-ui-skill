"use client";

import React from "react";
import { Dialog as Dialog } from "@/components/motion/dialog";

export function DialogPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <Dialog />
      </div>
    </div>
  );
}
