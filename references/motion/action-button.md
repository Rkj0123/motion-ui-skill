---
title: "Action button"
description: "A compact button for frequent toolbar actions."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/motion/action-button.md"
markdown: "references/motion/action-button.md"
license: "MIT"
---

# Action button

> A compact button for frequent toolbar actions.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py action-button --dest ./src
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

import { ActionButton as ActionButton } from "@/components/motion/action-button";

export function Example() {
  return (
    <div className="p-6">
      <ActionButton />
    </div>
  );
}
```
