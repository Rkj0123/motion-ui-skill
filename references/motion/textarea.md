---
title: "Textarea"
description: "A multiline field for notes, descriptions, and longer text."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/motion/textarea.md"
markdown: "references/motion/textarea.md"
license: "MIT"
---

# Textarea

> A multiline field for notes, descriptions, and longer text.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py textarea --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { Textarea as Textarea } from "@/components/motion/textarea";

export function Example() {
  return (
    <div className="p-6">
      <Textarea />
    </div>
  );
}
```
