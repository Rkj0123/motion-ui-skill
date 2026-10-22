---
title: "Morphing Mega Menu"
description: "A Stripe-inspired mega menu with a single continuous morphing panel that smoothly adapts its size, position, and arrow to any trigger."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/motion/morphing-mega-menu.md"
markdown: "references/motion/morphing-mega-menu.md"
license: "MIT"
---

# Morphing Mega Menu

> A Stripe-inspired mega menu with a single continuous morphing panel that smoothly adapts its size, position, and arrow to any trigger.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py morphing-mega-menu --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { MorphingMegaMenu as MorphingMegaMenu } from "@/components/motion/morphing-mega-menu";

export function Example() {
  return (
    <div className="p-6">
      <MorphingMegaMenu />
    </div>
  );
}
```
