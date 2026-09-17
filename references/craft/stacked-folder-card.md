---
title: "Stacked Folder Card"
description: "Three stacked folder cards with thick white borders and smooth hover rotation — back and middle peeks bring any card to the front."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/stacked-folder-card.md"
markdown: "references/craft/stacked-folder-card.md"
license: "MIT"
---

# Stacked Folder Card

> Three stacked folder cards with thick white borders and smooth hover rotation — back and middle peeks bring any card to the front.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py stacked-folder-card --dest ./src
```

## Dependencies

- `clsx`
- `next`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { StackedFolderCard } from "@/components/files/stacked-folder-card";

export function StackedFolderCardDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <StackedFolderCard />
    </div>
  );
}
```

## API Reference

### StackedFolderCard

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
