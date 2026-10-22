---
title: "V Prism"
description: "Component from Motion UI: v-prism"
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/craft/v-prism.md"
markdown: "references/craft/v-prism.md"
license: "MIT"
---

# V Prism

> Component from Motion UI: v-prism

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py v-prism --dest ./src
```

## Dependencies

- `clsx`
- `next-themes`
- `postprocessing`
- `react`
- `tailwind-merge`
- `three`

## Usage

```tsx
"use client";

import { VPrism as VPrism } from "@/components/craft/v-prism";

export function Example() {
  return (
    <div className="p-6">
      <VPrism />
    </div>
  );
}
```
