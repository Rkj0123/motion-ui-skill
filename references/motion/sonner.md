---
title: "Sonner"
description: "Component from ObsidianUI: sonner"
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/motion/sonner.md"
markdown: "references/motion/sonner.md"
license: "MIT"
---

# Sonner

> Component from ObsidianUI: sonner

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py sonner --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `next-themes`
- `react`
- `sonner`
- `tailwind-merge`

## Usage

```tsx
"use client";

import Sonner from "@/components/motion/sonner";

export function Example() {
  return (
    <div className="p-6">
      <Sonner />
    </div>
  );
}
```
