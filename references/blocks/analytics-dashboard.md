---
title: "Analytics Dashboard"
description: "Component from Motion UI: analytics-dashboard"
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/blocks/analytics-dashboard.md"
markdown: "references/blocks/analytics-dashboard.md"
license: "MIT"
---

# Analytics Dashboard

> Component from Motion UI: analytics-dashboard

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py analytics-dashboard --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { AnalyticsDashboard as AnalyticsDashboard } from "@/components/blocks/analytics-dashboard";

export function Example() {
  return (
    <div className="p-6">
      <AnalyticsDashboard />
    </div>
  );
}
```
