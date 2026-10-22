---
title: "Toggle"
description: "Component from ObsidianUI: toggle"
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/craft/toggle.md"
markdown: "references/craft/toggle.md"
license: "MIT"
---

# Toggle

> Component from ObsidianUI: toggle

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py toggle --dest ./src
```

## Dependencies

- `@radix-ui/react-toggle`
- `class-variance-authority`
- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import Toggle from "@/components/craft/toggle";

export function Example() {
  return (
    <div className="p-6">
      <Toggle />
    </div>
  );
}
```
