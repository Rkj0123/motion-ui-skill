---
title: "Morph select"
description: "A select whose trigger grows into the list, with a gliding highlight and type-ahead."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/motion/morph-select.md"
markdown: "references/motion/morph-select.md"
license: "MIT"
---

# Morph select

> A select whose trigger grows into the list, with a gliding highlight and type-ahead.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py morph-select --dest ./src
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

import { MorphSelect as MorphSelect } from "@/components/motion/morph-select";

export function Example() {
  return (
    <div className="p-6">
      <MorphSelect />
    </div>
  );
}
```
