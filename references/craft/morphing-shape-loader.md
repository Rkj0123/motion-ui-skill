---
title: "Morphing Shape Loader"
description: "A loading indicator that continuously morphs between configurable SVG shapes via real path interpolation. The transition is a genuine geometric morph — never a fade out / in."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/craft/morphing-shape-loader.md"
markdown: "references/craft/morphing-shape-loader.md"
license: "MIT"
---

# Morphing Shape Loader

> A loading indicator that continuously morphs between configurable SVG shapes via real path interpolation. The transition is a genuine geometric morph — never a fade out / in.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py morphing-shape-loader --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { MorphingShapeLoader as MorphingShapeLoader } from "@/components/craft/morphing-shape-loader";

export function Example() {
  return (
    <div className="p-6">
      <MorphingShapeLoader />
    </div>
  );
}
```
