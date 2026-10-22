---
title: "Discover Button"
description: "Component from ObsidianUI: discover-button"
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/craft/discover-button.md"
markdown: "references/craft/discover-button.md"
license: "MIT"
---

# Discover Button

> Component from ObsidianUI: discover-button

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py discover-button --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { DiscoverButton as DiscoverButton } from "@/components/craft/discover-button";

export function Example() {
  return (
    <div className="p-6">
      <DiscoverButton />
    </div>
  );
}
```
