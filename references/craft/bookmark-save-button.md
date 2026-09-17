---
title: "Bookmark Save"
description: "Save for later — bookmark icon fills amber and label swaps to Saved. Square-ish control for articles and products."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/bookmark-save-button.md"
markdown: "references/craft/bookmark-save-button.md"
license: "MIT"
---

# Bookmark Save

> Save for later — bookmark icon fills amber and label swaps to Saved. Square-ish control for articles and products.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py bookmark-save-button --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { BookmarkSaveButton } from "@/components/buttons/bookmark-save-button";

export function BookmarkSaveButtonDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <BookmarkSaveButton />
    </div>
  );
}
```

## API Reference

### BookmarkSaveButton

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
