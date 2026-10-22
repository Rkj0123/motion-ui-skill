---
title: "Liquid Toggle"
description: "A toggle with a liquid/blob-like transition. The internal shape deforms organically as it travels from off to on — stretching along the travel axis and settling into a natural blob shape rather than simply translating."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/craft/liquid-toggle.md"
markdown: "references/craft/liquid-toggle.md"
license: "MIT"
---

# Liquid Toggle

> A toggle with a liquid/blob-like transition. The internal shape deforms organically as it travels from off to on — stretching along the travel axis and settling into a natural blob shape rather than simply translating.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py liquid-toggle --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { LiquidToggle as LiquidToggle } from "@/components/craft/liquid-toggle";

export function Example() {
  return (
    <div className="p-6">
      <LiquidToggle />
    </div>
  );
}
```
