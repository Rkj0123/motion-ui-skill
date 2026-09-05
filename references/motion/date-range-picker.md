---
title: "Date Range Picker"
description: "Interactive calendar popover for selecting start and end date ranges with preset shortcuts, month navigation, and spring micro-interactions."
category: "Components"
publishedAt: "2026-09-05"
updatedAt: "2026-09-05"
documentation: "references/motion/date-range-picker.md"
markdown: "references/motion/date-range-picker.md"
license: "MIT"
---

# Date Range Picker

> Interactive calendar popover for selecting start and end date ranges with preset shortcuts, month navigation, and spring micro-interactions. Inspired by KeenThemes ReUI and Coss / Origin UI.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py date-range-picker --dest ./src
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

import { DateRangePicker, type DateRange } from "@/components/motion/date-range-picker";
import { useState } from "react";

export function DateRangePickerExample() {
  const [range, setRange] = useState<DateRange>({
    from: new Date(),
    to: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
  });

  return (
    <div className="p-8">
      <DateRangePicker
        value={range}
        onChange={(newRange) => setRange(newRange)}
      />
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `value` | `DateRange` | `undefined` | Current selected date range (`{ from?: Date; to?: Date }`). |
| `onChange` | `(range: DateRange) => void` | `undefined` | Callback invoked when range changes. |
| `className` | `string` | `undefined` | Container classes. |

## Keyboard & Accessibility

- Dismisses automatically on outside click or escape through `useDismiss`.
- Haptic click feedback on mobile touch platforms.
- `useReducedMotion()` gracefully suppresses popover scale and button taps.
