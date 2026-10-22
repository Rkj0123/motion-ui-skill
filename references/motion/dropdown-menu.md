---
title: "Dropdown menu"
description: "A focused list of actions anchored to a trigger."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/motion/dropdown-menu.md"
markdown: "references/motion/dropdown-menu.md"
license: "MIT"
---

# Dropdown menu

> A focused list of actions anchored to a trigger.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py dropdown-menu --dest ./src
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

import { DropdownMenu as DropdownMenu } from "@/components/motion/dropdown-menu";

export function Example() {
  return (
    <div className="p-6">
      <DropdownMenu />
    </div>
  );
}
```
