---
title: "Spotlight Search"
description: "A global command palette and search overlay triggered by ⌘K featuring real-time fuzzy filtering, moving active highlight springs, kbd shortcuts, and full keyboard navigation."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/craft/spotlight-search.md"
markdown: "references/craft/spotlight-search.md"
license: "MIT"
---

# Spotlight Search

> A global command palette and search overlay triggered by ⌘K featuring real-time fuzzy filtering, moving active highlight springs, kbd shortcuts, and full keyboard navigation.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py spotlight-search --dest ./src
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

import { SpotlightSearch as SpotlightSearch } from "@/components/craft/spotlight-search";

export function Example() {
  return (
    <div className="p-6">
      <SpotlightSearch />
    </div>
  );
}
```
