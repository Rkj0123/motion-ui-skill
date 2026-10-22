---
title: "Pricing"
description: "A minimal two-tier pricing component for motion-ui. Native to the existing design system, fully theme-aware, with a quiet Free tier and a slightly more attractive Pro tier — without resorting to SaaS marketing tropes."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/blocks/pricing.md"
markdown: "references/blocks/pricing.md"
license: "MIT"
---

# Pricing

> A minimal two-tier pricing component for motion-ui. Native to the existing design system, fully theme-aware, with a quiet Free tier and a slightly more attractive Pro tier — without resorting to SaaS marketing tropes.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py pricing --dest ./src
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

import { Pricing as Pricing } from "@/components/blocks/pricing";

export function Example() {
  return (
    <div className="p-6">
      <Pricing />
    </div>
  );
}
```
