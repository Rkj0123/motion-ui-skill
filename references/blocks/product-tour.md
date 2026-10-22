---
title: "Product Tour"
description: "An interactive product walkthrough with spring-animated spotlight cutout, auto-scrolling targets, responsive bottom-sheet docking, and keyboard navigation."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/blocks/product-tour.md"
markdown: "references/blocks/product-tour.md"
license: "MIT"
---

# Product Tour

> An interactive product walkthrough with spring-animated spotlight cutout, auto-scrolling targets, responsive bottom-sheet docking, and keyboard navigation.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py product-tour --dest ./src
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

import { ProductTour as ProductTour } from "@/components/blocks/product-tour";

export function Example() {
  return (
    <div className="p-6">
      <ProductTour />
    </div>
  );
}
```
