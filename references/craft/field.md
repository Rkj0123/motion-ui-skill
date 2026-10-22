---
title: "Field"
description: "Component from ObsidianUI: field"
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/craft/field.md"
markdown: "references/craft/field.md"
license: "MIT"
---

# Field

> Component from ObsidianUI: field

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py field --dest ./src
```

## Dependencies

- `class-variance-authority`
- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import Field from "@/components/craft/field";

export function Example() {
  return (
    <div className="p-6">
      <Field />
    </div>
  );
}
```
