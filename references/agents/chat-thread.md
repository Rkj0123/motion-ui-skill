---
title: "Chat thread"
description: "A chat thread with grouped messages, reactions, read receipts, typing, and a composer with attachments."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/agents/chat-thread.md"
markdown: "references/agents/chat-thread.md"
license: "MIT"
---

# Chat thread

> A chat thread with grouped messages, reactions, read receipts, typing, and a composer with attachments.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py chat-thread --dest ./src
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

import { ChatThread as ChatThread } from "@/components/agents/chat-thread";

export function Example() {
  return (
    <div className="p-6">
      <ChatThread />
    </div>
  );
}
```
