"use client";

import React from "react";
import { RecoveryLedger as RecoveryLedger } from "@/components/craft/recovery-ledger";

export function RecoveryLedgerPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <RecoveryLedger entries={[{ id: "saved", timestamp: "2026-10-01T12:00:00Z", action: "Saved", description: "Updated the component preview.", author: "Alex", restorable: true }]} />
      </div>
    </div>
  );
}
