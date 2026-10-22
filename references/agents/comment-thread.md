---
title: "Comment thread"
description: "Threaded comments with replies, reactions, mentions, inline edit, and resolve."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/agents/comment-thread.md"
markdown: "references/agents/comment-thread.md"
license: "MIT"
---

# Comment thread

> Threaded comments with replies, reactions, mentions, inline edit, and resolve.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py comment-thread --dest ./src
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

import { CommentThread as CommentThread } from "@/components/agents/comment-thread";

export function Example() {
  return (
    <div className="p-6">
      <CommentThread />
    </div>
  );
}
```
