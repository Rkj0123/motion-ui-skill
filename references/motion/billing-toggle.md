---
title: "Billing toggle"
description: "A monthly and yearly switch with a savings badge and prices that roll to the new amount."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/motion/billing-toggle.md"
markdown: "references/motion/billing-toggle.md"
license: "MIT"
---

# Billing toggle

> A monthly and yearly switch with a savings badge and prices that roll to the new amount.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py billing-toggle --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { BillingToggle as BillingToggle } from "@/components/motion/billing-toggle";

export function Example() {
  return (
    <div className="p-6">
      <BillingToggle />
    </div>
  );
}
```
