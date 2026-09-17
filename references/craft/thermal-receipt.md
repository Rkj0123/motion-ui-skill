---
title: "Thermal Receipt"
description: "Monospace receipt with line items, tax, total, perforated edges, and a QR footer. Reads like paper from a real register."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/thermal-receipt.md"
markdown: "references/craft/thermal-receipt.md"
license: "MIT"
---

# Thermal Receipt

> Monospace receipt with line items, tax, total, perforated edges, and a QR footer. Reads like paper from a real register.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py thermal-receipt --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { ThermalReceiptCard } from "@/components/others/thermal-receipt-card";

export function ThermalReceiptCardDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <ThermalReceiptCard />
    </div>
  );
}
```

## API Reference

### ThermalReceiptCard

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
