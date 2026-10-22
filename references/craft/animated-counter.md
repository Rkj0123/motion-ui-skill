---
title: "Animated Counter"
description: "A number that counts to its new value on a wheel of digits, like an odometer."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/craft/animated-counter.md"
markdown: "references/craft/animated-counter.md"
license: "MIT"
---

# Animated Counter

> A number that counts to its new value on a wheel of digits, like an odometer.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py animated-counter --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { AnimatedCounter as AnimatedCounter } from "@/components/craft/animated-counter";

export function Example() {
  return (
    <div className="p-6">
      <AnimatedCounter />
    </div>
  );
}
```
