---
title: "Nimbu Mirchi"
description: "A hanging lemon-and-green-chilli charm that swings with realistic inertia in response to the pointer, built from layered physical springs rather than a single rigid illustration."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/craft/nimbu-mirchi.md"
markdown: "references/craft/nimbu-mirchi.md"
license: "MIT"
---

# Nimbu Mirchi

> A hanging lemon-and-green-chilli charm that swings with realistic inertia in response to the pointer, built from layered physical springs rather than a single rigid illustration.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py nimbu-mirchi --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { NimbuMirchi as NimbuMirchi } from "@/components/craft/nimbu-mirchi";

export function Example() {
  return (
    <div className="p-6">
      <NimbuMirchi />
    </div>
  );
}
```
