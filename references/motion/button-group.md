---
title: "Button group"
description: "Related actions joined into one surface with hairline dividers: a hover highlight glides between segments, the pressed one answers in place, and an attached menu can close the row."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/motion/button-group.md"
markdown: "references/motion/button-group.md"
license: "MIT"
---

# Button group

> Related actions joined into one surface with hairline dividers: a hover highlight glides between segments, the pressed one answers in place, and an attached menu can close the row.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py button-group --dest ./src
```

## Dependencies

- `@radix-ui/react-dropdown-menu`
- `clsx`
- `lucide-react`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { ButtonGroup as ButtonGroup } from "@/components/motion/button-group";

export function Example() {
  return (
    <div className="p-6">
      <ButtonGroup />
    </div>
  );
}
```
