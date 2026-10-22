"use client";

import React from "react";
import { PaymentStatus as PaymentStatus } from "@/components/craft/payment-status";

export function PaymentStatusPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <PaymentStatus />
      </div>
    </div>
  );
}
