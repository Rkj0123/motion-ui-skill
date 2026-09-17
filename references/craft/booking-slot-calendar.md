---
title: "Booking Slot Calendar"
description: "Appointment booking flow — week strip on top, time slots below. Unavailable slots are crossed out, tap to book."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/booking-slot-calendar.md"
markdown: "references/craft/booking-slot-calendar.md"
license: "MIT"
---

# Booking Slot Calendar

> Appointment booking flow — week strip on top, time slots below. Unavailable slots are crossed out, tap to book.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py booking-slot-calendar --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { BookingSlotCalendar } from "@/components/calender/booking-slot-calendar";

export function BookingSlotCalendarDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <BookingSlotCalendar />
    </div>
  );
}
```

## API Reference

### BookingSlotCalendar

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
