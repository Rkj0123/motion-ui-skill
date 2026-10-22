---
title: "Proximity Sidebar"
description: "A dash-style scroll sidebar whose items expand as the pointer approaches."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/blocks/proximity-sidebar.md"
markdown: "references/blocks/proximity-sidebar.md"
license: "MIT"
---

# Proximity Sidebar

> A dash-style scroll sidebar whose items expand as the pointer approaches.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py proximity-sidebar --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import ProximitySidebar from "@/components/blocks/proximity-sidebar";

export function Example() {
  return (
    <div className="p-6">
      <ProximitySidebar />
    </div>
  );
}
```
