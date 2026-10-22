"use client";

import React from "react";
import { SignIn as SignIn } from "@/components/blocks/sign-in";

export function SignInPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <SignIn />
      </div>
    </div>
  );
}
