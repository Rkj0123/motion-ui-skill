---
title: "Command Menu"
description: "A global keyboard-first command palette with fuzzy filtering, category badges, and keyboard arrow controls."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/motion/command-menu.md"
markdown: "references/motion/command-menu.md"
license: "MIT"
---

# Command Menu

> A global keyboard-first command palette with fuzzy filtering, category badges, and keyboard arrow controls.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py command-menu --dest ./src
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

import { CommandMenu as CommandMenu } from "@/components/motion/command-menu";

export function Example() {
  return (
    <div className="p-6">
      <CommandMenu />
    </div>
  );
}
```
