---
title: "Cafe Menu Board"
description: "Dark chalkboard-style menu with cafe header, item notes, and amber price accents — hospitality and local brand sites."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/cafe-menu-board.md"
markdown: "references/craft/cafe-menu-board.md"
license: "MIT"
---

# Cafe Menu Board

> Dark chalkboard-style menu with cafe header, item notes, and amber price accents — hospitality and local brand sites.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py cafe-menu-board --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { CafeMenuBoardCard } from "@/components/text/cafe-menu-board-card";

export function CafeMenuBoardCardDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <CafeMenuBoardCard />
    </div>
  );
}
```

## API Reference

### CafeMenuBoardCard

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
