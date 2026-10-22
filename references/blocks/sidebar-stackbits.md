---
title: "Sidebar Stackbits"
description: "Component from Motion UI: sidebar-stackbits"
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/blocks/sidebar-stackbits.md"
markdown: "references/blocks/sidebar-stackbits.md"
license: "MIT"
---

# Sidebar Stackbits

> Component from Motion UI: sidebar-stackbits

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py sidebar-stackbits --dest ./src
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

import SidebarStackbits from "@/components/blocks/sidebar-stackbits";

export function Example() {
  return (
    <div className="p-6">
      <SidebarStackbits />
    </div>
  );
}
```
