---
title: "macOS Folder Cards"
description: "An authentic porcelain-white macOS Finder folder icon that unrolls interactive cards with fluid Apple spring physics."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/motion/mac-os-folder-cards.md"
markdown: "references/motion/mac-os-folder-cards.md"
license: "MIT"
---

# macOS Folder Cards

> An authentic porcelain-white macOS Finder folder icon that unrolls interactive cards with fluid Apple spring physics.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py mac-os-folder-cards --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { MacOSFolderCards as MacOsFolderCards } from "@/components/motion/mac-os-folder-cards";

export function Example() {
  return (
    <div className="p-6">
      <MacOsFolderCards />
    </div>
  );
}
```
