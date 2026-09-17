---
title: "Linked In Post"
description: "LinkedIn feed post with headline, body text, link preview card, reaction counts, and like/comment/repost/send actions."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/linked-in-post.md"
markdown: "references/craft/linked-in-post.md"
license: "MIT"
---

# Linked In Post

> LinkedIn feed post with headline, body text, link preview card, reaction counts, and like/comment/repost/send actions.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py linked-in-post --dest ./src
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

import { LinkedInPostCard } from "@/components/socials/linked-in-post-card";

export function LinkedInPostCardDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <LinkedInPostCard />
    </div>
  );
}
```

## API Reference

### LinkedInPostCard

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
