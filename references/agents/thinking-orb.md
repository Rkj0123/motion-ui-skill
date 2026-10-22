---
title: "Thinking Orb"
description: "Minimalist monochrome spherical particle vortex with orbital physics, pure black-and-white luminous styling, and 9 cognitive state deformations."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/agents/thinking-orb.md"
markdown: "references/agents/thinking-orb.md"
license: "MIT"
---

# Thinking Orb

> Minimalist monochrome spherical particle vortex with orbital physics, pure black-and-white luminous styling, and 9 cognitive state deformations.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py thinking-orb --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { ThinkingOrb as ThinkingOrb } from "@/components/agents/thinking-orb";

export function Example() {
  return (
    <div className="p-6">
      <ThinkingOrb />
    </div>
  );
}
```
