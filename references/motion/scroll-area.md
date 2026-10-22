---
title: "Scroll area"
description: "A native scroll container with thin overlay scrollbars and edge fades that appear only when content overflows."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/motion/scroll-area.md"
markdown: "references/motion/scroll-area.md"
license: "MIT"
---

# Scroll area

> A native scroll container with thin overlay scrollbars and edge fades that appear only when content overflows.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py scroll-area --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { ScrollArea as ScrollArea } from "@/components/motion/scroll-area";

export function Example() {
  return (
    <div className="p-6">
      <ScrollArea />
    </div>
  );
}
```
