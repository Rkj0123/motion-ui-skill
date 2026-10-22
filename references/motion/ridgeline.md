---
title: "Ridgeline"
description: "Overlapping distributions, one ridge per group: hover to lift a ridge and read its quartiles, switch datasets and every curve morphs."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/motion/ridgeline.md"
markdown: "references/motion/ridgeline.md"
license: "MIT"
---

# Ridgeline

> Overlapping distributions, one ridge per group: hover to lift a ridge and read its quartiles, switch datasets and every curve morphs.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py ridgeline --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { Ridgeline as Ridgeline } from "@/components/motion/ridgeline";

export function Example() {
  return (
    <div className="p-6">
      <Ridgeline />
    </div>
  );
}
```
