---
title: "Click Spark"
description: "Component from Motion UI: click-spark"
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/craft/click-spark.md"
markdown: "references/craft/click-spark.md"
license: "MIT"
---

# Click Spark

> Component from Motion UI: click-spark

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py click-spark --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `next-themes`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { ClickSpark as ClickSpark } from "@/components/craft/click-spark";

export function Example() {
  return (
    <div className="p-6">
      <ClickSpark />
    </div>
  );
}
```
