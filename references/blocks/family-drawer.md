---
title: "Family Drawer"
description: "A bottom drawer with smooth, morphing transitions between stacked views, inspired by the Family app. Built on Vaul."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/blocks/family-drawer.md"
markdown: "references/blocks/family-drawer.md"
license: "MIT"
---

# Family Drawer

> A bottom drawer with smooth, morphing transitions between stacked views, inspired by the Family app. Built on Vaul.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py family-drawer --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `react-use-measure`
- `tailwind-merge`
- `vaul`

## Usage

```tsx
"use client";

import FamilyDrawer from "@/components/blocks/family-drawer";

export function Example() {
  return (
    <div className="p-6">
      <FamilyDrawer />
    </div>
  );
}
```
