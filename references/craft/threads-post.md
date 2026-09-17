---
title: "Threads Post"
description: "Threads-style post with avatar thread line, text, optional image, and engagement counts. Like toggles on tap."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/threads-post.md"
markdown: "references/craft/threads-post.md"
license: "MIT"
---

# Threads Post

> Threads-style post with avatar thread line, text, optional image, and engagement counts. Like toggles on tap.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py threads-post --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `next`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { ThreadsPostCard } from "@/components/socials/threads-post-card";

export function ThreadsPostCardDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <ThreadsPostCard />
    </div>
  );
}
```

## API Reference

### ThreadsPostCard

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
