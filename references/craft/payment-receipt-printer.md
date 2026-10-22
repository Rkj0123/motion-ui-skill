---
title: "Payment Receipt Printer"
description: "An animated payment and order receipt printer component for React featuring realistic thermal paper extrusion, chassis micro-vibration, customizable receipt itemization, and replay controls."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/craft/payment-receipt-printer.md"
markdown: "references/craft/payment-receipt-printer.md"
license: "MIT"
---

# Payment Receipt Printer

> An animated payment and order receipt printer component for React featuring realistic thermal paper extrusion, chassis micro-vibration, customizable receipt itemization, and replay controls.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py payment-receipt-printer --dest ./src
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

import { PaymentReceiptPrinter as PaymentReceiptPrinter } from "@/components/craft/payment-receipt-printer";

export function Example() {
  return (
    <div className="p-6">
      <PaymentReceiptPrinter />
    </div>
  );
}
```
