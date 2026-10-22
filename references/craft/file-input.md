---
title: "File Input"
description: "Component from ObsidianUI: file-input"
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/craft/file-input.md"
markdown: "references/craft/file-input.md"
license: "MIT"
---

# File Input

> Component from ObsidianUI: file-input

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py file-input --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `motion`
- `next`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import FileInput from "@/components/craft/file-input";

export function Example() {
  return (
    <div className="p-6">
      <FileInput />
    </div>
  );
}
```
