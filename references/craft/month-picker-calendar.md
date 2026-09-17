---
title: "Month Picker Calendar"
description: "Full month picker with prev/next navigation — tap any day to select it, today gets a quiet ring."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/month-picker-calendar.md"
markdown: "references/craft/month-picker-calendar.md"
license: "MIT"
---

# Month Picker Calendar

> Full month picker with prev/next navigation — tap any day to select it, today gets a quiet ring.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py month-picker-calendar --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { MonthPickerCalendar } from "@/components/calendar/month-picker-calendar";

export function MonthPickerCalendarDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <MonthPickerCalendar />
    </div>
  );
}
```

## API Reference

### MonthPickerCalendar

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
