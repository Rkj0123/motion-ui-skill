---
title: "Sleep Score"
description: "Sleep score in the DND face layout — sleeping mascot at the bottom, score and quality above, duration tucked below."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/sleep-score.md"
markdown: "references/craft/sleep-score.md"
license: "MIT"
---

# Sleep Score

> Sleep score in the DND face layout — sleeping mascot at the bottom, score and quality above, duration tucked below.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py sleep-score --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { SleepScoreWidget } from "@/components/widgets/sleep-score-widget";

export function SleepScoreWidgetDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <SleepScoreWidget />
    </div>
  );
}
```

## API Reference

### SleepScoreWidget

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
