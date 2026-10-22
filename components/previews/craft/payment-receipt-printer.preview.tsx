"use client";

import React from "react";
import { PaymentReceiptPrinter as PaymentReceiptPrinter } from "@/components/craft/payment-receipt-printer";

export function PaymentReceiptPrinterPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <PaymentReceiptPrinter />
      </div>
    </div>
  );
}
