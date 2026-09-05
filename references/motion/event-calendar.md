---
title: "Event Calendar"
description: "Headless-first animated event calendar with monthly grid views, event pills, day-switching transitions, and modal detail inspection."
category: "Blocks"
publishedAt: "2026-09-05"
updatedAt: "2026-09-05"
documentation: "references/motion/event-calendar.md"
markdown: "references/motion/event-calendar.md"
license: "MIT"
---

# Event Calendar

> Headless-first animated event calendar with monthly grid views, event pills, day-switching transitions, and modal detail inspection. Inspired by KeenThemes ReUI.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py event-calendar --dest ./src
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

import { EventCalendar, type CalendarEvent } from "@/components/motion/event-calendar";

const EVENTS: CalendarEvent[] = [
  {
    id: "e1",
    title: "Quarterly Roadmap Review",
    date: "2026-09-12",
    time: "10:00",
    color: "blue",
  },
  {
    id: "e2",
    title: "Model Release Deploy",
    date: "2026-09-15",
    time: "14:30",
    color: "emerald",
  },
  {
    id: "e3",
    title: "Security Penetration Audit",
    date: "2026-09-22",
    color: "rose",
  },
];

export function EventCalendarExample() {
  return (
    <div className="max-w-3xl p-6">
      <EventCalendar
        events={EVENTS}
        onEventClick={(ev) => console.log("Event clicked:", ev.title)}
      />
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `events` | `CalendarEvent[]` | required | Array of scheduled events with id, title, ISO date string, time, and color tag. |
| `initialDate` | `Date` | `new Date()` | Initial month/year viewing anchor. |
| `onEventClick` | `(event: CalendarEvent) => void` | `undefined` | Callback emitted when an event pill is selected. |
| `onDateClick` | `(date: Date) => void` | `undefined` | Callback emitted when a day cell is clicked. |
| `className` | `string` | `undefined` | Custom styling overrides merged via `cn()`. |
