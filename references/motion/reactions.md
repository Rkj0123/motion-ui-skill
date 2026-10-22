---
title: "Reactions"
description: "Acknowledge a post in one tap, with counts that roll."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/motion/reactions.md"
markdown: "references/motion/reactions.md"
license: "MIT"
---

# Reactions

> Acknowledge a post in one tap, with counts that roll.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py reactions --dest ./src
```

## Dependencies

- `@radix-ui/react-popover`
- `clsx`
- `lucide-react`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { Reactions as Reactions } from "@/components/motion/reactions";

export function Example() {
  return (
    <div className="p-6">
      <Reactions />
    </div>
  );
}
```
