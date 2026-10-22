---
title: "Rail TOC"
description: "A table of contents with a paper plane that flies to the section you're reading."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/blocks/rail-toc.md"
markdown: "references/blocks/rail-toc.md"
license: "MIT"
---

# Rail TOC

> A table of contents with a paper plane that flies to the section you're reading.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py rail-toc --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import RailToc from "@/components/blocks/rail-toc";

export function Example() {
  return (
    <div className="p-6">
      <RailToc />
    </div>
  );
}
```
