---
title: "Hover Img"
description: "Component from ObsidianUI: hover-img"
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/craft/hover-img.md"
markdown: "references/craft/hover-img.md"
license: "MIT"
---

# Hover Img

> Component from ObsidianUI: hover-img

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py hover-img --dest ./src
```

## Dependencies

- `clsx`
- `gsap`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { HoverImg as HoverImg } from "@/components/craft/hover-img";

export function Example() {
  return (
    <div className="p-6">
      <HoverImg />
    </div>
  );
}
```
