---
title: "LockInput"
description: "A text input whose focus state subtly "locks" into place — a focus ring scales in from the center and the border tweens to active, giving the impression that the input snaps closed on itself."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/craft/lock-input.md"
markdown: "references/craft/lock-input.md"
license: "MIT"
---

# LockInput

> A text input whose focus state subtly "locks" into place — a focus ring scales in from the center and the border tweens to active, giving the impression that the input snaps closed on itself.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py lock-input --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { LockInput as LockInput } from "@/components/craft/lock-input";

export function Example() {
  return (
    <div className="p-6">
      <LockInput />
    </div>
  );
}
```
