---
title: "Status Bars"
description: "Component from Motion UI: status-bars"
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/blocks/status-bars.md"
markdown: "references/blocks/status-bars.md"
license: "MIT"
---

# Status Bars

> Component from Motion UI: status-bars

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py status-bars --dest ./src
```

## Dependencies

- `@number-flow/react`
- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { StatusBars as StatusBars } from "@/components/blocks/status-bars";

export function Example() {
  return (
    <div className="p-6">
      <StatusBars />
    </div>
  );
}
```
