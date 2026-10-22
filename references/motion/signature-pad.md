---
title: "Signature pad"
description: "Smooth ink that thins with speed, with undo, replay, and PNG or SVG export."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/motion/signature-pad.md"
markdown: "references/motion/signature-pad.md"
license: "MIT"
---

# Signature pad

> Smooth ink that thins with speed, with undo, replay, and PNG or SVG export.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py signature-pad --dest ./src
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

import { SignaturePad as SignaturePad } from "@/components/motion/signature-pad";

export function Example() {
  return (
    <div className="p-6">
      <SignaturePad />
    </div>
  );
}
```
