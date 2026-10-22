---
title: "Expanding search"
description: "An icon that morphs into a search field with results beneath it."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/motion/expanding-search.md"
markdown: "references/motion/expanding-search.md"
license: "MIT"
---

# Expanding search

> An icon that morphs into a search field with results beneath it.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py expanding-search --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `motion`
- `react`
- `react-dom`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { ExpandingSearch as ExpandingSearch } from "@/components/motion/expanding-search";

export function Example() {
  return (
    <div className="p-6">
      <ExpandingSearch />
    </div>
  );
}
```
