---
title: "Chat"
description: "A production-grade conversational chat component with thread history sidebar, rich message rendering, status indicators, file attachments, and auto-expanding composer."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/blocks/chat.md"
markdown: "references/blocks/chat.md"
license: "MIT"
---

# Chat

> A production-grade conversational chat component with thread history sidebar, rich message rendering, status indicators, file attachments, and auto-expanding composer.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py chat --dest ./src
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

import { Chat as Chat } from "@/components/blocks/chat";

export function Example() {
  return (
    <div className="p-6">
      <Chat />
    </div>
  );
}
```
