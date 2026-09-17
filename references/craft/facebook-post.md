---
title: "Facebook Post"
description: "Facebook feed post with reactions, comments, share counts, optional image, and the full action bar. Familiar layout, your content."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/facebook-post.md"
markdown: "references/craft/facebook-post.md"
license: "MIT"
---

# Facebook Post

> Facebook feed post with reactions, comments, share counts, optional image, and the full action bar. Familiar layout, your content.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py facebook-post --dest ./src
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

import { FacebookPostCard } from "@/components/socials/facebook-post-card";

export function FacebookPostCardDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <FacebookPostCard />
    </div>
  );
}
```

## API Reference

### FacebookPostCard

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
