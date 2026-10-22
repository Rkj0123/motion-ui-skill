"use client";

import { SuccessCheck } from "@/components/motion/success-check";
import { useState } from "react";

export function SuccessCheckExample() {
  const [confirmed, setConfirmed] = useState(false);

  return (
    <div className="flex flex-col items-center gap-4 p-8 bg-card rounded-2xl border border-border">
      <SuccessCheck trigger={confirmed} size="lg" />

      <button
        type="button"
        onClick={() => setConfirmed(!confirmed)}
        className="px-4 py-2 text-xs font-semibold rounded-xl bg-primary text-primary-foreground hover:opacity-90"
      >
        {confirmed ? "Reset" : "Submit Order"}
      </button>
    </div>
  );
}