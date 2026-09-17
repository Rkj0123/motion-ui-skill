---
title: "Share Menu"
description: "Square icon trigger opens a horizontal brand rail — four social tiles in a row plus a full-width copy button."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/share-menu.md"
markdown: "references/craft/share-menu.md"
license: "MIT"
---

# Share Menu

> Square icon trigger opens a horizontal brand rail — four social tiles in a row plus a full-width copy button.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py share-menu --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { ShareMenuDropdown } from "@/components/dropdowns/share-menu-dropdown";

export function ShareMenuDropdownDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <ShareMenuDropdown />
    </div>
  );
}
```

## API Reference

### ShareMenuDropdown

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
