---
title: "Alert"
description: "A persistent message that helps people recover or continue."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/motion/alert.md"
markdown: "references/motion/alert.md"
license: "MIT"
---

# Alert

> A persistent message that helps people recover or continue.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py alert --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { Alert as Alert } from "@/components/motion/alert";

export function Example() {
  return (
    <div className="p-6">
      <Alert />
    </div>
  );
}
```
