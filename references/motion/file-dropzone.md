---
title: "File dropzone"
description: "A generous target for dropping one or more files."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/motion/file-dropzone.md"
markdown: "references/motion/file-dropzone.md"
license: "MIT"
---

# File dropzone

> A generous target for dropping one or more files.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py file-dropzone --dest ./src
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

import { FileDropzone as FileDropzone } from "@/components/motion/file-dropzone";

export function Example() {
  return (
    <div className="p-6">
      <FileDropzone />
    </div>
  );
}
```
