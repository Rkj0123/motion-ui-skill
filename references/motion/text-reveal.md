---
title: "Text reveal"
description: "Reveal a short piece of content with restrained motion."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/motion/text-reveal.md"
markdown: "references/motion/text-reveal.md"
license: "MIT"
---

# Text reveal

> Reveal a short piece of content with restrained motion.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py text-reveal --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { TextReveal as TextReveal } from "@/components/motion/text-reveal";

export function Example() {
  return (
    <div className="p-6">
      <TextReveal />
    </div>
  );
}
```
