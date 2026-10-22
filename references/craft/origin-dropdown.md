---
title: "OriginDropdown"
description: "A dropdown with origin-aware expansion — the menu materializes from the chosen side with a slight scale and an inward translation, so its perceived origin is the trigger edge closest to the menu."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/craft/origin-dropdown.md"
markdown: "references/craft/origin-dropdown.md"
license: "MIT"
---

# OriginDropdown

> A dropdown with origin-aware expansion — the menu materializes from the chosen side with a slight scale and an inward translation, so its perceived origin is the trigger edge closest to the menu.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py origin-dropdown --dest ./src
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

import { OriginDropdown as OriginDropdown } from "@/components/craft/origin-dropdown";

export function Example() {
  return (
    <div className="p-6">
      <OriginDropdown />
    </div>
  );
}
```
