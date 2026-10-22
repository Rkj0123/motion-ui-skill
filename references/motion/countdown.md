---
title: "Countdown"
description: "A launch countdown with rolling digits that morphs into a live state at zero."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/motion/countdown.md"
markdown: "references/motion/countdown.md"
license: "MIT"
---

# Countdown

> A launch countdown with rolling digits that morphs into a live state at zero.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py countdown --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { Countdown as Countdown } from "@/components/motion/countdown";

export function Example() {
  return (
    <div className="p-6">
      <Countdown />
    </div>
  );
}
```
