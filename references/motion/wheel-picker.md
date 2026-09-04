---
title: "Wheel Picker"
description: "iOS-style picker wheel: a 3D drum on native momentum scroll that snaps to the nearest notch, with wheel, drag and keyboard control. Composes side by side for date and time pickers, reduced-motion safe."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-07-09"
documentation: "references/motion/wheel-picker.md"
markdown: "references/motion/wheel-picker.md"
license: "MIT"
---

# Wheel Picker

> iOS-style picker wheel: a 3D drum on native momentum scroll that snaps to the nearest notch, with wheel, drag and keyboard control. Composes side by side for date and time pickers, reduced-motion safe.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py wheel-picker --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { useEffect, useState } from "react";
import { Switch } from "@/components/motion/switch";
import { WheelPicker } from "@/components/motion/wheel-picker";

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const YEARS = Array.from({ length: 60 }, (_, i) => String(1980 + i));

function daysIn(month: number, year: number) {
  return new Date(year, month + 1, 0).getDate();
}

export function WheelPickerPreview() {
  const [month, setMonth] = useState("June");
  const [year, setYear] = useState("2004");
  const [day, setDay] = useState("9");
  const [sound, setSound] = useState(false);

  const monthIndex = MONTHS.indexOf(month);
  const dayCount = daysIn(monthIndex, Number(year));
  const days = Array.from({ length: dayCount }, (_, i) => String(i + 1));

  // A short month or a non-leap February can strand the day past the end —
  // pull it back to the last valid day.
  useEffect(() => {
    if (Number(day) > dayCount) setDay(String(dayCount));
  }, [day, dayCount]);

  return (
    <div className="flex flex-col items-center gap-4">
      <span className="text-sm text-muted-foreground">
        Born{" "}
        <span className="font-medium text-foreground tabular-nums">
          {month} {day}, {year}
        </span>
      </span>
      <div className="flex items-stretch gap-1 rounded-3xl border border-border bg-background p-2">
        <WheelPicker
          options={MONTHS}
          value={month}
          onValueChange={setMonth}
          className="w-32 border-0 bg-transparent"
          visibleCount={7}
          itemHeight={42}
          sound={sound}
          aria-label="Month"
        />
        <WheelPicker
          options={days}
          value={day}
          onValueChange={setDay}
          className="w-14 border-0 bg-transparent"
          visibleCount={7}
          itemHeight={42}
          sound={sound}
          aria-label="Day"
        />
        <WheelPicker
          options={YEARS}
          value={year}
          onValueChange={setYear}
          className="w-20 border-0 bg-transparent"
          visibleCount={7}
          itemHeight={42}
          sound={sound}
          aria-label="Year"
        />
      </div>
      <Switch
        checked={sound}
        onCheckedChange={setSound}
        label="Tick sound"
        className="origin-left scale-[0.85] [&_label]:text-sm"
      />
    </div>
  );
}
```

## API Reference

### WheelPicker

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `options` | `WheelPickerOption[]` | — | Yes | — |
| `value` | `string` | — | No | — |
| `defaultValue` | `string` | — | No | — |
| `onValueChange` | `((value: string) => void)` | — | No | — |
| `visibleCount` | `number` | `5` | No | Rows visible through the window, odd. More = flatter curve. Default 5. |
| `itemHeight` | `number` | `36` | No | Row height in px. Default 36. |
| `disabled` | `boolean` | `false` | No | — |
| `sound` | `boolean` | `false` | No | Play a short tick each time the selected value changes. Default false. |
| `className` | `string` | — | No | — |
| `aria-label` | `string` | — | No | — |

## Source

- Registry detail: https://github.com/Rkj0123/motion-ui-skill
- Raw source: https://github.com/Rkj0123/motion-ui-skill
- GitHub: https://github.com/starc007/ui-components
