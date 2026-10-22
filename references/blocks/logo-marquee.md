---
title: "Logo marquee"
description: "A quiet, continuously moving row of brand marks with a pause control."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/blocks/logo-marquee.md"
markdown: "references/blocks/logo-marquee.md"
license: "MIT"
---

# Logo marquee

> A quiet, continuously moving row of brand marks with a pause control.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py logo-marquee --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { LogoMarquee as LogoMarquee } from "@/components/blocks/logo-marquee";

export function Example() {
  return (
    <div className="p-6">
      <LogoMarquee />
    </div>
  );
}
```
