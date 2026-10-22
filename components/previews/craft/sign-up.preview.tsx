"use client";

import React from "react";
import { SignUp as SignUp } from "@/components/craft/sign-up";

export function SignUpPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <SignUp />
      </div>
    </div>
  );
}
