---
title: "Time picker"
description: "Choose a time with sensible keyboard behavior."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/motion/time-picker.md"
markdown: "references/motion/time-picker.md"
license: "MIT"
---

# Time picker

> Choose a time with sensible keyboard behavior.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py time-picker --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { TimePicker as TimePicker } from "@/components/motion/time-picker";

export function Example() {
  return (
    <div className="p-6">
      <TimePicker />
    </div>
  );
}
```
