---
title: "Retail Price Tag"
description: "Hanging store tag with discount badge, sale price, SKU, and barcode stripes. E-commerce editorial and product drops."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/retail-price-tag.md"
markdown: "references/craft/retail-price-tag.md"
license: "MIT"
---

# Retail Price Tag

> Hanging store tag with discount badge, sale price, SKU, and barcode stripes. E-commerce editorial and product drops.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py retail-price-tag --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { RetailPriceTagCard } from "@/components/pricing/retail-price-tag-card";

export function RetailPriceTagCardDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <RetailPriceTagCard />
    </div>
  );
}
```

## API Reference

### RetailPriceTagCard

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
