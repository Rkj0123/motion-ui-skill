---
title: "Inline edit"
description: "Rename in place: the text becomes a field without moving."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/motion/inline-edit.md"
markdown: "references/motion/inline-edit.md"
license: "MIT"
---

# Inline edit

> Rename in place: the text becomes a field without moving.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py inline-edit --dest ./src
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

import { InlineEdit as InlineEdit } from "@/components/motion/inline-edit";

export function Example() {
  return (
    <div className="p-6">
      <InlineEdit />
    </div>
  );
}
```
