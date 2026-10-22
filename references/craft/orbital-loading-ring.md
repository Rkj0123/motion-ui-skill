---
title: "Orbital Loading Ring"
description: "A lightweight loading indicator with layered rings and orbiting particles that communicate active processing."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/craft/orbital-loading-ring.md"
markdown: "references/craft/orbital-loading-ring.md"
license: "MIT"
---

# Orbital Loading Ring

> A lightweight loading indicator with layered rings and orbiting particles that communicate active processing.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py orbital-loading-ring --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { OrbitalLoadingRing as OrbitalLoadingRing } from "@/components/craft/orbital-loading-ring";

export function Example() {
  return (
    <div className="p-6">
      <OrbitalLoadingRing />
    </div>
  );
}
```
