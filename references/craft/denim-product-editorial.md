---
title: "Denim Product Editorial"
description: "Fashion editorial with two square photos, rotated callout labels, and uppercase product description. Lookbook energy for apparel and accessories."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/denim-product-editorial.md"
markdown: "references/craft/denim-product-editorial.md"
license: "MIT"
---

# Denim Product Editorial

> Fashion editorial with two square photos, rotated callout labels, and uppercase product description. Lookbook energy for apparel and accessories.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py denim-product-editorial --dest ./src
```

## Dependencies

- `clsx`
- `next`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { DenimProductEditorialCard } from "@/components/text/denim-product-editorial-card";

export function DenimProductEditorialCardDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <DenimProductEditorialCard />
    </div>
  );
}
```

## API Reference

### DenimProductEditorialCard

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
