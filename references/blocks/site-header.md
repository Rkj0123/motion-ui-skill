---
title: "Site header"
description: "A sticky website header that turns solid on scroll, with a gliding active link, mega menu panels, and a mobile sheet."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/blocks/site-header.md"
markdown: "references/blocks/site-header.md"
license: "MIT"
---

# Site header

> A sticky website header that turns solid on scroll, with a gliding active link, mega menu panels, and a mobile sheet.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py site-header --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `motion`
- `next`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { SiteHeader as SiteHeader } from "@/components/blocks/site-header";

export function Example() {
  return (
    <div className="p-6">
      <SiteHeader />
    </div>
  );
}
```
