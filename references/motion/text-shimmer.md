---
title: "Text shimmer"
description: "Show ongoing work with a calm light across the words."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/motion/text-shimmer.md"
markdown: "references/motion/text-shimmer.md"
license: "MIT"
---

# Text shimmer

> Show ongoing work with a calm light across the words.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py text-shimmer --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { TextShimmer as TextShimmer } from "@/components/motion/text-shimmer";

export function Example() {
  return (
    <div className="p-6">
      <TextShimmer />
    </div>
  );
}
```
