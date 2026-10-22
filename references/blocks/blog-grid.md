---
title: "Blog grid"
description: "A blog index with a featured post, category filter, post cards, pagination and an in-place reader."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/blocks/blog-grid.md"
markdown: "references/blocks/blog-grid.md"
license: "MIT"
---

# Blog grid

> A blog index with a featured post, category filter, post cards, pagination and an in-place reader.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py blog-grid --dest ./src
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

import { BlogGrid as BlogGrid } from "@/components/blocks/blog-grid";

export function Example() {
  return (
    <div className="p-6">
      <BlogGrid />
    </div>
  );
}
```
