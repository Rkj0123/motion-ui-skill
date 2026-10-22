---
title: "Delete Button"
description: "A delete button that asks for confirmation in place, no dialog needed."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/craft/delete-button.md"
markdown: "references/craft/delete-button.md"
license: "MIT"
---

# Delete Button

> A delete button that asks for confirmation in place, no dialog needed.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py delete-button --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { DeleteButton as DeleteButton } from "@/components/craft/delete-button";

export function Example() {
  return (
    <div className="p-6">
      <DeleteButton />
    </div>
  );
}
```
