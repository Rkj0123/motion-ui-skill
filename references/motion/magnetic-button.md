---
title: "Magnetic Button"
description: "A responsive button with subtle proximity-based physics that pulls towards the cursor on hover and snaps back on departure."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/motion/magnetic-button.md"
markdown: "references/motion/magnetic-button.md"
license: "MIT"
---

# Magnetic Button

> A responsive button with subtle proximity-based physics that pulls towards the cursor on hover and snaps back on departure.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py magnetic-button --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { MagneticButton as MagneticButton } from "@/components/motion/magnetic-button";

export function Example() {
  return (
    <div className="p-6">
      <MagneticButton />
    </div>
  );
}
```
