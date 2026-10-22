---
title: "iOS-style Search Bar"
description: "A minimalist search pill that smoothly expands on focus and reveals quick-clear controls with spring animation."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/craft/ios-search-bar.md"
markdown: "references/craft/ios-search-bar.md"
license: "MIT"
---

# iOS-style Search Bar

> A minimalist search pill that smoothly expands on focus and reveals quick-clear controls with spring animation.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py ios-search-bar --dest ./src
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

import { IOSSearchBar as IosSearchBar } from "@/components/craft/ios-search-bar";

export function Example() {
  return (
    <div className="p-6">
      <IosSearchBar />
    </div>
  );
}
```
