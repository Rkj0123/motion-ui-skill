"use client";

import React from "react";
import { LoginCentered as LoginCentered } from "@/components/blocks/login-centered";

export function LoginCenteredPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <LoginCentered />
      </div>
    </div>
  );
}
