---
title: "Bounce Sidebar"
description: "A vertical sidebar whose active dot jumps between destinations on a curved, spring-loaded path."
category: "Components"
publishedAt: "2026-07-22"
updatedAt: "2026-07-22"
documentation: "references/motion/bounce-sidebar.md"
markdown: "references/motion/bounce-sidebar.md"
license: "MIT"
---

# Bounce Sidebar

> A vertical sidebar whose active dot jumps between destinations on a curved, spring-loaded path.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py bounce-sidebar --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { useState } from "react";
import { BounceSidebar } from "@/components/motion/bounce-sidebar";

const destinations = [
  { id: "overview", label: "Overview" },
  { id: "components", label: "Components" },
  { id: "motion", label: "Motion" },
  { id: "templates", label: "Templates" },
  { id: "changelog", label: "Changelog" },
];

export function BounceSidebarPreview() {
  const [active, setActive] = useState("components");

  return (
    <div className="flex min-h-[360px] w-full items-center justify-center">
      <BounceSidebar
        items={destinations}
        value={active}
        onValueChange={setActive}
        ariaLabel="Motion UI sections"
        className="w-52"
        listClassName="w-full"
        itemClassName="text-base"
      />
    </div>
  );
}
```

## API Reference

### BounceSidebar

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `items` | `BounceSidebarItem[]` | — | Yes | — |
| `value` | `string` | — | No | — |
| `defaultValue` | `string` | — | No | — |
| `onValueChange` | `((value: string) => void)` | — | No | — |
| `ariaLabel` | `string` | `Sidebar navigation` | No | — |
| `className` | `string` | — | No | — |
| `listClassName` | `string` | — | No | — |
| `itemClassName` | `string` | — | No | — |
| `indicatorClassName` | `string` | — | No | — |

## Source

- Registry detail: https://github.com/Rkj0123/motion-ui-skill
- Raw source: https://github.com/Rkj0123/motion-ui-skill
- GitHub: https://github.com/starc007/ui-components
