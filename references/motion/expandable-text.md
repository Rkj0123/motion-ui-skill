---
title: "Expandable text"
description: "Long text clamped to a few lines with a soft fade that glides open with Read more and closes with Show less, shown only when the text overflows."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/motion/expandable-text.md"
markdown: "references/motion/expandable-text.md"
license: "MIT"
---

# Expandable text

> Long text clamped to a few lines with a soft fade that glides open with Read more and closes with Show less, shown only when the text overflows.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py expandable-text --dest ./src
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

import { ExpandableText as ExpandableText } from "@/components/motion/expandable-text";

export function Example() {
  return (
    <div className="p-6">
      <ExpandableText />
    </div>
  );
}
```
