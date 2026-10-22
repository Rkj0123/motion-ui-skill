---
title: "Plan comparison"
description: "Compare meaningful differences between plans and billing periods."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/blocks/plan-comparison.md"
markdown: "references/blocks/plan-comparison.md"
license: "MIT"
---

# Plan comparison

> Compare meaningful differences between plans and billing periods.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py plan-comparison --dest ./src
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

import { PlanComparison as PlanComparison } from "@/components/blocks/plan-comparison";

export function Example() {
  return (
    <div className="p-6">
      <PlanComparison />
    </div>
  );
}
```
