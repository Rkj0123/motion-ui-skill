---
title: "Liquid Metal"
description: "Component from Motion UI: liquid-metal"
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/craft/liquid-metal.md"
markdown: "references/craft/liquid-metal.md"
license: "MIT"
---

# Liquid Metal

> Component from Motion UI: liquid-metal

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py liquid-metal --dest ./src
```

## Dependencies

- `@paper-design/shaders-react`
- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { LiquidMetal as LiquidMetal } from "@/components/craft/liquid-metal";

export function Example() {
  return (
    <div className="p-6">
      <LiquidMetal />
    </div>
  );
}
```
