---
title: "Morphing Button"
description: "A layout-stable interactive action button that smoothly transitions between Idle, Loading, Success, and Error states without jarring jumps or dimension shifts."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/motion/morphing-button.md"
markdown: "references/motion/morphing-button.md"
license: "MIT"
---

# Morphing Button

> A layout-stable interactive action button that smoothly transitions between Idle, Loading, Success, and Error states without jarring jumps or dimension shifts.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py morphing-button --dest ./src
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

import { MorphingButton as MorphingButton } from "@/components/motion/morphing-button";

export function Example() {
  return (
    <div className="p-6">
      <MorphingButton />
    </div>
  );
}
```
