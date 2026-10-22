---
title: "Input Group"
description: "Component from Motion UI: input-group"
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/motion/input-group.md"
markdown: "references/motion/input-group.md"
license: "MIT"
---

# Input Group

> Component from Motion UI: input-group

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py input-group --dest ./src
```

## Dependencies

- `class-variance-authority`
- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import InputGroup from "@/components/motion/input-group";

export function Example() {
  return (
    <div className="p-6">
      <InputGroup />
    </div>
  );
}
```
