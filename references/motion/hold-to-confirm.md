---
title: "Hold to confirm"
description: "Confirm a destructive action by holding, not tapping."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/motion/hold-to-confirm.md"
markdown: "references/motion/hold-to-confirm.md"
license: "MIT"
---

# Hold to confirm

> Confirm a destructive action by holding, not tapping.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py hold-to-confirm --dest ./src
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

import { HoldToConfirm as HoldToConfirm } from "@/components/motion/hold-to-confirm";

export function Example() {
  return (
    <div className="p-6">
      <HoldToConfirm />
    </div>
  );
}
```
