---
title: "Inline AI Status"
description: "An inline status that shows what an AI is doing, from thinking and researching to writing and done."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/agents/ai-status.md"
markdown: "references/agents/ai-status.md"
license: "MIT"
---

# Inline AI Status

> An inline status that shows what an AI is doing, from thinking and researching to writing and done.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py ai-status --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `react-use-measure`
- `tailwind-merge`

## Usage

```tsx
"use client";

import AiStatus from "@/components/agents/ai-status";

export function Example() {
  return (
    <div className="p-6">
      <AiStatus />
    </div>
  );
}
```
