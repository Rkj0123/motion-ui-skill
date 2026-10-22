---
title: "Matrix Orb"
description: "A dot-matrix orb that animates through idle, listening and thinking states."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/agents/matrix-orb.md"
markdown: "references/agents/matrix-orb.md"
license: "MIT"
---

# Matrix Orb

> A dot-matrix orb that animates through idle, listening and thinking states.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py matrix-orb --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import MatrixOrb from "@/components/agents/matrix-orb";

export function Example() {
  return (
    <div className="p-6">
      <MatrixOrb />
    </div>
  );
}
```
