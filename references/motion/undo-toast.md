---
title: "Undo Toast"
description: "An advanced undo notification toast featuring an interactive progress countdown, pause-on-hover mechanics, action reversal animation, and versatile position anchoring."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/motion/undo-toast.md"
markdown: "references/motion/undo-toast.md"
license: "MIT"
---

# Undo Toast

> An advanced undo notification toast featuring an interactive progress countdown, pause-on-hover mechanics, action reversal animation, and versatile position anchoring.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py undo-toast --dest ./src
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

import { UndoToast as UndoToast } from "@/components/motion/undo-toast";

export function Example() {
  return (
    <div className="p-6">
      <UndoToast />
    </div>
  );
}
```
