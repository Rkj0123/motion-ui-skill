---
title: "Add to Cart"
description: "Raised 3D add-to-cart key that sinks in while adding, with gentle label crossfades, then pops back up in a solid emerald added state before resetting."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/add-to-cart-button.md"
markdown: "references/craft/add-to-cart-button.md"
license: "MIT"
---

# Add to Cart

> Raised 3D add-to-cart key that sinks in while adding, with gentle label crossfades, then pops back up in a solid emerald added state before resetting.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py add-to-cart-button --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { AddToCartButton } from "@/components/buttons/add-to-cart-button";

export function AddToCartButtonDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <AddToCartButton />
    </div>
  );
}
```

## API Reference

### AddToCartButton

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
