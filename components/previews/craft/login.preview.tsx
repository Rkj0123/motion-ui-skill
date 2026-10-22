"use client";

import React from "react";
import { Login as Login } from "@/components/craft/login";

export function LoginPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <Login />
      </div>
    </div>
  );
}
