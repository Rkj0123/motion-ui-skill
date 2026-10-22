---
title: "Neon Edge Button"
description: "A button with a restrained light source travelling around the border while the label remains primary."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/motion/neon-edge-button.md"
markdown: "references/motion/neon-edge-button.md"
license: "MIT"
---

# Neon Edge Button

> A button with a restrained light source travelling around the border while the label remains primary.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py neon-edge-button --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { NeonEdgeButton as NeonEdgeButton } from "@/components/motion/neon-edge-button";

export function Example() {
  return (
    <div className="p-6">
      <NeonEdgeButton />
    </div>
  );
}
```
