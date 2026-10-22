---
title: "Confirm morph"
description: "A destructive button that morphs into an inline confirmation, a spinner, and a result with undo."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/motion/confirm-morph.md"
markdown: "references/motion/confirm-morph.md"
license: "MIT"
---

# Confirm morph

> A destructive button that morphs into an inline confirmation, a spinner, and a result with undo.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py confirm-morph --dest ./src
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

import { ConfirmMorph as ConfirmMorph } from "@/components/motion/confirm-morph";

export function Example() {
  return (
    <div className="p-6">
      <ConfirmMorph />
    </div>
  );
}
```
