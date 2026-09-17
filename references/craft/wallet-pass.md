---
title: "Wallet Pass"
description: "Flippable membership pass — gradient front with tier and expiry, QR grid on the back. Tap or hover to flip between sides."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/wallet-pass.md"
markdown: "references/craft/wallet-pass.md"
license: "MIT"
---

# Wallet Pass

> Flippable membership pass — gradient front with tier and expiry, QR grid on the back. Tap or hover to flip between sides.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py wallet-pass --dest ./src
```

## Dependencies

- `clsx`
- `next`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { WalletPassCard } from "@/components/wallet/wallet-pass-card";

export function WalletPassCardDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <WalletPassCard />
    </div>
  );
}
```

## API Reference

### WalletPassCard

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
