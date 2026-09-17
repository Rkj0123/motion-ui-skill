---
title: "Folder Tab Card"
description: "Folder tab card with black frame, top-half image, and dark panel showing library stats. Studio App branding by default."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/folder-tab-card.md"
markdown: "references/craft/folder-tab-card.md"
license: "MIT"
---

# Folder Tab Card

> Folder tab card with black frame, top-half image, and dark panel showing library stats. Studio App branding by default.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py folder-tab-card --dest ./src
```

## Dependencies

- `clsx`
- `next`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { FolderTabCard } from "@/components/folder/folder-tab-card";

export function FolderTabCardDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <FolderTabCard />
    </div>
  );
}
```

## API Reference

### FolderTabCard

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
