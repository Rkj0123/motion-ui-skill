---
title: "Command"
description: "Component from Motion UI: command"
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/craft/command.md"
markdown: "references/craft/command.md"
license: "MIT"
---

# Command

> Component from Motion UI: command

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py command --dest ./src
```

## Dependencies

- `clsx`
- `cmdk`
- `lucide-react`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import Command from "@/components/craft/command";

export function Example() {
  return (
    <div className="p-6">
      <Command />
    </div>
  );
}
```
