---
title: "Cursor Follower"
description: "A smooth spring-based cursor follower with customizable physics, velocity scaling, and custom child icons or badges."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/craft/cursor-follower.md"
markdown: "references/craft/cursor-follower.md"
license: "MIT"
---

# Cursor Follower

> A smooth spring-based cursor follower with customizable physics, velocity scaling, and custom child icons or badges.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py cursor-follower --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { CursorFollower as CursorFollower } from "@/components/craft/cursor-follower";

export function Example() {
  return (
    <div className="p-6">
      <CursorFollower />
    </div>
  );
}
```
