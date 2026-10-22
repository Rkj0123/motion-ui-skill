---
title: "Car Smoke Page Transition"
description: "A cinematic page transition where a speeding car crosses the screen, leaving a smoke trail before transitioning to the next page."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/craft/car-smoke-page-transition.md"
markdown: "references/craft/car-smoke-page-transition.md"
license: "MIT"
---

# Car Smoke Page Transition

> A cinematic page transition where a speeding car crosses the screen, leaving a smoke trail before transitioning to the next page.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py car-smoke-page-transition --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { CarSmokePageTransition as CarSmokePageTransition } from "@/components/craft/car-smoke-page-transition";

export function Example() {
  return (
    <div className="p-6">
      <CarSmokePageTransition />
    </div>
  );
}
```
