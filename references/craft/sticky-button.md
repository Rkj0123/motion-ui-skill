---
title: "Sticky Button"
description: "Magnetic cursor button pulled toward the pointer from a wide capture field with parallax tilt and depth."
category: "Components"
publishedAt: "2026-10-21"
updatedAt: "2026-10-21"
documentation: "references/craft/sticky-button.md"
markdown: "references/craft/sticky-button.md"
license: "MIT"
---

# Sticky Button

> Magnetic cursor button pulled toward the pointer from a wide capture field with parallax tilt and depth.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py sticky-button --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { StickyButton } from "@/components/buttons/sticky-button";

export function StickyButtonDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <StickyButton>Click Me</StickyButton>
    </div>
  );
}
```

## API Reference

### StickyButton

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `pullRadius` | `number` | 150 | No | Cursor magnetic attraction radius in pixels |
| `className` | `string` | — | No | Additional CSS classes |
| `children` | `React.ReactNode` | — | No | Button label content |
