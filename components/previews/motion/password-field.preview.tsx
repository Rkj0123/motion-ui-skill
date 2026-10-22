"use client";

import React from "react";
import { PasswordField as PasswordField } from "@/components/motion/password-field";

export function PasswordFieldPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <PasswordField />
      </div>
    </div>
  );
}
