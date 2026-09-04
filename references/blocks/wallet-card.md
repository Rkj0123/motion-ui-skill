---
title: "Wallet Card"
description: "Wallet overview card with an account switcher and search that morph open from their triggers, a cascading balance with a live change pill and privacy toggle, copy-address, and Send / Deposit / Swap / Buy actions."
category: "Blocks"
publishedAt: "2026-07-03"
updatedAt: "2026-07-03"
documentation: "references/blocks/wallet-card.md"
markdown: "references/blocks/wallet-card.md"
license: "MIT"
---

# Wallet Card

> Wallet overview card with an account switcher and search that morph open from their triggers, a cascading balance with a live change pill and privacy toggle, copy-address, and Send / Deposit / Swap / Buy actions.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py wallet-card --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { useState } from "react";
import { WalletCard } from "@/components/motion/wallet-card";
import { Button } from "@/components/motion/button";

const ACCOUNTS = [
  { id: "main", name: "Main Wallet", address: "0x8f3Cb1a29e4D7c6F1B2a3E9d0C4b5A6f7D8e9C0b" },
  { id: "trading", name: "Trading", address: "0x1a2B3c4D5e6F7a8B9c0D1e2F3a4B5c6D7e8F9a0B" },
  { id: "cold", name: "Cold Storage", address: "0x9F8e7D6c5B4a3E2d1C0b9A8f7E6d5C4b3A2e1F0d" },
];

const RECENT_SEARCHES = ["vitalik.eth", "0xA0b8…6EB4", "Uniswap", "Send to Trading"];

export function WalletCardPreview() {
  const [balance, setBalance] = useState(12480.32);

  return (
    <div className="flex w-full flex-col items-center gap-4 p-6">
      <WalletCard
        accounts={ACCOUNTS}
        balance={balance}
        defaultChange={124.5}
        searchRecent={RECENT_SEARCHES}
        hasNotifications
      />
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setBalance((b) => b + (Math.random() > 0.5 ? 1 : -1) * (50 + Math.random() * 400))}
      >
        Simulate balance change
      </Button>
    </div>
  );
}
```

## API Reference

### WalletCard

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `accounts` | `WalletAccount[]` | — | Yes | — |
| `accountId` | `string` | — | No | — |
| `defaultAccountId` | `string` | — | No | — |
| `onAccountChange` | `((id: string) => void)` | — | No | — |
| `balance` | `number` | — | Yes | — |
| `balancePrefix` | `string` | `$` | No | — |
| `defaultChange` | `number` | — | No | Initial balance change shown in the pill before any live change. |
| `defaultBalanceHidden` | `boolean` | `false` | No | Start with the balance hidden behind dots. |
| `onSend` | `(() => void)` | — | No | — |
| `onDeposit` | `(() => void)` | — | No | — |
| `onSwap` | `(() => void)` | — | No | — |
| `onBuy` | `(() => void)` | — | No | — |
| `searchPlaceholder` | `string` | — | No | — |
| `searchRecent` | `string[]` | — | No | Recent searches shown in the expanded search panel. |
| `onSearchChange` | `((value: string) => void)` | — | No | — |
| `onSearchSubmit` | `((value: string) => void)` | — | No | — |
| `hasNotifications` | `boolean` | `false` | No | Show an unread pulse on the notifications bell. |
| `onNotifications` | `(() => void)` | — | No | — |
| `className` | `string` | — | No | — |

## Source

- Registry detail: https://github.com/Rkj0123/motion-ui-skill
- Raw source: https://github.com/Rkj0123/motion-ui-skill
- GitHub: https://github.com/starc007/ui-components
