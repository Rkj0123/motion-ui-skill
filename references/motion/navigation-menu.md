---
title: "Navigation Menu"
description: "Component from Motion UI: navigation-menu"
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/motion/navigation-menu.md"
markdown: "references/motion/navigation-menu.md"
license: "MIT"
---

# Navigation Menu

> Component from Motion UI: navigation-menu

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py navigation-menu --dest ./src
```

## Dependencies

- `@radix-ui/react-navigation-menu`
- `class-variance-authority`
- `clsx`
- `lucide-react`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import NavigationMenu from "@/components/motion/navigation-menu";

export function Example() {
  return (
    <div className="p-6">
      <NavigationMenu />
    </div>
  );
}
```
