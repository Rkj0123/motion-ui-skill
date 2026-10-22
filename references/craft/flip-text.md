---
title: "Flip Text"
description: "Component from Motion UI: flip-text"
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/craft/flip-text.md"
markdown: "references/craft/flip-text.md"
license: "MIT"
---

# Flip Text

> Component from Motion UI: flip-text

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py flip-text --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { FlipText as FlipText } from "@/components/craft/flip-text";

export function Example() {
  return (
    <div className="p-6">
      <FlipText />
    </div>
  );
}
```
