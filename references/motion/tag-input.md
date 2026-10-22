---
title: "Tag input"
description: "Turn short text values into removable tags."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/motion/tag-input.md"
markdown: "references/motion/tag-input.md"
license: "MIT"
---

# Tag input

> Turn short text values into removable tags.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py tag-input --dest ./src
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

import { TagInput as TagInput } from "@/components/motion/tag-input";

export function Example() {
  return (
    <div className="p-6">
      <TagInput />
    </div>
  );
}
```
