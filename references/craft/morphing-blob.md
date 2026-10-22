---
title: "Morphing Blob"
description: "An ambient, accessible SVG blob background that continuously morphs with spring physics and subtly follows the cursor for a fluid, interactive visual effect."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/craft/morphing-blob.md"
markdown: "references/craft/morphing-blob.md"
license: "MIT"
---

# Morphing Blob

> An ambient, accessible SVG blob background that continuously morphs with spring physics and subtly follows the cursor for a fluid, interactive visual effect.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py morphing-blob --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { MorphingBlob as MorphingBlob } from "@/components/craft/morphing-blob";

export function Example() {
  return (
    <div className="p-6">
      <MorphingBlob />
    </div>
  );
}
```
