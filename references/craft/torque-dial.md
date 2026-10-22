---
title: "Torque Dial"
description: "A rotational control dial with realistic physical angular momentum, velocity tracking, and exponential friction deceleration."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/craft/torque-dial.md"
markdown: "references/craft/torque-dial.md"
license: "MIT"
---

# Torque Dial

> A rotational control dial with realistic physical angular momentum, velocity tracking, and exponential friction deceleration.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py torque-dial --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { TorqueDial as TorqueDial } from "@/components/craft/torque-dial";

export function Example() {
  return (
    <div className="p-6">
      <TorqueDial />
    </div>
  );
}
```
