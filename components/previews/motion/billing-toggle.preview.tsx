"use client";

import React from "react";
import { BillingToggle as BillingToggle } from "@/components/motion/billing-toggle";

export function BillingTogglePreview() {
  const [billing, setBilling] = React.useState("monthly");
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <BillingToggle value={billing} onValueChange={setBilling} />
      </div>
    </div>
  );
}
