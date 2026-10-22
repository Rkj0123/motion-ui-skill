---
title: "Page header"
description: "A project page header that folds into a compact bar as you scroll, with tabs whose counts roll."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/blocks/page-header.md"
markdown: "references/blocks/page-header.md"
license: "MIT"
---

# Page header

> A project page header that folds into a compact bar as you scroll, with tabs whose counts roll.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py page-header --dest ./src
```

## Dependencies

- `@radix-ui/react-dropdown-menu`
- `@radix-ui/react-tabs`
- `clsx`
- `lucide-react`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { PageHeader as PageHeader } from "@/components/blocks/page-header";

export function Example() {
  return (
    <div className="p-6">
      <PageHeader />
    </div>
  );
}
```
