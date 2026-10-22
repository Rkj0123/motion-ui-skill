---
title: "Airport Matrix Clock"
description: "A live world clock that renders local times and city names as crisp dot-matrix characters with restrained, character-level rolling transitions."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/craft/airport-matrix-clock.md"
markdown: "references/craft/airport-matrix-clock.md"
license: "MIT"
---

# Airport Matrix Clock

> A live world clock that renders local times and city names as crisp dot-matrix characters with restrained, character-level rolling transitions.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py airport-matrix-clock --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { AirportMatrixClock as AirportMatrixClock } from "@/components/craft/airport-matrix-clock";

export function Example() {
  return (
    <div className="p-6">
      <AirportMatrixClock />
    </div>
  );
}
```
