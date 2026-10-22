---
title: "Folder Component"
description: "An animated folder whose cards fan out on hover and lift open on click, with a 3D-tilted flap. Supports color and size (sm/md/lg) props."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/craft/folder-component.md"
markdown: "references/craft/folder-component.md"
license: "MIT"
---

# Folder Component

> An animated folder whose cards fan out on hover and lift open on click, with a 3D-tilted flap. Supports color and size (sm/md/lg) props.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py folder-component --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import FolderComponent from "@/components/craft/folder-component";

export function Example() {
  return (
    <div className="p-6">
      <FolderComponent />
    </div>
  );
}
```
