---
title: "Raised Button"
description: "Component from ObsidianUI: raised-button"
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/motion/raised-button.md"
markdown: "references/motion/raised-button.md"
license: "MIT"
---

# Raised Button

> Component from ObsidianUI: raised-button

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py raised-button --dest ./src
```

## Dependencies

- `@radix-ui/react-slot`
- `class-variance-authority`
- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import RaisedButton from "@/components/motion/raised-button";

export function Example() {
  return (
    <div className="p-6">
      <RaisedButton />
    </div>
  );
}
```
