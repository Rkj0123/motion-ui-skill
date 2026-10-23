"use client";

import { WalletPassCard } from "@/components/wallet/wallet-pass-card";

export function WalletPassCardDemo() {
  return (
    <div className="flex items-center justify-center p-2 sm:p-6 min-w-0 max-w-full w-full">
      <WalletPassCard className="min-w-0 max-w-full" />
    </div>
  );
}