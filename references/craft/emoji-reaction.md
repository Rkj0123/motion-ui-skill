---
title: "Emoji Reaction"
description: "A tapback-style reaction button that opens a bar of Apple emoji and sends copies of your pick floating up out of it."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/craft/emoji-reaction.md"
markdown: "references/craft/emoji-reaction.md"
license: "MIT"
---

# Emoji Reaction

> A tapback-style reaction button that opens a bar of Apple emoji and sends copies of your pick floating up out of it.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py emoji-reaction --dest ./src
```

## Dependencies

- `@radix-ui/react-slot`
- `clsx`
- `lucide-react`
- `motion`
- `react`
- `react-apple-emojis`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { EmojiReaction as EmojiReaction } from "@/components/craft/emoji-reaction";

export function Example() {
  return (
    <div className="p-6">
      <EmojiReaction />
    </div>
  );
}
```
