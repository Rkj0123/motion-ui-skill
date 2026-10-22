---
title: "Sidebar"
description: "A collapsible application sidebar with a hover pill that follows the cursor and a shared-layout active pill that glides between items. Includes nested sections, icon-only mode with tooltips, ⌘B toggle, and a draggable mobile drawer."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/craft/sidebar.md"
markdown: "references/craft/sidebar.md"
license: "MIT"
---

# Sidebar

> A collapsible application sidebar with a hover pill that follows the cursor and a shared-layout active pill that glides between items. Includes nested sections, icon-only mode with tooltips, ⌘B toggle, and a draggable mobile drawer.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py sidebar --dest ./src
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

import { Sidebar as Sidebar } from "@/components/craft/sidebar";

export function Example() {
  return (
    <div className="p-6">
      <Sidebar />
    </div>
  );
}
```
