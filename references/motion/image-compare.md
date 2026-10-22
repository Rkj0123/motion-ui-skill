---
title: "Image compare"
description: "Drag a divider across two images to see what changed."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/motion/image-compare.md"
markdown: "references/motion/image-compare.md"
license: "MIT"
---

# Image compare

> Drag a divider across two images to see what changed.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py image-compare --dest ./src
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

import { ImageCompare as ImageCompare } from "@/components/motion/image-compare";

export function Example() {
  return (
    <div className="p-6">
      <ImageCompare />
    </div>
  );
}
```
