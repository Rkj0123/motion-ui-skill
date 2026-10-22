---
title: "Liquid Ripple Button"
description: "A tactile button whose pointer-origin ripple and subtle wave layer make press feedback feel fluid."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/motion/liquid-ripple-button.md"
markdown: "references/motion/liquid-ripple-button.md"
license: "MIT"
---

# Liquid Ripple Button

> A tactile button whose pointer-origin ripple and subtle wave layer make press feedback feel fluid.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py liquid-ripple-button --dest ./src
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

import { LiquidRippleButton as LiquidRippleButton } from "@/components/motion/liquid-ripple-button";

export function Example() {
  return (
    <div className="p-6">
      <LiquidRippleButton />
    </div>
  );
}
```
