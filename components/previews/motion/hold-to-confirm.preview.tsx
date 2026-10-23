"use client";

import React from "react";
import { HoldToConfirm as HoldToConfirm } from "@/components/motion/hold-to-confirm";

export function HoldToConfirmPreview() {
  const [notice, setNotice] = React.useState("");
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <HoldToConfirm label="Hold to confirm" onConfirm={() => setNotice("Confirmed")} />
        <p role="status" className="mt-3 text-sm">{notice}</p>
      </div>
    </div>
  );
}
