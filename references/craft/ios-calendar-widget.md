---
title: "Ios Calendar Widget"
description: "Today's date in the classic iOS calendar tile — red weekday, big day number, month underneath. Updates live, no refresh needed."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/ios-calendar-widget.md"
markdown: "references/craft/ios-calendar-widget.md"
license: "MIT"
---

# Ios Calendar Widget

> Today's date in the classic iOS calendar tile — red weekday, big day number, month underneath. Updates live, no refresh needed.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py ios-calendar-widget --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { IosCalendarWidget } from "@/components/widgets/ios-calendar-widget";

export function IosCalendarWidgetDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <IosCalendarWidget />
    </div>
  );
}
```

## API Reference

### IosCalendarWidget

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
