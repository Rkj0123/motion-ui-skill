---
title: "Instagram Post"
description: "Full Instagram post layout — header, square image, action icons, like count, caption, and timestamp. Looks native, props for your content."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/instagram-post.md"
markdown: "references/craft/instagram-post.md"
license: "MIT"
---

# Instagram Post

> Full Instagram post layout — header, square image, action icons, like count, caption, and timestamp. Looks native, props for your content.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py instagram-post --dest ./src
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

import { InstagramPostCard } from "@/components/socials/instagram-post-card";

export function InstagramPostCardDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <InstagramPostCard />
    </div>
  );
}
```

## API Reference

### InstagramPostCard

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
