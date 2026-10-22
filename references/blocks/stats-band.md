---
title: "Stats band"
description: "Headline numbers that count up in view, each with a tiny visual that proves it and a context line on hover, plain or in a hairline grid."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/blocks/stats-band.md"
markdown: "references/blocks/stats-band.md"
license: "MIT"
---

# Stats band

> Headline numbers that count up in view, each with a tiny visual that proves it and a context line on hover, plain or in a hairline grid.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py stats-band --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { StatsBand as StatsBand } from "@/components/blocks/stats-band";

export function Example() {
  return (
    <div className="p-6">
      <StatsBand />
    </div>
  );
}
```
