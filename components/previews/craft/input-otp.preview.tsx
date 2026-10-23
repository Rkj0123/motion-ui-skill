"use client";

import React from "react";
import { InputOTPGroup, InputOTPSlot } from "@/components/craft/input-otp";
import InputOtp from "@/components/craft/input-otp";

export function InputOtpPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <InputOtp
          maxLength={6}
          aria-label="Verification code"
          children={<InputOTPGroup>{Array.from({ length: 6 }, (_, index) => <InputOTPSlot key={index} index={index} />)}</InputOTPGroup>}
        />
      </div>
    </div>
  );
}
