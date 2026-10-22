---
title: "Payment Status"
description: "A calm, Apple-grade payment confirmation card with animated SVG path checkmark drawing, staged verification lifecycle transitions, receipt inspection, and failure recovery."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/craft/payment-status.md"
markdown: "references/craft/payment-status.md"
license: "MIT"
---

# Payment Status

> A calm, Apple-grade payment confirmation card with animated SVG path checkmark drawing, staged verification lifecycle transitions, receipt inspection, and failure recovery.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py payment-status --dest ./src
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

import { PaymentStatus as PaymentStatus } from "@/components/craft/payment-status";

export function Example() {
  return (
    <div className="p-6">
      <PaymentStatus />
    </div>
  );
}
```
