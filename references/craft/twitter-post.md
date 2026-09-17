---
title: "Twitter Post"
description: "Tweet card with avatar, handle, timestamp, hashtags, and full engagement row. For social embeds, mockups, or feed previews."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/twitter-post.md"
markdown: "references/craft/twitter-post.md"
license: "MIT"
---

# Twitter Post

> Tweet card with avatar, handle, timestamp, hashtags, and full engagement row. For social embeds, mockups, or feed previews.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py twitter-post --dest ./src
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

import { TwitterPostCard } from "@/components/socials/twitter-post-card";

export function TwitterPostCardDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <TwitterPostCard />
    </div>
  );
}
```

## API Reference

### TwitterPostCard

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
