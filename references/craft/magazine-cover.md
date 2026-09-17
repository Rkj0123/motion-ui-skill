---
title: "Magazine Cover"
description: "Tall magazine cover with issue badge, category, title, author, and read time. Hover zoom on the cover image — editorial hero material."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/magazine-cover.md"
markdown: "references/craft/magazine-cover.md"
license: "MIT"
---

# Magazine Cover

> Tall magazine cover with issue badge, category, title, author, and read time. Hover zoom on the cover image — editorial hero material.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py magazine-cover --dest ./src
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

import { MagazineCoverCard } from "@/components/text/magazine-cover-card";

export function MagazineCoverCardDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <MagazineCoverCard />
    </div>
  );
}
```

## API Reference

### MagazineCoverCard

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
