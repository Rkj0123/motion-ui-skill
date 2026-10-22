---
title: "Loaders Gooey Blobs"
description: "Component from Motion UI: loaders-gooey-blobs"
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/craft/loaders-gooey-blobs.md"
markdown: "references/craft/loaders-gooey-blobs.md"
license: "MIT"
---

# Loaders Gooey Blobs

> Component from Motion UI: loaders-gooey-blobs

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py loaders-gooey-blobs --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import LoadersGooeyBlobs from "@/components/craft/loaders-gooey-blobs";

export function Example() {
  return (
    <div className="p-6">
      <LoadersGooeyBlobs />
    </div>
  );
}
```
