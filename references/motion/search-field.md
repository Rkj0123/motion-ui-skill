---
title: "Search field"
description: "A recognizable search entry point with clear affordances."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/motion/search-field.md"
markdown: "references/motion/search-field.md"
license: "MIT"
---

# Search field

> A recognizable search entry point with clear affordances.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py search-field --dest ./src
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

import { SearchField as SearchField } from "@/components/motion/search-field";

export function Example() {
  return (
    <div className="p-6">
      <SearchField />
    </div>
  );
}
```
