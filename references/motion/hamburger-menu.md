---
title: "Hamburger Menu"
description: "An iconic three-line menu toggle that transforms smoothly into a symmetrical close symbol."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/motion/hamburger-menu.md"
markdown: "references/motion/hamburger-menu.md"
license: "MIT"
---

# Hamburger Menu

> An iconic three-line menu toggle that transforms smoothly into a symmetrical close symbol.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py hamburger-menu --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { HamburgerMenu as HamburgerMenu } from "@/components/motion/hamburger-menu";

export function Example() {
  return (
    <div className="p-6">
      <HamburgerMenu />
    </div>
  );
}
```
