---
title: "Peek Card"
description: "An origin-anchored contextual preview popover that emerges directly from target triggers on hover or tap with smart collision edge detection and rich metadata summaries."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/motion/peek-card.md"
markdown: "references/motion/peek-card.md"
license: "MIT"
---

# Peek Card

> An origin-anchored contextual preview popover that emerges directly from target triggers on hover or tap with smart collision edge detection and rich metadata summaries.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py peek-card --dest ./src
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

import { PeekCard as PeekCard } from "@/components/motion/peek-card";

export function Example() {
  return (
    <div className="p-6">
      <PeekCard />
    </div>
  );
}
```
