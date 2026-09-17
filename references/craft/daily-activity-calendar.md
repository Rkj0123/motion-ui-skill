---
title: "Daily Activity Calendar"
description: "Month grid for the current month — today is highlighted in orange, with a short emerald streak on prior days. Pass activeDays or highlightDay to override."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/daily-activity-calendar.md"
markdown: "references/craft/daily-activity-calendar.md"
license: "MIT"
---

# Daily Activity Calendar

> Month grid for the current month — today is highlighted in orange, with a short emerald streak on prior days. Pass activeDays or highlightDay to override.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py daily-activity-calendar --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { DailyActivityCalendarWidget } from "@/components/widgets/daily-activity-calendar-widget";

export function DailyActivityCalendarWidgetDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <DailyActivityCalendarWidget />
    </div>
  );
}
```

## API Reference

### DailyActivityCalendarWidget

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
