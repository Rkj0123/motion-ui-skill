---
title: "Money Card"
description: "An interactive financial wallet card featuring animated live balance updates, quick-send contact shortcuts, recent transaction history, and responsive modal sheets for sending, receiving, and viewing activity."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/motion/money-card.md"
markdown: "references/motion/money-card.md"
license: "MIT"
---

# Money Card

> An interactive financial wallet card featuring animated live balance updates, quick-send contact shortcuts, recent transaction history, and responsive modal sheets for sending, receiving, and viewing activity.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py money-card --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `motion`
- `react`
- `react-dom`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { MoneyCard as MoneyCard } from "@/components/motion/money-card";

export function Example() {
  return (
    <div className="p-6">
      <MoneyCard />
    </div>
  );
}
```
