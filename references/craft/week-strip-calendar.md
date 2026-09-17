---
title: "Week Strip Calendar"
description: "Horizontal week strip for booking and scheduling apps — arrow through weeks, tap a day to select."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/week-strip-calendar.md"
markdown: "references/craft/week-strip-calendar.md"
license: "MIT"
---

# Week Strip Calendar

> Horizontal week strip for booking and scheduling apps — arrow through weeks, tap a day to select.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py week-strip-calendar --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { WeekStripCalendar } from "@/components/calender/week-strip-calendar";

export function WeekStripCalendarDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <WeekStripCalendar />
    </div>
  );
}
```

## API Reference

### WeekStripCalendar

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
