---
title: "Dropdown Menu Morph"
description: "Fluid navigation menu dropdown whose container geometry, background sheet, and arrow tip morph seamlessly between submenu tabs."
category: "Motion"
publishedAt: "2026-10-21"
updatedAt: "2026-10-21"
documentation: "references/motion/dropdown-menu-morph.md"
markdown: "references/motion/dropdown-menu-morph.md"
license: "MIT"
---

# Dropdown Menu Morph

> Fluid navigation menu dropdown whose container geometry, background sheet, and arrow tip morph seamlessly between submenu tabs.

The canonical Stripe and [transitions.dev](https://github.com/Jakubantalik/transitions.dev) fluid dropdown pattern. The floating card container smoothly resizes its bounding box as the user hovers across top-level navigation items rather than closing and reopening separate menus.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py dropdown-menu-morph --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { DropdownMenuMorph } from "@/components/motion/dropdown-menu-morph";

export function DropdownMenuMorphDemo() {
  return (
    <div className="flex items-center justify-center p-12 min-h-[300px]">
      <DropdownMenuMorph />
    </div>
  );
}
```

## API Reference

### DropdownMenuMorph

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `tabs` | `NavTabItem[]` | Default platform tabs | No | Array of tabs containing `id`, `label`, and dropdown `content` |
| `className` | `string` | — | No | Additional CSS classes for root container |
