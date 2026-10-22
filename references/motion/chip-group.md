---
title: "Chip group"
description: "Filter by a few facets with chips that morph as you pick them."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/motion/chip-group.md"
markdown: "references/motion/chip-group.md"
license: "MIT"
---

# Chip group

> Filter by a few facets with chips that morph as you pick them.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py chip-group --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { ChipGroup as ChipGroup } from "@/components/motion/chip-group";

export function Example() {
  return (
    <div className="p-6">
      <ChipGroup />
    </div>
  );
}
```
