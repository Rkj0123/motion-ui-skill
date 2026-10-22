---
title: "Branching Submenu"
description: "A spatial submenu that connects parent options to child actions with staged branch motion."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/motion/branching-submenu.md"
markdown: "references/motion/branching-submenu.md"
license: "MIT"
---

# Branching Submenu

> A spatial submenu that connects parent options to child actions with staged branch motion.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py branching-submenu --dest ./src
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

import { BranchingSubmenu as BranchingSubmenu } from "@/components/motion/branching-submenu";

export function Example() {
  return (
    <div className="p-6">
      <BranchingSubmenu />
    </div>
  );
}
```
