---
title: "Calendar Reminder Notification"
description: "Calendar reminder on the iOS grid — red app tile, event name, and time until it starts."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/calendar-reminder-notification.md"
markdown: "references/craft/calendar-reminder-notification.md"
license: "MIT"
---

# Calendar Reminder Notification

> Calendar reminder on the iOS grid — red app tile, event name, and time until it starts.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py calendar-reminder-notification --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { CalendarReminderNotificationBanner } from "@/components/notifications/calendar-reminder-notification-banner";

export function CalendarReminderNotificationBannerDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <CalendarReminderNotificationBanner />
    </div>
  );
}
```

## API Reference

### CalendarReminderNotificationBanner

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
