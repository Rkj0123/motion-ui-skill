---
title: "Avatar"
description: "A compact identity marker for people and accounts."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/motion/avatar.md"
markdown: "references/motion/avatar.md"
license: "MIT"
---

# Avatar

> A compact identity marker for people and accounts.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py avatar --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { Avatar as Avatar } from "@/components/motion/avatar";

export function Example() {
  return (
    <div className="p-6">
      <Avatar />
    </div>
  );
}
```
