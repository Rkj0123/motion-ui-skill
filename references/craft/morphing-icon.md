---
title: "Morphing Icon"
description: "An animated micro-interaction wrapper that smoothly morphs between two icon states with coordinated rotation, scale, and cross-fade transitions."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/craft/morphing-icon.md"
markdown: "references/craft/morphing-icon.md"
license: "MIT"
---

# Morphing Icon

> An animated micro-interaction wrapper that smoothly morphs between two icon states with coordinated rotation, scale, and cross-fade transitions.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py morphing-icon --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { MorphingIcon as MorphingIcon } from "@/components/craft/morphing-icon";

export function Example() {
  return (
    <div className="p-6">
      <MorphingIcon />
    </div>
  );
}
```
