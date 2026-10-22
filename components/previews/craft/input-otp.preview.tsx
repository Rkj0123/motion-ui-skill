"use client";

import React from "react";
import InputOtp from "@/components/craft/input-otp";

export function InputOtpPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <InputOtp />
      </div>
    </div>
  );
}
