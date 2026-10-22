---
title: "Expandable Data Row"
description: "A polished table component with fluid accordion row unfolding, revealing deep metadata, audit activity feeds, and quick actions, with automatic card restructuring on mobile viewports."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/craft/expandable-data-row.md"
markdown: "references/craft/expandable-data-row.md"
license: "MIT"
---

# Expandable Data Row

> A polished table component with fluid accordion row unfolding, revealing deep metadata, audit activity feeds, and quick actions, with automatic card restructuring on mobile viewports.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py expandable-data-row --dest ./src
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

import { ExpandableDataRow as ExpandableDataRow } from "@/components/craft/expandable-data-row";

export function Example() {
  return (
    <div className="p-6">
      <ExpandableDataRow />
    </div>
  );
}
```
