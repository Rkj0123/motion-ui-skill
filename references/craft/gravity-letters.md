---
title: "Gravity Letters"
description: "A playful gravity field where letters, numbers, emoji, or any components you pass fall and pile up like real objects."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/craft/gravity-letters.md"
markdown: "references/craft/gravity-letters.md"
license: "MIT"
---

# Gravity Letters

> A playful gravity field where letters, numbers, emoji, or any components you pass fall and pile up like real objects.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py gravity-letters --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import GravityLetters from "@/components/craft/gravity-letters";

export function Example() {
  return (
    <div className="p-6">
      <GravityLetters />
    </div>
  );
}
```
