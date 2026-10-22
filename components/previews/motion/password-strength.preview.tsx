"use client";

import React from "react";
import { PasswordStrength as PasswordStrength } from "@/components/motion/password-strength";

export function PasswordStrengthPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <PasswordStrength />
      </div>
    </div>
  );
}
