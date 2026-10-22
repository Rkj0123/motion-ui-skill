---
title: "Smart Comparison"
description: "An interactive feature matrix and SaaS tier comparison component featuring live difference filtering, collapsible specification categories, search indexing, and mobile card toggle."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/craft/smart-comparison.md"
markdown: "references/craft/smart-comparison.md"
license: "MIT"
---

# Smart Comparison

> An interactive feature matrix and SaaS tier comparison component featuring live difference filtering, collapsible specification categories, search indexing, and mobile card toggle.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py smart-comparison --dest ./src
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

import { SmartComparison as SmartComparison } from "@/components/craft/smart-comparison";

export function Example() {
  return (
    <div className="p-6">
      <SmartComparison />
    </div>
  );
}
```
