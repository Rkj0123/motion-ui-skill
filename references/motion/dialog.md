---
title: "Dialog"
description: "A focused surface for decisions that need attention."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/motion/dialog.md"
markdown: "references/motion/dialog.md"
license: "MIT"
---

# Dialog

> A focused surface for decisions that need attention.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py dialog --dest ./src
```

## Dependencies

- `@radix-ui/react-dialog`
- `clsx`
- `lucide-react`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { Dialog as Dialog } from "@/components/motion/dialog";

export function Example() {
  return (
    <div className="p-6">
      <Dialog />
    </div>
  );
}
```
