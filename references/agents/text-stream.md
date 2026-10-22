---
title: "Text Stream"
description: "Component from Motion UI: text-stream"
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/agents/text-stream.md"
markdown: "references/agents/text-stream.md"
license: "MIT"
---

# Text Stream

> Component from Motion UI: text-stream

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py text-stream --dest ./src
```

## Dependencies

- `clsx`
- `gsap`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { TextStream as TextStream } from "@/components/agents/text-stream";

export function Example() {
  return (
    <div className="p-6">
      <TextStream />
    </div>
  );
}
```
