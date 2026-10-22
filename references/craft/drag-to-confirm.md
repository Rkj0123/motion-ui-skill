---
title: "Drag to Confirm"
description: "A minimalist physical drag-to-confirm slider for high-stakes and destructive actions, equipped with progressive track fill physics, spring snapback resistance, full light/dark theme adaptation, and accessible keyboard controls."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/craft/drag-to-confirm.md"
markdown: "references/craft/drag-to-confirm.md"
license: "MIT"
---

# Drag to Confirm

> A minimalist physical drag-to-confirm slider for high-stakes and destructive actions, equipped with progressive track fill physics, spring snapback resistance, full light/dark theme adaptation, and accessible keyboard controls.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py drag-to-confirm --dest ./src
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

import { DragToConfirm as DragToConfirm } from "@/components/craft/drag-to-confirm";

export function Example() {
  return (
    <div className="p-6">
      <DragToConfirm />
    </div>
  );
}
```
