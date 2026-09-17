---
title: "Date Range Picker Card"
description: "Travel-style date range picker — first tap sets check-in, second sets check-out, days between fill in."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/date-range-picker-card.md"
markdown: "references/craft/date-range-picker-card.md"
license: "MIT"
---

# Date Range Picker Card

> Travel-style date range picker — first tap sets check-in, second sets check-out, days between fill in.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py date-range-picker-card --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { DateRangePickerCard } from "@/components/calendar/date-range-picker-card";

export function DateRangePickerCardDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <DateRangePickerCard />
    </div>
  );
}
```

## API Reference

### DateRangePickerCard

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
