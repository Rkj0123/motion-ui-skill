---
title: "File Menu"
description: "Folder icon you can right-click or tap to open a centered action menu — edit, duplicate, pin, move, delete. Keyboard-friendly item hints included."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/file-menu.md"
markdown: "references/craft/file-menu.md"
license: "MIT"
---

# File Menu

> Folder icon you can right-click or tap to open a centered action menu — edit, duplicate, pin, move, delete. Keyboard-friendly item hints included.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py file-menu --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { FileMenuDropdown } from "@/components/dropdowns/file-menu-dropdown";

export function FileMenuDropdownDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <FileMenuDropdown />
    </div>
  );
}
```

## API Reference

### FileMenuDropdown

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
