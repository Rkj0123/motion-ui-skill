---
title: "Hook Sidebar"
description: "A vertical navigation list with a dashed rail that marks the active item."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/blocks/hook-sidebar.md"
markdown: "references/blocks/hook-sidebar.md"
license: "MIT"
---

# Hook Sidebar

> A vertical navigation list with a dashed rail that marks the active item.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py hook-sidebar --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `next`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { HookSidebar as HookSidebar } from "@/components/blocks/hook-sidebar";

export function Example() {
  return (
    <div className="p-6">
      <HookSidebar />
    </div>
  );
}
```
