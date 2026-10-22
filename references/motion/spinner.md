---
title: "Spinner"
description: "Component from ObsidianUI: spinner"
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/motion/spinner.md"
markdown: "references/motion/spinner.md"
license: "MIT"
---

# Spinner

> Component from ObsidianUI: spinner

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py spinner --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import Spinner from "@/components/motion/spinner";

export function Example() {
  return (
    <div className="p-6">
      <Spinner />
    </div>
  );
}
```
