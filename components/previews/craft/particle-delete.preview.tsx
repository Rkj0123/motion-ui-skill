"use client";

import React from "react";
import { ParticleDelete as ParticleDelete } from "@/components/craft/particle-delete";

export function ParticleDeletePreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <ParticleDelete />
      </div>
    </div>
  );
}
