---
title: "Menubar"
description: "Component from ObsidianUI: menubar"
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/motion/menubar.md"
markdown: "references/motion/menubar.md"
license: "MIT"
---

# Menubar

> Component from ObsidianUI: menubar

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py menubar --dest ./src
```

## Dependencies

- `@radix-ui/react-menubar`
- `clsx`
- `lucide-react`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import Menubar from "@/components/motion/menubar";

export function Example() {
  return (
    <div className="p-6">
      <Menubar />
    </div>
  );
}
```
