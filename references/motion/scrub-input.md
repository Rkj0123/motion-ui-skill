---
title: "Scrub input"
description: "A Figma-style number field: drag the label to scrub, or type values, units, and arithmetic."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/motion/scrub-input.md"
markdown: "references/motion/scrub-input.md"
license: "MIT"
---

# Scrub input

> A Figma-style number field: drag the label to scrub, or type values, units, and arithmetic.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py scrub-input --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `react-dom`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { ScrubInput as ScrubInput } from "@/components/motion/scrub-input";

export function Example() {
  return (
    <div className="p-6">
      <ScrubInput />
    </div>
  );
}
```
