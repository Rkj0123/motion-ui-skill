---
title: "Accordion"
description: "Progressively reveal supporting information in place."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/motion/accordion.md"
markdown: "references/motion/accordion.md"
license: "MIT"
---

# Accordion

> Progressively reveal supporting information in place.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py accordion --dest ./src
```

## Dependencies

- `@radix-ui/react-accordion`
- `clsx`
- `lucide-react`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { Accordion as Accordion } from "@/components/motion/accordion";

export function Example() {
  return (
    <div className="p-6">
      <Accordion />
    </div>
  );
}
```
