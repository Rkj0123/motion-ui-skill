---
title: "Meteors"
description: "A lightweight, highly aesthetic animated meteor shower effect that streams diagonal glowing celestial light beams across cards, badges, hero containers, and call-to-action sections."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/craft/meteors.md"
markdown: "references/craft/meteors.md"
license: "MIT"
---

# Meteors

> A lightweight, highly aesthetic animated meteor shower effect that streams diagonal glowing celestial light beams across cards, badges, hero containers, and call-to-action sections.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py meteors --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { Meteors as Meteors } from "@/components/craft/meteors";

export function Example() {
  return (
    <div className="p-6">
      <Meteors />
    </div>
  );
}
```
