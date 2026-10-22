---
title: "Slider"
description: "Pick a value or a range on a track that follows your finger."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/motion/slider.md"
markdown: "references/motion/slider.md"
license: "MIT"
---

# Slider

> Pick a value or a range on a track that follows your finger.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py slider --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { Slider as Slider } from "@/components/motion/slider";

export function Example() {
  return (
    <div className="p-6">
      <Slider />
    </div>
  );
}
```
