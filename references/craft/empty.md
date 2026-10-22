---
title: "Empty"
description: "Component from ObsidianUI: empty"
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/craft/empty.md"
markdown: "references/craft/empty.md"
license: "MIT"
---

# Empty

> Component from ObsidianUI: empty

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py empty --dest ./src
```

## Dependencies

- `class-variance-authority`
- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import Empty from "@/components/craft/empty";

export function Example() {
  return (
    <div className="p-6">
      <Empty />
    </div>
  );
}
```
