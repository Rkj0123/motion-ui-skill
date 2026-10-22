---
title: "Toast"
description: "Brief confirmation for a completed background action."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/motion/toast.md"
markdown: "references/motion/toast.md"
license: "MIT"
---

# Toast

> Brief confirmation for a completed background action.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py toast --dest ./src
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

import Toast from "@/components/motion/toast";

export function Example() {
  return (
    <div className="p-6">
      <Toast />
    </div>
  );
}
```
