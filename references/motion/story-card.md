---
title: "Story Cards"
description: "A responsive, accessible story cards carousel for React applications built with Tailwind CSS and Framer Motion."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/motion/story-card.md"
markdown: "references/motion/story-card.md"
license: "MIT"
---

# Story Cards

> A responsive, accessible story cards carousel for React applications built with Tailwind CSS and Framer Motion.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py story-card --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { StoryCards as StoryCard } from "@/components/motion/story-card";

export function Example() {
  return (
    <div className="p-6">
      <StoryCard />
    </div>
  );
}
```
